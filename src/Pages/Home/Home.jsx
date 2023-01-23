import React from 'react'
import Card from '../../Components/Card/Card';
import Nav from '../../Components/Nav/Nav';

const Home = () => {
  return (
    <div className='Home'>
        <h1>AZNCLUB</h1>
        <div className="Cards">
          <Card className="card-one"/>
          <Card className="card-two" />
        </div>
        <Nav />
    </div>
  )
}

export default Home;