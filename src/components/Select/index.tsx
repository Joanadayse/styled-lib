import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "../Icon";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder = "Selecione...",
  disabled = false,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={selectRef}>
      {/* Select principal */}
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`
          w-[197px] h-[56px] px-[16px] py-[16px] flex justify-between items-center
          rounded-[8px] cursor-pointer select-none
          ${disabled ? "bg-[#FAFBFF] text-[#738196] cursor-not-allowed" : ""}
          ${!disabled && !value ? "bg-[#FFE8FB] text-[#C20FB5]" : ""}
          ${!disabled && value ? "bg-[#FFE8FB] text-[#C20FB5]" : ""}
          ${!disabled && isOpen ? "ring-2 ring-[#C20FB5]" : ""}
        `}
      >
        <span>{value ? options.find((o) => o.value === value)?.label : placeholder}</span>
                <ChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          width={20}
          height={20}

        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute mt-[4px] w-[189px] bg-[#FAFBFF] rounded-[4px] shadow-md z-50">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`
                px-[16px] py-[16px] text-[#738196] font-inter text-[16px] leading-[140%] cursor-pointer
                hover:bg-[#E2E8F0] hover:text-[#45556C]
                ${option.value === value ? "bg-[#FFE8FB] text-[#C20FB5]" : ""}
              `}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
