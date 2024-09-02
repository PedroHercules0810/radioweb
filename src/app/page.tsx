'use client'
import { useContext } from "react";
import { Fa6, FaCirclePlus } from "react-icons/fa6";
import { IoPlayCircle, IoPauseCircle } from "react-icons/io5";
import { HomeContext } from "./context/Homecontext";

export default function Home() {
  const {
    contador,
    incremento,
    playing,
    playing_texto,
    togglePlaying
  } = useContext(HomeContext);



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-[300px]">{playing_texto}</h1>
      <button onClick={togglePlaying}>
        {playing ? <IoPauseCircle className="text-[400px] text-[red]" /> : <IoPlayCircle className="text-[400px] text-[red]" />}
      </button>
    </main>
  );
}
