import React from 'react'
import Card from '../../Components/Card/Card';
import Nav from '../../Components/Nav/Nav';

//IMPORT VIDEO
import videoBG from "../../assets/clubvid.mp4"
import Social from '../../Components/Social/Social';

const Home = () => {
  return (
    <div className='Home'>
      <div className="overlay"></div>
      <video src={videoBG} autoPlay loop muted/>
        <div className="content">
        <h1>AZNCLUB</h1>
        <div className="Cards">
          <Card className="card-one"/>
          <Card className="card-two" />
        </div>
        <Nav />
        <Social />
        </div>
    </div>
  )
}

export default Home;