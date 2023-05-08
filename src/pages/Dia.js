import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';
import { Howl } from 'howler';
import { FaPlay } from 'react-icons/fa';
import '../services/Style.css';
import axios from 'axios';

const Dia = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');
  const [sound, setSound] = useState(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handlePlay = () => {
    if (sound !== null) {
      sound.play();
    }
  };

  useEffect(() => {
    async function fetchSong() {
      const musicId = '1394943410'; // ID da música desejada

      const response = await axios.get(`https://itunes.apple.com/lookup?id=${musicId}&entity=song`);
      if (response.data.results.length > 0) {
        setPreviewUrl(response.data.results[0].previewUrl);
      }
    }
    fetchSong();
  }, []);

  useEffect(() => {
    if (previewUrl) {
      setSound(new Howl({
        src: [previewUrl],
        format: ['m4a']
      }));
    }
  }, [previewUrl]);

  return (
    <>
      <div className={`App ${isDarkMode ? 'dark' : ''}`}>
        <button onClick={toggleDarkMode}>Depois de ler o dia, toque aqui para ficar noite!</button>
      </div>

      <marquee style={{ maxWidth: '800px', margin: '0 auto' }}>Olá, este é um letreiro digital!</marquee>

      <div className="cs">Dia</div>

      <div className="cs">
        <NavLink to="/galeria">
          <AiOutlineRollback />
        </NavLink>
      </div>

      <br></br>

      <div className="cs">
        <button onClick={handlePlay}><FaPlay /></button>
      </div>

      <body className={`container3 ${isDarkMode ? 'dark' : ''}`}>
        <h3 text>
        
        Não sei como vai ser<br></br>
        Não sei quando vai chover<br></br>
        Não sei como vai amanhecer<br></br>
        Não sei de nada que irar acontecer<br></br>
        Imagine o que ira passar na TV<br></br>
        Mas, a minha certeza que vou te ter<br></br>
        Ao longa da caminhada a minha dupla de dois<br></br>
        Para sempre juntos, minha vontade e minha lei<br></br>
        Planos e sonhos que não quero deixar para depois<br></br>
        Quero que minha princesa vira rainha, pra só assim eu ser rei</h3>
        <h3 className="xablau">
        Dias vão e noites vem<br></br>
        É isso que quero com você meu bem<br></br>
        Minha doce flor bela e formosa<br></br>
        Como quero estar contigo nas noites de aurora<br></br>
        Anjo da luz ou da escuridao<br></br>
        Não sei, só sei que quero estar no seu coração<br></br>
        Me trancar dentro dele e jogar a chave longe<br></br>
        Tomara que ela se perca na escuridao<br></br>
        Mas enquanto isso, espero na paciência de um monge<br></br>
        Quando chegar o dia pra demonstrar minha grande paixão<br></br>
        </h3>
      </body>
    </>
  );
}

export default Dia;


