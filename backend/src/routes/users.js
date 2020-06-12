const { Router } = require('express');
const router = Router();

const { pegaUsers, pegaUser, modificaUser, criaUser, apagaUser } = require('../controllers/users.controllers')

router.route('/')
    .get(pegaUsers)
    .post(criaUser);

router.route('/:id')
    .get(pegaUser)
    .put(modificaUser)
    .delete(apagaUser)


module.exports = router;