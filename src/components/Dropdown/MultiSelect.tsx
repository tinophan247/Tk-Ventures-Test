import { BCOption } from "@/constant/interface";
import React, { FunctionComponent, useState } from "react";
import ArrowBottomIcon from "../Icons/ArrowBottomIcon";

interface SelectProps {
    defaultOpt: string;
    options: BCOption[];
    selected: BCOption[] | null;
    onChange: (selection: BCOption[]) => void;
  }

const MultiSelect: FunctionComponent<SelectProps> = ({
  defaultOpt = 'Select Option',
  options,
  onChange,
  selected,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        className="mt-10 relative w-[20em] min-h-[1.5em] border border-solid border-tk-gray flex items-center gap-2 p-2 rounded-10 outline-none focus:border-blue-500 "
      >
        <div className="w-[22rem]"><div className="truncate w-[20rem]">{selected ? [selected?.map(item => item.Name)].join(', ') : defaultOpt}</div></div>
        <button onClick={e => {
            e.stopPropagation();
        }} className="text-tk-gray border-none outline-none cursor-pointer p-0 text-2xl hover:text-blue-800">
          &times;
        </button>
        <div className="bg-tk-gray self-stretch	w-[.05em]  " />
        <ArrowBottomIcon />
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-[21em] bg-white max-h-[15em] overflow-y-auto border border-solid border-tk-gray z-50 rounded-10 ">
          {options.map((option) => (
            <div onClick={() => {
                onChange([option])
                setIsOpen(false)
            }} key={option.Code} className="p-2 cursor-pointer">
              {option.Name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
