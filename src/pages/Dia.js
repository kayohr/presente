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
        <p text>xablau</p>
        <span className="xablau">xablau</span>
      </body>
    </>
  );
}

export default Dia;


