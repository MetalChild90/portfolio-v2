import { useContext } from "react";
import AppContext from "../context/AppContext";

function ProjectContent() {
  const { projects, activeBookmark, contentWidth } = useContext(AppContext);

  return (
    <>
      <div className="title">
        <h3>{projects[activeBookmark!].title}</h3>
      </div>
      <div className="image-box">
        <img
          src={projects[activeBookmark!].image}
          alt={projects[activeBookmark!].title}
        />
      </div>
      <div className="links">
        <div className="link">
          <p>Website: </p>
          <a
            href={projects[activeBookmark!].website}
            target="_blank"
            rel="noreferrer"
          >
            {contentWidth <= 700 ? "link" : projects[activeBookmark!].website}
          </a>
        </div>
        <div className="link">
          <p>Code: </p>
          <a
            href={projects[activeBookmark!].github}
            target="_blank"
            rel="noreferrer"
          >
            {contentWidth <= 700 ? "link" : projects[activeBookmark!].github}
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectContent;
