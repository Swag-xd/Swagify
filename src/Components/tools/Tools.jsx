import React, { Component } from 'react'
import styles from './tools.module.css'

export default class Tools extends Component {
    render(){
        return (
            <>
            <div className={styles.ToolsBar}>
               <div className={styles.PlayList}>
                     <h1 className={styles.ListH1}> Create Your Playlist</h1>
                     <h4 className={styles.ListH4}> We Give, You Choose</h4>
                     <button className={styles.PlayListBtn}>Play List</button>
               </div> 
               <div className={styles.Library}>
                     <h1 className={styles.LHeading}>Library</h1>
                     <ul className={styles.LTags}>
                        <li>History</li>
                        <li>Liked Songs</li>
                        <li>Playlist</li>
                        <li>Recently Played</li>
                        <li>Artist</li>
                     </ul>

               </div>
                
            </div>
            </>
        )
    }
}





