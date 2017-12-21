import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { lock, Auth } from '../../Auth/Auth.js';

const auth = new Auth();

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      id: 1,
    };

    this.registerFunc = this.registerFunc.bind(this);
    this.logout = this.logout.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentWillMount() {
    auth.handleAuthentication();
    axios.get(`/api/merchants/bySub/${localStorage.idToken}`)
         .then(res => this.setState({ id: res.data.id }))
         .catch(err => this.setState({ id: 1 }))
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
            <p>Best Global Market: Immersive experience!</p>
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
          <Link to={`/merchant_profile/${this.state.id}`} >
							Merchant Profile
          </Link>
          <Link to={`/manage_store/${this.state.id}`}>
							Manage Store
          </Link>
          <Link to={`/broadcast/${this.state.id}`}>
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
