"use client";
import React, { FunctionComponent, useState } from "react";
import BlockIcon from "../Icons/Block";
import ArrowBottomIcon from "../Icons/ArrowBottomIcon";
import { BCOption } from "@/constant/interface";

interface SelectProps {
  defaultOpt: string;
  options: BCOption[];
  selected: BCOption | null;
  onChange: (selection: BCOption) => void;
}

const SingSelect: FunctionComponent<SelectProps> = ({
  defaultOpt = 'Select Option',
  options,
  onChange,
  selected,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div>
      <div
        onClick={() => setShowOptions(!showOptions)}
        className="mt-7 flex items-center py-1.5 px-2 w-156 h-9 rounded-10 bg-search-bg border-none cursor-pointer"
      >
        <BlockIcon />
        <div className="text-15 mx-1"><span>{selected ? selected.Name : defaultOpt}</span></div>
        <ArrowBottomIcon />
      </div>
      {showOptions && (
        <div className="absolute mt-1 py-1.5 px-2 w-156 h-6  border-none z-20 cursor-pointer">
          {options.map((option) => (
            <div
              onClick={() => {
                onChange(option);
                setShowOptions(false);
              }}
              className="text-15 bg-gray-100"
              style={{ border: "1px solid black" }}
              key={option.Code}
            >
              <span>{option.Name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingSelect;
