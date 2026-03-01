import { NavBar } from "./NavBar";
import { openLinkOnClick } from "../utils";
import { Button } from "./Button";

type Props = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  return (
    <div className="h-full px-36 flex flex-col">
      <div className="h-24 flex justify-center items-center gap-12 shrink-0">
        <NavBar />
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
