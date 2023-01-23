import React from 'react'


//import videobg
import videoBg from "../../assets/clubvid.mp4"

const VideoBG = () => {
  return (
    <div>
        <video src={videoBg} autoPlay loop muted/>
    </div>
  )
}

export default VideoBG;