import React from 'react'


//import videobg
//import videoBg from "../../assets/clubvid.mp4"
import videoBg from "s3://rikoawsbucket/videos/tsq.MOV"

const VideoBG = () => {
  return (
    <div>
        <video src={videoBg} autoPlay loop muted/>
    </div>
  )
}

export default VideoBG;