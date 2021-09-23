import projects from "../../projects.json";
import githubImg from "../../icons/icon-github-min.png";

const Portfolio = () => {
  return (
    <section id="my-work" className="my-work">
      <h3>Portfolio</h3>
      <ul className="project-list">
        {projects.map((project) => (
          <li className={project.id} key={project.id}>
              <div className="project-description"> 
                <a href={project.pageUrl} className="project-title" target="_blank" rel="noreferrer">{project.name}</a>
                &nbsp;|&nbsp;
                <a href={project.githubUrl} target="_blank" rel="noreferrer"><img src={githubImg} alt="GitHub icon" /></a>
                <p>{project.description}</p>
              </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Portfolio;
