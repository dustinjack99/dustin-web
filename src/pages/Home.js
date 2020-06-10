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
    axios
      .get(`https://api.github.com/users/dustinjack99/events`)
      .then(res => {
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
      })
      .then(res => {
        const slideshows = document.querySelectorAll('.slide');

        slideshows.forEach(initSlideShow);
        function initSlideShow() {
          const slides = document.querySelectorAll('.slide');
          let index = 0,
            time = 5000;
          slides[index].classList.add('active');

          setInterval(() => {
            slides[index].classList.remove('active');

            index++;

            if (index === slides.length) index = 0;

            slides[index].classList.add('active');
          }, time);
        }
      });
  }

  render() {
    const history = this.state.historyState;

    return (
      <div className='feed'>
        <h2>GitHub Activity</h2>
        {history.map((hist, i) => (
          <div className='slide' key={i}>
            <h3>{hist.type}</h3>
            <p>Event {i + 1} at Repo:</p>
            <h4>
              <a href={hist.repoUrl}>{hist.repo}</a>
            </h4>
            {hist.commits.map((commit, j) => {
              return (
                <a href={commit.commitUrl} key={commit.commitUrl}>
                  {commit.message}
                </a>
              );
            })}
          </div>
        ))}
        <h3 className='brandTitle'>My Brand:</h3>
        <div className='brand'>
          <p>
            Full Stack Engineer with a strong background in collaboration and
            customer service, with heavy insight to approachable UX/UI while
            offering robust functionality. Earned a certificate in Full Stack
            Development from University of Washington, with a focus in
            JavaScript, TypeScript, React, React-Native, along with database
            tools such as MongoDB, MySQL, and Postgres. Lead highly dynamic
            teams in agile development environments, meeting every deadline and
            deliverable laid out. My apps have been given numerous awards, and
            have serviced markets such as die-hard gamers, avid golfers, and
            live, online chat platforms.{' '}
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
