"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/MatchingGame.module.css';

// Define Pair type based on the AnimalsPairs array
type Pair = {
  english: string;
  slovenian: string;
  imgOn: string;
  imgOff: string;
  textOn: string;
  textOff: string;
  audioOn: string;
  audioOff: string;
};

// AnimalsPairs array
const AnimalsPairs: Pair[] = [ 
  { english: 'mouse', slovenian: 'miš', imgOn: '/miš.png', imgOff: '/miš.png', textOn: 'miš', textOff: 'mouse', audioOn: '/miš.wav', audioOff: '/mouse.wav' },
  { english: 'dog', slovenian: 'pes', imgOn: '/pes.png', imgOff: '/pes.png', textOn: 'pes', textOff: 'dog', audioOn: '/pes.wav', audioOff: '/dog.wav' },
  { english: 'cat', slovenian: 'mačka', imgOn: '/mačka.png', imgOff: '/mačka.png', textOn: 'mačka', textOff: 'cat', audioOn: '/mačka.wav', audioOff: '/cat.wav' },
  { english: 'giraffe', slovenian: 'žirafa', imgOn: '/žirafa.png', imgOff: '/žirafa.png', textOn: 'žirafa', textOff: 'giraffe', audioOn: '/žirafa.wav', audioOff: '/giraffe.wav' },
  { english: 'elephant', slovenian: 'slon', imgOn: '/slon.png', imgOff: '/slon.png', textOn: 'slon', textOff: 'elephant', audioOn: '/slon.wav', audioOff: '/elephant.wav' },
  { english: 'horse', slovenian: 'konj', imgOn: '/konj.png', imgOff: '/konj.png', textOn: 'konj', textOff: 'horse', audioOn: '/konj.wav', audioOff: '/horse.wav' },
  { english: 'chicken', slovenian: 'kokoš', imgOn: '/piščanec.png', imgOff: '/piščanec.png', textOn: 'kokoš', textOff: 'chicken', audioOn: '/kokoš.wav', audioOff: '/chicken.wav' },
  { english: 'cow', slovenian: 'krava', imgOn: '/krava.png', imgOff: '/krava.png', textOn: 'krava', textOff: 'cow', audioOn: '/krava.wav', audioOff: '/cow.wav' },
  { english: 'pig', slovenian: 'prašič', imgOn: '/prašič.png', imgOff: '/prašič.png', textOn: 'prašič', textOff: 'pig', audioOn: '/prašič.wav', audioOff: '/pig.wav' },
];

export default function MatchingGame() {
  const [currentPair, setCurrentPair] = useState<Pair | null>(null);
  const [options, setOptions] = useState<Pair[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    loadNewRound();
  }, []);

  const loadNewRound = () => {
    // Select a random pair as the correct answer
    const correctPair = AnimalsPairs[Math.floor(Math.random() * AnimalsPairs.length)];
    setCurrentPair(correctPair);

    // Select two additional random pairs for the options
    const shuffledPairs = [...AnimalsPairs].sort(() => 0.5 - Math.random());
    const options = [correctPair, ...shuffledPairs.filter(pair => pair !== correctPair).slice(0, 2)];
    setOptions(options.sort(() => 0.5 - Math.random())); // Shuffle the options

    // Reset the feedback state
    setIsCorrect(null);

    // Play the Slovenian audio sample
    if (audioRef.current) {
      audioRef.current.src = correctPair.audioOn;
      audioRef.current.play();
    }
  };

  const handleOptionClick = (selectedPair: Pair) => {
    if (!currentPair) return;
    const isMatch = selectedPair.slovenian === currentPair.slovenian;
    setIsCorrect(isMatch);
  };

  return (
    <div className={styles.container}>
      <h1>Animal Matching Game</h1>

      {currentPair && (
        <div className={styles.prompt}>
          <p>Which image matches this Slovenian word or sound?</p>
          <h2>{currentPair.textOn}</h2>
          <audio ref={audioRef} controls hidden />
        </div>
      )}

      <div className={styles.options}>
        {options.map((option, index) => (
          <div key={index} className={styles.option} onClick={() => handleOptionClick(option)}>
            <Image src={option.imgOn} alt={option.slovenian} width={150} height={150} />
          </div>
        ))}
      </div>

      {isCorrect !== null && (
        <div className={styles.feedback}>
          {isCorrect ? <p>Correct! 🎉</p> : <p>Try Again!</p>}
          <button onClick={loadNewRound}>Next</button>
        </div>
      )}
    </div>
  );
}
