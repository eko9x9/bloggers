import React, { useState } from 'react'
import Navbar from '../layouts/Navbar';
import Header from '../layouts/Header';
import Content from "../components/content";
import Swiper from '../components/swiper/Swiper';

export default function Home() {

  const [value, setValue] = useState("This is initial value!");

  function displayElement(className: string, isDisplay: boolean) {
    const edit = document.querySelector(className)
    if(isDisplay){
      edit?.classList.add("d-show");
      edit?.classList.remove("d-none");
      return;
    }else {
      edit?.classList.remove("d-show");
      edit?.classList.add("d-none");
      return;
    }
  }

  return (
    <React.Fragment>
      <div className="wrapper">
        <Navbar />
        <Header />
        <Content />
      </div>
    </React.Fragment>
  )
}
