'use strict';

module.exports = function(Segmentomercadoadspersonalizado) {


    Segmentomercadoadspersonalizado.AtualizaListaPorConta  = function(lista,callback) {
        if (lista.length > 0) {
            const sqlLimpa = "update SegmentoMercadoAdsPersonalizado set maisRecente = 0 where contaGoogleId =  " + lista[0].contaGoogleId;
            const ds = Segmentomercadoadspersonalizado.dataSource;
            ds.connector.query(sqlLimpa, (err,result) => {
                for (let i=0; i<lista.length;i++) {
                    let item = lista[i];
                    item['maisRecente'] = 1;
                    item['dataColeta'] = new Date();
                    //console.log(item)
                    Segmentomercadoadspersonalizado.create(item, (err,result) => {
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
