import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
    setPosts(await data.json());
  };
  const fetchCommentData = async () => {
    const CommentData = await fetch("https://jsonplaceholder.typicode.com/comments");
    setComments(await CommentData.json());
  };
  useEffect(() => {
    fetchData();
    fetchCommentData();
  }, []);

  return (
    <>
      <div className="row">
        <h1>Posts</h1>
        {posts.map((post, index) => {
          let postComments = comments.filter((x) => x.postId === post.id);
          return (
            // post data
            <div key={index}>
              <div className="card mb-2 border-0">
                <div className="card-body border border-1 border-primary mb-2 rounded-2">
                  <h5 className="card-title bg-primary p-2 rounded-2 text-white">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                  <button
                    className="btn btn-outline-primary mb-2"
                    onClick={() => {
                      // hide/show
                      if (document.getElementById(post.id).classList.contains("d-none")) {
                        document.getElementById(post.id).classList.remove("d-none");
                        document.getElementById(post.id).classList.add("d-block");
                      } else {
                        document.getElementById(post.id).classList.remove("d-block");
                        document.getElementById(post.id).classList.add("d-none");
                      }
                    }}
                  >
                    Comments{" "}
                    <sup>
                      <span className="text-white bg-info rounded-circle p-1">{postComments.length}</span>
                    </sup>
                  </button>

                  <div className="container m-auto d-none" id={post.id}>
                    {postComments.map((postComment, index) => {
                      return (
                        // comments data
                        <div key={index} className="mb-4">
                          <div className="mb-2">
                            <h6 className="bg-dark text-white d-inline rounded-3 p-1">{postComment.email}</h6>
                          </div>
                          <div className="col-10 rounded-2 border border-2 m-auto">
                            <h6 className="rounded-1 bg-info d-inline p-1">{postComment.name}</h6>
                            <p className="p-2 bg-light m-auto">{postComment.body}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Posts;
