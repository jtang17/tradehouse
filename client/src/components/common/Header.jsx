import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { lock, Auth } from '../../Auth/Auth.js';
import { connect } from 'react-redux';

import { fetchMerchantInfoByToken } from '../../actions/merchantActions.jsx';
import { fetchCustomerInfoByToken } from '../../actions/customerActions.jsx';

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
    /* auth.handleAuthentication(() => axios.get(`/api/merchants/bySub/${localStorage.idToken}`).then(res => this.setState({ id: res.data.id })).catch(err => this.setState({ id: 1 }))); */
    auth.handleAuthentication(() => this.props.fetchMerchantInfoByToken());
    /* auth.handleAuthentication(); */
    /* this.props.fetchCustomerInfoByToken(); */
    /* auth.getProfile */
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
          <Link className="header__logo" to="/" />
          <div className="header__social">
            <p>Best Global Market: An immersive broadcasting & shopping platform</p>
          </div>
          <div className="header__account--register">
            <button className="hvr-icon-pulse btn--profile" onClick={this.registerFunc}>Register/Login</button>
          </div>
        </div>
      );
    }
    if (auth.isAuthenticated() && this.props.merchantInfo !== null) {
      return (
        <div className="header__container">
          <Link className="header__logo" to="/" />
          <div className="nav__container--header">
            <Link className="btn--nav" to={`/merchant_profile/${this.props.merchantInfo.id}`}>
              Merchant Profile
            </Link>
            <Link className="btn--nav" to={`/manage_store/${this.props.merchantInfo.id}`}>
              Manage Store
            </Link>
            <Link className="btn--nav" to={`/broadcast/${this.props.merchantInfo.id}`}>
              Broadcast
            </Link>
          </div>
          <div className="header__account--register">
            <button className="hvr-icon-pulse btn--profile" onClick={this.logout}>Logout</button>
          </div>
        </div>
      );
    }
    if (auth.isAuthenticated() && this.props.customerInfo.id !== null) {
      return (
        <div className="header__container">
          <Link className="header__logo" to="/" />
          <div className="header__social">
            <Link className="btn--nav" to={`/customer_profile/${this.props.customerInfo.id}`}>
                Customer Profile
            </Link>
          </div>
          <div className="header__account--register">
            <button className="hvr-icon-pulse btn--profile" onClick={this.logout}>Logout</button>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  merchantInfo: state.merchantInfo,
  customerInfo: state.customerInfo,
});

export default connect(mapStateToProps, { fetchCustomerInfoByToken, fetchMerchantInfoByToken })(Header);
