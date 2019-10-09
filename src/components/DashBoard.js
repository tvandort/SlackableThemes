import React, { useState } from "react";
import "../styles/dashboard.scss";
import PresetThemes from "./PresetThemes";
import ImageUpload from "./ImageUpload";
import ColorPicker from "./ColorPicker";
import ColorInput from "./ColorInput";
import Saturation from "./custom/Saturation";

const DashBoard = () => {
  let [color, setColor] = useState("#00ffff");

  function onColorChange(newColor) {
    setColor(newColor);
  }

  return (
    <div className="dashboard">
      <PresetThemes />
      <ImageUpload />
      <ColorPicker color={color} onChange={onColorChange} />
      <ColorInput />
      <Saturation />
    </div>
  );
};

export default DashBoard;
