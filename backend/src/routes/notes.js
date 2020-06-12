const { Router } = require('express');
const router = Router();

const { pegaNotas, criaNota, pegaNota, modificaNota, apagaNota } = require('../controllers/notes.contrllers');

router.route('/')
    .get(pegaNotas)
    .post(criaNota);

router.route('/:id')
    .get(pegaNota)
    .put(modificaNota)
    .delete(apagaNota)


module.exports = router;