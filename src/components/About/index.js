import headshot from "../../assets/images/erin-h-square.jpeg"

const About = () => {
  return (
    <section className="content" id="about">  
      <h3>About Me</h3>
      <div className="about-me">
        <div>
          <p>Hi, I'm Erin.</p>
          <p> 
              I am a detail oriented full-stack developer with experience in responsive web design and development, web accessibility, digital activation, project management and design experimentation. 
          </p>
        </div>
        <div>
          <img src={headshot} alt="headshot of Erin Holmes" />
        </div>
      </div>
    </section>
  )
}

export default About;
