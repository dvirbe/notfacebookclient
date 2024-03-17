import './App.css';
import React, {useState} from 'react';
import LoginCard from "./Components/LoginCard";
import {
    Route,
    Routes,
    BrowserRouter as Router
} from 'react-router-dom';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import RegisterCard from "./Components/RegisterCard";
import HomeScreen from "./Components/HomeScreen";
import NavBar from "./Components/NavBar";
import Feed from "./Components/Feed";
import {DeleteCookie, ReadCookie} from "./Utils";
import ErrorPage from "./Components/ErrorPage";
import {HOME_URL, LOGIN_URL, PROFILE_URL, REGISTER_URL} from "./Constants";
import Test from "./Components/ProfilePage";

function App(props) {
    const [id, setId] = useState(ReadCookie("id"));

    const theme = createTheme({
        palette: {
            background: {
                // default: 'rgba(255,124,124,0.16)',
            },
            primary: {
                main: '#466bb0',
                // light: ,
                // dark: ,
                // contrastText: ,
            },
            secondary: {
                main: '#B08B46',
                // light: ,
                // dark: ,
                // contrastText: ,
            },
        },
        components: {
            // MuiButton: {
            //     style: {
            //         textTransform: 'inherit',
            //     }
            // }
        }
    });

    async function login() {
        setId(ReadCookie("id"))
    }

    async function logout() {
        DeleteCookie("id")
        DeleteCookie("token")
        setId("")
    }


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
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
                                    <Route path={PROFILE_URL + ":id"} element={<Test/>}/>
                                    <Route path={PROFILE_URL + id} element={<Test/>}/>
                                </>

                            }
                        />
                    )
                    }
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App;
