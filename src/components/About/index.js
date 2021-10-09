import headshot from "../../assets/images/erin-h-square.jpeg"

const About = () => {
  return (
    <section className="content" id="about">  
      <h1>About Me</h1>
      <div className="about-me">
        <div>
          <p>Hi, I'm Erin.</p>
          <p> 
            I am a detail oriented full-stack developer with experience in responsive web design and development, web accessibility, digital activation, project management and design experimentation. 
          </p>
          {/* <hr /> */}
          <p>
            I'm currently enrolled in a Full-Stack Web Development Bootcamp through The University of Texas at Austin, graduating mid-October 2021.  
          </p>
        </div>
        <img src={headshot} alt="headshot of Erin Holmes" />
      </div>
    </section>
  )
}

export default About;
