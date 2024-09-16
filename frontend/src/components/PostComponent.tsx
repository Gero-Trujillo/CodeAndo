
// Interface para props
interface Props{
  username: string;
  message: string;
  userId: number;
}

// Componente de Post
function PostComponent(props: Props) {
  // Obtencion de propiedades
  const { username, message, userId } = props;
  // Retorno del componente
  return (
    <>
      <section className="w-full bg-[#0d363f] rounded-xl">
        <div className="w-full flex p-4 gap-2">
          <img
            className="w-16 h-16 rounded-full bg-[#1c626e]"
            src={`https://robohash.org/${userId}`}
            alt="avatar"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-lg text-[#edfefd]">
              {message}
            </h1>
            <p className="text-[#16bcc4] text-lg">@{username}</p>
          </div>
        </div>
      </section>
    </>
  );
}

// Exportacion de componente
export default PostComponent;
