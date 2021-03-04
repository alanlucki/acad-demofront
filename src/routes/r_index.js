const express = require('express');
const router = express.Router();

router.get('/v_usuario_omn', async (req, res) => {
  res.render('v_usuario_omn', null);
});

router.get('*', async (req, res) => {
  res.render('v_index', null);
});

module.exports = router;
