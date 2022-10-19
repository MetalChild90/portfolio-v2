import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import ProjectContent from "./ProjectContent";

function ProjectDisplay() {
  const { activeBookmark, setActiveBookmark, contentWidth, bookmarkWidth } =
    useContext(AppContext);

  useEffect(() => {
    return () => {
      setActiveBookmark(0);
    };
  }, [setActiveBookmark]);

  return (
    <div
      className="Project-detail"
      style={{
        width: `${contentWidth}px`,
        marginLeft: `${
          activeBookmark === 1
            ? 0
            : activeBookmark === 2
            ? bookmarkWidth
            : bookmarkWidth * 2
        }px`,
      }}
    >
      <ProjectContent />
    </div>
  );
}

export default ProjectDisplay;
