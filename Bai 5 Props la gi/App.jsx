import React, {useEffect, useState} from "react"

function App() {
  const[count, setCount] = useState(1);
  const[posts, setPosts] = useState([]);

  //useEffect(() => {
   // fetch("https://jsonplaceholder.typicode.com/posts")
//  }.then((Response) => Response.json())
 // .then((json) =>setPosts(json));
 // }, []);

return {
  <div>
  <div>{count}</div>
  <button onClick ={() =>setCount(count + 1)}>Click me</button>

{posts.map((post, index) =>{
return<div key={index}>{post.title}></div>;
})}
</div>
);
};

export default App;
