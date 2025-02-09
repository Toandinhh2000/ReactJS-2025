import React, {createContext, useState} from "react";
import ListUser from "./components/listUser";

// create context
// provider
// consumer

export const ThemeContext = createContext();

function App() {
  const[Theme, setTheme] = useState ("dark");

  return (
    <ThemeContext.Provider value={theme}>
    <ListUser />
    </ThemeContext.Provider>
  );
}

export default App;