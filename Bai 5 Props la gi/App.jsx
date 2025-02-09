import React, {useEffect, useRef, useState} from "react"
import content from "./components/content";

function App() {
  const [courses, setCourses] = useState([]);
  const[name,setName] = useState("");
  const[price,setPrice] = useState("");

  const handleSubmit = () => {
    const course = {
      name,
      price: +price,
    };

    setCourses((prev) => [...prev, course]);
  }
}
// const total = courses.reduce(cur, course) => {
// console.log("tinh toan lai");
// return cur + course.price;
// }, 0);

const total useMemo(() => {
  return courses.reduce((cur, course)) => {
    console.log("tinh toan lai");
    return cur + course.price;
  }, 0);
}, [courses]);

return
<div>
  <>
    <input
    type="text"
    placechoder="nhap ten khoa hoc"
    value={name}
    onChange={(e) =>setName(e.target.value)}
</div>
export default App;
