import auth0 from 'auth0-js';
import axios from 'axios';
import history from './history.js';
import { AUTH_CONFIG } from './Auth0-variables.js';
import Auth0Lock from 'auth0-lock';

const lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, AUTH_CONFIG.options);



class Auth {
  constructor() {
    this.userProfile = null;
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.setSession = this.setSession.bind(this);
  }

  login() {
    lock.show();
  }

  handleAuthentication() {
    lock.on('authenticated', this.setSession);
    lock.on('authorization_error', (err, profile) => {
      console.log(err, "profile", profile);
    });
    lock.on('signup submit', () => {
      console.log('singed up');
      var user = this.getProfile();
      console.log(user);
    });
  }

  getProfile(cb) {
    let accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('Access token required for fetching profile');
    }
    lock.getUserInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      console.log("err",err, "profile", profile);
    });
  }

  setSession(authResult) {
    if (authResult && authResult.accessToken && authResult.idToken) {
      lock.getUserInfo(authResult.accessToken, function(err, profile) {
        if (err) {
          console.log(err);
        }
        localStorage.setItem('accessToken', authResult.accessToken);
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('idToken', authResult.idToken);
        let facebook;
        if (profile.link) facebook = profile.link;

        if (Object.prototype.hasOwnProperty.call(profile.user_metadata, 'MerchantAccount')) {
          if (profile.user_metadata.MerchantAccount === 'true') {
            axios.post('/api/merchants', {
              username: profile.username,
              email: profile.email,
              facebook,
            }).then((res) => {
              console.log(res);
            }).catch((err) => {
              console.error(err);
            });
          } else {
            axios.post('/api/customers', {
              username: profile.username,
              email: profile.email,
              facebook,
            }).then(res => {
              console.log(res);
            }).catch(err => {
              console.error(err);
            });
          }

        }
      });
    }
    history.replace('MerchantHome');
    window.location.reload();
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('profile');
    this.userProfile = null;
    history.replace('/');
    window.location.reload();
    // navigate to the home route

  }

  isAuthenticated() {
    // this.logout();
    // Check whether the current time is past the
    // access token's expiry time
    // Clear access token and ID token from local storage
    return (!!localStorage.getItem('accessToken') && !!localStorage.getItem('idToken'));
  }
}

module.exports.lock = lock;
module.exports.Auth = Auth;

