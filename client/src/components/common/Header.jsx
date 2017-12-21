import React from 'react';
import { Link } from 'react-router-dom';
import { lock, Auth } from '../../Auth/Auth.js';

const auth = new Auth();

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };

    this.registerFunc = this.registerFunc.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    auth.handleAuthentication();
  }

  registerFunc() {
    auth.login();
  }

  logout() {
    auth.logout();
  }


  // <Link to="browse"><h4>Browse Content</h4></Link>

  render() {
    if (!auth.isAuthenticated()) {
      return (
        <div className="header__container">
          <Link className="header__logo" to="/" />
          <div className="header__social">
            <p>Tradehouse: buy and sell more effectively</p>
          </div>
          <div className="header__account--register">
            <button className="hvr-icon-pulse btn--profile" onClick={this.registerFunc}>Register/Login</button>
          </div>
        </div>
      );
    }
    return (
      <div className="header__container">
        <Link className="header__logo" to="/" />
        <div className="nav__container--header">
          <Link className="btn--nav" to={`/merchant_profile/${1}`} >
							Merchant Profile
          </Link>
          <Link className="btn--nav" to={`/manage_store/${1}`}>
							Manage Store
          </Link>
          <Link className="btn--nav" to={`/broadcast/${1}`}>
							Broadcast
          </Link>
        </div>
        <div className="header__account--register">
          <button className="hvr-icon-pulse btn--profile" onClick={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Header;
