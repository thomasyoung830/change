var Dispatcher = require('../dispatcher/Appdispatcher');
var Constants = require('../constants/Constants.js');
var ActionTypes = Constants.ActionTypes;

module.exports = {

	signUp: function(info, welcome) {
		$.ajax({
			url: '/signup/vendor',
			type: 'POST',
			data: info,
			success: function(data) {
<<<<<<< HEAD
				welcome('welcome', data.business_name);
=======
				welcome('welcome', data);
>>>>>>> [update] Working on Vendor checking pin/pass
			},
			error: function(error) {
				console.log(error);
			}
		});
	},

	getAmount: function(pin) {
		$.ajax({
			url: '/login/vendor/redeem',
			type: 'POST',
			data: pin,
			success: function(data) {
				console.log('This is the pin amount', data);
			},
			error: function(error) {
				console.log(error);
			}
		});
	},
	logIn: function(info, cb) {
		$.ajax({
			url: '/login/vendor',
			type: 'POST',
			data: info,
			success: function(data) {
				cb('welcome', data.business_name);

	switchPage: function(page) {
		Dispatcher.dispatch({
			type: ActionTypes.SWITCH_PAGE,
			page: page
		});
	},

	requestAmount: function(pinInfo) {
		$.ajax({
			url: 'login/vendor',
			type: 'POST',
			data: pinInfo,
			success: function(data) {
				console.log("Update db entry successfully", data);
			},
			error: function(error) {
				console.error(error);
			}
		});
	}

};
