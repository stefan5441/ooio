import type { IconType } from "react-icons";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  icon?: IconType;
  isActive?: boolean;
};

export const Button = ({ label, icon: Icon, isActive = false, ...btnProps }: Props) => {
  return (
    <button className={`flex items-center gap-1 hover:text-sky-50 ${isActive ? "text-sky-50" : ""}`} {...btnProps}>
      {Icon && <Icon size={16} />}
      {label}
    </button>
  );
};
