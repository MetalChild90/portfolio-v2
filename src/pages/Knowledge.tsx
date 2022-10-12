import Technology from "../componenets/Technology";

function Knowledge() {
  const technologies = [
    { name: "html", color: "#f06529", bgColor: "rgba(240, 101, 41, 0.2)" },
    { name: "css", color: "#2965f1", bgColor: "rgba(41, 101, 241, 0.2)" },
    { name: "sass", color: "#cc6699", bgColor: "rgba(204, 102, 153, 0.2)" },
    {
      name: "javascript",
      color: "#f7df1e",
      bgColor: "rgba(247, 223, 30, 0.2)",
    },
    { name: "react", color: "#61DBFB", bgColor: "rgba(97, 219, 251, 0.2)" },
    { name: "redux", color: "#764abc", bgColor: "rgba(118, 74, 188, 0.2)" },
    { name: "typescript", color: "#007acc", bgColor: "rgba(0, 122, 204, 0.2)" },
    { name: "git", color: "#f34f29", bgColor: "rgba(243, 79, 41, 0.2)" },
  ];

  return (
    <div className="Knowledge inner-wrapper">
      <ul>
        {technologies.map((technology, i) => (
          <Technology key={i} technology={technology} i={i} />
        ))}
      </ul>
    </div>
  );
}

export default Knowledge;
