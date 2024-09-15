// Importacion de librerias y componentes
import { useEffect, useState } from "react";
import NavMobile from "../components/NavMobile";
import CreatePost from "../components/CreatePost";
import PostComponent from "../components/PostComponent";
import NavPc from "../components/NavPc";
// Importacion de funciones API
import { getPosts } from "../api/posts";

// Definicion de interfaz Post
interface Post {
  id: number;
  message: string;
  userId: number;
  username: string;
}

// Definicion de componente HomePage
function HomePage() {
  // Definicion de estados
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState("");
  // Uso de useEffect para obtener los posts
  useEffect(() => {
    // Funcion asincrona para obtener los posts
    const fetchPosts = async () => {
      try {
        // Llamada a la funcion getPosts de la API
        const res = await getPosts();
        // Asignacion de los posts obtenidos al estado posts
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
      {/* Seccion para dispositivos moviles */}
      <section className="w-full lg:hidden">
        <NavMobile />
        <section className="p-2 flex flex-col gap-4">
          <CreatePost />
          {/* Mapeo de los posts obtenidos */}
          {posts
            .slice()
            .reverse()
            .map((post) => (
              <PostComponent
                key={post.id}
                message={post.message}
                username={post.username}
                userId={post.userId}
              />
            ))}
        </section>
      </section>

      {/* Seccion para dispositivos de escritorio */}
      <section className="hidden w-full h-screen p-8 lg:flex">
        <div className="w-1/4">
          <NavPc />
        </div>
        <div className="flex flex-col flex-1 px-20 xl:px-40 2xl:px-60 gap-4 overflow-y-auto scrollbar-hide">
          <CreatePost />
          {/* Mapeo de los posts obtenidos */}
          {posts
            .slice()
            .reverse()
            .map((post) => (
              <PostComponent
                key={post.id}
                message={post.message}
                username={post.username}
                userId={post.userId}
              />
            ))}
        </div>
      </section>
    </>
  );
}

// Exportacion del componente
export default HomePage;
