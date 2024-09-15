import React from "react";

function ProfileDetails() {
  return (
    <>
      <section className="w-full">
        <div className="w-full flex gap-2">
          <div>
            <img
              className="w-36 h-36 bg-[#1c626e] rounded-full"
              src="https://robohash.org/8"
              alt="avatar"
            />
          </div>
          <div className="flex items-start flex-1">
            <div className="text-2xl text-[#edfefd] flex flex-col gap-2 w-full">
              <h2>@Username</h2>
              <p>From: Colombia</p>
              <button className="bg-[#16bcc4] py-1 rounded-lg md:w-1/4">Edit</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileDetails;
