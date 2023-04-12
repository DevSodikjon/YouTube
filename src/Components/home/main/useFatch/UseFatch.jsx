import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import dataVideos from "../videos/data";

const useFatch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const axios = require("axios");

  const fetchData = {
    method: "GET",
    url: url,
    params: { playlistId: "RDZiQo7nAkQHU", part: "snippet", maxResults: "50" },
    headers: {
      "X-RapidAPI-Key": "3835a2aaf2msh34dd9250078695ep16b1cfjsnb3d22bf45a4b",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
    }
  };

  axios
    .request(fetchData)
    .then(function (response) {
      console.log(response);
      setData(response.data.items);
    })
    .catch(function (error) {
      console.error(error);
    });

  return { data, loading, error };
};

export default useFatch;
