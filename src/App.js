import { createContext, useState } from "react";
import Head from "./Head";
import Nav from "./Nav";
import "./styles.css";
import Tools from "./Tools";
import Transaction from "./Transaction";

export const themeSetter = createContext(null);

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState("coral");
  return (
    <themeSetter.Provider value={{ isDark, setIsDark, theme, setTheme }}>
      <div className="App">
        <Nav />
        {/* <Tools /> */}
        <Head />
        <Transaction />
      </div>
    </themeSetter.Provider>
  );
}
