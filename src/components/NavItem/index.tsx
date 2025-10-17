import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  label: string;
  icon?: React.ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({ to, label, icon }) => {
  const getNavLinkClasses = ({ isActive }: { isActive: boolean }) => {
    const base = "flex items-center p-2 rounded-lg font-inter text-[16px] font-semibold leading-[140%] transition-colors duration-200";

    const active = "bg-[#FFE8FB] text-[#7D1272]";
    const hover = "hover:bg-[#E2E8F0] hover:text-[#45556C]";
    const inactive = "text-gray-600";

    return `${base} ${isActive ? active : `${inactive} ${hover}`}`;
  };

  const getIconColor = (isActive: boolean) => (isActive ? "#7D1272" : "#45556C");

  return (
    <NavLink to={to} className={getNavLinkClasses}>
      {({ isActive }) => (
        <>
          {icon && (
            <span className="w-5 h-5 mr-3" style={{ color: getIconColor(isActive) }}>
              {icon}
            </span>
          )}
          {label}
        </>
      )}
    </NavLink>
  );
};