import headshot from "../../images/erin-h-square.jpeg"

const About = () => {
  return (
    <section id="about-me" className="about-me">  
      <h3>About Me</h3>
      <div>
          <p>Hi, I'm Erin.</p>
          <p> 
              I am a detail oriented front-end developer with experience in responsive web design and development, web accessibility, digital activation, project management and design experimentation.
          </p>
      </div>
      <img src={headshot} alt="headshot of Erin Holmes" />
    </section>
  )
}

export default About;
