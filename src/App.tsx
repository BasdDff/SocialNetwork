import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss'
import { useDarkMode } from './hooks/useDarkMode'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SwitchTheme from './components/SwitchTheme/SwitchTheme';
import MainLayout from './layouts/MainLayout/MainLayout';
import Home from "./pages/Home/Home";

function App() {

    const [theme, setLightTheme, setDarkTheme] = useDarkMode()
    
    

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;