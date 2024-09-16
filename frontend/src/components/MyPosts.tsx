// Importacion de UseEffect y UseState de React
import { useEffect, useState } from "react";
// Importacion de PostProfileComponent
import PostProfileComponent from "./PostProfileComponent";
// Importacion de funciones API
import { getPostsByUser } from "../api/posts";

// Definicion de interfaz Post
interface Post {
  id: number;
  message: string;
  userId: number;
  username: string;
}

// Definicion de componente MyPosts
function MyPosts() {
  // Definicion de estados
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState("");
  // UseEffect para obtener posts del usuario
  useEffect(() => {
    // Obtencion de userId de localStorage
    const userId = localStorage.getItem("userId");
    // Funcion para obtener posts del usuario
    const fetchPosts = async () => {
      try {
        // Llamada a la funcion getPostsByUser de la API
        const res = await getPostsByUser(parseInt(userId || ""));
        // Asignacion de posts a estado posts
        setPosts(res.data);
      } catch (err: any) {
        // Manejo de errores
        console.error("Error getting posts:", err);
        setError(
          err.response?.data?.message || "An error occurred while getting posts"
        );
      }
    };
    // Llamada a la funcion fetchPosts
    fetchPosts();
  }, []);

  // Retorno del componente
  return (
    <>
      <section className="flex flex-col gap-2">
        {posts
          .slice()
          .reverse()
          .map((post) => (
            <PostProfileComponent
              key={post.id}
              postId={post.id}
              message={post.message}
              username={post.username}
              userId={post.userId}
            />
          ))}
      </section>
    </>
  );
}

// Exportacion de componente
export default MyPosts;
