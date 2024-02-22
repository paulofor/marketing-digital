'use strict';

module.exports = function(Trechovsl) {


    Trechovsl.AtualizaListaAudioGerado = function(listaTrecho,callback) {
        let ds = Trechovsl.dataSource;
        for (let i=0 ;i< listaTrecho.length; i++) {
            let sql = "update TrechoVsl set arquivoAudio = '" + listaTrecho[i].arquivoAudio + "' , " +
                " tempo = " + listaTrecho[i].tempo + " where id = " + listaTrecho[i].id;
            ds.connector.query(sql, (err,result) => {
                
            });
        }
        callback(null,{'execucao' : 'ok'})
    }
};
