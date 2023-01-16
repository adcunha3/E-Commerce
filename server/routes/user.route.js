const {User} = require("../models/user.model");
const express = require("express");
const router = express.Router();

router.post('/register', async (req, res) => {
	console.log(req.body)
	
	try {
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({
			email: req.body.email,
		})
	
		if (user) {
			return res.send(user)
		} else {
			return res.json({status: error, user: false})
		}

	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

module.exports = router;