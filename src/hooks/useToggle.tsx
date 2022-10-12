import { useState } from "react";

const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialValue);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};

export default useToggle;
