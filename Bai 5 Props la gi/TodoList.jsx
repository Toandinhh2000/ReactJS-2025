import { use, useContext } from "react";
import { TodoContext } from "../../store/context";

export default function TodoList() {
  const todoStore = useContext(TodoContext);
  const {dispath, state} = todoStore;

  return (
    <div>
      <input type="text" onChange={(e) => dispath(
        type:"ON_CHANGE",
      )} />
      <button>add</button>

      <div>
        <ul>
          <li>Danh rang rua mat</li>
        </ul>
      </div>
    </div>
  );
}