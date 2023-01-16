import axios from "axios";

// const github_access_token = process.env.REACT_APP_SPORTIFY_REFRESH_TOKEN;

const GITHUB_EVENT_ENDPOINT = `https://api.github.com/users/adarsh-technocrat/events/public`;

const getGithubContributionEventsData = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: GITHUB_EVENT_ENDPOINT,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getContributionsData = async () => {
  let contributions = [];
  let data = await getGithubContributionEventsData();
  data = data.filter((event) => event.type === "PushEvent");

  data.forEach((event) => {
    let date = event.created_at.substring(0, 10);
    let count = event.payload.commits.length;
    contributions.push({ date, count });
  });

  return combineDataByDate(contributions);
};

export const getCurrentYearCalendar = () => {
  const currentYear = new Date().getFullYear();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const calendar = [];

  for (let month = 0; month < 12; month++) {
    const date = new Date(currentYear, month + 1, 0);
    const year = date.getFullYear();
    const days = [];
    for (let day = 1; day <= date.getDate(); day++) {
      days.push(day);
    }

    calendar.push({
      year: year,
      month: months[month],
      days: days,
    });
  }

  return calendar;
};

export const getHeatMapColor = (value) => {
  if (value > 3) return "bg-dark-heatMapD3";
  if (value > 2) return "bg-dark-heatMapD2";
  if (value > 1) return "bg-dark-heatMapD1";
  return "bg-dark-heatMapD0";
};

function combineDataByDate(data) {
  const result = {};
  for (let i = 0; i < data.length; i++) {
    const date = new Date(data[i].date);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const key = `${year}-${month}-${day}`;
    if (!result[key]) {
      result[key] = { year: year, month: month, day: day, count: 0 };
    }
    result[key].count += data[i].count;
  }
  return Object.values(result);
}
