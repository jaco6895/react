import React, {useState, useEffect} from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';

const sampleArticle = {
    title:'제목',
    description:'내용',
    url:'https://google.com',
    urlToImage:'https://via.placeholder.com/160',
}
function NewsList({category}){
    const [articles,setArticles] =useState(null);
    const [loading,setLoading]=useState(false);

    useEffect(function(){
        const fetchData = async function () {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : '&category='+category;
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr'+query+'&apiKey=83065596288a46b8a9c44ef2760752f2',);
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        }
        fetchData();
    },[category]);

    //대기 중일 때
    if(loading){
        return <div className="news-list">대기중입니다........</div>
    }
    if(!articles){
        return null;
    }

    return (
        <div className="news-list">
            { articles.map(article => (
                    <NewsItem key={article.url} article={article}/>
                )
            )}
        </div>
    );
}

export default NewsList;