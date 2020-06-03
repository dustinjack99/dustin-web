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
      console.log(res.data);
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
    return (
      <div className='ber'>
        <h1>Amber is buttface</h1>

        <div className='liveFeed'>
          <div className='repoFeed'></div>
          <div className='commitFeed'>
            <h2>GitHub Activity</h2>
            {history.map((hist, i) => {
              console.log(hist);
              console.log(
                hist.commits.map(({ author, message, commitUrl }, i) =>
                  console.log(commitUrl)
                )
              );
              return (
                <>
                  <h3>{hist.repo}</h3>
                  <div>
                    <div>
                      <h4 key={hist.type}>{hist.type}</h4>
                      <h5 key={hist.repoUrl}>{hist.repoUrl}</h5>
                    </div>
                    <div>
                      <ul>
                        {hist.commits.map(
                          ({ author, message, commitUrl }, i) => (
                            <li>
                              <p>{author}</p>
                              <a href={commitUrl}>Commit Url</a>
                              <p>{message}</p>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
