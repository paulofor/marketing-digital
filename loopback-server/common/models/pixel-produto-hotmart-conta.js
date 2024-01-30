'use strict';

module.exports = function(Pixelprodutohotmartconta) {

    Pixelprodutohotmartconta.RegistraLista = function(listaItem,callback) {
        for (let i=0;i<listaItem.length;i++) {
            Pixelprodutohotmartconta.create(listaItem[i])
        }
        callback(null,{'result' : 'ok'})
    }
};
