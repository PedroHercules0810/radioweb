'use client'
import { useContext } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { HomeContext } from "./context/Homecontext";

export default function Home() {
    const {
      contador,
      incremento
    } = useContext(HomeContext);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{contador}</h1>
      <button onClick={() => incremento()}><FaCirclePlus className="text-[400px] text-[red]"></FaCirclePlus></button>
    </main>
  );
}
