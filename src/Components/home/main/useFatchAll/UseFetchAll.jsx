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
      "X-RapidAPI-Key": "0609d3bf43msh5fca50d95f95888p1e0a1fjsn851fecfcf3bd",
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
