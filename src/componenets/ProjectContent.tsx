import { useContext } from "react";
import AppContext from "../context/AppContext";

function ProjectContent() {
  const { projects, activeBookmark, contentWidth } = useContext(AppContext);

  return (
    <>
      {projects.map((project, i) => (
        <div
          key={i}
          className={`display-box ${
            activeBookmark! - 1 !== i ? "displayActive" : "displayInactive"
          }`}
        >
          <div className="project-box">
            <div className="title">
              <h3>{project.title}</h3>
            </div>
            <div className="image-box">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="links">
              <div className="link">
                <p>Website: </p>
                <a href={project.website} target="_blank" rel="noreferrer">
                  {contentWidth <= 700 ? "link" : project.website}
                </a>
              </div>
              <div className="link">
                <p>Code: </p>
                <a href={project.github} target="_blank" rel="noreferrer">
                  {contentWidth <= 700 ? "link" : project.github}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default ProjectContent;
