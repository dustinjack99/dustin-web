import GitHubFeed from "./components/GitHubFeed/GitHubFeed";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        {/* <GitHubFeed /> */}
        <div className="brand">
          <p>
            Why, hello! I'm a Software Engineer with deep experience in
            delivering scalable, React apps for various platforms. I've launched
            several mobile apps on Android / iOS, enterprise-level web apps, and
            helped migrate AngularJS monorepos to distributed React frontends.
          </p>
          <br />
          <p>
            My language of choice is JavaScript / TypeScript, but love Swift and
            Rust as very close seconds. My passion is teaching coding, and
            giving others the chance to enter the engineering field. I've lead
            software teams in agile development environments, collaborating with
            design, product, QA, and various other enterprise teams. My apps
            have serviced markets such as die-hard gamers, public education, and
            mobility-assistance for millions of users.
          </p>
          <br />
          <p>
            I'm University of Washington alum, and spend my time bouncing
            between Seattle, WA (for tech shenanigans) and Sioux Falls, SD (for
            family shenanigans). I have three children - one a sassy teenage
            girl, and two equally sassy cats. I still don't know which of the
            three loves me more.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
