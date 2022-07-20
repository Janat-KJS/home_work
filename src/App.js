import React from "react";
import './App.css';
import Header from "./components/Header";
import BlogEntries from "./components/BlogEntries";
import State from "./components/State";
import Example from "./components/newState";
import Task from "./components/Task";
import Toggle from "./components/toggle";
import IntroductionMenu from "./components/IntroductionMenu";

function App() {
  return (
      <div className="w3-content" style={{maxWidth:"1400px"}}>
        <Header/>
        <div className="w3-row">
            <BlogEntries/>
            <State/>
            <Example/>
            <Task/>
            <Toggle/>
            <IntroductionMenu/>
        </div>
      </div>
  );
}

export default App;
