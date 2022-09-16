import React, { Component } from "react";
import axios from "axios";
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
      .then((res) => {
        const commits = [];

        for (let i = 0; i < 5; i++) {
          if (res.data[i].payload.commits) {
            for (let j = 0; j < res.data[i].payload.commits.length; j++) {
              axios
                .get(res.data[i].payload.commits[j].url)
                .then((result) => {});
              commits.push(res.data[i].payload.commits[j]);
            }
          }
        }

        this.setState({ commitArr: commits });
      })
      .then((res) => {
        const slideshows = document.querySelectorAll(".slide");

        slideshows.forEach(initSlideShow);
        function initSlideShow() {
          const slides = document.querySelectorAll(".slide");
          let index = 0,
            time = 7500;
          slides[index].classList.add("active");

          setInterval(() => {
            slides[index].classList.remove("active");

            index++;

            if (index === slides.length) index = 0;

            slides[index].classList.add("active");
          }, time);
        }
      });
  }

  render() {
    const commits = this.state.commitArr;

    return (
      <>
        <div className="homeContainer">
          <div className="feed">
            <h2 id="feedTitle">GitHub Activity Feed</h2>

            {commits.map((commit, i) => (
              <div className="slide" key={i}>
                <h3>Commit</h3>
                <p>{commit.author.name}</p>
                <h4 className="commitUrl">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={commit.url
                      .replace("api.", "")
                      .replace("repos/", "")
                      .replace("commits", "commit")}
                  >
                    {commit.message}
                  </a>
                </h4>
              </div>
            ))}
          </div>
          <div className="brand">
            <p>
              Why, hello! I'm a Software Engineer with deep experience in
              delivering scalable, React apps for various platforms. I've
              launched several mobile apps on Android / iOS, enterprise-level
              web apps, and helped migrate AngularJS monorepos to distributed
              React frontends.
            </p>
            <br />
            <p>
              My language of choice is JavaScript / TypeScript, but love Swift
              and Rust as very close seconds. My passion is teaching coding, and
              giving others the chance to enter the engineering field. I've lead
              software teams in agile development environments, collaborating
              with design, product, QA, and various other enterprise teams. My
              apps have serviced markets such as die-hard gamers, public
              education, and mobility-assistance for millions of users.
            </p>
            <br />
            <p>
              I'm University of Washington alum, and spend my time bouncing
              between Seattle, WA (for tech shenanigans) and Sioux Falls, SD
              (for family shenanigans). I have three children - one a sassy
              teenage girl, and two equally sassy cats. I still don't know which
              of the three loves me more.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
