import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  //   function createPost() {
  //     axios
  //       .post(baseURL, {
  //         title: "Hello World!",
  //         body: "This is a new post.",
  //         id: 1,
  //       })
  //       .then((response) => {
  //         setPost(response.data);
  //       });
  //   }
  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post.",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!";

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>{post.id}</p>
      <button onClick={updatePost}>update Post</button>
    </div>
  );
}
