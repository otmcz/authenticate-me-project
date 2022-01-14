const express = require('express')
const asyncHandler = require('express-async-handler');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Beat } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const beats = await Beat.findAll();
  res.json(beats);
}));

// router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
//     const beat = await Beat.findByPk(req.params.id);
//     res.json(beat);
//       })
//     );

router.post('/', asyncHandler(async (req, res) => {
  const createBeat = await Beat.create(req.body);
  // console.log(createBeat)
  res.json(createBeat);
}));

router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const beat = await Beat.findByPk(id);
  const editBeat = await beat.update(req.body);
  res.json(editBeat);
}));

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const beat = await Beat.findByPk(id);
  await beat.destroy();
  res.json({beat})
}));

module.exports = router;
