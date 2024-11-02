"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './Home.module.css';

// Define the interface for each pair in the categories
interface Pair {
  english: string;
  slovenian: string;
  imgOn: string;
  imgOff: string;
  textOn: string;
  textOff: string;
  audioOn: string;
  audioOff: string;
}

// Arrays for each category using the Pair type
const AnimalsPairs: Pair[] = [ 
  { 
    english: 'bunny', 
    slovenian: 'zajec', 
    imgOn: '/zajec.png', 
    imgOff: '/zajec.png', 
    textOn: 'zajec', 
    textOff: 'bunny',
    audioOn: '/zajec.wav', 
    audioOff: '/bunny.wav' 
  },
  { 
    english: 'mouse', 
    slovenian: 'miš', 
    imgOn: '/miš.png', 
    imgOff: '/miš.png', 
    textOn: 'miš', 
    textOff: 'mouse',
    audioOn: '/miš.wav', 
    audioOff: '/mouse.wav' 
  },
  { 
    english: 'donkey', 
    slovenian: 'osel', 
    imgOn: '/osel.png', 
    imgOff: '/osel.png', 
    textOn: 'osel', 
    textOff: 'donkey',
    audioOn: '/osel.wav', 
    audioOff: '/donkey.wav' 
  },
  { 
    english: 'hamster', 
    slovenian: 'hrček', 
    imgOn: '/hrček.png', 
    imgOff: '/hrček.png', 
    textOn: 'hrček', 
    textOff: 'hamster',
    audioOn: '/hrček.wav', 
    audioOff: '/hamster.wav' 
  },
  { 
    english: 'dog', 
    slovenian: 'pes', 
    imgOn: '/pes.png', 
    imgOff: '/pes.png', 
    textOn: 'pes', 
    textOff: 'dog',
    audioOn: '/pes.wav', 
    audioOff: '/dog.wav' 
  },
  { 
    english: 'cat', 
    slovenian: 'mačka', 
    imgOn: '/mačka.png', 
    imgOff: '/mačka.png', 
    textOn: 'mačka', 
    textOff: 'cat',
    audioOn: '/mačka.wav', 
    audioOff: '/cat.wav' 
  },
];
const AlphabetPairs: Pair[] = [
  { english: 'A', slovenian: 'A', imgOn: '/a.png', imgOff: '/a.png', textOn: 'A', textOff: 'a', audioOn: '/a.wav', audioOff: '/a.wav' },
  { english: 'B', slovenian: 'B', imgOn: '/b.png', imgOff: '/b.png', textOn: 'B', textOff: 'b', audioOn: '/b.wav', audioOff: '/b.wav' },
  { english: 'C', slovenian: 'C', imgOn: '/c.png', imgOff: '/c.png', textOn: 'C', textOff: 'c', audioOn: '/c.wav', audioOff: '/c.wav' },
  { english: 'Č', slovenian: 'Č', imgOn: '/č.png', imgOff: '/č.png', textOn: 'Č', textOff: 'č', audioOn: '/č.wav', audioOff: '/č.wav' },
  { english: 'D', slovenian: 'D', imgOn: '/d.png', imgOff: '/d.png', textOn: 'D', textOff: 'd', audioOn: '/d.wav', audioOff: '/d.wav' },
  { english: 'E', slovenian: 'E', imgOn: '/e.png', imgOff: '/e.png', textOn: 'E', textOff: 'e', audioOn: '/e.wav', audioOff: '/e.wav' },
  { english: 'F', slovenian: 'F', imgOn: '/f.png', imgOff: '/f.png', textOn: 'F', textOff: 'f', audioOn: '/f.wav', audioOff: '/f.wav' },
  { english: 'G', slovenian: 'G', imgOn: '/g.png', imgOff: '/g.png', textOn: 'G', textOff: 'g', audioOn: '/g.wav', audioOff: '/g.wav' },
  { english: 'H', slovenian: 'H', imgOn: '/h.png', imgOff: '/h.png', textOn: 'H', textOff: 'h', audioOn: '/h.wav', audioOff: '/h.wav' },
  { english: 'I', slovenian: 'I', imgOn: '/i.png', imgOff: '/i.png', textOn: 'I', textOff: 'i', audioOn: '/i.wav', audioOff: '/i.wav' },
  { english: 'J', slovenian: 'J', imgOn: '/j.png', imgOff: '/j.png', textOn: 'J', textOff: 'j', audioOn: '/j.wav', audioOff: '/j.wav' },
  { english: 'K', slovenian: 'K', imgOn: '/k.png', imgOff: '/k.png', textOn: 'K', textOff: 'k', audioOn: '/k.wav', audioOff: '/k.wav' },
  { english: 'L', slovenian: 'L', imgOn: '/l.png', imgOff: '/l.png', textOn: 'L', textOff: 'l', audioOn: '/l.wav', audioOff: '/l.wav' },
  { english: 'M', slovenian: 'M', imgOn: '/m.png', imgOff: '/m.png', textOn: 'M', textOff: 'm', audioOn: '/m.wav', audioOff: '/m.wav' },
  { english: 'N', slovenian: 'N', imgOn: '/n.png', imgOff: '/n.png', textOn: 'N', textOff: 'n', audioOn: '/n.wav', audioOff: '/n.wav' },
  { english: 'O', slovenian: 'O', imgOn: '/o.png', imgOff: '/o.png', textOn: 'O', textOff: 'o', audioOn: '/o.wav', audioOff: '/o.wav' },
  { english: 'P', slovenian: 'P', imgOn: '/p.png', imgOff: '/p.png', textOn: 'P', textOff: 'p', audioOn: '/p.wav', audioOff: '/p.wav' },
  { english: 'R', slovenian: 'R', imgOn: '/r.png', imgOff: '/r.png', textOn: 'R', textOff: 'r', audioOn: '/r.wav', audioOff: '/r.wav' },
  { english: 'S', slovenian: 'S', imgOn: '/s.png', imgOff: '/s.png', textOn: 'S', textOff: 's', audioOn: '/s.wav', audioOff: '/s.wav' },
  { english: 'Š', slovenian: 'Š', imgOn: '/š.png', imgOff: '/š.png', textOn: 'Š', textOff: 'š', audioOn: '/š.wav', audioOff: '/š.wav' },
  { english: 'T', slovenian: 'T', imgOn: '/t.png', imgOff: '/t.png', textOn: 'T', textOff: 't', audioOn: '/t.wav', audioOff: '/t.wav' },
  { english: 'U', slovenian: 'U', imgOn: '/u.png', imgOff: '/u.png', textOn: 'U', textOff: 'u', audioOn: '/u.wav', audioOff: '/u.wav' },
  { english: 'V', slovenian: 'V', imgOn: '/v.png', imgOff: '/v.png', textOn: 'V', textOff: 'v', audioOn: '/v.wav', audioOff: '/v.wav' },
  { english: 'Z', slovenian: 'Z', imgOn: '/z.png', imgOff: '/z.png', textOn: 'Z', textOff: 'z', audioOn: '/z.wav', audioOff: '/z.wav' },
  { english: 'Ž', slovenian: 'Ž', imgOn: '/ž.png', imgOff: '/ž.png', textOn: 'Ž', textOff: 'ž', audioOn: '/ž.wav', audioOff: '/ž.wav' },
];

