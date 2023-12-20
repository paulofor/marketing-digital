'use strict';

module.exports = function(Publicoalvoadsdiario) {


    Publicoalvoadsdiario.AtualizaListaPorConta = function(listaPublicoAlvo, callback) {
        const ds = Publicoalvoadsdiario.dataSource;
        for (let i=0; i<listaPublicoAlvo.length;i++) {
            let item = listaPublicoAlvo[i];
            let sql = "insert into PublicoAlvoAdsDiario (data, contaGoogleId, resourceName, nome, tamanhoRedeDisplay, tamanhoRedePesquisa ) " + 
                " values (now(), " + item.contaGoogleId + " , '" + item.resourceName + "' , '" + item.nome + "' , " + item.tamanhoRedeDisplay + " , " + 
                item.tamanhoRedePesquisa + " ) ";
            ds.connector.query(sql,(err,result) => {
                //console.log('err:' , err);
            })
        }
        callback(null, {'result' : 'ok'});
    }
};
