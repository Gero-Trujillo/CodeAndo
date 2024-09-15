// Importacion de iconos
import { CiLogout } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { LuHome } from "react-icons/lu";
import { BiSolidVideos } from "react-icons/bi";
// Importacion de funciones API
import { logoutRequest } from "../api/auth";

// Definicion de componente NavMobile
function NavMobile() {
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
      <nav className="w-full bg-[#0d363f] border-b-2 border-[#edfefd] sticky top-0">
        <div className="w-full flex flex-col items-center gap-4 py-4">
          <h1 className="text-[#16bcc4] text-4xl font-semibold">CodeAndo</h1>
          <div className="w-full flex items-center justify-center gap-8 text-[#16bcc4] text-4xl">
            <a href="/">
              <span>
                <LuHome />
              </span>
            </a>
            <a href="/learning">
              <span>
                <BiSolidVideos />
              </span>
            </a>
            <a href="/profile">
              <span>
                <GoPerson />
              </span>
            </a>
            <span onClick={logout}>
              <CiLogout />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

// Exportacion de componente
export default NavMobile;
