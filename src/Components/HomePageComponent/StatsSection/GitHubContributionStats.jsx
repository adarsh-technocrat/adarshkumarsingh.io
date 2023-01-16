import React, { useEffect, useState } from "react";
import {
  getContributionsData,
  getCurrentYearCalendar,
} from "../../../Services/Utils/github-action";
import ContributionGrid from "./ContributionGrid";

function GitHubContributionStats() {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    getContributionsData().then((contributionData) => {
      setEventData(contributionData);
    });
  }, []);

  const currentCalender = getCurrentYearCalendar();

  return (
    <div class="bg-dark-primary h-auto w-full rounded-md relative ">
      <div class="flex flex-row items-start justify-center">
        {currentCalender.map((data) => (
          <ContributionGrid key={data} calenderData={data} eventData={eventData} />
        ))}
      </div>
    </div>
  );
}

export default GitHubContributionStats;
