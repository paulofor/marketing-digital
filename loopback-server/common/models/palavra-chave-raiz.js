'use strict';

module.exports = function(Palavrachaveraiz) {


    Palavrachaveraiz.ListaParaPesquisa = function(callback) {
        let sql = "select * from PalavraChaveRaiz where ativo = 1 and " + 
            " (YEAR(dataUltimaAtualizacao) = YEAR(CURDATE()) AND MONTH(dataUltimaAtualizacao) != MONTH(CURDATE()) or " +
            " dataUltimaAtualizacao is null)";
        let ds = Palavrachaveraiz.dataSource;
        ds.connector.query(sql,callback);
    }
};
