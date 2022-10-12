import { useState, useEffect } from "react";

function Type() {
  const [welcome, setWelcome] = useState("");

  useEffect(() => {
    const handlePrintWord = (words: string, time: number) => {
      let index = 0;

      for (let letter of words) {
        index++;

        setTimeout(() => {
          setWelcome((prevState) => (prevState += letter));
        }, index * time);
      }
    };

    handlePrintWord("Hello, I'm Agnieszka!", 100);
  }, []);

  return <span className="Type">{welcome}</span>;
}

export default Type;
