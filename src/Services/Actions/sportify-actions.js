import axios from "axios";
import base64 from "base-64";

const client_id = process.env.REACT_APP_SPORTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPORTIFY_SECRET_ID;
const refresh_token = process.env.REACT_APP_SPORTIFY_REFRESH_TOKEN;

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const auth = base64.encode(`${client_id}:${client_secret}`);

const getAccessToken = async () => {
  try {
    const response = await axios({
      method: "POST",
      url: TOKEN_ENDPOINT,
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        grant_type: "refresh_token",
        refresh_token,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  try {
    const response = await axios.get(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
