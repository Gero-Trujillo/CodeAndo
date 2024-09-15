import React, { useEffect, useState } from "react";
import { getUser } from "../api/users";

interface User {
  username: string;
  country: string;
  password: string;
}

function ProfileDetails() {
  const [user, setUser] = useState<User | null>(null);
  const [userIdImg, setUserIdImg] = useState<number | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setUserIdImg(parseInt(userId || ""));
    
    const fetchUsers = async () => {
      try {
        const res = await getUser(parseInt(userId || ""));
        setUser(res.data[0]);
      } catch (err: any) {
        console.error("Error getting users:", err);
        setError(
          err.response?.data?.message || "An error occurred while getting users"
        );
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      <section className="w-full">
        <div className="w-full flex gap-2">
          <div>
            <img
              className="w-36 h-36 bg-[#1c626e] rounded-full"
              src={`https://robohash.org/${userIdImg}`}
              alt="avatar"
            />
          </div>
          <div className="flex items-start flex-1">
            <div className="text-2xl text-[#edfefd] flex flex-col gap-2 w-full">
              <h2>@{user?.username}</h2>
              <p>From: {user?.country}</p>
              <button className="bg-[#16bcc4] py-1 rounded-lg md:w-1/4">
                Edit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileDetails;
