import React from 'react'
import {useSelector} from 'react-redux';

import Post from './Post/post' ; 


import useStyle from "./Styles";

function Posts() {   

    const posts =  useSelector(state => state.posts)
    const classes = useStyle();

    console.log(posts)

    return ( 
        <div>
            <h2>Posts </h2>
            <Post/>     
            <Post/>     
            <Post/>     
        </div>
    )
}

export default Posts
