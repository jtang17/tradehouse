export const AUTH_CONFIG = {
  domain: 'antonvs.auth0.com',
  clientId: 'l5HhVRbwlvmryIQQljzDaHoMMAxF8873',
  callbackUrl: 'http://localhost:5421/callback',
  options: {
    languageDictionary: {
      title: "TradeHouse"
    },
    theme: {
      logo: 'https://otove.files.wordpress.com/2012/12/tumblr_menq9ehdxq1rj9sw5o1_400.gif',
      primaryColor: '#34675c',
      socialButtonStyle: 'big'
    },
    allowSignUp: true,
    allowLogin: true,
    loginAfterSignUp: false,
    closable: true,
    autoclose: false,
    oidcConformant: false,
  },
  auth: {
    redirectUrl: 'http://google.com'
  }
}