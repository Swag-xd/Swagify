import React, {Component} from "react";
import ScreenSongs from '../songs/ScreenSongs'
import styles from './screens.module.css'
import Artist from '../artist/Artist'
export default class Screen extends Component{
    render(){
        return(
            <>
            <section className={styles.Screen}>
                <h2 className={styles.TrendingHeading}> Trending Right Now!</h2>
                <div className={styles.TrendySongs}>
                   <ScreenSongs 
                   onSongSelect={this.props.onSongSelect}
                   searchTerm={this.props.searchTerm}/>
                </div>
                <h2 className={styles.ArtistHeading}>Artists</h2>
                <div>
                    <Artist/>
                </div>
            </section>
            </>
        )
    }
}