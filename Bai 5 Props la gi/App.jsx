import { useState } from "react";
import content from "./components/content";

function App() {
  const[show,setShow] =useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleShow}>Show</button>
      {show && <Content />}
    </div>
  );
}

export default App;
