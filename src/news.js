import React,{ useState } from 'react';
import "./index.css";
import Navbar from "./components/Navbar"
import ContainerLayout from "./components/ContainerLayout"
import Content from "./components/news/ContainerLayout/content"
function news() {
    const [inputValue, setInputValue] = useState("");
    return (
      <ContainerLayout>
       <Navbar />
       <Content inputValue={inputValue} setInputValue={setInputValue}{""} />
      </ContainerLayout>
    );
  }
  
  export default news;