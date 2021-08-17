import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

// this is to simulate major computation/big rendering tree/etc.
const sleep = (time = 0) => {
  const wakeUpTime = Date.now() + time;
  while (Date.now() < wakeUpTime) {}
};

// try to wrap SlowSibling in React.memo() to see the difference
const SlowSibling = () => {
  // try this with useLayoutEffect as well to see how it impacts interactivity of the page before updates.
  useEffect(() => {
    sleep(200);
  });
  return <div>This is the slow sibling</div>;
};

const UseLayoutEffectExample = () => {
  const [value, setValue] = useState(0);

  // try with useEffect to see the difference
  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  const containerRef = useRef();
  const count = useRef(3);
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const addItem = () => {
    count.current++;
    setItems((items) => [...items, `Item ${count.current}`]);
  };

  // try with useEffect to see the difference
  useLayoutEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  });

  return (
    <div>
      <h2>Example 1:</h2>
      <span>Value: {value} </span>
      <button onClick={() => setValue(0)}>Randomize</button>

      <h2>Example 2: </h2>
      <div style={{ padding: 20 }}>
        <button onClick={addItem}>Add item</button>
        <div className="layout-effect" ref={containerRef}>
          {items.map((item) => (
            <div key={item} className="layout-effect__item">
              {item}
            </div>
          ))}
        </div>
        <SlowSibling />
      </div>
    </div>
  );
};

export default UseLayoutEffectExample;
