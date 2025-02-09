import { memo } from "react";

function content({ handleIncrease}) {
  console.log("re-render fnc con");
  return (
    <div>
      <button onClick={handleIncrease}>Click me</button>
    </div>
  );
}

export default memo(Content);