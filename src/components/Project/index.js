import { useState } from "react";

const Portfolio = () => {
  const [projects] = useState([
    {
      id: "project-one", name: "Parktime 2.0", description: "MVC &#183; Sequelize &#183; Node.js &#183; RESTful API", pageUrl: "https://parktime-2.herokuapp.com/", githubUrl: ""
    },
    {
      id: "project-two", name: "Tech Blog", description: "MVC &#183; Express &#183; Sequelize", pageUrl: "https://tech-blog-mvc-eh.herokuapp.com/", githubUrl: ""
    },
    {
      id: "project-three", name: "Note Taker", description: "Express.js", pageUrl: "https://notetaker-eh.herokuapp.com/", githubUrl: ""
    },
    {
      id: "project-four", name: "Workday Scheduler", description: "Bootstrap &#183; jQuery &#183; Third-party API", pageUrl: "https://emholmes.github.io/eholmes-work-day-scheduler-api-challenge/", githubUrl: ""
    },
    {
      id: "project-five", name: "Weather Dashboard", description: "Javascript &#183; Server-side API", pageUrl: "https://emholmes.github.io/api-weather-dashboard/", githubUrl: ""
    },
    {
      id: "project-six", name: "JS Fundamentals Quiz", description: "Javascript", pageUrl: "https://emholmes.github.io/eholmes-js-quiz-api-challenge/", githubUrl: ""
    },
    {
      id: "project-seven", name: "Password Generator", description: "Javascript", pageUrl: "https://emholmes.github.io/eholmes-password-generator-javascript-challenge", githubUrl: ""
    }
  ]);
  
  return (
    <section id="my-work" className="my-work">
      <h3>Portfolio</h3>
      <ul className="project-list">
        {projects.map((project) => (
          <a className={project.id} href={project.pageUrl} key={project.id} target="_blank" rel="noreferrer">
          <li>
              <div className="project-description"> 
                  <p className="project-title">{project.name}</p>
                  <p>{project.description}</p>
              </div>
          </li>
          </a>
        ))}
      </ul>
    </section>
  )
}

export default Portfolio;
