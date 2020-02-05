import { useState, ChangeEvent } from "react";

export const useHandleDropdown = (
  initialState = 1
): [number, (e: ChangeEvent<HTMLElement>) => void] => {
  const [option, setOption] = useState(initialState);

  const handleSetDate = e => {
    setOption(e.target.value);
  };

  return [option, handleSetDate];
};
