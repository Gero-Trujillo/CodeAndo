// Importacion de React, useState y useEffect 
import React, { useState, useEffect } from "react";
// Importacion de funcion createPost de la API
import { createPost } from "../api/posts";

// Definicion de componente CreatePost
function CreatePost() {
  // Definicion de estados
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState<number | null>(null);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // UseEffect para obtener userId y username de localStorage
  useEffect(() => {
    // Obtencion de userId y username de localStorage
    const storedUserId = localStorage.getItem("userId");
    const storedUsername = localStorage.getItem("username");

    // Comprobacion de existencia de userId
    if (storedUserId) {
      // Asignacion de userId a estado userId
      setUserId(Number(storedUserId));
    } else {
      // Manejo de errores
      console.error("User ID not found in cookies");
      setError("User ID not found. Please log in.");
    }
    // Comprobacion de existencia de username
    if(storedUsername){
      // Asignacion de username a estado username
      setUsername(storedUsername);
    }
  }, []);

  // Funcion para manejar el envio del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    // Previene el comportamiento por defecto
    e.preventDefault();
    // Limpieza de estados de error y success
    setError("");
    setSuccess("");

    // Comprobacion de existencia de userId
    if (userId === null) {
      // Manejo de errores
      console.error("User ID is not available");
      setError("User ID is not available. Please log in.");
      return;
    }

    // Comprobacion de existencia de mensaje
    if (!message.trim()) {
      // Manejo de errores
      setError("Please enter a message");
      return;
    }

    // Creacion de payload
    const payload = { message, userId, username };
    try {
      // Llamada a la funcion createPost de la API
      const res = await createPost(payload);
      // Limpieza de mensaje
      setMessage("");
      // Seteo de mensaje de exito
      setSuccess("Post created successfully!");
      // Log de respuesta
      console.log(res);
      // Recarga de pagina
      window.location.reload();
    } catch (err: any) {
      // Manejo de errores
      console.error("Error creating post:", err);
      setError(
        err.response?.data?.message ||
          "An error occurred while creating the post"
      );
    }
  };

  // Retorno del componente
  return (
    <>
      <section className="w-full bg-[#0d363f] rounded-xl">
        <div className="w-full flex gap-2 p-4">
          <img
            className="w-16 h-16 bg-[#1c626e] rounded-full"
            src={`https://robohash.org/${userId}`}
            alt="avatar"
          />
          <div className="flex flex-col w-full gap-4">
            <textarea
              className="bg-[#d3faf9] w-full rounded-lg h-28 resize-none outline-none p-2 text-lg"
              placeholder="What's new?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              className="bg-[#16bcc4] rounded-lg w-1/4 py-2 font-semibold transition-all duration-300 ease-in hover:bg-[#1597a5]"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// Exportacion de componente
export default CreatePost;