const BodyPairs: Pair[] = [ 
  { 
    english: 'mouth', 
    slovenian: 'usta', 
    imgOn: '/usta.png', 
    imgOff: '/usta.png', 
    textOn: 'usta', 
    textOff: 'mouth',
    audioOn: '/usta.wav', 
    audioOff: '/mouth.wav' 
  },
  { 
    english: 'back', 
    slovenian: 'hrbet', 
    imgOn: '/hrbet.png', 
    imgOff: '/hrbet.png', 
    textOn: 'hrbet', 
    textOff: 'back',
    audioOn: '/hrbet.wav', 
    audioOff: '/back.wav' 
  },
  { 
    english: 'belly', 
    slovenian: 'trebuh', 
    imgOn: '/trebuh.png', 
    imgOff: '/trebuh.png', 
    textOn: 'trebuh', 
    textOff: 'belly',
    audioOn: '/trebuh.wav', 
    audioOff: '/belly.wav' 
  },
  { 
    english: 'nose', 
    slovenian: 'nos', 
    imgOn: '/nos.png', 
    imgOff: '/nos.png', 
    textOn: 'nos', 
    textOff: 'nose',
    audioOn: '/nos.wav', 
    audioOff: '/nose.wav' 
  },
  { 
    english: 'hair', 
    slovenian: 'lase', 
    imgOn: '/lase.png', 
    imgOff: '/lase.png', 
    textOn: 'lase', 
    textOff: 'hair',
    audioOn: '/lase.wav', 
    audioOff: '/hair.wav' 
  },
  { 
    english: 'arm', 
    slovenian: 'roka', 
    imgOn: '/roka.png', 
    imgOff: '/roka.png', 
    textOn: 'roka', 
    textOff: 'arm',
    audioOn: '/roka.wav', 
    audioOff: '/arm.wav' 
  },
  { 
    english: 'leg', 
    slovenian: 'noga', 
    imgOn: '/noga.png', 
    imgOff: '/noga.png', 
    textOn: 'noga', 
    textOff: 'leg',
    audioOn: '/noga.wav', 
    audioOff: '/leg.wav' 
  },
  { 
    english: 'head', 
    slovenian: 'glava', 
    imgOn: '/glava.png', 
    imgOff: '/glava.png', 
    textOn: 'glava', 
    textOff: 'head',
    audioOn: '/usta.wav', 
    audioOff: '/head.wav' 
  },
  { 
    english: 'ear', 
    slovenian: 'glava', 
    imgOn: '/uho.png', 
    imgOff: '/uho.png', 
    textOn: 'uho', 
    textOff: 'ear',
    audioOn: '/uho.wav', 
    audioOff: '/ear.wav' 
  },
  { 
    english: 'eye', 
    slovenian: 'oko', 
    imgOn: '/oko.png', 
    imgOff: '/oko.png', 
    textOn: 'oko', 
    textOff: 'eye',
    audioOn: '/oko.wav', 
    audioOff: '/eye.wav' 
  },
];
const OppositePairs = [
  { 
    english: 'Off', 
    slovenian: 'Izklopljen', 
    imgOn: '/prizgiluč.png', 
    imgOff: '/ugasniluč.png', 
    textOn: 'prižgi luč', 
    textOff: 'ugasni luč',
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
    english: 'thanks', 
    slovenian: 'please', 
    imgOn: '/hvala.png', 
    imgOff: '/prosim.png', 
    textOn: 'hvala', 
    textOff: 'prosim',
    audioOn: '/hvala.wav', 
    audioOff: '/prosim.wav' 
  },
  // { 
  //   english: 'uho', 
  //   slovenian: 'oko', 
  //   imgOn: '/uho.png', 
  //   imgOff: '/oko.png', 
  //   textOn: 'uho', 
  //   textOff: 'oko',
  //   audioOn: '/uho.wav', 
  //   audioOff: '/oko.wav' 
  // },
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
  // { 
  //   english: 'glava', 
  //   slovenian: 'usta', 
  //   imgOn: '/glava.png', 
  //   imgOff: '/usta.png', 
  //   textOn: 'glava', 
  //   textOff: 'usta',
  //   audioOn: '/glava.wav', 
  //   audioOff: '/usta.wav' 
  // },
];


