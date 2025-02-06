import { useState } from "react";

function App() {
  const[todo, setTodo] =useState( {
id:"",
name:"",
  });

  const[todoList, setTodoList] =useState([
    {id:1, name: "Danh rang rua mat" },
  ]);

  const handleGetTodo = (value) => {
    const randomId =Math.floor(Math.random(100000) * 100000);
    const todo = {
      id: randomId,
      name: value,
    };
    setTodo(todo);
  };

  consthandleSubmit = () => {
    setTodoList(prev) => {
      return [...prev, todo];
  });
};
const handleDeleteTodo = (id) {
console.log(id);
};
export default App;
