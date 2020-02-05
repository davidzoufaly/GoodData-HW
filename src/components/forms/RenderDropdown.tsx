import React from "react";
import { RenderDropdownProps } from "../../types/props";

const RenderDropdown: React.FC<RenderDropdownProps> = ({
  options,
  defaultValue = 1,
  onChange
}) => {
  return (
    <select defaultValue={defaultValue} onChange={onChange}>
      {options.map((option: string, index: number) => {
        const indexFromOne = index + 1;
        return (
          <option key={indexFromOne} value={indexFromOne}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default RenderDropdown;
