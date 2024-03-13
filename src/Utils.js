import Post from "./Components/Post";
import React from "react";


export function renderPosts(posts){
    return posts.map((post) => {
        return <Post key={post.postId} userId={post.userId} username={post.username} text={post.text}/>
    })
}

