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
        }
      }

      axios.get('https://api.github.com/repos/E-Bossler/tee-time').then(res => {
        repos.push(res.data);
        this.setState({ repos });
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
    const slideshows1 = document.querySelectorAll('.slide1');
    const slideshows2 = document.querySelectorAll('.slide2');
    slideshows1.forEach(initSlideShow1);
    slideshows2.forEach(initSlideShow2);

    function initSlideShow1() {
      const slides1 = document.querySelectorAll(
        '.slide1.tracking-out-contract'
      );

      let index = 0,
        time = 5000;
      slides1[index].classList.add('active1.tracking-in-expand');

      setInterval(() => {
        slides1[index].classList.remove('active1');
        slides1[index].classList.add('tracking-out-contract');
        slides1[index].classList.remove('tracking-in-expand');

        index++;

        if (index === slides1.length) index = 0;

        slides1[index].classList.add('active1');
        slides1[index].classList.remove('tracking-out-contract');
        slides1[index].classList.add('tracking-in-expand');
      }, time);
    }

    function initSlideShow2() {
      const slides2 = document.querySelectorAll(
        '.slide2.tracking-out-contract'
      );

      let index = 0,
        time = 5000;
      slides2[index].classList.add('active2.tracking-in-expand');

      setInterval(() => {
        slides2[index].classList.remove('active2');
        slides2[index].classList.add('tracking-out-contract');
        slides2[index].classList.remove('tracking-in-expand');

        index++;

        if (index === slides2.length) index = 0;

        slides2[index].classList.add('active2');
        slides2[index].classList.remove('tracking-out-contract');
        slides2[index].classList.add('tracking-in-expand');
      }, time);
    }

    return (
      <div className='container'>
        <div className='projects'>
          <h2>Current Projects</h2>
          {repos.map((repo, i) => {
            return (
              <div className='slide1 tracking-out-contract' key={i}>
                <h4>{repo.name}</h4>
                <ul>
                  <li>Language: {repo.language}</li>
                  <li>Open Issues: {repo.open_issues}</li>
                  <p>{repo.description}</p>
                  <a href={repo.url}>Link</a>
                </ul>
              </div>
            );
          })}
        </div>
        <div className='feed'>
          <h2>GitHub Activity</h2>
          {history.map((hist, i) => {
            return (
              <div className='slide2 tracking-out-contract' key={i}>
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
