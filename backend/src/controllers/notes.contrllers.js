const notesCtrl = {};

notesCtrl.pegaNotas = (req, res) => res.json({message: []})
notesCtrl.criaNota = (req, res) => res.json({message: 'Notas - Salvadas'});
notesCtrl.pegaNota = (req, res) => res.json({titulo: 'Nota 1'});
notesCtrl.modificaNota = (req, res) => res.json({message: 'Notas - Modificada'})
notesCtrl.apagaNota = (req, res) => res.json({message: 'Notas - Apagada'});


module.exports = notesCtrl;