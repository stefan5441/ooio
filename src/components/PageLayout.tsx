import { Tab } from "../types";
import { NavBar } from "./NavBar";

type Props = {
  children: React.ReactNode;
  customFooter?: React.ReactNode;
  setTab: React.Dispatch<React.SetStateAction<Tab>>;
  activeTab: Tab;
};

export const PageLayout = ({ children, setTab, activeTab, customFooter }: Props) => {
  return (
    <div className="h-full px-36 flex flex-col">
      <div className="h-24 flex justify-center items-center gap-12 shrink-0">
        <NavBar setTab={setTab} activeTab={activeTab} />
      </div>
      <div className="overflow-y-auto flex-1">{children}</div>
      <div className="h-16 shrink-0 flex items-center">
        {customFooter ?? "I love coding but I hate coding. I hate AI but I use it sometimes."}
      </div>
    </div>
  );
};
