import { useState } from "react";

function ColorDiv() {
  const [color, setColor] = useState("");
  return (
    <div className="comp ">
      <div>

      </div>
      <div
        onMouseEnter={() => setColor("blue")}
        onMouseLeave={() => setColor("green")}
      >
        Hover me!
      </div>
      <div style={{ backgroundColor: color }}>I am the test div</div>
    </div>
  );
}

export default ColorDiv;
