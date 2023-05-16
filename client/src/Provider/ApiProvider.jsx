import React, { createContext, useContext, useEffect, useState } from 'react';
import { json } from 'react-router-dom';

export const ApiContext = createContext()
const ApiProvider = ({children}) => {
    const [posts,setPosts] = useState([])
    const createUserDB = (user) => {
        fetch("http://localhost:3000/user" ,{
            method:"POST",
           headers:{
            "content-type":"application/json"
           },
           body:JSON.stringify(user)
        })
        .then((data) =>{
         console.log(data)
        })
        .catch(error => console.log(error))
    }
     
    const createPost = (postData) => {
        fetch("http://localhost:3000/post" ,{
            method:"POST",
           headers:{
            "content-type":"application/json"
           },
           body:JSON.stringify(postData)
        })
        .then((data) =>{
         console.log(data)
        })
        .catch(error => console.log(error))
    }

    const likePost = (postId,userId) => {
        fetch(`http://localhost:3000/like/${postId}` ,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({userId})
        })
        .then((data) =>{
         console.log(data)
        })
        .catch(error => console.log(error))
    }
    const unlikePost = (postId,userId) => {
        fetch(`http://localhost:3000/unlike/${postId}` ,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({userId})
        })
        .then((data) =>{
         console.log(data)
        })
        .catch(error => console.log(error))
    }
 
    useEffect(() => {
        const getPosts = async () => {
         const res = await fetch('http://localhost:3000/posts')
         const data = await res.json()
         setPosts(data)
        }
        getPosts()
    } ,[])
    
    const apiProvider = {
       createUserDB,
       createPost,
       posts,
       likePost,
       unlikePost
    };
    
    return (
        <ApiContext.Provider value={apiProvider}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider;