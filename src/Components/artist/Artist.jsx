import React, { Component } from "react";
import styles from './artist.module.css'

export default class Artist extends Component{
    render(){
        const artistImages =[
            {id:1, name: "Arijit", img: "/assets/Arijit.jpg"},
            {id:2, name: "Shreya", img: "/assets/Shreya.jpg"},
            {id:3, name: "KK", img: "/assets/KK.jpg"},
            {id:4, name: "Lana Del Rey", img: "/assets/LanaDe.jpg"},
            {id:5, name: "Shaan", img: "/assets/Shaan.jpg"},
            {id:6, name: "Sheeran", img: "/assets/Sheeran.jpg"},
            {id:7, name: "The Weeknd", img: "/assets/Weeknd.jpg"},
        ];
        return(
            <>
            <div className={styles.artistrow}>
                {artistImages.map((artist) => (
                    <div key = {artist.id} className={styles.artistCard}>
                        <img src={artist.img} alt={artist.name} className={styles.artistimg}/>
                    </div>
                ))}

            </div>
            </>
        )
    }
}