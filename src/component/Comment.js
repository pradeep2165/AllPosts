import React from "react";
import { useEffect, useState } from "react";

export default function Comment() {
  const [comments, setComments] = useState([]);
  const fetchCommentData = async () => {
    const CommentData = await fetch("https://jsonplaceholder.typicode.com/comments");
    setComments(await CommentData.json());
  };

  useEffect(() => {
    fetchCommentData();
  }, []);
  return (
    <div className="container col-12 col-sm-6">
      <div className="row">
        <h1>comment</h1>
        {comments.map((comment, index) => {
          return (
            <div key={index}>
              <div className="card mb-2">
                <div className="card-body">
                  <h5 className="card-title">{comment.postId}</h5>
                  <h3 className="card-text">{comment.name}</h3>
                  <a href="/">{comment.email}</a>
                  <p>{comment.body}</p>
                  <a href="/" className="btn btn-primary">
                    Go
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
