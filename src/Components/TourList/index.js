import React,  { useState, useEffect } from 'react'
import Tour from '../Tour/Tour'
import "./TourList.scss"
import { tourData } from "../../Data/tourData"

function TourList() {
  const [tours, setTours] = useState(tourData);
  
  useEffect(() => {
    setTours(tourData);
  },[]);

  const handleChange = id =>{
    setTours(tours.filter(tour => tour.id !== id))
  }

  return (
    <section className="tour-list">
      {tours.map(tour => {
        return(<Tour key = {tour.id} tour = {tour} handleChange={handleChange} />)
      })}
    </section>
  )
}

export default TourList
