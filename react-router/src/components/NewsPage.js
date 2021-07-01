import React from 'react';
import Categories from './Categories';
import NewsList from './NewsList';

function NewsPage({ match }){
    //카데고리가 선택되지 않았으면 기본값으로 'all' 사용
    const category = match.params.category || 'all';
    return (
        <>
            <Categories/>
            <NewsList category={category}/>
        </>
    );
}

export default NewsPage;