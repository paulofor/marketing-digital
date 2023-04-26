'use strict';

module.exports = function(Ideiapalavrachave) {


    Ideiapalavrachave.RecebeLista = function(lista, callback) {
        for (let i=0; i<lista.length; i++) {
            let item = lista[i];
            //console.log(item);
            item['dataAcesso'] = new Date();
            Ideiapalavrachave.create(item);
        }
        callback(null, {'result' : 'ok'})
    } 
};
