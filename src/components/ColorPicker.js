import React, { useState } from "react";

const hexExpression = /^[a-f0-9]{3,6}$/i;
const isHexValue = dirtyValue => hexExpression.test(dirtyValue);

const defaultHex = "000000";

const ColorPicker = () => {
  const [dirtyValue, setDirtyValue] = useState(defaultHex);
  const [cleanValue, setCleanValue] = useState(defaultHex);

  const handleDirtyValue = ({ target: { value } }) => setDirtyValue(value);
  const handleBlur = () => {
    if (isHexValue(dirtyValue)) {
      setCleanValue(dirtyValue);
    } else {
      setDirtyValue(cleanValue);
    }
  };

  return (
    <div>
      <button
        style={{
          width: 20,
          height: 20,
          backgroundColor: "#" + dirtyValue,
          display: "inline-block"
        }}
      />
      <span>#</span>
      <input
        value={dirtyValue}
        onChange={handleDirtyValue}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default ColorPicker;
