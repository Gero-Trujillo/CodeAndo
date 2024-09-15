import React, { useEffect, useState } from "react";
import { getUser, updateUser } from "../api/users";
import { RxCrossCircled } from "react-icons/rx";

interface User {
  username: string;
  country: string;
  password: string;
}

function ProfileDetails() {
  const [user, setUser] = useState<User | null>(null);
  const [userIdImg, setUserIdImg] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const showHandler = () => {
    setShow(!show);
  };
  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { username, country, password };
    let res: any;
    try {
      res = await updateUser(parseInt(localStorage.getItem("userId") || ""), payload);
      localStorage.setItem("username", username);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setUserIdImg(parseInt(userId || ""));

    const fetchUsers = async () => {
      try {
        const res = await getUser(parseInt(userId || ""));
        setUser(res.data[0]);
        setUsername(res.data[0].username);
        setCountry(res.data[0].country);
        setPassword(res.data[0].password);
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
      {show && (
        <section className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-[#00000057]">
          <div className="bg-[#0d363f] p-6 rounded-xl flex flex-col gap-2">
            <div
              className="w-full flex items-center justify-center text-4xl text-[#16bcc4] cursor-pointer"
              onClick={showHandler}
            >
              <RxCrossCircled />
            </div>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xl text-[#16bcc4]">Username</label>
                <input
                  className="bg-[#d3faf9] rounded-md p-2 outline-none"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xl text-[#16bcc4]">Country</label>
                <input
                  className="bg-[#d3faf9] rounded-md p-2 outline-none"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xl text-[#16bcc4]">Password</label>
                <input
                  className="bg-[#d3faf9] rounded-md p-2 outline-none"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="p-2 bg-[#16bcc4] rounded-md transition-all duration-300 ease-in hover:bg-[#1597a5]" onClick={handleEdit}>
                Save
              </button>
            </form>
          </div>
        </section>
      )}

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
              <button
                className="bg-[#16bcc4] py-1 rounded-lg md:w-1/4 transition-all duration-300 ease-in hover:bg-[#1597a5]"
                onClick={showHandler}
              >
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
