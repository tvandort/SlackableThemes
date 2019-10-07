import React, { useState } from "react";

import Saturation from "./Saturation";

export default {
  title: "Color Gradient"
};

export const Default = () => {
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
