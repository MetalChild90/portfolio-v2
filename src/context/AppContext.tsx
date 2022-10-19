import { createContext, useEffect, useState } from "react";
import { getUpdatedProjects } from "../helpers/getUpdatedProjects";
import beachImage from "../images/beach.png";
import trackerImage from "../images/tracker.png";
import ratingImage from "../images/rating.png";

interface Project {
  id: number;
  title: string;
  image: string;
  website: string;
  github: string;
  bookmarkMoved: boolean;
}

interface ProviderProps {
  children: React.ReactNode;
}

type AppContextObject = {
  projects: Project[];
  contentWidth: number;
  bookmarkWidth: number;
  setBookmarkWidth: (width: number) => void;
  setProjectsWidth: (width: number) => void;
  activeBookmark: number;
  setActiveBookmark: (id: number) => void;
};

const AppContext = createContext<AppContextObject>({
  projects: [],
  contentWidth: 0,
  bookmarkWidth: 0,
  setBookmarkWidth: (width: number) => {},
  setProjectsWidth: (width: number) => {},
  activeBookmark: 0,
  setActiveBookmark: (id: number) => {},
});

export const Provider = ({ children }: ProviderProps) => {
  const [projectsWidth, setProjectsWidth] = useState(0);
  const [bookmarkWidth, setBookmarkWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [activeBookmark, setActiveBookmark] = useState<number>(0);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Paradise Beach",
      image: beachImage,
      website: "https://starlit-lolly-81b612.netlify.app",
      github: "https://github.com/MetalChild90/paradise-beach-v3",
      bookmarkMoved: false,
    },
    {
      id: 2,
      title: "Crypto Tracker",
      image: trackerImage,
      website: "https://chic-lollipop-1246d0.netlify.app/",
      github: "https://github.com/MetalChild90/tracker-v4",
      bookmarkMoved: false,
    },
    {
      id: 3,
      title: "Anime Character Rating",
      image: ratingImage,
      website: "https://startling-sorbet-ab76a8.netlify.app/",
      github: "https://github.com/MetalChild90/anime-character-rating-v2",
      bookmarkMoved: false,
    },
  ]);

  useEffect(() => {
    setContentWidth(projectsWidth - bookmarkWidth * 3);
  }, [projectsWidth, bookmarkWidth]);

  useEffect(() => {
    setProjects(getUpdatedProjects(projects, activeBookmark));
    // eslint-disable-next-line
  }, [activeBookmark]);

  return (
    <AppContext.Provider
      value={{
        projects,
        contentWidth,
        bookmarkWidth,
        setBookmarkWidth,
        setProjectsWidth,
        activeBookmark,
        setActiveBookmark,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
