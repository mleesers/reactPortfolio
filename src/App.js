import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
/* import "./script" */
import data from './cards.json';
import './style.css'

const App = () => {
  const [cardsIndex, setCardsIndex] = useState(0);
  const currentIndex = data[cardsIndex]["id"];
  const handleNext = (e) => {
    e.preventDefault();
    if(cardsIndex > data.length-1){
      setCardsIndex(0);
      return;
    }
    else if (currentIndex == cardsIndex) {
      setCardsIndex(cardsIndex + 1)
    }
    
  }
  const handlePrev = (e) => {
    e.preventDefault();
    console.log(data.length)
    if(cardsIndex < 0){
      setCardsIndex(data.length-1);
      return;
    }
    else if (currentIndex == cardsIndex) {
      setCardsIndex(cardsIndex -1)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Michael Leeser-Smith</h1>
        <nav>
          <ul>
            <li>
              <a href="#About-Me" className="links">About Me</a>
            </li>
            <li>
              <a href="#Work" className="links">Work</a>
            </li>
            <li>
              <a href="#Contact-Me" className="links">Contact Me</a>
            </li>
            <li>
              <a href="folder/Resume1.docx" className="links">Resume</a>
            </li>
          </ul>
        </nav>
      </header>

      <div>
        <div className="headImage">
          <img src="./folder/header_blue_background.jpg" />
          <h2 id="Welcome">Welcome to my Portfolio Page!</h2>
        </div>
        <article className="content">
          <section id="About-Me">

            <h1 id="AboutTitle">About Me</h1>

            <p id="AboutContent"> Hello World! I am a computer science student at Texas Tech with an expected graduation date of Fall 2022.
              I am also currently enrolled in a full-stack coding bootcamp with a graduation date of September 2021. I am married to my wife,Crystal and have a daughter on the way.
              We live together with our dog, Nakita, and our cat, Helena. Make sure to check out my resume and Github for all my projects!
            </p>
          </section>
          <section id="Work">
            <h1 id="workTitle">Work</h1>
            <div className="view-port">
              <div className="images-container">
                <figure className="card">
                  <a href={data[currentIndex].link} target="_blank" rel="noopener no referrer"><img className="img" src={data[currentIndex].picture} alt="Long Rides Project" height="500px" width="900px" /></a>
                  <figcaption>{data[currentIndex].description}</figcaption>
                </figure>
                <figure className="card">
                  <a href={data[currentIndex].link} target="_blank" rel="noopener no referrer"><img className="img" src={data[currentIndex].picture} alt="Weather Project" height="500px" width="900px"/></a>
                  <figcaption>{data[currentIndex].description}</figcaption>
                </figure>
                <figure className="card">
                  <a href={data[currentIndex].link} target="_blank" rel="noopener no referrer"><img className="img" src={data[currentIndex].picture} alt="This Day In Space" height="500px" width="900px"/></a>
                  <figcaption>{data[currentIndex].description}</figcaption>
                </figure>
                <figure className="card">
                  <a href={data[currentIndex].link} target="_blank" rel="noopener no referrer"><img className="img" src={data[currentIndex].picture} alt="Hangman Project" height="500px" width="900px"/></a>
                  <figcaption>{data[currentIndex].description}</figcaption>
                </figure> 
              </div>
            </div>
            <div className="container">
              <button id="prev" onClick={e => handlePrev(e)}>Prev</button>
              <button id="next" onClick={e => handleNext(e)}>Next</button>
            </div>
          </section>
          <section>
            <h1 id="contactTitle">Contact Me</h1>
            <div className="container" id="Contact-Me">
              <ul className="listbottom">
                <li id="number" className="list">+1 (915)-474-7482</li>
                <li><button data-modal-target="#modal" id="emailBut" className="list">mleesersmith@gmail.com</button></li>
                <li id="github"><a className="list" href="https://github.com/mleesers" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li id="linkedIn"><a className="list" href="https://www.linkedin.com/in/michael-leeser-smith-9a459b151/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </section>
        </article>
      </div>
      <footer>
        <h3>Made by Michael Leeser-Smith © 2021</h3>
      </footer>

    </div>
  );
}

export default App;
