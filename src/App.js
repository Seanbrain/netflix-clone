import React from 'react';
import './App.css';
import Row from './Row';
import requests from "./Requests"
import Banner from "./Banner.js"
import Nav from "./Nav.js"
import "./Nav.css"



function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row  title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row  title="Trending Now" fetchUrl ={requests.fetchTrending}/>
      <Row  title="Top Rated " fetchUrl ={requests.fetchTopRated}/>
      <Row  title="Action Movies" fetchUrl ={requests.fetchActionMovies}/>
      <Row  title="Comedy Movies" fetchUrl ={requests.fetchComedyMovies}/>
      <Row  title="Horror Movies" fetchUrl ={requests.fetchHorrorMovies}/>
      <Row  title="RomanceMovies" fetchUrl ={requests.fetchRomanceMovies}/>
      <Row  title="Documentaries" fetchUrl ={requests.fetchDocumentaries}/>
      
     
     

      </div>
      
  );
}

export default App;
