import { useReducer } from "react";
import { TodoContext } from "./context"
import { todoReducer } from "./reducer";
import { initialState } from "./constants";

const TodoProvider = ({children}) => {
  
  const [state, dispath] = useReducer(todoReducer, initialState)
  
  
  return <TodoContext.Provider></TodoContext.Provider>
};

export {TodoProvider};