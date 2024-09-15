import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { createPost } from "../api/posts";

function CreatePost() {
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState<number | null>(null);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedUsername = localStorage.getItem("username");

    console.log("User ID:", storedUserId);

    if (storedUserId) {
      setUserId(Number(storedUserId));
    } else {
      console.error("User ID not found in cookies");
      setError("User ID not found. Please log in.");
    }
    if(storedUsername){
      setUsername(storedUsername);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (userId === null) {
      console.error("User ID is not available");
      setError("User ID is not available. Please log in.");
      return;
    }

    if (!message.trim()) {
      setError("Please enter a message");
      return;
    }

    const payload = { message, userId, username };
    try {
      const res = await createPost(payload);
      setMessage("");
      setSuccess("Post created successfully!");
      console.log(res);
      window.location.reload();
    } catch (err: any) {
      console.error("Error creating post:", err);
      setError(
        err.response?.data?.message ||
          "An error occurred while creating the post"
      );
    }
  };

  return (
    <>
      <section className="w-full bg-[#0d363f] rounded-xl">
        <div className="w-full flex gap-2 p-4">
          <img
            className="w-16 h-16 bg-[#1c626e] rounded-full"
            src={`https://robohash.org/${userId}`}
            alt="avatar"
          />
          <div className="flex flex-col w-full gap-4">
            <textarea
              className="bg-[#d3faf9] w-full rounded-lg h-28 resize-none outline-none p-2 text-lg"
              placeholder="What's new?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              className="bg-[#16bcc4] rounded-lg w-1/4 py-2 font-semibold transition-all duration-300 ease-in hover:bg-[#1597a5]"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreatePost;
