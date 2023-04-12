import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const UseFetchAll = (url) => {
  const [dataAll, setDataAll] = useState([]);
  const [loadingAll, setLoadingAll] = useState(true);
  const [errorAll, setErrorAll] = useState(null);

  // const axios = require("axios");

  const fetchData = {
    method: "GET",
    url: url,
    params: { part: "snippet", videoId: "M7FIvfx5J10" },
    headers: {
      "X-RapidAPI-Key": "3835a2aaf2msh34dd9250078695ep16b1cfjsnb3d22bf45a4b",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
    }
  };

  axios
    .request(fetchData)
    .then(function (response) {
      // console.log(response);
      setDataAll(response.data.items);
    })
    .catch(function (error) {
      console.error(error);
    });

  return { dataAll, loadingAll, errorAll };
};

export default UseFetchAll;
