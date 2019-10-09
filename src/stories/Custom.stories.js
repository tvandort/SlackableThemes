import React, { useState } from "react";
import ColorInput from "../components/custom/ColorInput";
import Saturation from "../components/custom/Saturation";

export default {
  title: "Tom"
};

export const ColorInputDefault = () => <ColorInput />;

export const SaturationDefault = () => {
  const [value, setValue] = useState("red");
  return (
    <div>
      <Saturation color={value} />
      <input
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
    </div>
  );
};
