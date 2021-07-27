import React from 'react';
import Main from '../page/main';
import Slider from "../components/slider";

const Content = ({menuList}) =>{
    return (
        <div className="content-wrapper">
            <div className="scroll-page-wrapper">
                <div className="scroll-page">
                    <Main menu={menuList.filter( main => (main.id === 'main'))}/>
                </div>
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