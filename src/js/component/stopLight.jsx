import React, { useState } from "react";

export default function StopLight() {
  let [active, setActive] = useState("red");
  let [showPurple, setShowPurple] = useState(false);
  return (
    <div>
      <div className="stick"></div>
      <div className="traffic-light">
        <div
          className={active === "red" ? "red light glow" : "red light"}
          onClick={() => setActive("red")}
        ></div>
        <div
          className={active === "yellow" ? "yellow light glow" : "yellow light"}
          onClick={() => setActive("yellow")}
        ></div>
        <div
          className={active === "green" ? "green light glow" : "green light"}
          onClick={() => setActive("green")}
        ></div>
        {showPurple && (
          <div
            className={
              active === "purple" ? "purple light glow" : "purple light"
            }
            onClick={() => setActive("purple")}
          ></div>
        )}
      </div>
      <button onClick={() => setShowPurple((prev) => !prev)}>
        Make it Purple!
      </button>
    </div>
  );
}
