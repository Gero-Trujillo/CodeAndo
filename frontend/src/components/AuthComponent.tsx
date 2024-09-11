import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loginRequest, registerRequest } from "../api/auth";

function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const handleLogin = () => setIsLogin(!isLogin);
  const variants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -200 },
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const payload = { username, password, country };
    let res: any;
    try {
      if (isLogin) {
        res = await loginRequest(payload);
      } else {
        res = await registerRequest(payload);
      }
      console.log(res);
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLogin ? (
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
