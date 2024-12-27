'use strict';

module.exports = function(Entregavelcapitulo) {

    Entregavelcapitulo.RecebeLista = function(listaCapitulo,callback) {
        console.log('Entrou no recebe');
        for (const itemLista of listaCapitulo) {
            Entregavelcapitulo.create(itemLista);
        }
        callback(null, {'saida' : 'ok'});
    }
}