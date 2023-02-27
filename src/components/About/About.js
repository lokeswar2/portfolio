import React from "react"
import lokes from "./lokes.jpg"
import "./About.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import WikipediaSearch from "./images/wikipediasearch.jpg"
import ExpenseTracker from "./images/expense-tracker.png"
import LinkedIn from "@material-ui/icons/LinkedIn";
import { WhatsApp } from "@material-ui/icons";

function About(){
    return (
    <div>
        <div className="About" id ="About Me">
        <div className="section-title">
        <h2>About Me</h2>
        </div>
       
       <div className="detail-section">   
            <img src ={lokes} alt = "lokes-img" />
           
            <div className="detail">
                <div className = "detail-link">
                <p>
                My name is Lokeswaran P.
                I'm currently in my third year of IT degree at Bannari Amman Institute of Technology, Tamil Nadu, India.
                Programming and problem-solving are two of my interests.                
                Aside from programming, I am an athlete and I used to lead handball team.
                Rarely edit videos and photos. 
                </p>
            </div></div>
    </div>
        <div className = "skills" id = "My Skills">
            <h2>My Skills</h2>
            <p>Through my studies, I've gained a solid understanding of computer
                science and web development concepts, and I have dedicated to lot of 
                my free time to apply these concepts to real world applications.
            </p>
            <br/>
            <div className = "skill-items">
                <h5>C</h5>
                <h5>C++</h5>
                <h5>Java</h5>
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>ReactJS</h5>
                <h5>Mongo DB</h5>
                <h5>SQL</h5>
                <h5>Node</h5>
            </div>
        </div>
    </div>
       
        {/* project section */}
        <div className="projects" id = "My Projects">
            <div className="contact-title">
                <h2>Project</h2>
                <p>
                    Take a look at my Projects.
                </p>
            </div>
            <div className= "project">
                
                 <h4>ExpenseTracker</h4>
                 <div className="pro">
                 <img className ="project-image" alt = "project1" src = {ExpenseTracker} />
                
                 <p>ExpenseTracker is an application built with React and MongoDB.  
                    In this app, we can track the expenses monthly or yearly.
                    A normal visitors can read the user's posts.
                    This project enhanced my knowledge of integrating the apps with React and MongoDB.
                 </p>
                 </div>
                 {/* <a href ="https://github.com/KannanPalani57/BlogApp-With-Django-React" rel="noopener noreferrer" target = "_blank">View Source</a> */}

            </div>    

            <div className= "project" >
                
                 {/* <h4>Wikipedia Search</h4>
                 <div className="pro">
                 <img className ="project-image" alt = "project2" src = {WikipediaSearch} />
                 <p>Wikipedia Search is the project I put up with ReactJS.
                     Before I used Class based components, in this application I picked up
                     functional components to make use of hooks. This app retrieve the search 
                     results from Wikipedia about what we search and We can navigate to the Wikipedia 
                     content page. 
                 </p>
               
               </div> */}
               {/* <a href ="https://github.com/KannanPalani57/Wikipedia-Viewer-In-ReactJS" rel="noopener noreferrer" target = "_blank">View Source</a> */}

               {/* <p className = "see-repo"style = {{fontSize: "1.15rem"}}>Let's see what I'd before and now</p> */}
                    {/* <a href="https://github.com/KannanPalani57?tab=repositories" rel="noopener noreferrer" target ="_blank">See all my works</a> */}
            </div>
            

        </div>


       <div className = "contact" id = "Contact Me">
           <div className="contact-title">
               <h2>Let's Build Something Together</h2>
               <p>Feel free to reach out if you're looking for a developer, or just want to connect.</p>
           </div>
           <h5 className="email"><a style = {{color: "grey"}} href="mailto:lokeswaranparamasivan@gmail.com">lokeswaranparamasivan@gmail.com</a></h5>
          <div className = "social-connect">
          
              <h5>Connect With Me By Click the Icon</h5>
              <div className = "icon">
            <a style = {{color: "black"}} href="https://wa.me/9025677767" rel="noopener noreferrer" target ="_blank"><WhatsApp style = {{fontSize:"1.7em", marginRight: "1em"}}/></a>
              <a  style = {{color: "black"}} href="https://github.com/lokeswar2" rel="noopener noreferrer" target ="_blank"><GitHubIcon style = {{fontSize:"1.7em", marginRight: "1em"}} /></a> 
            <a style = {{color: "black"}} href="https://www.linkedin.com/in/lokeswaran-p-136966200/" rel="noopener noreferrer" target ="_blank"><LinkedIn style = {{fontSize:"1.7em", marginRight: "1em"}}/></a>
           </div>     
          </div>
       </div>
       <footer>
           <h3>Designed & Developed by © Lokeswaran 2023</h3>
       </footer>
    </div>
)
}

export default About;