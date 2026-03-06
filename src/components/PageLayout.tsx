import { NavBar } from "./NavBar";
import { openLinkOnClick } from "../utils";
import { Button } from "./Button";

type Props = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen flex-col px-8 xl:px-36">
      <NavBar />
      <div className="min-h-0 w-full flex-1 overflow-y-auto py-8 xl:py-0">
        {children}
      </div>
      <div className="flex h-16 shrink-0 items-center justify-between">
        <Button
          onClick={openLinkOnClick("https://github.com/stefan5441/ooio")}
          label={"I love coding React applications!"}
        />
      </div>
    </div>
  );
};
