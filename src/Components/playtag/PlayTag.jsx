import React, {Component} from 'react'
import styles from './PlayTag.module.css'
import songs from '../../songsdata/songs'

export default class PlayTag extends Component{
    constructor(){
        super();
            this.audioRef = React.createRef();
      }
      componentDidUpdate(prevProps){
        if (
          prevProps.song &&
          this.props.song &&
          prevProps.song.audio !== this.props.song.audio
        ) {
          this.audioRef.current.load();
          this.audioRef.current.play();
        }
      }
      render() {
        const { song, onNext} = this.props;

    if (!song || !song.audio || !song.image) {
  return (
    <div style={{ color: 'red', padding: '10px' }}>
      ⚠ Invalid song data. Check audio/image fields.
    </div>
  );
}

    return (
      <div className={styles.SongBar}>
        <div className={styles.SongImg}>
          <img src={song.image} alt="cover" />
        </div>
        <div className={styles.SongInfo}>
          <h3>{song.title}</h3>
        </div>
        <div className={styles.audiobar}> 
          <audio ref={this.audioRef} controls className={styles.AudioPlayer}>
            <source src={song.audio} type="audio/mp3" />
        </audio>
          <button className={styles.NextBtn} onClick={this.props.onNext}>Next</button>
        </div>
        
      </div>
    );
  }}

