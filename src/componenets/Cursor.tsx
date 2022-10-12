import { useState, useEffect } from "react";

function Cursor() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevState) => !prevState);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [visible]);
  return <span className={`cursor ${visible && "hidden"}`}>&#95;</span>;
}

export default Cursor;
