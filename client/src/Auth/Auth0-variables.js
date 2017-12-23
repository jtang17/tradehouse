export const AUTH_CONFIG = {
  domain: 'antonvs.auth0.com',
  clientId: 'l5HhVRbwlvmryIQQljzDaHoMMAxF8873',
  // domain: 'tradehouse.auth0.com',
  // clientId: 'wqEnTUSCU67QGxKiZnKOX4Ge5IIfI9sj',
  options: {
    languageDictionary: {
      title: 'TradeHouse',
    },
    theme: {
      logo: 'https://otove.files.wordpress.com/2012/12/tumblr_menq9ehdxq1rj9sw5o1_400.gif',
      primaryColor: '#96CC58',
      socialButtonStyle: 'big',
    },
    allowSignUp: true,
    // auth: {
    //   audience: 'tradehouse2-auth0.com/api',
    //   params: {
    //     scope: 'openid email add:customers'
    //   },
    // },
    allowLogin: true,
    allowForgotPassword: true,
    loginAfterSignUp: true,
    closable: true,
    autoclose: false,
    oidcConformant: false,
    // oidcConformant: true,
    allowAutocomplete: true,
    additionalSignUpFields: [
      {
        type: 'checkbox',
        name: 'MerchantAccount',
        prefill: 'false',
        placeholder: 'I would like to sell my goods on TradeHouse using a merchant account.',
      },
    ],
  },
};
