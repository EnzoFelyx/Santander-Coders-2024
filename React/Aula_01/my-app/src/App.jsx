import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Article } from "./components/Article/Article";
import "./styles/App.css"

import article1Img from './assets/article1.png'
import article2Img from './assets/article2.png'
import article3Img from './assets/article3.png'

class App extends React.Component {

  render() {
    return (
      <>
        <NavBar />

        <section id="articles">

        <Article img={article1Img} 
                   title="Designing Dashboards" 
                   provider="NASA" 
                   description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>

          <Article img={article2Img} 
                   title="Vibrant Portraits of 2020" 
                   provider="SpaceNews" 
                   description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>

          <Article img={article3Img} 
                   title="36 Days of Malayalam type" 
                   provider="Spaceflight Now" 
                   description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>

          <Article img={article1Img} 
                   title="Designing Dashboards" 
                   provider="NASA" 
                   description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
          
        </section>

      </>
    );
  }
}

export default App;
