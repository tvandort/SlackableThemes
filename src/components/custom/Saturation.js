import React, { useState } from "react";

const Cursor = ({ top = 0, left = 0 }) => (
  <span
    style={{
      width: 16,
      height: 16,
      borderRadius: 16,
      position: "relative",
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
  const [{ left, top }, setPositionState] = useState({ left: 100, top: 100 });
  const setPosition = ({ left, top }) => {
    if (left < -8) {
      left = -8;
    }
    if (left > 200) {
      left = 200;
    }
    if (top < -8) {
      top = -8;
    }
    if (top > 200) {
      top = 200;
    }
    setPositionState({ left, top });
  };

  return (
    <div
      style={{
        width: 200,
        height: 200,
        backgroundImage: `linear-gradient(to right, transparent, ${color})`,
        position: "relative"
      }}
      onMouseDown={e => {
        setPosition({ left: e.clientX, top: e.clientY });
      }}
    >
      <div
        style={{
          backgroundImage: "linear-gradient(transparent, black)",
          width: "100%",
          height: "100%",
          position: "absolute"
        }}
      />
      <Cursor left={left} top={top} />
    </div>
  );
};

export default Saturation;
