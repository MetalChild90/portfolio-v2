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
  activeBookmark: number | null;
  setActiveBookmark: (id: number | null) => void;
};

const AppContext = createContext<AppContextObject>({
  projects: [],
  contentWidth: 0,
  bookmarkWidth: 0,
  setBookmarkWidth: (width: number) => {},
  setProjectsWidth: (width: number) => {},
  activeBookmark: 0,
  setActiveBookmark: (id: number | null) => {},
});

export const Provider = ({ children }: ProviderProps) => {
  const [projectsWidth, setProjectsWidth] = useState(0);
  const [bookmarkWidth, setBookmarkWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [activeBookmark, setActiveBookmark] = useState<number | null>(null);
  const [projects, setProjects] = useState([
    {
      id: 0,
      title: "Paradise Beach",
      image: beachImage,
      website: "https://starlit-lolly-81b612.netlify.app",
      github: "https://github.com/MetalChild90/paradise-beach-v2",
      bookmarkMoved: false,
    },
    {
      id: 1,
      title: "Crypto Tracker",
      image: trackerImage,
      website: "https://reliable-seahorse-7150b7.netlify.app",
      github: "https://github.com/MetalChild90/crypto-tracker-v3",
      bookmarkMoved: false,
    },
    {
      id: 2,
      title: "Anime Character Rating",
      image: ratingImage,
      website: "https://gentle-klepon-526607.netlify.app",
      github: "https://github.com/MetalChild90/anime-character-review",
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
