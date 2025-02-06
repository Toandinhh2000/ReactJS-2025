import { useState } from "react";
import React {useState} from "react";
function App() {
//const  colors = ["#FF0000", "#0000FF", "#FF00FF"];
//const [color, setColor] = useState("#FF0000");

// const handleChangeColor = (index) => {
// setColor(colors[index]);
// };

const[chooseProduct, setChooseProduct] = useState();

const products = [
  {id: 1, name: "iphone 13 pro"}
  {id: 2, name: "iphone 14 pro"}
  {id: 3, name: "iphone 15 pro"}
];

const handleGetValueChheck =(id) => {
  setChooseProduct(id);
};

return (
  <div>
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
          <label>{product.name}</label>
          <Input
          type="radio"
          value={product.id}
          onChange={(e) =>handleGetValueChheck(e.target.value)}
          checked={+chooseProduct === product.id}
          />
    </div>
        );
      })}
      </div>