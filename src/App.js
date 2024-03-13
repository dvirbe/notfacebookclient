import './App.css';
import React, {useState} from 'react';
import LoginCard from "./Components/LoginCard";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Typography} from "@mui/material";
import RegisterCard from "./Components/RegisterCard";
import HomeScreen from "./Components/HomeScreen";
import NavBar from "./Components/NavBar";
import Feed from "./Components/Feed";
import ProfilePage from "./Components/ProfilePage";
import Post from "./Components/Post";


function App(props) {
    const [id, setId] = useState(5);

    async function logout() {
        setId(null)
        await setRouter(pathLog2);
    }

    const pathLog1 = createBrowserRouter([
            {
                path: "/",
                element: <NavBar id={id} logout={() => logout()}/>,
                children: [
                    {
                        path: "/Feed",
                        element: <Feed id={id}/>
                    },
                    {
                        path: "/u/:id",
                        element: <ProfilePage/>
                    },
                    {
                        path: "/u/" + id,
                        element: <Typography>your profile</Typography>
                    },
                    {
                        path: "/post",
                        element: <Post/>
                    },
                ]
            },
        ]
    )
    const pathLog2 = createBrowserRouter([{
        path: "/",
        element: <HomeScreen/>
    },
        {
            path: "/Login",
            element: <LoginCard/>,
        },
        {
            path: "/Register",
            element: <RegisterCard/>
        },])


    const [router, setRouter] = useState(pathLog1)


    return (
        <RouterProvider router={router}>
        </RouterProvider>
    )

}

export default App;
