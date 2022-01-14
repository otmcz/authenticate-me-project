// backend/routes/api/index.js
const express = require('express')
const sessionRouter = require('./session.js');
const beatsRouter = require('./beats.js');
const usersRouter = require('./users.js');
const router = express.Router();

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/beats', beatsRouter);

// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });



module.exports = router;
