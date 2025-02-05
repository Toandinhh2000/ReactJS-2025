import React from "react";

function App() {
  const conten1 = <div>This is content1</div>;
  const content2 = <div>This í content2</div>;

const isDisplay = false;

if(isDisplay) {
  return content1;
}

return content2;
}

export default App;
