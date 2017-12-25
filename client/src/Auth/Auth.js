import auth0 from 'auth0-js';
import axios from 'axios';
import Auth0Lock from 'auth0-lock';
import history from './history';
import { AUTH_CONFIG } from './Auth0-variables';

const lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, AUTH_CONFIG.options);



class Auth {
  // auth0 = new auth0.WebAuth({
  //   domain: AUTH_CONFIG.domain,
  //   clientID: AUTH_CONFIG.clientId,
  //   // redirectUri: 'http://localhost:5421/callback',
  //   audience: 'tradehouse2-auth0.com/api',
  //   responseType: 'token id_token',
  //   scope: 'openid'
  // });

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
    // this.auth0.authorize({
    //   audience: 'tradehouse2-auth0.com/api',
    //   scope: 'add:customers',
    //   responseType: 'token',
    // });
  }

  handleAuthentication(cb) {
    lock.on('authenticated', authResult => this.setSession(authResult, cb));
    lock.on('authorization_error', (err, profile) => {
      console.log(err, 'profile', profile);
    });
    lock.on('signup submit', () => {
      console.log('signed up');
      var user = this.getProfile();
      console.log(user);
    });
    // this.auth0.parseHash((err, authResult) => {
    //   if (authResult && authResult.accessToken && authResult.idToken) {
    //     this.setSession(authResult);
    //     history.replace('/home');
    //   } else if (err) {
    //     history.replace('/home');
    //     console.log(err);
    //     alert(`Error: ${err.error}. Check the console for further details.`);
    //   }
    // });
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
      console.log('err', err, 'profile', profile);
    });
  }

  setSession(authResult, cb) {
    if (authResult && authResult.accessToken && authResult.idToken) {
    // if (authResult && authResult.accessToken) {
      lock.getUserInfo(authResult.accessToken, function(err, profile) {
      // this.auth0.userInfo(authResult.accessToken, function(err, profile) {
        if (err) {
          return console.error(err);
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
              currentIdToken: authResult.idToken,
            }, {
              headers: {
                Authorization: `Bearer ${authResult.accessToken}`,
              },
            }).then(res => {
              console.log(res);
            }).catch(err => {
              console.error(err);
            }).then(() => {
              history.replace('/');
              window.location.reload();
            }).catch(err => console.error(err))
              .then(() => cb());
          }

          axios.post('/api/customers', {
            username: profile.username,
            email: profile.email,
            facebook,
            currentIdToken: authResult.idToken,
          }, {
            headers: {
              Authorization: `Bearer ${authResult.accessToken}`,
            },
          }).then(res => {
            console.log(res);
          }).catch(err => {
            console.error(err);
          }).then(() => {
            history.replace('/');
            window.location.reload();
          }).catch(err => console.error(err))
            .then(() => cb());
        }
        // axios.post('/api/customers', {
        //   accessToken: authResult.accessToken,
        //   username: profile.username,
        //   email: profile.email,
        //   facebook,
        // }, {
        //   headers: {
        //     Authorization: `Bearer ${authResult.accessToken}`,
        //   },
        // }).then(res => {
        //   console.log(res);
        // }).catch(err => {
        //   console.error(err);
        // }).then(() => {
        //   history.replace('/');
        //   window.location.reload();
        // }).catch(err => console.error(err));
      });
    }
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
