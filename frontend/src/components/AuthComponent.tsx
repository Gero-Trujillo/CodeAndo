// Importacion de React y useState
import React, { useState } from "react";
// Importacion de motion y AnimatePresence
import { motion, AnimatePresence } from "framer-motion";
// Importacion de funciones API
import { loginRequest, registerRequest } from "../api/auth";

// Definicion de componente Register
function Register() {
  // Definicion de estados
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  // Funcion para manejar el cambio de estado de isLogin
  const handleLogin = () => setIsLogin(!isLogin);
  // Variante de animacion
  const variants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -200 },
  };
  // Funcion para manejar el envio del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    // Previene el comportamiento por defecto
    e.preventDefault();
    // Limpieza de estado de error
    setError("");
    // Creacion de payload
    const payload = { username, password, country };
    // Init de variable
    let res: any;
    try {
      // Comprobacion de isLogin para saber si esta en el form de login o registro
      if (isLogin) {
        // Llamada a la funcion loginRequest de la API
        res = await loginRequest(payload);
        // Actualizacion de localStorage
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("userId", res.data[0]);
        localStorage.setItem("username", res.data[1]);
        // Redireccion a la pagina principal
        window.location.href = "/";
      } else {
        // Llamada a la funcion registerRequest de la API
        res = await registerRequest(payload);
        // Actualizacion de localStorage
        window.location.href = "/authPage";
      } 
    } catch (err: any) {
      // Manejo de errores
      setError(err.response.data.message);
    }
  };

  // Retorno del componente
  return (
    <>
      <AnimatePresence mode="wait">
        {isLogin ?  (
          <motion.section
            className="w-full h-screen flex justify-center items-center"
            key={isLogin ? "singin" : "singup"}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#0d363f] flex flex-col rounded-xl w-4/5 md:flex-row md:h-3/6 xl:w-3/5">
              <div className="bg-[#16bcc4] flex flex-col items-center justify-center rounded-b-2xl rounded-t-xl w-full">
                <div className="flex flex-col items-center justify-center px-4 py-10 gap-4">
                  <h1 className="text-2xl text-[#edfefd]">Hello, Coder!</h1>
                  <p className="text-[#d3faf9]">
                    Do you haven't an account?, Register here
                  </p>
                  <button
                    className="border-2 border-[#edfefd] py-2 px-6 text-[#edfefd] transition-all duration-300 ease-in hover:bg-[#0d363f] hover:border-[#0d363f]"
                    onClick={handleLogin}
                  >
                    Sing Up
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-4 py-10">
                <h1 className="text-3xl text-[#16bcc4] font-semibold">
                  Sing In
                </h1>
                <form className="flex flex-col gap-2">
                  <input
                    className="outline-none p-2 rounded-md bg-[#edfefd]"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    className="outline-none p-2 rounded-md bg-[#edfefd]"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="border-2 py-2 px-6 text-[#edfefd] transition-all duration-300 ease-in hover:bg-[#16bcc4] border-[#16bcc4]"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Sing In
                  </button>
                </form>
              </div>
            </div>
          </motion.section>
        ) : (
          <motion.section
            className="w-full h-screen flex justify-center items-center"
            key={isLogin ? "singin" : "singup"}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#0d363f] flex flex-col rounded-xl w-4/5 md:flex-row md:h-3/6 xl:w-3/5">
              <div className="flex flex-col items-center justify-center gap-4 py-10 w-full">
                <h1 className="text-3xl text-[#16bcc4] font-semibold">
                  Sing Up
                </h1>
                <form className="flex flex-col gap-2">
                  <input
                    className="outline-none p-2 rounded-md bg-[#edfefd]"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    className="outline-none p-2 rounded-md bg-[#edfefd]"
                    type="text"
                    placeholder="Enter your country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                  <input
                    className="outline-none p-2 rounded-md bg-[#edfefd]"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="border-2 py-2 px-6 text-[#edfefd] transition-all duration-300 ease-in hover:bg-[#16bcc4] border-[#16bcc4]"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Sing Up
                  </button>
                </form>
              </div>
              <div className="bg-[#16bcc4] flex flex-col items-center justify-center rounded-b-xl rounded-t-2xl w-full">
                <div className="flex flex-col items-center justify-center px-4 py-10 gap-4">
                  <h1 className="text-2xl text-[#edfefd]">Hello, Coder!</h1>
                  <p className="text-[#d3faf9]">
                    Do you have an account?, Login here
                  </p>
                  <button
                    className="border-2 border-[#edfefd] py-2 px-6 text-[#edfefd] transition-all duration-300 ease-in hover:bg-[#0d363f] hover:border-[#0d363f]"
                    onClick={handleLogin}
                  >
                    Sing In
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
export default Register;
