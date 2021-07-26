import React,{useState , useCallback, Component} from 'react'
import './scss/style.scss';
import Header from "./template/layout/Header";
import Content from "./template/layout/Content";
import Footer from "./template/layout/Footer";

const App = () => {

    const [menuList,setMenuList] = useState([
        {// 1. 이번시즌의 추천 - 메인메뉴 (가장 미는 메뉴를 처음에 넣어주세요.)
            id : 1,
            title:"블루베리 치즈브라우니 & 카라멜 라떼",
            imgUrl:"/images/cafe_2.png",
            engTitle:"Blueberry Cheese Brownies & Caramel Latte",
            contents:"진한 농도의 치즈와 블루베리의 상큼함이 어우러져 인상적인 브라우니 케이크"
        },{
            id : 2,
            title:"블루베리 치즈브라우니 & 카라멜 라떼2",
            imgUrl:"/images/cafe_2.png",
            engTitle:"Blueberry Cheese Brownies & Caramel Latte",
            contents:"진한 농도의 치즈와 블루베리의 상큼함이 어우러져 인상적인 브라우니 케이크"
        },{
            id : 3,
            title:"블루베리 치즈브라우니 & 카라멜 라떼3",
            imgUrl:"/images/cafe_2.png",
            engTitle:"Blueberry Cheese Brownies & Caramel Latte",
            contents:"진한 농도의 치즈와 블루베리의 상큼함이 어우러져 인상적인 브라우니 케이크"
        },{
            id : 4,
            title:"블루베리 치즈브라우니 & 카라멜 라떼4",
            imgUrl:"/images/cafe_2.png",
            engTitle:"Blueberry Cheese Brownies & Caramel Latte",
            contents:"진한 농도의 치즈와 블루베리의 상큼함이 어우러져 인상적인 브라우니 케이크"
        },
    ]);

    return (
    <div className="grid-wrapper">
      <Header></Header>
      <Content menuList = {menuList}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
