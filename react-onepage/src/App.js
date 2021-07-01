import React from 'react';
import './scss/style.scss';
import Header from "./template/layout/Header";
import Content from "./template/layout/Content";
import Footer from "./template/layout/Footer";

const App = () => {
  return (
    <div className="grid-wrapper">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
