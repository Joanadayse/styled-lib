interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'secondary' |'minimal';
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'default',
  disabled = false,
  className = '' 
}: ButtonProps) => {
  const baseClasses = 'w-[156px] h-[48px] px-[12px] rounded-[8px] font-semibold text-[16px] leading-[140%] transition-all duration-200';

  const variantClasses = {
    default: 'bg-[#C20FB5] text-white hover:bg-[#F572EB] active:bg-[#7D1272] focus:ring-2 focus:ring-[#F572EB] focus:ring-offset-2',
    secondary: 'bg-white text-gray-600 border border-[#CAD5E2] hover:bg-[#F572EB] hover:border-[#F572EB] hover:text-white',
    minimal: 'bg-transparent text-gray-700 border border-gray-300 hover:border-gray-500 hover:text-black hover:bg-[#E2E8F0]',

  };

  const disabledClasses = disabled ? 'opacity-30 cursor-not-allowed' : '';
  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`; 

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClasses}
    >
      {children}
    </button>
  );
};