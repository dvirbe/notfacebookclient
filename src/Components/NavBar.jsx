import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Autocomplete, Box, Button, Stack, TextField} from "@mui/material";
import AppIcon from "./AppIcon";
import LogoutIcon from '@mui/icons-material/Logout';
import FeedIcon from '@mui/icons-material/Feed';
import PersonIcon from '@mui/icons-material/Person';
import {GetUserList} from "../API/GetUserList";
import {useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";


function NavBar(props) {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [usernameOptions, setUsernameOptions] = useState([]);

    async function handler(newValue) {
        setSearch(newValue)
        const temp = await GetUserList(newValue);
        setUsernameOptions(temp)
    }

    return (
            <Stack spacing={10}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <AppIcon size={50}/>
                            <Typography variant="h6" component="div">
                                Not Facebook
                            </Typography>
                        </Stack>
                        <Autocomplete
                            variant="filled"
                            onInputChange={(event, newValue) => {
                                handler(newValue)
                            }}
                            value={search}
                            sx={{width: 400}}
                            freeSolo
                            getOptionLabel={(option) => option.toString()}
                            options={usernameOptions}
                            renderInput={(params) => (
                                <TextField
                                           sx={{ backgroundColor: 'white' }} {...props
                                }InputLabelProps={{
                                    style: { color: 'black' },
                                }}
                                    {...params}
                                           variant="filled"
                                    label="Search user"
                                    InputProps={{
                                        ...params.InputProps,
                                        style: {color: 'black'},
                                    }}
                                    InputLabelProps={{
                                        style: {color: 'black'},
                                    }}
                                />
                            )}
                        />
                        <Stack direction="row" spacing={4}>
                            <Button
                                sx={{textTransform: 'inherit'}}
                                color="inherit"
                                onClick={() => {
                                    navigate("/Feed")
                                }}
                            ><FeedIcon/>
                                Home Feed</Button>

                            <Button sx={{textTransform: 'inherit'}}
                                    color="inherit"
                                    onClick={() => {
                                        navigate("/u/"+props.id)
                                    }}
                            ><PersonIcon/>
                                Your Profile</Button>

                            <Button sx={{textTransform: 'inherit'}}
                                    color="inherit"
                                    onClick={() => {
                                        props.logout().then(navigate("/"))

                                    }}
                            ><LogoutIcon/>
                                Log Out</Button>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
            <Outlet />
            </Stack>
    );
}

export default NavBar;
