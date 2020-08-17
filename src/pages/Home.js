import React, { Component } from 'react';
import axios from 'axios';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commitArr: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/dustinjack99/events`)
      .then(res => {
        const commits = [];

        for (let i = 0; i < 5; i++) {
          if (res.data[i].payload.commits) {
            for (let j = 0; j < res.data[i].payload.commits.length; j++) {
              axios.get(res.data[i].payload.commits[j].url).then(result => {});
              commits.push(res.data[i].payload.commits[j]);
            }
          }
        }

        this.setState({ commitArr: commits });
      })
      .then(res => {
        const slideshows = document.querySelectorAll('.slide');

        slideshows.forEach(initSlideShow);
        function initSlideShow() {
          const slides = document.querySelectorAll('.slide');
          let index = 0,
            time = 7500;
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
    const commits = this.state.commitArr;

    return (
      <>
        <div className='feed'>
          <h2 id='feedTitle'>GitHub Activity Feed</h2>

          {commits.map((commit, i) => (
            <div className='slide' key={i}>
              <h3>Commit</h3>
              <p>{commit.author.name}</p>
              <h4 className='commitUrl'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={commit.url
                    .replace('api.', '')
                    .replace('repos/', '')
                    .replace('commits', 'commit')}
                >
                  {commit.message}
                </a>
              </h4>
            </div>
          ))}
        </div>
        <div className='brand'>
          <p>
            Full Stack Engineer with a strong background in collaboration and
            customer service, with heavy insight to approachable UX/UI while
            offering robust functionality. Earned a certificate in Full Stack
            Development from University of Washington, with a focus in
            JavaScript, TypeScript, React, React-Native, along with database
            tools such as MongoDB, MySQL, and Postgres. Lead highly dynamic
            teams in agile development environments, meeting every deadline and
            deliverable laid out. My apps have serviced markets such as die-hard
            gamers, avid golfers, and supported dynamic chat platforms.{' '}
          </p>
        </div>
      </>
    );
  }
}

export default Home;
