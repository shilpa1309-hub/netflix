import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { height } from '@mui/system'
import './NetflixRows.css'

function NetflixRows(props) {
    const [data, setData] = useState([])
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
                                            <img src={img_base_path + item.backdrop_path} style={(props.size) ? imgStyleBig : imgStyle}></img>
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
        <div className='movies'>
            <h1 style={titleStyle}>{props.title}</h1>
            <NetFlixOrginals></NetFlixOrginals>

        </div>
    )
}

export default NetflixRows