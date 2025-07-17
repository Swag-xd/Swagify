import React, {Component} from "react";
import songs from '../../songsdata/songs'
import styles from './Songs.module.css'


export default class ScreenSongs extends Component{
    handleSongClick = (song) => {
//    console.log("Clicked song:", song); 
  this.props.onSongSelect(song);  
};

    render(){
        return(
            <>
            <div className={styles.TrendingSongs}>
                <div className={styles.SongRow}>
                    {songs.map((song) =>(
                        <div key={song.id} className={styles.Songcard}>
                            <img src={song.image} alt={song.title}/>
                            <button
                                className={styles.PlayButton}
                                onClick={() => this.handleSongClick(song)}
                                >
                                ▶
                            </button>
   
                        </div>
                    ))}
                    
                </div>
            </div>
            </>
        );}}