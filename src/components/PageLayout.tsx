import { Tab } from "../types";
import { NavBar } from "./NavBar";
import { openLinkOnClick } from "../utils";
import { Button } from "./Button";

type Props = {
  children: React.ReactNode;
  setTab: React.Dispatch<React.SetStateAction<Tab>>;
  activeTab: Tab;
};

export const PageLayout = ({ children, setTab, activeTab }: Props) => {
  return (
    <div className="h-full px-36 flex flex-col">
      <div className="h-24 flex justify-center items-center gap-12 shrink-0">
        <NavBar setTab={setTab} activeTab={activeTab} />
      </div>
      <div className="overflow-y-auto flex-1 flex">{children}</div>
      <div className="h-16 shrink-0 flex items-center justify-between">
        <Button
          onClick={openLinkOnClick("https://github.com/stefan5441/ooio")}
          label={"I love coding React applications!"}
        />
      </div>
    </div>
  );
};
