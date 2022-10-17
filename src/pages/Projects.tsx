import { useContext, useEffect, useRef } from "react";
import AppContext from "../context/AppContext";
import BookmarksList from "../componenets/BookmarksList";
import ProjectDisplay from "../componenets/ProjectDisplay";

function Projects() {
  const { setProjectsWidth } = useContext(AppContext);

  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (projectsRef.current) {
        const width = projectsRef.current.offsetWidth;
        setProjectsWidth(width);
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [setProjectsWidth]);

  return (
    <div ref={projectsRef} className="Projects">
      <BookmarksList />
      <ProjectDisplay />
    </div>
  );
}

export default Projects;
