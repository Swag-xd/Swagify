import React, { Component } from 'react'
import styles from './header.module.css'
import Icon from '../../assets/logo.jpg';
import SearchIcon from '../../assets/search.png';
import Mic from '../../assets/mic.png';
import User from '../../assets/user.png';

export default class Header extends Component {

	

	render() {
		const {searchTerm, setSearchTerm} = this.props
		return (
			<>
				<header className={styles.header}>

					<div className={styles.logowrapper}>
						<div className={styles.icon}>
							<img src={Icon} alt='logo' />
							<div className={styles.name}>Swagify</div>
						</div>
					</div>


					<div className={styles.search}>
						<div className={styles.searchbox}>

							<div className={styles.SIcon}>
								<img src={SearchIcon} alt='search' />
							</div>

							<input
								type='text'
								className={styles.SBar}
								placeholder='Songs, Artist & more...'
								value={searchTerm}
								onChange={(e) =>setSearchTerm(e.target.value)}
								onKeyDown={(e) => {
									if (e.key === 'Enter') {
										// e.preventDefault();
										console.log("Search term entered:", this.props.searchTerm);
									}
								}}
							/>

							<div className={styles.SIcon}>
								<img src={Mic} alt='mic' />
							</div>


						</div>
						<div className={styles.UIcon}>
							<img src={User} alt='User' />
						</div>

					</div>

				</header>

			</>
		)
	}
}