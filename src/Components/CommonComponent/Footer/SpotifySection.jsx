import React, { useEffect, useState } from "react";
import { getNowPlaying } from "../../../Services/Utils/sportify-actions";

function SpotifySection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getNowPlaying().then((response) => {
      setData(response);
    });
  }, []);

  function getValue() {
    if (data != null) {
      if (data?.item != null) {
        return data.item.name;
      } else {
        return "Playing Ad 😅";
      }
    }
    return "Not Playing";
  }

  return (
    <div class="pt-3 pb-11 flex flex-row items-center ">
      <img class="pr-6" src="/assets/sportify_logo.svg" alt="" />
      <text class="font-semibold text-dark-text-white text-2xl pr-6">{getValue()}</text>
      <text class="font-semibold text-dark-text-grey text-2xl ">– Spotify</text>
    </div>
  );
}

export default SpotifySection;
