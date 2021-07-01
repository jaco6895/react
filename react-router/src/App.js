import React from 'react';
import './scss/style.scss';
import { Route } from 'react-router-dom';
import NewsPage from './components/NewsPage';

import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = function (){
    // const [category, setCategory] = useState('all');
    // const onSelect = useCallback( function(category){ return setCategory(category); },[]);

    return <Route path="/:category?" component={NewsPage} />;
        // <>
        //     <Categories category={category} onSelect={onSelect}/>
        //     <NewsList category={category}/>
        // </>


}

export default App;
