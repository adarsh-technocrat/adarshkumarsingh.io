import React, { useEffect, useState } from "react";
import { getGitHubUserInfo } from "../../../Services/Utils/github-action";

function GitHubStats() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getGitHubUserInfo().then((data) => {
      setData(data);
    });
  }, []);

  return <div class="bg-dark-lightGreen h-full w-72 rounded-md">{data?.name ?? ""}</div>;
}

export default GitHubStats;
