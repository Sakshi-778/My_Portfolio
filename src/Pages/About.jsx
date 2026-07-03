import Selfimg from "../assets/Selfimg.jpg";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <img src={Selfimg} alt="Sakshi Bhintade" />
      <p>
        I am an <span>enthusiastic and motivated fresher</span> with a strong
        interest in <span>Web Development</span>. I have built a solid
        foundation in HTML, CSS, and Bootstrap through academic projects. I am
        familiar with tools like Visual Studio Code and eager to contribute to a
        dynamic organization where I can learn, grow, and apply my skills to
        real-world challenges.
      </p>
    </div>
  );
}

export default About;
