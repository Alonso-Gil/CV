import { useState } from "react";

import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0, availWidth: 0 });

  useIsomorphicLayoutEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        availWidth: window.screen.availWidth,
      });
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};

export default useWindowSize;
