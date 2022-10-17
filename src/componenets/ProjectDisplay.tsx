import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import ProjectContent from "./ProjectContent";

function ProjectDisplay() {
  const { activeBookmark, setActiveBookmark, contentWidth, bookmarkWidth } =
    useContext(AppContext);

  useEffect(() => {
    return () => {
      setActiveBookmark(null);
    };
  }, [setActiveBookmark]);

  if (activeBookmark === null) {
    return null;
  }

  return (
    <div
      className="Project-detail inner-wrapper"
      style={{
        width: `${contentWidth}px`,
        marginLeft: `${
          activeBookmark === 0
            ? 0
            : activeBookmark === 1
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
