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
      "X-RapidAPI-Key": "0609d3bf43msh5fca50d95f95888p1e0a1fjsn851fecfcf3bd",
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
