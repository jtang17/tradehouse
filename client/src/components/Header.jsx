import React from "react";
import { lock, Auth } from '../Auth/Auth.js';
const auth = new Auth();

class Header extends React.Component {
	constructor(props) {
		super(props);
		const auth = new Auth();

		this.state = {
			loggedIn: false
		};

		this.registerFunc = this.registerFunc.bind(this);
		this.logout = this.logout.bind(this);
	}

	componentWillMount(){


	}

	registerFunc() {
		auth.login();
	}

	logout() {
		auth.logout();
	}


	render() {

		if (!auth.isAuthenticated()) {
			return (
				<div className="header__container">
					<img src="https://www.tradehousecrafts.com/wp-content/uploads/2016/02/trade-house-crafts-logo2.png" />
					<div className="header__social">
						<p>Social Media Section</p>
						<p>About Us Section</p>
					</div>
					<div className="header__account--register">
						<button onClick={this.registerFunc}>Register/Login</button>
					</div>
				</div>
			);
		} else {
			return (
				<div className="header__container">
					<img src="https://www.tradehousecrafts.com/wp-content/uploads/2016/02/trade-house-crafts-logo2.png" />
					<div className="header__social">
						<p>Social Media Section</p>
						<p>About Us Section</p>
					</div>
					<div className="header__account--register">
						<button onClick={this.logout}>Logout</button>
					</div>
				</div>
			);
		}

	}
}

export default Header;
