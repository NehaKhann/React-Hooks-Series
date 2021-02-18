import React, { useState, useEffect } from "react";

const Resizewindow = () => {
  const [width, setwidth] = useState(window.screen.width);
  const updatedWidth = () => {
    setwidth(window.innerWidth);
  };
  useEffect(() => {
      console.log("add");
    window.addEventListener("resize", updatedWidth);
    return ()=>{
        console.log("remove");
    window.removeEventListener("resize", updatedWidth);
    }
  });
 
  return (
    <div>
      <h1>
        The width of the the window is <p>{width} px</p>
      </h1>
    </div>
  );
};

export default Resizewindow;
