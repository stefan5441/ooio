import type { RefObject } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Props = {
  scrollRef: RefObject<HTMLDivElement | null>;
};

export function ScrollToTop({ scrollRef }: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [pathname, scrollRef]);

  return null;
}
