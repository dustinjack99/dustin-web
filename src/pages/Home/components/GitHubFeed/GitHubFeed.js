import { Box, Typography } from "@mui/material";
import { Suspense, useState, useEffect } from "react";
import Loading from "../../../../components/Loading";
import Commits from "../Commits";

const fetchCommits = async (setEventArr) => {
  const res = await fetch(`https://api.github.com/users/dustinjack99/events`);
  const data = await res.json();
  console.log(data);
  const commits = data.map((element) => {
    if (element.type === "PushEvent") {
      return {
        user: {
          avatar: element?.actor?.avatar_url,
          name: element?.actor?.login,
        },
        commits: element?.payload?.commits,
        repo: {
          name: element?.repo?.name,
          time: element?.created_at,
          url: element?.repo?.url,
        },
      };
    }
  });
  const filteredCommits = commits.filter((commit) => commit !== undefined);
  setEventArr([...filteredCommits]);
};

const GitHubFeed = () => {
  const [eventArr, setEventArr] = useState([]);

  useEffect(() => {
    if (eventArr.length === 0) {
      fetchCommits(setEventArr);
    }
  }, []);

  return (
    <Box className="feed">
      <Suspense fallback={<Loading />}>
        <Commits eventArr={eventArr} />
      </Suspense>
    </Box>
  );
};

export default GitHubFeed;
