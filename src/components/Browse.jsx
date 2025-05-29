import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //Fetch Data from TMDM Api and update store
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
        MainContainer 
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * n
            - Cards * n
        
      */}
    </div>
  );
};

export default Browse;
