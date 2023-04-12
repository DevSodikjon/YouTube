import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import dataVideos from "../videos/data";

const useFatch = (url) => {
  const [dataComments, setDataComments] = useState([]);
  const [loadingComm, setLoadingComm] = useState(true);
  const [errorComm, setErrorComm] = useState(null);

  // const axios = require("axios");

  const fetchData = {
    method: "GET",
    url: url,
    params: { part: "snippet", videoId: "7ghhRHRP6t4", maxResults: "100" },
    headers: {
      "X-RapidAPI-Key": "3835a2aaf2msh34dd9250078695ep16b1cfjsnb3d22bf45a4b",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
    }
  };

  axios
    .request(fetchData)
    .then(function (response) {
      console.log(response);
      setDataComments(response.data.items);
    })
    .catch(function (error) {
      console.error(error);
    });

  return { dataComments, loadingComm, errorComm };
};

export default useFatch;
