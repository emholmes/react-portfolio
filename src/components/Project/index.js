import { useState } from "react";
import parktimeImg from "../../images/parktime-2-home.png";
import techBlogImg from "../../images/tech-blog-home.png";
import noteTakerImg from "../../images/notetaker-notes.png";
import workdaySchedulerImg from "../../images/workday-scheduler-tasks.png";
import weatherDashImg from "../../images/weather-dash-search-history.png";
import jsApiQuiz from "../../images/js-api-quiz.png";
import passwordGenImg from "../../images/password-generator.png";

const Project = () => {
  const [projects] = useState([
    {
      name: "Parktime 2.0", description: "MVC | Sequelize &#183; Node.js &#183; RESTful API", pageUrl: "https://parktime-2.herokuapp.com/", githubUrl: "", image: parktimeImg
    },
    {
      name: "Tech Blog", description: "MVC &#183; Express &#183; Sequelize", pageUrl: "https://tech-blog-mvc-eh.herokuapp.com/", githubUrl: "", image: techBlogImg
    },
    {
      name: "Note Taker", description: "Express.js", pageUrl: "https://notetaker-eh.herokuapp.com/", githubUrl: "", image: noteTakerImg
    },
    {
      name: "Workday Scheduler", description: "Bootstrap &#183; jQuery &#183; Third-party API", pageUrl: "https://emholmes.github.io/eholmes-work-day-scheduler-api-challenge/", githubUrl: "", image: workdaySchedulerImg
    },
    {
      name: "Weather Dashboard", description: "Javascript &#183; Server-side API", pageUrl: "https://emholmes.github.io/api-weather-dashboard/", githubUrl: "", image: weatherDashImg
    },
    {
      name: "JS Fundamentals Quiz", description: "Javascript", pageUrl: "https://emholmes.github.io/eholmes-js-quiz-api-challenge/", githubUrl: "", image: jsApiQuiz
    },
    {
      name: "Password Generator", description: "Javascript", pageUrl: "https://emholmes.github.io/eholmes-password-generator-javascript-challenge", githubUrl: "", image: passwordGenImg
    }
  ]);
  
  return (
    <section id="my-work" className="my-work">
      <h3>My Work</h3>
      <ul className="project-list">
        {projects.map((project) => (
          <a href={project.pageUrl} key={project.name} target="_blank" rel="noreferrer">
          <li>
              <div className="project-description"> 
                  <p classname="project-title">{project.name}</p>
                  <p>{project.description}</p>
              </div>
          </li>
          </a>
        ))}
        
      </ul>
    </section>
  )
}

export default Project;
