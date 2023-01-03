import React, {useEffect} from 'react';
import logo from './logo.svg';
import styles from './App.module.scss'
import { useDarkMode } from './hooks/useDarkMode'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SwitchTheme from './components/SwitchTheme/SwitchTheme';
import MainLayout from './layouts/MainLayout/MainLayout';
import Home from "./pages/Home/Home";
import {useActions, useAppSelector} from "./hooks/useRedux";
import Login from "./pages/Login/Login";

function App() {

    const {checkAuth} = useActions()
    const {isInitialized} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<Home/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;