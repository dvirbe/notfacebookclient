import React, {useState} from 'react';
import {Box, Button, Card, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {CreateAccount} from "../API/CreateAccount";

function SinInCard() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeat, setRepeat] = useState("");
    const errorRepeat = repeat !== password && repeat.length > 0
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W).{6,}$/;

    function errorPassword() {
        let error = false
        if (password.length >= 1) {
            error = !passwordRegex.test(password)
        }
        return error
    }

    return (
        <Box className="login-card" padding={8} textAlign="center">
            <Card variant={"outlined"}>
                <Stack
                    spacing={2}
                    padding={2}
                >
                    <Typography
                        variant="h4">
                        Create Account
                    </Typography>
                    <TextField
                        className="customTextField"
                        variant={"outlined"}
                        type={"text"}
                        helperText={"at least 4 characters and be only alphanumeric characters."}
                        label={"Username"}
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <TextField
                        error={errorPassword()}
                        helperText={"at least 6 characters long and must contain at least 1 special characters and 1 alphanumeric character "}
                        className="customTextField"
                        variant={"outlined"}
                        type={"password"}
                        label={"Password"}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <TextField
                        error={errorRepeat}
                        helperText={errorRepeat ? "Passwords must be the same!" : ""}
                        className="customTextField"
                        variant={"outlined"}
                        type={"password"}
                        label={"Repeat Password"}
                        value={repeat}
                        onChange={(event) => setRepeat(event.target.value)}
                    />

                    <Button
                        sx={{textTransform: 'inherit'}}
                        variant={"contained"}
                        onClick={() => CreateAccount(username, password, repeat)}
                    >Create Account</Button>

                    <Button
                        sx={{textTransform: 'inherit'}}
                        variant={"text"}
                        onClick={() => {
                            navigate("/Login")
                        }}
                    >Login </Button>

                </Stack>
            </Card>
        </Box>
    );
}


export default SinInCard;
