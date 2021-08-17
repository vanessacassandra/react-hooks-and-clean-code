import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); //run only on mount

  return (
    <div>
      <small>src/topics/03_BasicHooks/UseEffectExample/index.js</small>
      <div>Window width: {windowSize.width}</div>
      <div>Window height: {windowSize.height}</div>
    </div>
  );
};

export default UseEffectExample;
