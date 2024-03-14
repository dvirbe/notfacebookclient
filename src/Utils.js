import Post from "./Components/Post";
import React from "react";


export function renderPosts(posts) {
    return posts.map((post) => {
        return <Post key={post.postId} userId={post.userId} username={post.username} text={post.text}/>
    })
}

export function SetCookie(name, value, ttl) {
    const date = new Date()
    date.setTime(date.getTime() + (ttl * 24 * 60 * 60 * 1000))
    document.cookie = `${name}=${value}; expires=${date}; path=/`
}

export function DeleteCookie(name) {
    document.cookie = `${name}=; expires=expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
}

export function ReadCookie(name) {
    const cookies = document.cookie.split(';');
    let result = ""
    cookies.forEach((cookie) => {
        const [key, value] = cookie.split('=').map(c => c.trim());
        if (key === name) {
            return result = value
        }
    });
    return result
}