export default function Home() {
  const [currentCategory, setCurrentCategory] = useState<Pair[]>(AnimalsPairs); // Use Pair[] type
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [isOnState, setIsOnState] = useState(true);
  const [volume, setVolume] = useState(1.0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleImage = () => {
    setIsOnState(!isOnState);
    if (audioRef.current instanceof HTMLAudioElement) {
      audioRef.current.src = isOnState
        ? currentCategory[currentPairIndex].audioOff
        : currentCategory[currentPairIndex].audioOn;
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  };

  const goToNextPair = () => {
    setIsOnState(true);
    setCurrentPairIndex((prevIndex) => (prevIndex + 1) % currentCategory.length);
  };

  const goToPreviousPair = () => {
    setIsOnState(true);
    setCurrentPairIndex((prevIndex) => (prevIndex - 1 + currentCategory.length) % currentCategory.length);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current instanceof HTMLAudioElement) {
      audioRef.current.volume = newVolume;
    }
  };

  // Define the parameter with Pair[] type
  const handleCategoryChange = (categoryPairs: Pair[]) => {
    setCurrentCategory(categoryPairs);
    setCurrentPairIndex(0);
  };

  const currentPair = currentCategory[currentPairIndex];
  const { imgOn, imgOff, textOn, textOff } = currentPair || {};

  return (
    <div className={styles.container}>
       {/* Header with learn.png */}
       <header className={styles.header}>
        <Image 
          src="/learn.png" // Adjust the path if necessary
          alt="Learn" 
          width={500} // Set a base width for the image
          height={100} // Adjust height as needed
          className={styles.headerImage} // Add your styling here
        />
      </header>
      <div className={styles.menuBar}>
  <button onClick={() => handleCategoryChange(AnimalsPairs)} className={styles.menuButton}>
    <Image src="/animals.png" alt="Animals" width={90} height={90} />
  </button>
  <button onClick={() => handleCategoryChange(AlphabetPairs)} className={styles.menuButton}>
    <Image src="/alphabet.png" alt="Alphabet" width={90} height={90} />
  </button>
  <button onClick={() => handleCategoryChange(BodyPairs)} className={styles.menuButton}>
    <Image src="/body.png" alt="Body" width={90} height={90} />
  </button>
  <button onClick={() => handleCategoryChange(OppositePairs)} className={styles.menuButton}>
    <Image src="/opposites.png" alt="Opposites" width={90} height={90} />
  </button>
</div>
      {/* Main Content */}
      {currentPair && (
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
      )}

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
      <div className={styles.volumeControl}>
        <label>Volume:</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} />
    </div>
  );
}
