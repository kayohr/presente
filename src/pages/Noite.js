import axios from 'axios';
import { Howl } from 'howler';
import React, { useEffect, useState } from 'react';
import { AiOutlineRollback } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import '../services/Style.css';

const Noite = () => {
  const [previewUrl, setPreviewUrl] = useState('');
  const [sound, setSound] = useState(null);

  useEffect(() => {
    async function fetchSong() {
      const response = await axios.get(`https://itunes.apple.com/search?term=Melim+Dois+Coracoes&media=music&entity=song&limit=1`);
    setPreviewUrl(response.data.results[0].previewUrl);
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

  const handlePlay = () => {
    sound.play();
  };

  return (
    <>
      <div>Noite</div>
      <NavLink to="/galeria">
        <AiOutlineRollback />
      </NavLink>
      <div className="noite" />
      <button onClick={handlePlay}>Play</button>
      <div className="star-wars-text intro">
  <marquee behavior="scroll" direction="up" scrollamount="4">
    <p>A long time ago in a galaxy far, far away....<br></br>xablau</p>
  </marquee>
</div>
    </>
  );
}

export default Noite;


