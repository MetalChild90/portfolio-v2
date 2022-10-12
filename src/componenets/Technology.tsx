import { isNamedTupleMember } from "typescript";
import useToggle from "../hooks/useToggle";

interface Technology {
  name: string;
  color: string;
  bgColor: string;
}

interface TechnologyProps {
  technology: Technology;
  i: number;
}

function Technology({ technology, i }: TechnologyProps) {
  const [hovered, toggleHovered] = useToggle(false);

  const textColor = (chosenColor: string) => `2px 2px 0 ${chosenColor},
    2px -2px 0 ${chosenColor}, -2px 2px 0 ${chosenColor},
    -2px -2px 0 ${chosenColor}, 2px 0px 0 ${chosenColor},
    0px 2px 0 ${chosenColor}, -2px 0px 0 ${chosenColor},
    0px -2px 0 ${chosenColor}`;

  return (
    <li
      key={i}
      className="technology"
      onMouseEnter={toggleHovered}
      onMouseLeave={toggleHovered}
      style={{
        textShadow: hovered ? textColor(technology.color) : "",
        backgroundColor: hovered ? technology.bgColor : "",
      }}
    >
      {i + 1}. {technology.name}
    </li>
  );
}

export default Technology;
