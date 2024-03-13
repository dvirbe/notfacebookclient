import React, {useState} from 'react';
import {Box, Button, Card, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {Login} from "../API/Login";

function LoginCard() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Box className="login-card" padding={8} textAlign="center">
            <Card variant='outlined'>
            <Stack
                spacing={2}
                padding={2}
            >
                <Typography
                    variant="h4"
                >
                    Login
                </Typography>
                <TextField
                    className="customTextField"
                    error={false}
                    variant={"outlined"}
                    type={"text"}
                    label={"Username"}
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <TextField
                    className="customTextField"
                    variant={"outlined"}
                    type={"password"}
                    label={"password"}
                    value={password}
                    helperText={"Do not share your password with anyone else"}
                    onChange={(event) => setPassword(event.target.value)}

                />
                <Button
                    sx={{textTransform: 'inherit'}}
                    variant='contained'
                    onClick={() => Login(username,password)}
                >Login </Button>

                <Button
                    sx={{textTransform: 'inherit'}}
                    variant='text'
                    onClick={() => {
                        navigate("/Register")
                    }}
                >Create Account</Button>
            </Stack>
            </Card>
        </Box>
    );
}


export default LoginCard;
