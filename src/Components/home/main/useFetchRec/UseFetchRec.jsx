import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const UseFetchRec = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const axios = require("axios");

  const fetchData = {
    method: "GET",
    url: url,
    params: { playlistId: "RDZiQo7nAkQHU", part: "snippet", maxResults: "50" },
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
      console.error("error", error);
    });

  return { data, loading, error };
};

export default UseFetchRec;
