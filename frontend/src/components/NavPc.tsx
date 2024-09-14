import React from "react";
import { CiLogout } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { LuHome } from "react-icons/lu";
import { logoutRequest } from "../api/auth";

function NavPc() {
  const logout = async () => {
    try {
      localStorage.clear();
      const res = await logoutRequest();
      window.location.href = "/authPage";
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav className="w-full bg-[#0d363f] rounded-xl h-full">
        <div className="w-full h-full flex flex-col justify-between p-6">
          <div className="flex flex-col gap-20 text-[#16bcc4]">
            <h1 className="text-5xl font-semibold">CodeAndo</h1>
            <div className="flex flex-col gap-4 text-4xl">
              <span className="flex gap-2 cursor-pointer">
                <LuHome />
                <h2 className="text-3xl text-[#edfefd]">Home</h2>
              </span>
              <span className="flex gap-2 cursor-pointer">
                <GoPeople />
                <h2 className="text-3xl text-[#edfefd]">My Group</h2>
              </span>
              <span className="flex gap-2 cursor-pointer">
                <img
                  className="w-10 h-10 rounded-full bg-[#1c626e]"
                  src="https://robohash.org/1"
                  alt="avatar"
                />
                <h2 className="text-3xl text-[#edfefd]">Profile</h2>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span
              className="text-5xl text-[#16bcc4] cursor-pointer"
              onClick={logout}
            >
              <CiLogout />
            </span>
            <span className="text-[#edfefd] text-3xl">Logout</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavPc;
