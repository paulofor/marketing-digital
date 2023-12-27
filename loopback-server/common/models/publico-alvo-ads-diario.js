'use strict';

module.exports = function(Publicoalvoadsdiario) {


    Publicoalvoadsdiario.AtualizaListaPorConta = function(listaPublicoAlvo, callback) {
        if (listaPublicoAlvo.length > 0) {
            const sqlLimpa = "update PublicoAlvoAdsDiario set maisRecente = 0 where contaGoogleId =  " + listaPublicoAlvo[0].contaGoogleId;
            const ds = Publicoalvoadsdiario.dataSource;
            ds.connector.query(sqlLimpa, (err,result) => {
                for (let i=0; i<listaPublicoAlvo.length;i++) {
                    let item = listaPublicoAlvo[i];
                    item['maisRecente'] = 1;
                    item['data'] = new Date();
                    //console.log(item)
                    Publicoalvoadsdiario.create(item, (err,result) => {
                        //console.log('err:' , err);
                    })
                    //let sql = "insert into PublicoAlvoAdsDiario (data, contaGoogleId, resourceName, nome, tamanhoRedeDisplay, tamanhoRedePesquisa, maisRecente ) " + 
                    //    " values (now(), " + item.contaGoogleId + " , '" + item.resourceName + "' , '" + item.nome + "' , " + item.tamanhoRedeDisplay + " , " + 
                    //    item.tamanhoRedePesquisa + " , 1 ) ";
                    //ds.connector.query(sql,(err,result) => {
                        //console.log('err:' , err);
                    //})
                }
                
            })
        }
        callback(null, {'result' : 'ok'});
       
    }
};
