import { height } from '@mui/system'
import axios from 'axios'
import React, { Component } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import NetflixRows from './NetflixRows'
import NetflixBanner from './NetflixBanner'

function Netflix() {
  const API_KEY = 'a3a384702999ca5e533c64bd101e2a5d'
  const requestURL = {
    trendingMovies: 'https://api.themoviedb.org/3/trending/all/week?api_key=' + API_KEY + '&language=en-US',
    fetchTrending: 'https://api.themoviedb.org/3/trending/all/week?api_key=' + API_KEY + '&language=en-US',
    fetchNetflixOriginals: 'https://api.themoviedb.org/3/discover/tv?api_key=' + API_KEY + '&with_networks=213',
    fetchTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + API_KEY + '&language=en-US',
    fetchActionMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_genres=28',
    fetchComedyMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_genres=35',
    fetchHorrorMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_genres=27',
    fetchRomanceMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_genres=10749',
    fetchDocumentaries: 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_genres=99'
  }
  const containerDivStyle = {
    background: "#000",
    
   
  
  }
  const [slideshowData, setSlideShowData] = useState([])
  
 
  

  return (
    <div style={containerDivStyle}>
      <NetflixBanner url={requestURL.fetchNetflixOriginals}></NetflixBanner>
      <NetflixRows endPoint={requestURL.trendingMovies} title="TRENDING MOVIES" size ={true}></NetflixRows>
      <NetflixRows endPoint={requestURL.fetchActionMovies} title="ACTION MOVIES"></NetflixRows>
      <NetflixRows endPoint={requestURL.fetchComedyMovies} title="COMEDY MOVIES"></NetflixRows>
      <NetflixRows endPoint={requestURL.fetchDocumentaries} title="DOCUMENTATARIES MOVIES"></NetflixRows>
      <NetflixRows endPoint={requestURL.fetchHorrorMovies} title="HORROR MOVIES"></NetflixRows>
      <NetflixRows endPoint={requestURL.fetchTopRated} title="TOP RATED MOVIES"></NetflixRows>
    </div>
  )
}

export default Netflix