import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import './NetflixRows.css'
import CloseIcon from '@mui/icons-material/Close'

function NetflixRows(props) {
    const [data, setData] = useState([])
    // const[id,setid]=useState("")
    const imgStyle = {
        width: '15rem',
        padding: '0.3rem',
        borderRadius: '1rem',

    }
    const imgStyleBig = {
        width: '20rem',
        padding: '0.3rem',
        borderRadius: '1rem',

    }
    const masterDivStyle = {
        display: "flex",
        overflowX: "scroll",
        overflowY: "hidden",
        background: "#000",
        backgroundSize: 'cover',
        alignItems: 'center',
        margin: '1rem'
    }
    const titleStyle = {
        color: "#fff",
        padding: '1rem'
    }
    const img_base_path = 'https://image.tmdb.org/t/p/original'
    useEffect(
        () => {
            function GetMovies() {
                axios.get(props.endPoint).then(
                    (result) => {

                        setData(result.data.results)
                    }
                )
            }
            GetMovies()
        }, [])

    const [url, setUrl] = useState('')
    const API_KEY = 'a3a384702999ca5e533c64bd101e2a5d'

    function showTrailer(id) {
        const test = 'http://api.themoviedb.org/3/movie/' + id + '/videos?api_key=' + API_KEY
        // const youtubeLink = 'https://www.youtube.com/watch?v='+

        const data = axios.get(test).then((result) => {
            const youtubeLink = 'https://www.youtube.com/embed/' + result.data.results[0].key
            setUrl(youtubeLink)
            //  window.location.href = youtubeLink

            document.querySelector('.iframe').style.display = 'block'

            document.getElementById('myIframe').src = youtubeLink
        })


    }
    console.log(url)

    function NetFlixOrginals() {
        // console.log(data)
        return (
            <>
                {
                    data !== null && data !== undefined ?
                        <div className='masterDiv' style={masterDivStyle}>
                            {
                                data.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={img_base_path + item.backdrop_path} style={(props.size) ? imgStyleBig : imgStyle} onClick={() => { showTrailer(item.id) }}></img>
                                        </div>
                                    )
                                })
                            }
                        </div> : ""

                }


            </>
        )

    }

    return (
        <>
            <div className='movies'>
                <h1 style={titleStyle}>{props.title}</h1>
                <NetFlixOrginals></NetFlixOrginals>


            </div>
            <div className='iframe' style={{textAlign:"end"}}>
                <CloseIcon style={{color:"#fff"}} onClick={() => { document.querySelector('.iframe').style.display = 'none' }}></CloseIcon>
                <iframe
                    id='myIframe'
                    frameBorder="0"
                    width="800"
                    height="500"
                    src=""

                ></iframe>
            </div>
        </>
    )
}


export default NetflixRows