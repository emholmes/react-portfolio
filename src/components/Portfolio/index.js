import Project from "../Project";
import projects from "../../projects.json";

const Portfolio = () => {
  return (
    <section id="my-work" className="my-work content">
      <h3>Portfolio</h3>
      <ul className="project-list">
        {projects.map((project) => (
          <li className={project.id} key={project.id}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Portfolio;