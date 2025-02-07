import React, {useEffect, useRef, useState} from "react"
import content from "./components/content";
function App() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleIncrease2 = () =>{
    setCount2(count2 + 1);
  };

  console.log("re-render fnc cha");

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrease}>Click me</button>
      <button onClick={handleIncrease2}>Click me 2</button>

      <content count={count} />
    </div>
  );
}
export default App;
