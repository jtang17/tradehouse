import React from 'react';
import { lock, Auth } from '../../Auth/Auth.js';

const auth = new Auth();

class Header extends React.Component {
  constructor(props) {
    super(props);
    const auth = new Auth();

    this.state = {
      loggedIn: false,
    };

    this.registerFunc = this.registerFunc.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {}

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
          <a href="/">
            <img src="https://otove.files.wordpress.com/2012/12/tumblr_menq9ehdxq1rj9sw5o1_400.gif" />
          </a>
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
        <a href="/">
          <img src="https://otove.files.wordpress.com/2012/12/tumblr_menq9ehdxq1rj9sw5o1_400.gif" />
        </a>
        <div className="btn-group">
          <a className="btn btn-primary" href="/MerchantHome">
							Home
          </a>
          <a className="btn btn-primary" href="/ProductsView">
							Manage Store
          </a>
          <a className="btn btn-primary" href="/BroadcastView">
							Broadcast
          </a>
          <a className="btn btn-primary" href="/CustomerHome">
							Customer Home
          </a>
        </div>
        <div className="header__account--register">
          <button className="hvr-icon-pulse" onClick={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Header;
