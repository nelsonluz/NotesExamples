const userCtrl = {};

userCtrl.pegaUsers = (req, res) => res.json({message: []})
userCtrl.criaUser = (req, res) => res.json({message: 'User - Salvadas'});
userCtrl.pegaUser = (req, res) => res.json({titulo: 'User 1'});
userCtrl.modificaUser = (req, res) => res.json({message: 'User- Modificada'});
userCtrl.apagaUser =  (req, res) => res.json({message: 'User - Apagada'});


module.exports = userCtrl;