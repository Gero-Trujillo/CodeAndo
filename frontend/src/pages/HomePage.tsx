import React, { useEffect, useState } from "react";
import NavMobile from "../components/NavMobile";
import CreatePost from "../components/CreatePost";
import PostComponent from "../components/PostComponent";
import NavPc from "../components/NavPc";
import { getPosts } from "../api/posts";

interface Post {
  postId: number;
  message: string;
  userId: number;
  username: string;
}
function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPosts();
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
      <section className="w-full lg:hidden">
        <NavMobile />
        <section className="p-2 flex flex-col gap-4">
          <CreatePost />
          {posts.slice().reverse().map((post) => (
            <PostComponent
              key={post.postId}
              message={post.message}
              username={post.username}
              userId={post.userId}
            />
          ))}
        </section>
      </section>

      <section className="hidden w-full h-screen p-8 lg:flex">
        <div className="w-1/4">
          <NavPc />
        </div>
        <div className="flex flex-col flex-1 px-20 xl:px-40 2xl:px-60 gap-4 overflow-y-auto scrollbar-hide">
          <CreatePost />
          {posts.slice().reverse().map((post) => (
            <PostComponent
              key={post.postId}
              message={post.message}
              username={post.username}
              userId={post.userId}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
