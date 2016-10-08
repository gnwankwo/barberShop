const express = require('express');

module.exports = {
	registerRouter() {
		const router = express.Router();

		router.post('/', this.logout);

		return router;
	},

	logout(req, res) {
		reg.logout();
		res.redirect('/');
	},
};