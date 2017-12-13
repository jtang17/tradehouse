export const AUTH_CONFIG = {
  domain: 'antonvs.auth0.com',
  clientId: 'l5HhVRbwlvmryIQQljzDaHoMMAxF8873',
  callbackUrl: 'http://localhost:5421/callback',
  options: {
    languageDictionary: {
      title: "TradeHouse"
    },
    theme: {
      logo: 'https://www.tradehousecrafts.com/wp-content/uploads/2016/02/trade-house-crafts-logo2.png',
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