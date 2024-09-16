// Importacion de iconos
import { RxCrossCircled } from "react-icons/rx";
// Importacion de UseState
import { useState } from "react";
// Importacion de funciones API
import { deletePost } from "../api/posts";

// Definicion de interfaz Props
interface Props {
  postId: number;
  username: string;
  message: string;
  userId: number;
}

// Definicion de componente PostProfileComponent
function PostProfileComponent(props: Props) {
  // Definicion de estados
  const { postId, username, message, userId } = props;
  const [show, setShow] = useState(false);

  // Funcion para mostrar el modal de confirmacion de eliminacion
  const handleShow = () => setShow(!show);

  // Funcion para manejar la eliminacion de un post
  const handleDelete = async () => {
    try {
      // Llamada a la funcion deletePost de la API
      await deletePost(postId);
      // Recarga de la pagina
      window.location.reload();
      // Log de eliminacion
      console.log("Post deleted");
    } catch (err: any) {
      // Manejo de errores
      console.error("Error deleting post:", err);
    }
  }

  // Retorno del componente
  return (
    <>
      {/* Seccion de post */}
      <section className="w-full bg-[#0d363f] rounded-xl">
        <div className="w-full flex p-4 gap-2">
          <img
            className="w-16 h-16 rounded-full bg-[#1c626e]"
            src={`https://robohash.org/${userId}`}
            alt="avatar"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-lg text-[#edfefd]">{message}</h1>
            <p className="text-[#16bcc4] text-lg">@{username}</p>
          </div>
          <div
            className="flex-1 flex justify-end text-[#16bcc4] text-4xl cursor-pointer"
            onClick={handleShow}
          >
            <RxCrossCircled />
          </div>
        </div>
      </section>

      {/* Modal de confirmacion de elimininacion */}
      {show && (
        <section className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-[#00000057]">
          <div className="bg-[#0d363f] p-8 rounded-lg flex flex-col gap-4">
            <h1 className="text-[#16bcc4] text-4xl">Are you sure?</h1>
            <div className="flex gap-2">
              <button
                className="bg-transparent border border-[#16bcc4] p-2 rounded-md text-white transition-all duration-300 ease-in hover:bg-[#16bcc4]"
                onClick={handleShow}
              >
                Cancel
              </button>
              <button className="bg-[#16bcc4] p-2 rounded-md border border-[#16bcc4] text-white transition-all duration-300 ease-in hover:bg-[#1597a5]" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

// Exportacion de componente PostProfileComponent
export default PostProfileComponent;
