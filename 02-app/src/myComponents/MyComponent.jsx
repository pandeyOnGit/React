import React, { useState, useEffect } from "react";

const Fun = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("App Comp. is Mounting.....");
  }, [value]);

  return (
    <div>
      <p>Value is {value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button> {/* Fixed: Used an arrow function */}
    </div>
  );
}

export default Fun;
