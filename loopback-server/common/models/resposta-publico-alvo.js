'use strict';

module.exports = function(Respostapublicoalvo) {

    Respostapublicoalvo.InsereResposta = function(resposta,callback) {
        Respostapublicoalvo.create(resposta,callback);
    }

    Respostapublicoalvo.LimpaPorProduto = function(idProduto,callback) {
        let sql = "delete from RespostaPublicoAlvo where produtoProprioId = " + idProduto;
        let ds = Respostapublicoalvo.dataSource;
        ds.connector.query(sql,callback);
    }

    Respostapublicoalvo.AtualizaUltimaRespostaProduto = function(idProduto,callback) {
        let sql = "update ProdutoProprio set descricaoPublicoAlvoId =  " +
            " (select RespostaPublicoAlvo.id from RespostaPublicoAlvo " +     
            " inner join PerguntaPublicoAlvo " +
            " on RespostaPublicoAlvo.perguntaPublicoAlvoId = PerguntaPublicoAlvo.id " +
            " where produtoProprioId = " +  idProduto + " and PerguntaPublicoAlvo.ativa = 1 " +
            " order by ordenacao desc " +
            " limit 1), geraPaginaCheckout = 0 " +
            " where id = " + idProduto;
        let ds = Respostapublicoalvo.dataSource;
        ds.connector.query(sql,callback);
    }
    
};