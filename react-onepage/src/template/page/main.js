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
                    <div className="video-wrapper">
                        <Blind></Blind>
                        <video controls={false} autoPlay loop muted src={videoSrc[random(0,1)].src} type="video/mp4"></video>
                    </div>
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


const Menu1 = () =>{
    return (
        <div className="menu1">
            <div className="bg-color"></div>
        </div>
    );
}




const Blind = () => {
    return(
        <div className="blind"></div>
    );
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default Main;