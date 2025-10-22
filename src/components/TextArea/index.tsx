import type { ChangeEvent } from "react";

interface TextAreaProps {
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  className?: string;
}

export const TextArea = ({ placeholder, value, onChange, rows = 4, className = '' }: TextAreaProps) => (
  <textarea
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    rows={rows}
    className={`w-full rounded-[8px] px-[16px] py-[8px] bg-[#FAFBFF] border border-[#CAD5E2] text-[#45556C] font-inter text-[16px] leading-[140%] outline-none ${className}`}
  />
);
