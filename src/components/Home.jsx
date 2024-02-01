import React, { useEffect, useState } from "react";
import HorizontalScroller from "./HorizontalScroller";
import LandingPage from "./LandingPage";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setData(response.data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-gradient-to-tr from-gray-900 via-red-800 to-gray-900">
      <LandingPage />
      <HorizontalScroller props={data} />
      <HorizontalScroller props={data} />
      <HorizontalScroller props={data} /> 
    </div>
  );
}

export default Home;
