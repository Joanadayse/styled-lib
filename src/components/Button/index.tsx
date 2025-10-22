import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tag" | "action";
  disabled?: boolean;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  width,
  height,
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-[8px] font-inter font-bold text-[14px] leading-[140%] transition-all duration-200 focus:outline-none";

  const variantClasses = {
    primary: `
      text-[#FDFDFF]
      bg-[#C20FB5]
      hover:bg-[#F572EB]
      active:bg-[#7D1272]
      focus:ring-2 focus:ring-[#F572EB] focus:ring-offset-2
      disabled:opacity-30 disabled:cursor-not-allowed
    `,
    secondary: `
      text-[#314158]
      bg-transparent
      border border-[#CAD5E2]
      hover:bg-[#E2E8F0] hover:border-[#45556C]
      active:bg-[#CAD5E2] active:border-[#45556C]
      focus:ring-2 focus:ring-[#F572EB] focus:ring-offset-2
      disabled:opacity-30 disabled:bg-[#E2E8F0] disabled:border-[#E2E8F0]
    `,
    tag: `
      bg-[#F2F4F7]
      text-[#314158]
      rounded-full text-xs font-normal
      hover:bg-gray-200
      disabled:opacity-30 disabled:cursor-not-allowed
    `,
    action: `
      bg-gray-100
      text-gray-700
      rounded-full
      hover:bg-gray-200
      disabled:opacity-30 disabled:cursor-not-allowed
    `,
  };

  const sizeStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  const finalClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${className}
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClasses}
      style={sizeStyle}
    >
      {children}
    </button>
  );
};
