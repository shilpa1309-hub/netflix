import { height } from '@mui/system'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './NetflixRows.css'

function NetflixBanner(props) {

  const [data, setData] = useState({})
  const [navbar, setNavbar] = useState(false)
    

  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 410) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })
  const img_base_path = 'https://image.tmdb.org/t/p/original'
  useEffect(() => {
    function getBannerData() {

      axios.get(props.url).then((response) => {
        //  setData(response.data.results[Math.floor(Math.random() * response.data.results.length)])
        const randomNo = Math.floor(Math.random() * response.data.results.length)
        setData(response.data.results[randomNo])
      })
    }
    getBannerData()
  }, [])

  function trimDescription(desc) {
    if (desc) {
      return (desc.length > 150) ? desc.slice(0, 150) + "..." : desc
    }
  }

    const header = {
      backgroundImage:'url('+img_base_path + data.backdrop_path+')'
      
    }
  

  return (
    <header style={header}>
      <div className='navigationBar' style={navbar ? { background: '#000' } : { background: '' }}>
        <img src='https://netflix-clone-complete.web.app/netflix-logo.png' ></img>
      </div>
      {/* <img src={img_base_path + data.backdrop_path} className='imgStyle'></img> */}
      <div className='bannerContent'>
        <h1 className='bannerTittle'>{data.name}</h1>
        <div className='bannerButton'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='bannerDescription'>{
          trimDescription(data.overview)
          // (data.overview.split('').length >150) ? data.overview.slice(0,150):data.overview

        }</h1>
      </div>
      <div className='bottomDiv'></div>
    </header>

  )
}

export default NetflixBanner