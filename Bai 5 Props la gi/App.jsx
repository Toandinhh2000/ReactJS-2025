import React, {useEffect, useRef} from "react"

function App() {
  const divRef = useRef();

  useEffect(() => {
    console.log(divRef.current);
  }, []);

  return (
<div>
<div ref={divRef}>hello useRef</div>
</div>
  );
}


export default App;
