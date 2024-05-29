'use strict';

module.exports = function(Imagemconjunto) {

    Imagemconjunto.AtualizaMetrica = function(idImagemConjunto,callback) {
        const sql1 = "update ImagemConjunto " +
            " set custoTotal = " +
            " (select sum(custoTotal) from CampanhaAdsRedeDisplay where ImagemConjunto.id = CampanhaAdsRedeDisplay.imagemConjuntoId), " +
            " cliqueTotal = " +
            " (select sum(cliqueTotal) from CampanhaAdsRedeDisplay where ImagemConjunto.id = CampanhaAdsRedeDisplay.imagemConjuntoId), " +
            " quantidadeEntradaGrupo =  " +
            " (select sum(quantidadeEntradaGrupo) from CampanhaAdsRedeDisplay where ImagemConjunto.id = CampanhaAdsRedeDisplay.imagemConjuntoId) " +
            " where id = " + idImagemConjunto;
        const sql2 = "update ImagemConjunto set custoEntradaGrupo = (custoTotal/quantidadeEntradaGrupo) , " +
            " percentualEntradaGrupo = (quantidadeEntradaGrupo/cliqueTotal) * 100 " +
            " where id = " + idImagemConjunto + " and quantidadeEntradaGrupo > 0";
        const ds = Imagemconjunto.dataSource;
        ds.connector.query(sql1, (err,result) => {
            console.log('err:' , err);
            ds.connector.query(sql2, callback);
        })
    }

    Imagemconjunto.ObtemListaParaGerarDeImagemVenda = function(callback) {
        const filtro = {'where' : { 'and' : [{'geraDeImagemVenda' : 1}] } , 'include' : ['imagemPaginaVenda','fonteLocal']}
        Imagemconjunto.find(filtro,callback);
    }

    Imagemconjunto.AtualizaImagemDePaginaVenda = function(imagem,callback) {
        imagem.dataGeracao = new Date();
        Imagemconjunto.upsert(imagem,callback); 
    }
};
