import React, { useEffect, useState } from "react";

export const useFetchSaunaData = () => {
  const [saunaData, setSaunaData] = useState([]);

  const fetchData = () => {
    fetch("https://api.bhd.v3p2k2.com/sauna/data")
      .then((res) => res.json())
      .then((data) => {
        setSaunaData(data.data.sort((a, b) => (a.id > b.id ? 1 : -1)));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return saunaData;
};
