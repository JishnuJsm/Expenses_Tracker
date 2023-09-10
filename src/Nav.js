import { BsPiggyBank } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";
import { FaUser } from "react-icons/fa";
import { useContext, useState } from "react";
import { themeSetter } from "./App";

export default function Nav() {
  const { theme, setTheme } = useContext(themeSetter);
  const [themeChange, setThemeChange] = useState(false);

  return (
    <nav className="navBar" style={{ backgroundColor: `${theme}` }}>
      <div className="navBarLeft">
        <BsPiggyBank />
        Money Manager
      </div>
      <div className="navBarRight">
        <MdOutlineLightMode />
        <MdDarkMode />
        <VscColorMode
          onClick={() => setThemeChange(true)}
          style={{ cursor: "pointer" }}
        />
        {themeChange && (
          <div className="themeContent">
            <div
              style={{ backgroundColor: "coral", cursor: "pointer" }}
              onClick={() => {
                setThemeChange(false);
                setTheme("coral");
              }}
              className="round"
            ></div>
            <div
              style={{ backgroundColor: "blue", cursor: "pointer" }}
              onClick={() => {
                setThemeChange(false);
                setTheme("blue");
              }}
              className="round"
            ></div>
            <div
              style={{ backgroundColor: "green", cursor: "pointer" }}
              onClick={() => {
                setThemeChange(false);
                setTheme("green");
              }}
              className="round"
            ></div>
          </div>
        )}
        <FaUser />
      </div>
    </nav>
  );
}
