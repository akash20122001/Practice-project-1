import React from "react";
import Card from "./Card";

function Posts({ posts }) {
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
