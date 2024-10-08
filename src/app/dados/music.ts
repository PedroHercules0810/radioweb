type Music = {
    nome: string;
    author: string;
    description: string;
    urlAudio: string;
    image: string;
}

export const musics: Music[] = [
    {
        nome: "Fear of the Dark",
        author: "Iron Maiden",
        description: "FEAR OF THE DARK",
        urlAudio: "audios/audio2.mp3",
        image: "../../images/fear.jpeg"
    },
    {
        nome: "Maitake",
        author: "Vtuber",
        description: "GURUGURU GURUGURU",
        urlAudio: "audios/audio 1.mp3",
        image: "../../images/guru.jpg"
    },
    {
        nome: "The Emptiness Machine",
        author: "Linkin Park",
        description: "Your blade is sharp with precision",
        urlAudio: "audios/audio3.mp3",
        image: "../../images/machine.jpg"
    }
]