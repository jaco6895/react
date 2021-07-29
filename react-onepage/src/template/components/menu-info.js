import React,{useState , useCallback, Component} from 'react'

const MenuInfo = ({title,engTitle,contents}) => {
    return (
            <div className="menu-wrapper">
                <h2>{title}</h2>
                <h3>{engTitle}</h3>
                <p>{contents}</p>
            </div>
    );
}

export default MenuInfo;