import React, {useEffect, useRef, useState} from "react"
import content from "./components/content";

function App() {
  const[count, setCount] =useState (1);

  const handleIncrease =() => {
    setCount((prev) => prev + 1);
  };

  console.log("re-render fnc cha ");

  return (
  <div>
  <div>{count}</div>

  <content handleIncrease={handleIncrease} />
    </div>
  );
}
export default App;
