import React, { useState, useLayoutEffect, useRef } from "react";

const Cursor = ({ top = 0, left = 0 }) => (
  <span
    style={{
      width: 16,
      height: 16,
      borderRadius: 16,
      position: "absolute",
      top,
      left,
      transform: "translate(-50%, -50%)",
      boxShadow:
        "inset 0 0 0 2px #fff, inset 0 0 4px 2px rgba(0,0,0,.35), 0 0 4px rgba(0,0,0,.35)",
      backgroundColor: "transparent",
      display: "block",
      cursor: "pointer"
    }}
  ></span>
);

const Saturation = ({ color = "red" }) => {
  let someRef = useRef();
  let foo = useLayoutEffect(() => {
    const rect = someRef.current.getBoundingClientRect();
    console.log("rect", rect);
    setPosition({ left: rect.width / 2, top: rect.height / 2 });
  }, [someRef.current]);
  console.log(foo);
  const [{ left, top }, setPositionState] = useState({ left: 100, top: 100 });
  const setPosition = ({ left, top }) => {
    console.log(left, top);
    // if (left < 0) {
    //   left = 0;
    // }
    // if (left > 200) {
    //   left = 200;
    // }
    // if (top < 0) {
    //   top = 0;
    // }
    // if (top > 200) {
    //   top = 200;
    // }
    setPositionState({ left, top });
  };

  return (
    <div
      style={{
        width: 400,
        height: 400,
        backgroundImage: `linear-gradient(to right, transparent, ${color})`,
        position: "relative"
      }}
      onMouseDown={e => {
        const rect = someRef.current.getBoundingClientRect();
        setPosition({
          left: e.clientX - rect.left,
          top: e.clientY - rect.top
        });
      }}
      ref={someRef}
    >
      <div
        style={{
          backgroundImage: "linear-gradient(transparent, black)",
          width: "100%",
          height: "100%"
        }}
      />
      <Cursor left={left} top={top} />
    </div>
  );
};

export default Saturation;
