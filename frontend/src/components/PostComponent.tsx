import React, { useEffect, useState } from "react";
import { FaComment, FaHeart } from "react-icons/fa";
import { getPosts } from "../api/posts";

interface Props{
  username: string;
  message: string;
  userId: number;
}

function PostComponent(props: Props) {
  const { username, message, userId } = props;
  return (
    <>
      <section className="w-full bg-[#0d363f] rounded-xl">
        <div className="w-full flex p-4 gap-2">
          <img
            className="w-16 h-16 rounded-full bg-[#1c626e]"
            src="https://robohash.org/1"
            alt="avatar"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-lg text-[#edfefd]">
              {message}
            </h1>
            <p className="text-[#16bcc4] text-lg">@{username}</p>
            <div className="flex gap-2">
              <button className="text-2xl flex gap-1 items-center">
                <FaHeart className="text-white" />
                <span className="text-lg text-[#edfefd]">5</span>
              </button>
              <button className="text-2xl flex items-center gap-1">
                <FaComment className="text-white" />
                <span className="text-lg text-[#edfefd]">3</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PostComponent;
