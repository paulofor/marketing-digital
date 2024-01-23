'use strict';

module.exports = function(Dallesolicitacaoimagem) {

    Dallesolicitacaoimagem.ListaParaGerarImagem = function(callback) {
        const sql = "select * from DalleSolicitacaoImagem where enviar = 1 and id not in (select dalleSolicitacaoImagemId from ImagemPaginaVenda)";
        const ds = Dallesolicitacaoimagem.dataSource;
        ds.connector.query(sql,callback);
    }

    Dallesolicitacaoimagem.RegistraProcessamento = function(idSolicitacao,callback) {
        const sql = "update DalleSolicitacaoImagem set dataProcessamento = now() where id = " + idSolicitacao;
        const ds = Dallesolicitacaoimagem.dataSource;
        ds.connector.query(sql,callback);
    }

    Dallesolicitacaoimagem.InverteEnviar = function(idSolicitacao, callback) {
        const sql = "UPDATE DalleSolicitacaoImagem SET enviar = CASE WHEN enviar = 0 THEN 1 WHEN enviar = 1 THEN 0 END " +
        " WHERE id = " + idSolicitacao;
        const ds = Dallesolicitacaoimagem.dataSource;
        ds.connector.query(sql,callback);
    }
};
