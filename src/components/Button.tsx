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
      className={`flex items-center gap-1 hover:text-sky-50 disabled:text-zinc-600 ${isActive ? "text-sky-50" : ""}`}
      {...btnProps}
    >
      {Icon && <Icon size={iconSize ?? 16} />}
      {label}
    </button>
  );
};
