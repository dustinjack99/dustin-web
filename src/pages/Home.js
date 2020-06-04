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
    axios.get('https://api.github.com/users/dustinjack99/repos').then(res => {
      const repos = [];
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].name === 'ScrabbleDabble') {
          repos.push(res.data[i]);
        } else if (res.data[i].name === 'character-sheet') {
          repos.push(res.data[i]);
          console.log(repos);
        }
      }

      axios.get('https://api.github.com/repos/E-Bossler/tee-time').then(res => {
        repos.push(res.data);
        console.log(repos);
        this.setState({ repos });
        console.log(this.state.repos);
      });
    });
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
            axios.get(`${commit.url}`).then(res => {
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
    const repos = this.state.repos;
    const slideshows = document.querySelectorAll('.slide');
    console.log(repos);
    slideshows.forEach(initSlideShow);

    function initSlideShow(slideshow) {
      const slides = document.querySelectorAll('.slide.tracking-out-contract');
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
      <div className='container'>
        <div className='projects'>
          <h2>Current Projects</h2>
        </div>
        <div className='feed'>
          <h2>GitHub Activity</h2>
          {history.map((hist, i) => {
            return (
              <div className='slide tracking-out-contract' key={i}>
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
                    {hist.commits.map(({ message, commitUrl, author }, j) => {
                      return (
                        <li key={j}>
                          <a href={commitUrl}>{message}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
