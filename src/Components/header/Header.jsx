import React, { Component } from 'react'
import styles from './header.module.css'
import Icon from '../../assets/logo.jpg';
import SearchIcon from '../../assets/search.png';
import Mic from '../../assets/mic.png';
import User from '../../assets/user.png';

export default class Header extends Component {
	

  render() {
	return (
		<>
	  <header className={styles.header}>
		
		<div className={styles.logowrapper}>
			<div className={styles.icon}>
				<img src={Icon} alt='logo'/>
				<div className={styles.name}>Swagify</div>
			</div>
		</div>

		
		<div className={styles.search}>
			<div className={styles.searchbox}>
				
				<div className={styles.SIcon}>
					<img src={SearchIcon} alt='search'/>
				</div>
				
				<input type='text'className={styles.SBar} placeholder='Songs, Artist & more...'/>

			    <div className={styles.SIcon}>
					<img src={Mic} alt='mic'/>
				</div>

		
			</div>
			<div className={styles.UIcon}>
				<img src={User} alt='User'/>
			</div>

		</div>

	  </header>
	  
	    </>
	)
  }
}