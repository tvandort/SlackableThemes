import React, { useState } from "react";

const hexExpression = /^[a-f0-9]{3,6}$/i;
const isHexValue = dirtyValue => hexExpression.test(dirtyValue);

const defaultHex = "000000";

const useHexState = () => {
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

  return { handleValue: handleDirtyValue, value: dirtyValue, handleBlur };
};

const ColorPicker = () => {
  const { handleValue, handleBlur, value } = useHexState();
  return (
    <div>
      <button
        style={{
          width: 20,
          height: 20,
          backgroundColor: "#" + value,
          display: "inline-block"
        }}
      />
      <span>#</span>
      <input value={value} onChange={handleValue} onBlur={handleBlur} />
    </div>
  );
};

export default ColorPicker;
