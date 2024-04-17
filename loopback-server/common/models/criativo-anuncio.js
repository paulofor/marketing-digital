'use strict';

module.exports = function(Criativoanuncio) {

    Criativoanuncio.ListaParaGerarImagem= function(callback) {
        let filtro = {'where' : {'geraImagem': 1} , 'include' : ['imagemPaginaVenda','fonteLocal']};
        Criativoanuncio.find(filtro,callback);
    }

    Criativoanuncio.AtualizaImagemEditada = function(criativo,callback) {
        let sql = "update CriativoAnuncio set urlImagemEditada = '" + criativo.urlImagemEditada + "' " +
            " where id = " + criativo.id;
        const ds = Criativoanuncio.dataSource;
        ds.connector.query(sql,callback);
    }
};
