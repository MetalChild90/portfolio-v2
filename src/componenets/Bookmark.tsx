import { useContext, useState, useEffect, useRef } from "react";
import AppContext from "../context/AppContext";

interface BookmarkProps {
  id: number;
  title: string;
  bookmarkMoved: boolean;
}

function Bookmark({ id, title, bookmarkMoved }: BookmarkProps) {
  const { contentWidth, setActiveBookmark, activeBookmark, setBookmarkWidth } =
    useContext(AppContext);
  const [translateVar, setTranslateVar] = useState("");

  const bookmarkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (bookmarkRef.current) {
        const width = bookmarkRef.current.offsetWidth;
        setBookmarkWidth(width);
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    if (bookmarkRef.current) {
      const width = bookmarkRef.current.offsetWidth;
      setBookmarkWidth(width);
    }
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [setBookmarkWidth]);

  const handleClick = () => {
    if (activeBookmark === 2 && id === 2) {
      setActiveBookmark(null);
    } else {
      setActiveBookmark(id);
    }
  };

  useEffect(() => {
    setTranslateVar(`translateX(${contentWidth}px)`);
  }, [contentWidth]);

  const styles = {
    transform: bookmarkMoved ? translateVar : "translateX(0px)",
    borderLeft: bookmarkMoved ? "3px solid black" : "none",
    borderRight: bookmarkMoved ? "none" : "3px solid black",
  } as const;

  return (
    <div
      ref={bookmarkRef}
      className="Bookmark"
      style={styles}
      onClick={handleClick}
    >
      <div className="text">{title}</div>
    </div>
  );
}

export default Bookmark;
