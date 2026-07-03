import ProjectCard from "../Components/ProjectCard";
import omnifood from "../assets/omnifood.png";
import pngjwellers from "../assets/pngjwellers.webp";
import blog from "../assets/blog.png";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>Academic Projects</h1>

      <ProjectCard
        className="project-card"
        image={omnifood}
        number={1}
        title="OmniFood Website"
        description="This is food website that displays different types of foods with their images and prices. 
        It is developed using HTML, CSS, and Bootstrap."
        technology="It is developed using HTML, CSS, and Bootstrap for frontend to create a responsive and
        user-friendly interface."
      />

      <ProjectCard
        className="project-card"
        image={pngjwellers}
        number={2}
        title="PNG Jwellers Website"
        description="It's an E-Commerce shopping site where customer can view Gold, Diamond, and Silver jwellery with 
        reasonable price. It is developed using HTML, CSS, and Bootstrap."
        technology="It is developed using HTML, CSS, and Bootstrap for frontend to create a responsive and
        user-friendly interface."
      />

      <ProjectCard
        className="project-card"
        image={blog}
        number={3}
        title="Blog"
        description="This blog website is developed using HTML, CSS, and Bootstrap for frontend to create a responsive and
        user-friendly interface. There is blog posts, user details, and comments."
        technology="It is developed using HTML and CSS, for frontend to create a user-friendly interface."
      />
    </div>
  );
}

export default Projects;
