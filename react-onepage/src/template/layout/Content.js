import React from 'react';
import Main from '../page/main';
import Slider from "../components/slider";

const Content = ({menuList}) =>{
    return (
        <div className="content-wrapper">
            <div className="scroll-page-wrapper">
                <Main menu = {menuList[0]}>

                </Main>
                <div className="scroll-page">
                    <Slider></Slider>
                </div>
                <div className="scroll-page">

                </div>
                <div className="scroll-page">

                </div>
            </div>
        </div>
    );

}

export default Content;