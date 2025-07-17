import React, { Component } from 'react'
import styles from './tags.module.css'

export default class Tags extends Component {
    render(){
            const tagList = [
      "For you","All songs","Popular","English","Hindi","90's",
      "Romantic","Sad","Happy","Heartbreak",
      "Workout","Sleep","Focus","Party",
      "Calm","Fresh Vibes","Chill","Rap","Rock",
    ];
        return (
            <>
            <div className={styles.tags}>
                
                    {tagList.map((tag) =>{
                        return <p className=
                        {styles.options}>{tag}</p>
                    })}
                
            </div>
            </>
        );
    }
}
