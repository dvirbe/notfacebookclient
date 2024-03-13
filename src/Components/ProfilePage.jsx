import React, {useEffect, useState} from 'react';
import {Avatar, Box, Stack, Typography} from "@mui/material";
import * as Utils from "../Utils";
import {GetPostOfUser} from "../API/GetPostOfUser";
import {GetUsername} from "../API/GetUsername";
import {GetAvatarLink} from "../API/GetAvatarLink";

function ProfilePage() {
    const userId = window.location.pathname.split("/")[2]
     const [name,setName ]= useState("")
    const [posts, setPosts] = useState([])
    const [icon, setIcon] = useState("")



    useEffect( () => {
        const fetchData = async () => {
            setIcon(await GetAvatarLink(userId))
            setPosts(await GetPostOfUser(userId))
            setName(await GetUsername(userId))
        }
        fetchData()
    },[]);

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Stack width={"100%"} direction="column" alignItems="center">
                <Stack spacing={4} display="flex" padding={4} alignItems="center">
                    <Avatar sx={{width: 150, height: 150}} src={icon}/>
                    <Typography variant="h5" component="h2">{name}</Typography>
                </Stack>
                <Stack display="flex" alignItems="center">
                    {Utils.renderPosts(posts)}
                </Stack>
            </Stack>
        </Box>
    );
}

export default ProfilePage;