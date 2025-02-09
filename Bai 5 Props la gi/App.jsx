import React, {useReducer} from "react";

function App() {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    console.log(state);
    console.log(action);

    switch(action.type) {
      case"increase":
      return {
        count:state.count + 1,
      };
      case"decrease":
      return {
        count:state.count -1,
      };
    }
  };

  const[state, dispatch] =useReducer(reducer, initialState);

  return (
    <div>
    <h3>Count: {state.count}</h3>

    <div>
      <button onClick={() => dispatch({ type: "increase"})}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease"})}>Decrease</button>
    </div>
    </div>
  );
}
export default App;