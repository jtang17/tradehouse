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
          <Link to="/">
            <img src="https://otove.files.wordpress.com/2012/12/tumblr_menq9ehdxq1rj9sw5o1_400.gif" />
          </Link>
          <div className="header__social">
            <p>Tradehouse: buy and sell more effectively</p>
          </div>
          <div className="header__account--register">
            <button className="hvr-icon-pulse" onClick={this.registerFunc}>Register/Login</button>
          </div>
        </div>
      );
    }
    return (
      <div className="header__container">
        <Link to="/">
          <img src="https://otove.files.wordpress.com/2012/12/tumblr_menq9ehdxq1rj9sw5o1_400.gif" />
        </Link>
        <div className="btn-group">
          <Link to={`/merchant_profile/${1}`} >
							Merchant Profile
          </Link>
          <Link to={`/manage_store/${1}`}>
							Manage Store
          </Link>
          <Link to={`/broadcast/${1}`}>
							Broadcast
          </Link>
        </div>
        <div className="header__account--register">
          <button className="hvr-icon-pulse" onClick={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Header;
