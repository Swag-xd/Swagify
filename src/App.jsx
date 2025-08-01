import React, { useState } from 'react'
import Header from './Components/header/Header';
import Home from './pages/Home';
import Tools from './Components/tools/Tools';
import Tags from './Components/tags/Tags';
import PlayTag from './Components/playtag/PlayTag';
import Screen from './Components/screen/Screen';
import songs from './songsdata/songs';
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("")
  const currentSong = songs[currentIndex];

  const handleSongSelect = (song) => {
    const index = songs.findIndex((s) => s.id === song.id);
    if (index !== -1) setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  return (
    <>
      <div>
        <div className="heading">
          <Header searchTerm = {searchTerm} setSearchTerm={setSearchTerm} />
          <Tags />
        </div>
        <div className="screenContain">
          <div className="tools">
            <Tools /></div>
          <div className="screen">
            <Screen onSongSelect={handleSongSelect} searchTerm={searchTerm} /></div>

        </div>

        <PlayTag song={currentSong} onNext={handleNext} />
      </div>
    </>
  )
}

export default App;
