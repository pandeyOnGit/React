import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const nodeRef = useRef(null);
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("Double Click to Edit");

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef}>
        {editMode ? (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onDoubleClick={() => setEditMode(false)}
          />
        ) : (
          <h1 onDoubleClick={() => setEditMode(true)}>{value}</h1>
        )}
      </div>
    </Draggable>
  );
};

export default Text;
