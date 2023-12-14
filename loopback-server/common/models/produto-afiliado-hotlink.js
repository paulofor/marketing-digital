'use strict';

module.exports = function(Produtoafiliadohotlink) {

    Produtoafiliadohotlink.AtualizaProdutoHotlink = function(listaHotlink,callback) {
        //console.log('Qtde Lista: ' , listaHotlink.length);
        for (let i=0;i<listaHotlink.length;i++) {
            let item = listaHotlink[i];
            //console.log(item);
            Produtoafiliadohotlink.upsert(item, (err,result) => {
                console.log('err: ' , err)
            })
        }
        callback(null, {'result' : 'ok'});
    }
};
