// @ts-nocheck
import React from 'react'
import "./header.css";

export const Header = () => {
  return (
    <div className="container">
        <div className="container2">
            <div className="header">
                <div className="headerName">
                    <h1>PlantFashion</h1>
                </div>
                <div className="headerContent">
                    <h4>Plant Shop</h4>
                    <h4>Inspirations</h4>
                    <h4>About PlantFashion</h4>
                    <h4>Contact</h4>
                </div>
            </div>
            <div className="bodyContent">
                <h1>Find the perfect</h1>
                <h1>complement</h1>
                <h1 style={{marginBottom:"30px"}}>to your room</h1>
                <h4 style={{maxWidth: "490px", marginBottom:"40px"}}>We will help you find plants that match your needs and style. Check our offer in the store and surround yourself with greenery!</h4>
                <button className='bodyButton'> Buy now</button>
            </div>
            <div className="img" style={{width: "150px", height: "300px", opacity: "0.9", marginLeft: "60%", marginTop: "500px", transform: `scaleX(${-1})`, transform: `rotate(${90}deg)`}}></div>
            <div className="img" style={{width: "150px", height: "300px", opacity: "0.5", marginLeft: "60%", marginTop: "-100px", transform: `scaleX(${-1})`, transform: `rotate(${-120}deg)`}}></div>
            <div className="img" style={{width: "100px", height: "200px", opacity: "0.6", marginLeft: "71%", marginTop: "251px", transform: `scaleX(${1})`, transform: `rotate(${45}deg)`}}></div>
            <div className="img" style={{width: "200px", height: "400px", opacity: "0.2", marginLeft: "10%", marginTop: "150px", transform: `scaleX(${1})`, transform: `rotate(${-30}deg)`}}></div>
            <div className="img" style={{width: "200px", height: "400px", opacity: "0.7", marginLeft: "20%", marginTop: "660px", transform: `scaleX(${1})`, transform: `rotate(${90}deg)`}}></div>
            <div className="img" style={{width: "100px", height: "200px", opacity: "0.6", marginLeft: "10%", marginTop: "680px", transform: `scaleX(${1})`, transform: `rotate(${-80}deg)`}}></div>
            <div className="img" style={{width: "300px", height: "600px", opacity: "1", marginLeft: "80%", marginTop: "580px", transform: `scaleX(${1})`, transform: `rotate(${40}deg)`}}></div>
        </div>
    </div>
  )
}
