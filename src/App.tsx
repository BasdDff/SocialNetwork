import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss'
import { useDarkMode } from './useDarkMode'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './components/Test/Test';
import MainLayout from './layouts/MainLayout/MainLayout';

function App() {

    const [theme, setLightTheme, setDarkTheme] = useDarkMode()
    
    

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/Test" element={<Test/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;