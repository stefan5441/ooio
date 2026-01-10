import { NavBar } from "./NavBar";
import type { Tab } from "../types";

type Props = {
  children: React.ReactNode;
  customFooter?: React.ReactNode;
  setTab: React.Dispatch<React.SetStateAction<Tab>>;
  activeTab: Tab;
};

export const PageLayout = ({ children, setTab, activeTab, customFooter }: Props) => {
  return (
    <div className="h-full px-36 py-12 flex flex-col gap-12">
      <NavBar setTab={setTab} activeTab={activeTab} />
      <div className="flex-1">{children}</div>
      <div>{customFooter ?? "I love coding but I hate coding. I hate AI but I use it sometimes."}</div>
    </div>
  );
};
