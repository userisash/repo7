import React, { useState, useEffect } from "react";
import './Box.css'

function BoxSlide({ size }) {
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowBox(true);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  useEffect(() => {
    if (showBox) {
      const timeOut = setTimeout(() => {
        setShowBox(false);
      }, 4000);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [showBox]);

  return (
    <>
      {showBox && (
        <div
        className="box"
          style={{
            width: size,
            height: size,
            background: "red",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></div>
      )}
    </>
  );
}

export default BoxSlide;
