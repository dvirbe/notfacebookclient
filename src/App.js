import './App.css';
import React, {useState} from 'react';
import LoginCard from "./Components/LoginCard";
import {
    createBrowserRouter,
    RouterProvider,
    Link,
    Route,
    Routes,
    BrowserRouter as Router,
    Outlet
} from 'react-router-dom';
import {Typography} from "@mui/material";
import RegisterCard from "./Components/RegisterCard";
import HomeScreen from "./Components/HomeScreen";
import NavBar from "./Components/NavBar";
import Feed from "./Components/Feed";
import ProfilePage from "./Components/ProfilePage";
import Post from "./Components/Post";
import {DeleteCookie, ReadCookie} from "./Utils";
import ErrorPage from "./Components/ErrorPage";
import {HOME_URL, LOGIN_URL, PROFILE_URL, REGISTER_URL} from "./Constants";

function App(props) {
    const [id, setId] = useState(ReadCookie("id"));

    async function login() {
        setId(ReadCookie("id"))
    }

    async function logout() {
        DeleteCookie("id")
        DeleteCookie("token")
        setId("")
    }


    return (
        <Router>
            <Routes>
                <Route path='*' element={<ErrorPage/>}/>
                {id === "" && (
                    <>
                        <Route path={HOME_URL} element={<HomeScreen/>}/>
                        <Route path={LOGIN_URL} element={<LoginCard login={login}/>}/>
                        <Route path={REGISTER_URL} element={<RegisterCard/>}/>
                    </>
                )
                }

                {id !== "" && (
                    <Route
                        element={
                            <>
                                <NavBar id={id} logout={logout}/>
                            </>
                        }

                        children={
                            <>
                                <Route path={HOME_URL} element={<Feed id={id}/>}/>
                                <Route path={PROFILE_URL+":id"} element={<ProfilePage/>}/>
                                <Route path={PROFILE_URL+id} element={<Typography>your profile</Typography>}/>
                            </>

                        }
                    />
                )
                }
            </Routes>
        </Router>
    )
}

export default App;
