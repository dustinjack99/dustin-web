import { lazy, Suspense } from "react";

const Commits = lazy(() => import("./components/Commits"));

const Home = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Commits />
  </Suspense>
);

export default Home;
