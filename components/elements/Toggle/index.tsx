import React, { useState } from 'react';

interface Props {
  onChange: (checked) => void;
  check?: boolean;
  leftLabel?: string;
  rightLabel?: string;
  id?: string;
  name?: string;
}

const Toggle = ({ onChange, check, leftLabel, rightLabel, id, name }: Props) => {
  return (
    <div>
      {leftLabel && <span className="text-gray-400 mr-2 font-medium">{leftLabel}</span>}
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={check}
          onChange={(e) => onChange(e.target.checked)}
          className="right-4 checked:right-0 duration-200 ease-in checked:bg-blue-600 absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label htmlFor={id} className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" />
      </div>
      {rightLabel && <span className="text-gray-400 font-medium">{rightLabel}</span>}
    </div>
  );
};
export default Toggle;
