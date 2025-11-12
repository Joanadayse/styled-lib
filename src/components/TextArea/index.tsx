import type { ChangeEvent } from "react";

interface TextAreaProps {
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  className?: string;
}

export const TextArea = ({
  placeholder,
  value,
  onChange,
  rows = 3,
  className = "",
}: TextAreaProps) => (
  <textarea
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    rows={rows}
    className={`w-[499.5px] min-h-[56px] rounded-[8px] px-[16px] py-[14px] bg-[#FAFBFF] border border-[#CAD5E2] text-[#45556C] font-inter text-[16px] leading-[140%] outline-none resize-none ${className}`}
  />
);
