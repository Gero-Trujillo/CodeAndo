import React from "react";
import ReactPlayer from "react-player/youtube";

interface Props {
  url: string;
  title: string;
  description: string;
}

function VideoComponent(props: Props) {
  const { url, title, description } = props;
  return (
    <>
      <div className="w-full flex flex-col bg-[#0d363f] rounded-xl md:flex-row">
        <div className="w-full">
          <ReactPlayer url={url} width="100%" controls />
        </div>
        <div className="p-4 flex flex-col gap-2 md:w-3/5">
          <h1 className="text-2xl text-[#16bcc4]">{title}</h1>
          <p className="text-[#edfefd]">{description}</p>
        </div>
      </div>
    </>
  );
}

export default VideoComponent;
