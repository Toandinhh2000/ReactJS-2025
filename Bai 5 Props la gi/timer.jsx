import React, {userEffect, useState} from "react"

function Timer() {
  const (count, setCount) = useState(1);

  userEffect(() => {
    const interval =setInterval(() => {
      setCount((prev) => prev + 1);

      console.log("chay lai");
    }, 1000);

return () => {
  clearInterval(interval)
};
  }, []);

  return<div>(count)</div>;
}

export default Timer;
