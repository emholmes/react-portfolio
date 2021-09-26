import projects from "../../projects.json";

const Project = () => {
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li className={project.id} key={project.id}>
            <div className="project-description"> 
              <a href={project.pageUrl} className="project-title" target="_blank" rel="noreferrer">{project.name}</a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer"><span className="icon icon-github"></span></a>
              <p>{project.description}</p>
            </div>
        </li>
      ))}
    </ul>
  )
}

export default Project;
