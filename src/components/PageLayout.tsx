import { useRef } from "react";
import { NavBar } from "./NavBar";
import { Button } from "./Button";
import { openLinkOnClick } from "../utils";
import { ScrollToTop } from "./ScrollToTop";

type Props = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col px-8 xl:px-36" style={{ height: "100dvh" }}>
      <NavBar />
      <div
        ref={scrollRef}
        className="min-h-0 w-full flex-1 overflow-y-auto py-8 xl:py-0"
      >
        <ScrollToTop scrollRef={scrollRef} />
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
