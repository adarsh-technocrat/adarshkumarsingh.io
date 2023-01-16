import React from "react";
import { getHeatMapColor } from "../../../Services/Utils/github-action";
import HeatCell from "./HeatCell";

function ContributionGrid({ calenderData, eventData }) {
  const getMonthData = () => {
    if (eventData != null) {
      const getMonthWiseData = eventData.filter(
        (item) => item.month === calenderData.month && item.year === calenderData.year
      );
      return getMonthWiseData;
    }
  };

  const checkIfIndexPresent = (monthDataIndex) => {
    if (monthDataIndex !== -1) {
      return getMonthData()[monthDataIndex];
    }
  };

  return (
    <div class="p-4">
      <text class="text-[12px] pl-1 text-dark-text-white">{calenderData.month}</text>
      <div class="grid grid-cols-5 gap-0 cursor-pointer ">
        {calenderData.days.map((day) => {
          const monthDataIndex =
            eventData != null ? getMonthData().findIndex((item) => item.day === day) : -1;
          if (monthDataIndex !== -1) {
            return (
              <HeatCell
                className={`h-[10px] w-[10px] rounded-sm ${getHeatMapColor(
                  checkIfIndexPresent(monthDataIndex).count
                )} m-1`}
                day={day}
                title={`${checkIfIndexPresent(monthDataIndex).count ?? ""} contributions on ${
                  checkIfIndexPresent(monthDataIndex).month ?? ""
                } ${checkIfIndexPresent(monthDataIndex).day ?? ""}, ${
                  checkIfIndexPresent(monthDataIndex).year ?? ""
                }`}
                key={day}
              />
            );
          } else {
            return (
              <HeatCell
                className={`h-[10px] w-[10px] rounded-sm bg-dark-heatMapD0 m-1 `}
                day={day}
                title={`No contribution on ${calenderData.month} ${day}, ${calenderData.year} `}
                key={day}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default ContributionGrid;
