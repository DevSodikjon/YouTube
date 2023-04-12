import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const UseFetchRec = (url) => {
  const [dataRec, setDataRec] = useState([]);
  const [loadingRec, setLoading] = useState(true);
  const [errorRec, setError] = useState(null);

  // const axios = require("axios");

  const fetchData = {
    method: "GET",
    url: url,
    params: {
      relatedToVideoId: "7ghhRHRP6t4",
      part: "id,snippet",
      type: "video",
      maxResults: "50"
    },
    headers: {
      "X-RapidAPI-Key": "3835a2aaf2msh34dd9250078695ep16b1cfjsnb3d22bf45a4b",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
    }
  };

  axios
    .request(fetchData)
    .then(function (response) {
      setDataRec(response.data.items);
    })
    .catch(function (error) {
      console.error("error", error);
    });

  return { dataRec, loadingRec, errorRec };
};

export default UseFetchRec;
