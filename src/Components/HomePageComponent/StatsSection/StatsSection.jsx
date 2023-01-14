import React from "react";
import GitHubContributionStats from "./GitHubContributionStats";
import GitHubStats from "./GitHubStats";
import LinkedInStats from "./LinkedInStats";
import TwitterStats from "./TwitterStats";

function StatsSection() {
  return (
    <div class="pl-32 pr-32 flex h-96 w-auto mt-40 ">
      <GitHubStats />
      <div class="flex flex-col w-full justify-between pl-6 pr-6">
        <div class="">
          <TwitterStats />
        </div>
        <GitHubContributionStats />
      </div>
      <LinkedInStats />
    </div>
  );
}

export default StatsSection;
