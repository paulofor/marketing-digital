'use strict';

module.exports = function(Itemconteudoproduto) {

    


    Itemconteudoproduto.CriaConteudoUnico = function(conteudo, callback) {
        Itemconteudoproduto.upsert(conteudo,callback);
    }


    Itemconteudoproduto.CriaConteudoItem = function(listaConteudo,callback) {
        for (let i=0; i<listaConteudo.length;i++) {
            Itemconteudoproduto.upsert(listaConteudo[i])
        }
        callback(null, {'resultado' : 'ok'});
    }

    Itemconteudoproduto.OrdenacaoAlfabetica = function(idEntregavel, callback) {
        const sql = "update ItemConteudoProduto " +
                " set ordenacao = (select ordenacao from PromptItem  " +
                " where PromptItem.id = ItemConteudoProduto.promptItemId and PromptItem.entregavelProdutoId = " + idEntregavel + ")";
        const ds = Itemconteudoproduto.dataSource;
        ds.connector.query(sql,callback);
    }
};
