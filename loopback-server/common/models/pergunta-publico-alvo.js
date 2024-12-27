'use strict';

module.exports = function(Perguntapublicoalvo) {


    Perguntapublicoalvo.ListaPerguntaAtiva = function(callback) {
        let sql = "select * from PerguntaPublicoAlvo where ativa = 1 order by ordenacao";
        let ds = Perguntapublicoalvo.dataSource;
        ds.connector.query(sql,callback);
    }
};