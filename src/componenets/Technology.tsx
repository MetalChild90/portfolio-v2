import useToggle from "../hooks/useToggle";
import useWindowDimensions from "../hooks/useWindowDimensions";

interface TechnologyInterface {
  name: string;
  color: string;
  bgColor: string;
}

interface TechnologyProps {
  technology: TechnologyInterface;
  i: number;
}

function Technology({ technology, i }: TechnologyProps) {
  const [hovered, toggleHovered] = useToggle(false);

  const { width } = useWindowDimensions();

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
        textShadow: hovered && width > 1200 ? textColor(technology.color) : "",
        backgroundColor:
          (hovered && width > 1200) || width < 1200 ? technology.bgColor : "",
      }}
    >
      {i + 1}. {technology.name}
    </li>
  );
}

export default Technology;
