import "./Home.css";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Sakshi</h1>
          <h3>Frontend Developer | Web Developer</h3>
        </div>
      </div>

      <About />
      <Contact />
    </div>
  );
}

export default Home;
