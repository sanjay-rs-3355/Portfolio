import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";
import project4 from "/project4.png";
import project5 from "/project5.png";
import project6 from "/project6.png";
import project7 from "/project7.png";
const RollingGallery = () => (
  <div className="gallery-container" data-aos="fade-up">
    <div className="gallery-track">
      {[project1, project2, project3, project6,  project7, project4, project5,project1, project2].map((img, index) => (
        <div className="gallery-item" key={index}>
          <img src={img} alt={`Project ${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
);

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Projects</h2>
    <RollingGallery />
    <div className="project-grid">
      <div className="project-card">
        <h3>Simple Info-Bot</h3>
        <p>Developed a Voice Wiki Chatbot using JavaScript, HTML, and CSS, allowing users to search and listen to Wikipedia summaries via voice and text input. The app features an intuitive design focused on accessibility and seamless user interaction.</p>
      </div>
      <div className="project-card">
        <h3>Cinimatic Wiki</h3>
        <p>Developed a Voice Wiki Chatbot web application using JavaScript, HTML, and CSS, enabling users to search and listen to Wikipedia summaries through voice and text inputs. The project features a modern, accessible design with seamless voice interaction, showcasing practical UI/UX and API integration with Wikipedia..</p>
      </div>
      <div className="project-card">
        <h3>Modern Portfolio</h3>
        <p>This portfolio is crafted using React with modern UI practices and animations.</p>
      </div>
    </div>
  </section>
);

export default Projects;
