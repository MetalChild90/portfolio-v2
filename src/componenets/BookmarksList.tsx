import { useContext } from "react";
import AppContext from "../context/AppContext";
import Bookmark from "./Bookmark";

function BookmarksList() {
  const { projects } = useContext(AppContext);

  interface BookmarkProps {
    id: number;
    title: string;
    bookmarkMoved: boolean;
  }

  return (
    <div className="Bookmarks-wrapper">
      {projects.map(
        ({ id, title, bookmarkMoved }: BookmarkProps, i: number) => (
          <Bookmark
            key={i}
            id={id}
            title={title}
            bookmarkMoved={bookmarkMoved}
          />
        )
      )}
    </div>
  );
}

export default BookmarksList;
