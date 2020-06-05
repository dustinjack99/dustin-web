import React, { Component } from 'react';
import axios from 'axios';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyState: [],
      repos: [],
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/dustinjack99/events`).then(res => {
      const historyState = this.state.historyState;

      for (let i = 0; i < 5; i++) {
        let type = res.data[i].type;
        let repo = res.data[i].repo.name;
        let repoUrl = res.data[i].repo.url;
        let payload = res.data[i].payload;
        let commits = [];
        if (payload.commits !== undefined) {
          payload.commits.map(commit => {
            return axios.get(`${commit.url}`).then(res => {
              const htmlUrl = res.data.html_url;
              commits.push({
                author: commit.author.name,
                message: commit.message,
                commitUrl: htmlUrl,
              });
            });
          });
        }

        let event = {
          type: type,
          repo: repo,
          repoUrl: repoUrl,
          commits: commits,
        };

        historyState.push(event);
      }

      this.setState({ historyState });
    });
  }

  render() {
    const history = this.state.historyState;
    const slideshows = document.querySelectorAll('.slide');
    console.log(slideshows);
    function initSlideShow() {
      const slides = document.querySelector('.slide');

      console.log('slides', slides);

      let index = 0,
        time = 5000;
      slides[index].classList.add('active.tracking-in-expand');

      setInterval(() => {
        slides[index].classList.remove('active');
        slides[index].classList.add('tracking-out-contract');
        slides[index].classList.remove('tracking-in-expand');

        index++;

        if (index === slides.length) index = 0;

        slides[index].classList.add('active');
        slides[index].classList.remove('tracking-out-contract');
        slides[index].classList.add('tracking-in-expand');
      }, time);
    }

    return (
      <div className='feed'>
        <h2>GitHub Activity</h2>
        {history.map((hist, i) => (
          <div className='slide' key={i}>
            <div className='feedLeft'>
              <h3>{hist.type}</h3>
              <p>Event {i + 1}</p>
              <h4>
                <a href={hist.repoUrl}>{hist.repo}</a>
              </h4>
            </div>
            <div className='feedRight'>
              <h3>Commits</h3>
              <ul className='commitList'>
                {hist.commits.map(({ message, commitUrl, author }, j) => (
                  <li key={j}>
                    <a href={commitUrl}>{message}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
