// Importacion de React Player
import ReactPlayer from "react-player/youtube";

// Definicion de interfaz Props
interface Props {
  url: string;
  title: string;
  description: string;
}

// Definicion de componente VideoComponent
function VideoComponent(props: Props) {
  // Obtencion de propiedades
  const { url, title, description } = props;
  // Retorno del componente
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

// Exportacion de componente VideoComponent
export default VideoComponent;
