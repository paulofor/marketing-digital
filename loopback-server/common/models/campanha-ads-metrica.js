'use strict';

module.exports = function(Campanhaadsmetrica) {

    Campanhaadsmetrica.InsereMetrica = function(metrica,callback) {
        metrica['dataHora'] = new Date().toLocaleString();
        Campanhaadsmetrica.create(metrica,callback);
    }
};
