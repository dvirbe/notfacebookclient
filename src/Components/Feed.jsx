import React, {useEffect, useState} from 'react';
import {Avatar, Box, Button, Stack, TextField} from "@mui/material";
import * as Utils from "../Utils";
import {UploadAvatar} from "../API/UploadAvatar";
import {GetAvatarLink} from "../API/GetAvatarLink";
import {GetPostOfUser} from "../API/GetPostOfUser";
import {GetUsername} from "../API/GetUsername";

function Feed(props) {
    const posts = []
    const [value, setValue] = useState("")
    const [icon, setIcon] = useState("")

    useEffect( () => {
        const fetchData = async () => {
            setIcon(await GetAvatarLink(2))
        }
        fetchData()
    },[]);

    return (
        <Box>
            <Avatar sx={{width: 150, height: 150}} src={icon}></Avatar>
            <TextField
                id={"avatar-link"}
                variant={"outlined"}
                sx={{display: "flex", justifyContent: "center"}}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            >
                please enter a link to your photo:
            </TextField>
            <Button variant={"contained"} onClick={() => {
                UploadAvatar(props.id, value)
            }}>send</Button>
            <Stack direction="column">
                {Utils.renderPosts(posts)}
            </Stack>
        </Box>
    );


}

export default Feed;