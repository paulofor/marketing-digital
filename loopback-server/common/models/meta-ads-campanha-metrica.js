'use strict';

module.exports = function(Metaadscampanhametrica) {
    Metaadscampanhametrica.InsereObservacao = function(listaObservacao,callback) {
        for (let i=0; i<listaObservacao.length; i++) {
            const agora = new Date();
            listaObservacao[i].dataHora = new Date(agora.getTime() - (3 * 60 * 60 * 1000)); // 3 horas em milissegundos    
            Metaadscampanhametrica.create(listaObservacao[i]);
        }
        callback(null, {'result' : 'ok'});
    }
};
