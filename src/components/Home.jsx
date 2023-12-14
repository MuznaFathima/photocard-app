import React, { useState } from 'react'
import Footer from '../pages/Footer'
import Add from './Add'
import Cards from './Cards'
import './LandingStyle.css'

function Home() {

  const[serverRes,setserverRes]=useState({})

  



  const handleResponse=(res)=>{

    setserverRes(res)
  }
  console.log(serverRes);

  return (
   <div className='home'>
     
      <Add  handleResponse={handleResponse}/>
      <Cards serverRes={serverRes}/>
    
      <Footer/>

   </div>
  )
}

export default Home