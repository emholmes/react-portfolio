import projects from "../../projects.json";

const Portfolio = () => {
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
