import React from "react";
import Card from "./Card";
import { useContext } from 'react';
import { PostContext } from '../Contexts/PostContext';

function Posts() {

    const {posts} = useContext(PostContext)


  return (
    <div className="pl-6 py-4">
      {posts.map((post, index) => (
        <Card key={index} 
            name={post.name} 
            description={post.description} />
      ))}
    </div>
  );
}

export default Posts;
