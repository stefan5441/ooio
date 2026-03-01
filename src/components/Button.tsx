import type { IconType } from "react-icons";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  icon?: IconType;
  isActive?: boolean;
  iconSize?: number;
};

export const Button = ({ label, icon: Icon, isActive = false, iconSize, ...btnProps }: Props) => {
  return (
    <button
      className={`flex text-primary items-center gap-1 hover:text-primary-hover disabled:text-primary-hover ${isActive ? "text-primary-hover" : ""}`}
      {...btnProps}
    >
      {Icon && <Icon size={iconSize ?? 16} />}
      {label}
    </button>
  );
};
