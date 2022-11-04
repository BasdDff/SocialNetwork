import React, { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [theme, setTheme] = useState("");

    const setLightTheme = () => {
        document.documentElement.classList.remove('dark')
        setTheme('light')
        window.localStorage.setItem('theme', 'light')
    }

    const setDarkTheme = () => {
        document.documentElement.classList.add('dark')
        setTheme('dark')
        window.localStorage.setItem('theme', 'dark')
    }

    useEffect(() => {
        const lightBtn = document.querySelector('.light')
        const darkBtn = document.querySelector('.dark')
     
        const localTheme = window.localStorage.getItem("theme");

        localTheme ? setTheme(localTheme) : setTheme("light")

        if (theme === "dark") {
            lightBtn.classList.add('display-none')
            document.documentElement.classList.add('dark')
            window.localStorage.setItem('theme', 'dark')
        } else if (theme === "light") {
            darkBtn.classList.add('display-none')
            document.documentElement.classList.remove('dark')
            window.localStorage.setItem('theme', 'light')
        }

    }, [window, theme]);

    return [theme, setLightTheme, setDarkTheme]
}