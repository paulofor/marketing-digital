'use strict';

module.exports = function(Visitaprodutohotmart) {

    Visitaprodutohotmart.InsereListaProdutoHotmart = function(lista, callback) {
        for (let i=0; i<lista.length; i++) {
            let item = lista[i];
            console.log(item);
            item['dataInsercao'] = new Date();
            Produtohotmart.create(item);
        }
        callback(null, {'reult' : 'ok'})
    } 
};
