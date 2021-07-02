import React,{useState , useCallback, Component} from 'react'
import Slider from '../components/slider'

const videoSrc = [
    {
        src : "/video/coffee_video.mp4",

    },
    {
        src : "/video/counter.mp4"
    },
    {
        src : "/video/summer_strawberry.mp4"
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