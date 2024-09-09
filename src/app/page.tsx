'use client'

import Image from "next/image";
import { HomeContext } from "./context/Homecontext";
import { useContext } from "react";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import { ImPlay3, ImPause2 } from "react-icons/im";
import { musics } from "./dados/music";

export default function Home() {
  const context = useContext(HomeContext);

  if (!context) {
    return <div>Carregando</div>;
  }

  const {
    playing, configPlayPause,
    nomeMusica, passarMusica, voltarMusica,
    selecionarMusica

  } = context;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 italic">
      <div className="flex flex-col items-center justify-center text-center italic">
        <h1 className="text-[60px] italic font-sans">{nomeMusica}</h1>
        <div className="flex items-center italic ">
          <button onClick={() => voltarMusica()}>
            <GrChapterPrevious  className="text-[80px]"/>
          </button>
          <button onClick={() => configPlayPause()}>
            {playing ? <ImPause2 className="text-[80px]"/> : <ImPlay3 className="text-[80px]"/>}
          </button>
          <button onClick={() => passarMusica()}>
            <GrChapterNext className="text-[80px] "/>
          </button>
        </div>
        <div className="flex flex-col items-center italic">
          {musics.map((music, i) => (
            <button onClick={() => selecionarMusica(i)}>
              <div key={i} className="hover:bg-red-700">
                <p className="text-[30px] italic font-sans">{music.nome}</p>
                <p className="text-[10px] italic font-sans">{music.author}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}