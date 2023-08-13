import React from 'react'
import Header from './Container/Header'
import Table from './Container/Table'
import Filter from './Container/Filter'
import Card from './Container/Card'



const Home = () => {
  return (
    <div>
      <center>
        <Header />
        <Table />
        <Filter />
        <Card />
      </center>
    </div>
  )
}

export default Home