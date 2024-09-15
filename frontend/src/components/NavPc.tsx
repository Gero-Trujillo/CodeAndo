// Importacion Iconos
import { CiLogout } from "react-icons/ci";
import { LuHome } from "react-icons/lu";
import { BiSolidVideos } from "react-icons/bi";
import { FaConnectdevelop } from "react-icons/fa";
// Importacion de UseEffect y UseState
import { useEffect, useState } from "react";
// Importacion de funciones API
import { logoutRequest } from "../api/auth";

// Definicion de componente NavPc
function NavPc() {
  // Definicion de estado userId
  const [userId, setUserId] = useState<number | null>(null);
  // UseEffect para obtener userId de localStorage
  useEffect(() => {
    // Obtencion de userId de localStorage
    const userIdStr = localStorage.getItem("userId");
    // Asignacion de userId a estado userId
    setUserId(parseInt(userIdStr || ""));
  }, []);
  // Funcion para logout
  const logout = async () => {
    try {
      // Limpieza de localStorage
      localStorage.clear();
      // Llamada a la funcion logoutRequest de la API
      const res = await logoutRequest();
      // Redireccion a la pagina de autenticacion
      window.location.href = "/authPage";
      // Log de respuesta
      console.log(res);
    } catch (error) {
      // Manejo de errores
      console.log(error);
    }
  };
  // Retorno del componente
  return (
    <>
      <nav className="w-full bg-[#0d363f] rounded-xl h-full">
        <div className="w-full h-full flex flex-col justify-between p-6">
          <div className="flex flex-col gap-20 text-[#16bcc4]">
            <div className="flex gap-2 items-center text-5xl">
              <FaConnectdevelop />
              <h1 className="text-5xl font-semibold">CodeAndo</h1>
            </div>
            <div className="flex flex-col gap-4 text-4xl">
              <a href="/">
                <span className="flex gap-2 cursor-pointer">
                  <LuHome />
                  <h2 className="text-3xl text-[#edfefd]">Home</h2>
                </span>
              </a>
              <a href="/learning">
                <span className="flex gap-2 cursor-pointer">
                  <BiSolidVideos />
                  <h2 className="text-3xl text-[#edfefd]">Learning</h2>
                </span>
              </a>
              <a href="/profile">
                <span className="flex gap-2 cursor-pointer">
                  <img
                    className="w-10 h-10 rounded-full bg-[#1c626e]"
                    src={`https://robohash.org/${userId}`}
                    alt="avatar"
                  />
                  <h2 className="text-3xl text-[#edfefd]">Profile</h2>
                </span>
              </a>
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

// Exportacion de componente NavPc
export default NavPc;
