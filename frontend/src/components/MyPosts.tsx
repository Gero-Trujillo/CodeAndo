import React, { useEffect, useState } from "react";
import PostComponent from "./PostComponent";
import { getPostsByUser } from "../api/posts";

interface Post {
  postId: number;
  message: string;
  userId: number;
  username: string;
}
function MyPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const fetchPosts = async () => {
      try {
        const res = await getPostsByUser(parseInt(userId || ""));
        setPosts(res.data);
      } catch (err: any) {
        console.error("Error getting posts:", err);
        setError(
          err.response?.data?.message || "An error occurred while getting posts"
        );
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      <section className="flex flex-col gap-2">
        {posts
          .slice()
          .reverse()
          .map((post) => (
            <PostComponent
              key={post.postId}
              message={post.message}
              username={post.username}
              userId={post.userId}
            />
          ))}
      </section>
    </>
  );
}

export default MyPosts;
