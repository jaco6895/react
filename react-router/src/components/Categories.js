import React from 'react';
import { NavLink } from "react-router-dom";

const categories = [
    {
        name:'all',
        text:'전체보기'
    },
    {
        name:'business',
        text:'비즈니스'
    },
    {
        name:'entertainment',
        text:'전체보기'
    },
    {
        name:'health',
        text:'건강'
    },
    {
        name:'science',
        text:'과학'
    },
    {
        name:'sports',
        text:'스포츠'
    },
    {
        name:'technology',
        text:'기술'
    },
]

function Categories({onSelect , category}){
    console.log()
    return (
        <div className="categories-wrapper">
            {categories.map(function(c){
                console.log(c.name+':'+category);
                return <NavLink className={'category'} key={c.name} activeClassName="active" exact={c.name === 'all'} to={c.name === 'all' ? '/' : '/'+c.name }> {c.text} </NavLink>
                // return <div className={'category ' + ((category === c.name) ? 'active' : '') } key={c.name} onClick={() => onSelect(c.name)}> {c.text} </div>
            })}
        </div>
    );
}

export default Categories;