'use strict';

module.exports = function(Trechovsl) {


    Trechovsl.AtualizaListaAudioGerado = function(listaTrecho,callback) {
        let ds = Trechovsl.dataSource;
        for (let i=0 ;i< listaTrecho.length; i++) {
            let sql = "update TrechoVsl set arquivoAudio = '" + listaTrecho[i].arquivoAudio + "' , " +
                " texto = '" + listaTrecho[i].texto + "', " +
                " tempo = " + listaTrecho[i].tempo + ", codigoHexa = '" + listaTrecho[i].codigoHexa + "' where id = " + listaTrecho[i].id;
            ds.connector.query(sql, (err,result) => {
                console.log('erro:' , err);
            });
        }
        callback(null,{'execucao' : 'ok'})
    }

    Trechovsl.OrganizaOrdenacao = function(idVideo,callback) {
        const ds = Trechovsl.dataSource;
        const sql1 = "select id from TrechoVsl where videoVslId = " + idVideo + " order by ordenacao";
        ds.connector.query(sql1, (err,result) => {
            let novoOrdenacao = 10;
            for (let i = 0; i < result.length; i++) {
                const ordenacao = novoOrdenacao;
                const id =  result[i].id;
                const sql2 = "UPDATE TrechoVsl set ordenacao = " + ordenacao + " where id = " + id;
                ds.connector.query(sql2, (err,result) => {

                })
                novoOrdenacao += 10;
            }
        });
        callback(null,{'result': 'ok'})
    }

   
}
