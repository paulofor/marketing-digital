'use strict';

module.exports = function(Entregavelproduto) {

    Entregavelproduto.ListaParaGerarImagemConteudo = function(callback) {
        let filtro = {'where' : {'geraImagemConteudo' : 1} , 'include' : 'produtoProprio'};
        Entregavelproduto.find(filtro,callback);
    }

    Entregavelproduto.ListaParaGerarLista = function(callback) {
        let filtro = {'include': 'produtoProprio', 'where' : {'geraLista' : 1}}
        Entregavelproduto.find(filtro,callback);
    }

    Entregavelproduto.GerouLista = function(idEntregavel,callback) {
        let sql = "update EntregavelProduto set geraLista = 0 where id = " + idEntregavel;
        const ds = Entregavelproduto.dataSource;
        ds.connector.query(sql,callback);
    }
};
