import {userContext} from "react";
import {ThemeContext} from "../App";

export default function User() {
  const themeData = userContext(ThemeContext);

  console.log(themeData);

  return (
  <div>
    <ul>
      <li>UserName: Dunglv</li>
      <li>Age: 26</li>
      <li>Address:HN</li>
    </ul>
    <div>
      <button>Change Theme</button>
    </div>
  </div>
  );
}