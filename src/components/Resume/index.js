import resume from "../../assets/resume/ErinHolmes_Resume_Portfolio.pdf";

const Resume = () => {
  return (
    <section className="resume">
      <h3>Resume</h3>
        <p>Download my <a href={resume}>resume 
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8"><path d="M3 0v3h-2l3 3 3-3h-2v-3h-2zm-3 7v1h8v-1h-8z" /></svg></a>
        </p>
        <section className="proficiencies">
          <div className="frontEnd">
            <h4>Front-end Proficiencies</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Client-side APIs</li>
              <li>Resposive Design</li>
              <li>Accessibilty</li>
            </ul>
          </div>
          <div className="backEnd">
            <h4>Back-end Proficiencies</h4>
            <ul>
              <li>Server-side APIs</li>
              <li>REST API</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </section>
    </section>
  )
}

export default Resume;
