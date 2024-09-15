// Importacion de librerias y componentes
import React, { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
// Importacion de funciones API
import { getUser, updateUser } from "../api/users";
import { updatePost } from "../api/posts";

// Definicion de interfaz User
interface User {
  username: string;
  country: string;
  password: string;
}

// Definicion de componente ProfileDetails
function ProfileDetails() {
  // Definicion de estados
  const [user, setUser] = useState<User | null>(null);
  const [userIdImg, setUserIdImg] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  // Funcion para mostrar el modal de formulario de edicion
  const showHandler = () => {
    // Cambio de estado show
    setShow(!show);
  };
  // Funcion para manejar la edicion de usuario
  const handleEdit = async (e: React.FormEvent) => {
    // Previene el comportamiento por defecto
    e.preventDefault();
    // Creacion de payload
    const payload = { username, country, password };
    // Init de variables
    let res: any;
    let res2: any;
    try {
      // Llamada a la funcion updateUser de la API
      res = await updateUser(parseInt(localStorage.getItem("userId") || ""), payload);
      // Actualizacion de localStorage
      localStorage.setItem("username", username);
      // Recarga de la pagina
      window.location.reload();
      try {
        // Llamada a la funcion updatePost de la API
        res2 = await updatePost(parseInt(localStorage.getItem("userId") || ""), { username });
      } catch (error) {
        // Manejo de errores
        console.log(error)
      }
    } catch (error) {
      // Manejo de errores
      console.log(error);
    }
  }
  // UseEffect para obtener el usuario
  useEffect(() => {
    // Obtencion de userId de localStorage
    const userId = localStorage.getItem("userId");
    // Seteo de userIdImg
    setUserIdImg(parseInt(userId || ""));

    // Funcion para obtener usuarios
    const fetchUsers = async () => {
      try {
        // Llamada a la funcion getUser de la API
        const res = await getUser(parseInt(userId || ""));
        // Seteo de usuario
        setUser(res.data[0]);
        // Seteo de username, country y password
        setUsername(res.data[0].username);
        setCountry(res.data[0].country);
        setPassword(res.data[0].password);
      } catch (err: any) {
        // Manejo de errores
        console.error("Error getting users:", err);
        setError(
          err.response?.data?.message || "An error occurred while getting users"
        );
      }
    };
    // Llamada a la funcion fetchUsers
    fetchUsers();
  }, []);
  // Retorno del componente
  return (
    <>
      {/* Modal de edicion */}
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
      
      {/* Seccion de detalles de perfil */}
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

// Exportacion de componente ProfileDetails
export default ProfileDetails;
