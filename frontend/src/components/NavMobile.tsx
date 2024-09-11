import React from "react";
import { CiLogout } from "react-icons/ci";
import { GoPeople, GoPerson } from "react-icons/go";
import { LuHome } from "react-icons/lu";

function NavMobile() {
  return (
    <>
      <nav className="w-full bg-[#0d363f] border-b-2 border-[#edfefd]">
        <div className="w-full flex flex-col items-center gap-4 py-4">
          <h1 className="text-[#16bcc4] text-4xl font-semibold">CodeAndo</h1>
          <div className="w-full flex items-center justify-center gap-8 text-[#16bcc4] text-4xl">
            <span>
                <LuHome />
            </span>
            <span>
                <GoPeople />
            </span>
            <span>
                <GoPerson />
            </span>
            <span>
                <CiLogout />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavMobile;
