'use client'

import { HomeContext } from "./context/Homecontext";
import { useContext, useEffect } from "react";
import { ImPlay3, ImPause2 } from "react-icons/im";
import { musics } from "./dados/music";
import { FaVolumeOff, FaVolumeUp } from "react-icons/fa";
import { GiNextButton, GiPreviousButton } from "react-icons/gi"

const formatTime = (seconds:number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${remainingSeconds.toString().padStart(2,   
 '0')}`;   

}



export default function Home() {
  const { 
    playing,
    volume,
    muted,
    currentTime,
    totalTime,
    panner,
    audioIndex,
    configPlayPause,
    configAudio,
    configAudioIndex,
    configVolume,
    configPanner,
    configCurrentTime,
    configMuted,
    handleNextMusic,
    handlePreviousMusic
  } = useContext(HomeContext);

    useEffect(()=>{
      configAudio();
    }, []);


    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-slate-200"></div>
         <h1>{playing}</h1>
         <h1 className="italic">{musics[audioIndex].author}</h1>
         <h1 className="italic">{musics[audioIndex].nome}</h1>
         <img
        src={musics[audioIndex].image} 
        alt={musics[audioIndex].description} 
        width={500} 
        height={300} 
        className="object-cover rounded-lg" 
      />

         <div className="items-center justify-between">
        <button onClick={()=> handleNextMusic()}>
          { (<GiPreviousButton className="text-[50px] text-red-600" />)}
         </button>
         <button onClick={()=> configMuted()}>
             {
              (muted) ? 
               (<FaVolumeOff className="text-[50px]" />) : 
               (<FaVolumeUp className="text-[50px]"/>)
             }
         </button>
         
         <button onClick={()=> configPlayPause()}>
             {
              (playing) ? 
               (<ImPause2 className="text-[50px]" />) : 
               (<ImPlay3 className="text-[50px]"/>)
             }
         </button>

         <button onClick={()=> handleNextMusic()}>
          { (<GiNextButton className="text-[50px] text-red-600" />)}
         </button>
          </div>

             <div className="items-center justify-between">
              <div>
                <h1 className="">Volume</h1>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step="0.01"
                  value={volume}
                  onChange={(e) => configVolume(Number(e.target.value))}
                />
                </div>
                <div>
                  <h1 className="items-center justify-between">Balanço</h1>
              <input 
                  type="range" 
                  min="-1" 
                  max="1" 
                  value={panner}
                  onChange = {e => configPanner(Number(e.target.value))}
                  step="0.01" 
                />
                </div>
              <h1>{formatTime(currentTime)}</h1>
                <input 
                  type="range"
                  min="0"
                  max={totalTime}
                  value={currentTime}
                  onChange={e => configCurrentTime(Number(e.target.value))}
                />
  
             </div>
             <div>
                {
                  musics.map((music, index) => {
                    return (
                      <div key={index} onClick={(e) => configAudioIndex(index)} className="items-center justify-center text-[20px]">
                        <h1 className="grid place-items-center text-[20px] italic">{music.nome}</h1>
                        <h1 className="grid place-items-center text-[10px] italic">{music.description}</h1>
                      </div>
                    )
                  })
                }
             </div>
         

      </main>
    );
}