import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import dataVideos from "../videos/data";

const useFatch = (url) => {
  const [dataComments, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const axios = require("axios");

  const fetchData = {
    method: "GET",
    url: url,
    params: { part: "snippet", videoId: "7ghhRHRP6t4", maxResults: "100" },
    headers: {
      "X-RapidAPI-Key": "ae6be6b66cmsh9b103b748804682p1cce2ajsn95d7675d18a9",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
    }
  };

  axios
    .request(fetchData)
    .then(function (response) {
      setData(response.data.items);
    })
    .catch(function (error) {
      console.error(error);
    });

  return { dataComments, loading, error };
};

export default useFatch;
