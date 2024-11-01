"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './Home.module.css';

const pairs = [
  { 
    english: 'Off', 
    slovenian: 'Izklopljen', 
    imgOn: '/off.png', 
    imgOff: '/on.png', 
    textOn: 'ugasni luč', 
    textOff: 'prižgi luč',
    audioOn: '/ugasni.wav', 
    audioOff: '/prizgi.wav' 
  },
  { 
    english: 'Open', 
    slovenian: 'Odpri', 
    imgOn: '/odpri.png', 
    imgOff: '/zapri.png', 
    textOn: 'odpri vrata', 
    textOff: 'zapri vrata',
    audioOn: '/odpri.wav', 
    audioOff: '/zapri.wav' 
  },
  { 
    english: 'Hello!', 
    slovenian: 'Živjo!', 
    imgOn: '/odpri.png', 
    imgOff: '/zapri.png', 
    textOn: 'odpri vrata', 
    textOff: 'zapri vrata',
    audioOn: '/odpri.wav', 
    audioOff: '/zapri.wav' 
  },
  { 
    english: 'Up', 
    slovenian: 'Gor', 
    imgOn: '/gor.png', 
    imgOff: '/dol.png', 
    textOn: 'pojdi gor', 
    textOff: 'pojdi dol',
    audioOn: '/gor.wav', 
    audioOff: '/dol.wav' 
  },
  { 
    english: 'uho', 
    slovenian: 'oko', 
    imgOn: '/uho.png', 
    imgOff: '/oko.png', 
    textOn: 'uho', 
    textOff: 'oko',
    audioOn: '/uho.wav', 
    audioOff: '/oko.wav' 
  },
  { 
    english: 'glava', 
    slovenian: 'usta', 
    imgOn: '/glava.png', 
    imgOff: '/usta.png', 
    textOn: 'glava', 
    textOff: 'usta',
    audioOn: '/glava.wav', 
    audioOff: '/usta.wav' 
  },
  { 
    english: 'živjo', 
    slovenian: 'čao', 
    imgOn: '/živjo.png', 
    imgOff: '/čao.png', 
    textOn: 'živjo', 
    textOff: 'čao',
    audioOn: '/živjo.wav', 
    audioOff: '/čao.wav' 
  },
];

export default function Home() {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [isOnState, setIsOnState] = useState(true);
  const [volume, setVolume] = useState(1.0);
  const audioRef = useRef(null);

  const toggleImage = () => {
    setIsOnState(!isOnState);

    // Play the appropriate audio file based on the new state
    if (audioRef.current) {
      audioRef.current.src = isOnState ? pairs[currentPairIndex].audioOff : pairs[currentPairIndex].audioOn;
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  };

  const goToNextPair = () => {
    setIsOnState(true);  // Reset to 'on' state when moving to the next pair
    setCurrentPairIndex((prevIndex) => (prevIndex + 1) % pairs.length);
  };

  const goToPreviousPair = () => {
    setIsOnState(true);  // Reset to 'on' state when moving to the previous pair
    setCurrentPairIndex((prevIndex) => (prevIndex - 1 + pairs.length) % pairs.length);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const { imgOn, imgOff, textOn, textOff } = pairs[currentPairIndex];

  return (
    <div className={styles.container}>
      <div className={styles.card} onClick={toggleImage}>
        <Image
          src={isOnState ? imgOn : imgOff}
          alt={isOnState ? textOn : textOff}
          width={300}
          height={300}
          className={styles.image}
        />
        <h1 className={styles.text}>{isOnState ? textOn : textOff}</h1>
      </div>
      
      {/* Navigation Buttons */}
      <div className={styles.navigationButtons}>
        <button onClick={goToPreviousPair} className={styles.navButton}>
          <Image src="/prev.png" alt="Previous" width={120} height={120} />
        </button>
        <button onClick={goToNextPair} className={styles.navButton}>
          <Image src="/next.png" alt="Next" width={120} height={120} />
        </button>
      </div>

      {/* Volume Control Slider */}
      {/* <div className={styles.volumeControl}>
        <label>Volume:</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div> */}

      {/* Audio Element */}
      <audio ref={audioRef} />
    </div>
  );
}
