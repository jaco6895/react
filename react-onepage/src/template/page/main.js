import React,{useState , useCallback, Component} from 'react'
import Slider from '../components/slider'

const videoSrc = [
    {
        src : "/coffee_video.mp4",

    },
    {
        src : ""
    }
]


const Main = () =>{
    return (
        <div className="main">
            <div className="scroll-page-wrapper">
                <div className="scroll-page">
                    <video controls={false} autoPlay loop muted src={videoSrc[0].src} type="video/mp4">
                    </video>
                </div>
                <div className="scroll-page">
                    <Slider></Slider>
                </div>
                <div className="scroll-page"></div>
                <div className="scroll-page"></div>
                <div className="scroll-page"></div>
            </div>
        </div>
    );
}

export default Main;