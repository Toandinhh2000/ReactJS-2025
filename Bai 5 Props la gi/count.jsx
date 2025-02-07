import { useEffect, userLayoutEffect, useState } from "react";

export default function Counter() {
  const[count, setCount] = useState(1);

  userLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  const handleIncrese = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrese}>Add</button>
    </div>
  );
}