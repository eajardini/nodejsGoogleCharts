const mdlDiarios = require('../models/diarios')

const getAllDiarios = (req, res) => (async () => {
    let diarios = await mdlDiarios.getDiarios();
    console.log("quantidade de rows:", diarios.length);    
    res.render('pages/diarios', { "diarios": diarios })
})();



module.exports = {
    getAllDiarios,

}