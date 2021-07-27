import React,{useState , useCallback, Component} from 'react'
import '../../scss/page/_main.scss';
import MenuInfo from '../components/menu-info';

const videoSrc = [
    { id : 1, src : "/video/coffee_video.mp4"},
    { id : 2, src : "/video/counter.mp4"},
    { id : 3, src : "/video/summer_strawberry.mp4"}
]

const Main = ({menu}) =>{
    return (
            <div className="main">
                <div className="video-wrapper">
                    <video controls={false} autoPlay loop muted src={videoSrc[random(0,1)].src} type="video/mp4"></video>
                </div>
                <Blind main={menu[0]}></Blind>
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




const Blind = ({main}) => {
    return(
        <div className="blind">
            <img src={main.imgUrl} alt={main.title}/>
            <MenuInfo title={main.title} engTitle={main.engTitle} contents={main.contents}/>
        </div>
    );
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default Main;