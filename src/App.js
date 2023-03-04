import React, { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [keyCode, setKeyCode] = useState(null);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => setKeyCode(event.keyCode);

  const displayKey = () => {
    if (!keyCode) {
      return <div className="key">Press any key to get the keyCode</div>;
    }
    return (
      <>
        <div className="key">
          {keyCode === 32 ? "Space" : String.fromCharCode(keyCode)}
          <small>event.key</small>
        </div>
        <div className="key">
          {keyCode}
          <small>event.keyCode</small>
        </div>
        <div className="key">
          {eventCodeFromKeyCode(keyCode)}
          <small>event.code</small>
        </div>
      </>
    );
  };

  const eventCodeFromKeyCode = (keyCode) => {
    switch (keyCode) {
      case 32:
        return "Space";
      case 37:
        return "ArrowLeft";
      case 38:
        return "ArrowUp";
      case 39:
        return "ArrowRight";
      case 40:
        return "ArrowDown";
      default:
        return String.fromCharCode(keyCode).toLowerCase();
    }
  };

  return <div id="insert">{displayKey()}</div>;
};

export default App;
