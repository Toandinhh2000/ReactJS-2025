import React {useState} from "react";

function App() {

const [count, setCount] = useState("day la initial state");

const handleCount = () => {
setCount(count + 1)
};

return<div>
  <div>Count {count}</div>
  <button onClick={handleCount}>Click me</button>
</div>;

}

export default App;
