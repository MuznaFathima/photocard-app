import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './LandingStyle.css'


function LandingPage() {
  return (
  <>
        <div style={{backgroundImage:`url("https://www.wallpapertip.com/wmimgs/152-1525131_aesthetic-flower-desktop-wallpaper-hd.jpg")`,height:"100vh"}}>
            <h1 style={{textAlign:"center",fontSize:"40px",color:"black",fontFamily:"pacifio",position:"relative",top:"130px"}} >
                Welcome to Chroma
            </h1>
            <h3 style={{textAlign:"center",fontSize:"20px",color:"black",fontFamily:"pacifio",position:"relative",top:"150px"}}> Create Your own photocards </h3>
            <Link to={'/home'}><Button variant='light' style={{ marginLeft:"610px",position:"relative",top:"180px"}} className='gallery'> Go to Gallery</Button></Link>
        </div>
       
  </>
  )
}

export default LandingPage