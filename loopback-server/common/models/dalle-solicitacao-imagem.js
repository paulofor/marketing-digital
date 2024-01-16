'use strict';

module.exports = function(Dallesolicitacaoimagem) {

    Dallesolicitacaoimagem.ListaParaGerarImagem = function(callback) {
        const sql = "select * from DalleSolicitacaoImagem where id not in (select dalleSolicitacaoImagemId from ImagemPaginaVenda)";
        const ds = Dallesolicitacaoimagem.dataSource;
        ds.connector.query(sql,callback);
    }
};
