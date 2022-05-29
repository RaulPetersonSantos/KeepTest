var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idMaquina", function(req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});


router.get("/tempo-real/:idMaquina", function(req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/tempo-real-cpu/:idMaquina", function(req, res) {
    medidaController.buscarMedidasEmTempoRealCPU(req, res);
})
  

router.get("/buscarMediaUmidade/:idMaquina", function(req, res) {
    medidaController.buscarMediaConsumoPC(req, res);
})

router.get("/buscarConsumoCPU/:idMaquina", function(req, res) {
    medidaController.buscarConsumoCPU(req, res);
})

module.exports = router;