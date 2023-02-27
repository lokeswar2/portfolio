import React from "react"
import "./Home.css";
import SwipeableTemDrawer from "./Drawer/Drawer"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedIn from "@material-ui/icons/LinkedIn";

function Home(){
    const name = "<L />"
    return (
        <div id = "flag">
          <div className = "header">
            <div className = "logo">
              {name}
            </div>
            <div className="drawer">
              <SwipeableTemDrawer key = {1}/>
            </div>
          </div>
          <div className = "my-detail">
            <h2>Hi there!,</h2>
            <h2>I am Lokeswaran,</h2>
            <h2>Web Developer</h2>
          </div>
          <section className = "logo-section">
            <div className= "icon-item">
              <a style = {{color: "black"}} href="https://github.com/lokeswar2" rel="noopener noreferrer" target ="_blank">  
                <GitHubIcon style ={{fontSize: "2.1rem"}}/>
              </a>
            </div>
            <div className= "icon-item">  
              <a style = {{color: "black"}} href="https://www.linkedin.com/in/lokeswaran-p-136966200/" rel="noopener noreferrer" target ="_blank">
                <LinkedIn style ={{fontSize: "2.1rem", marginLeft: "0.5em"}}/>
              </a >
            </div>
          </section>
        </div> 
    )
}

export default Home;