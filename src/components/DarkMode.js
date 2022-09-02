import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { WbSunnySharp } from "@material-ui/icons";

function DarkMode() {
    const [state, setState] = useState(false);

    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    }

    const clickSwitch = () => {
        setState(!state);
    }


  return (
      <>
    {state ? <WbSunnySharp className={theme === "dark" ? clickedClass : ""} id="darkmode" onClick={(e) => (switchTheme(e), clickSwitch())} /> : <FontAwesomeIcon icon={faMoon} className={theme === "dark" ? clickedClass : ""} id="darkmode" onClick={(e) => (switchTheme(e), clickSwitch())} />}
    </>
  )
}

export default DarkMode