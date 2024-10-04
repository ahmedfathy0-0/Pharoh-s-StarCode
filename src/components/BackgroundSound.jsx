import React, { useEffect, useRef } from 'react';
import backgroundSound from '../backgroundsound/space.mp3'; // Adjust the path if needed

const BackgroundSound = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch((e) => {
       // console.log('Autoplay was prevented: ', e);
      });

      // Replay audio when it ends
      audio.addEventListener('ended', () => {
        audio.currentTime = 0;
        audio.play();
      });
    }

    
    return () => {
      if (audio) {
        audio.removeEventListener('ended', () => {
          audio.currentTime = 0;
          audio.play();
        });
      }
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} loop autoPlay>
        <source src={backgroundSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BackgroundSound;
