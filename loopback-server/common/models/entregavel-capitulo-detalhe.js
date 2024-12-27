'use strict';

module.exports = function(Entregavelcapitulodetalhe) {

    Entregavelcapitulodetalhe.RecebeItem = function(item,callback) {
        console.log('entrou em recebe item');
        Entregavelcapitulodetalhe.create(item,(err,result) => {
            console.log('Erro:' , err);
            console.log('Result:',result);
            callback(err,result);
        });
    }

    Entregavelcapitulodetalhe.AtualizaHtml = function(idDetalhe,html,callback) {
        console.log('Recebi: ' + idDetalhe);
        let sql = "update EntregavelCapituloDetalhe set html = '" + html + "' where id = " + idDetalhe;
        let ds = Entregavelcapitulodetalhe.dataSource;
        ds.connector.query(sql,(err,result) => {
            //console.log('Erro:' , err);
            //console.log('Result:',result);
            callback(err,result);
        });
    }
}