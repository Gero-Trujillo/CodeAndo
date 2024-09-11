import React from "react";

function CreatePost() {
  return (
    <>
      <section className="w-full bg-[#0d363f] rounded-xl">
        <div className="w-full flex gap-2 p-4">
          <img className="w-16 h-16 bg-[#1c626e] rounded-full" src="https://robohash.org/1" alt="avatar" />
          <div className="flex flex-col w-full gap-4">
            <textarea className="bg-[#d3faf9] w-full rounded-lg h-28 resize-none outline-none p-2 text-lg" placeholder="What's new?"></textarea>
            <button className="bg-[#16bcc4] rounded-lg w-1/4 py-2 font-semibold transition-all duration-300 ease-in hover:bg-[#1597a5]">Send</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreatePost;
