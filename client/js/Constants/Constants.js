var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    SIGN_UP: null,
    LOG_IN: null,
    DONATE: null,
    SWITCH_PAGE: null, 
    CHOOSE_AMOUNT: null, 
    DONOR_SIGNUP: null
    SUCCESS: null
  }),

  Pages: keyMirror({
  	VENDOR: null,
  	SHELTER: null,
  	DONOR: null,
  	SIGNUP: null,
  	SIGNIN: null,
  	WELCOME: null,
  	SUCCESS: null, 
    DONATE: null
  })

};
