import type { ChangeEvent } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  className?: string; 
}

export const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  className = '',
}: InputProps) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    name={name}
    className={`w-[499.5px] h-[56px] rounded-[8px] px-[16px] bg-[#FAFBFF] border border-[#CAD5E2] text-[#45556C] font-inter text-[16px] leading-[140%] outline-none ${className}`}
  />
);