'use strict';

module.exports = function(Campanhaadsmetrica) {

    Campanhaadsmetrica.InsereMetrica = function(metrica,callback) {
        metrica['dataHora'] = new Date().toLocaleString();
        Campanhaadsmetrica.create(metrica,callback);
    }

    Campanhaadsmetrica.InsereListaMetrica = function(lista,callback) {
        for (let i=0;i<lista.length;i++) {
            let atual = lista[i];
            atual['dataHora'] = new Date().toLocaleString();
            console.log('atual:' , atual);
            Campanhaadsmetrica.create(atual)
        }
        callback(null,"{ok}");
    }
};
