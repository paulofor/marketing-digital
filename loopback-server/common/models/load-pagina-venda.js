'use strict';

module.exports = function(Loadpaginavenda) {

    Loadpaginavenda.InsereItem = function(idHm,callback) {
        const sql = "insert into LoadPaginaVenda (hotmartId,dataHora) values (" + idHm + " ,  now())";
        const ds = Loadpaginavenda.dataSource;
        ds.connector.query(sql, callback);
    }

    Loadpaginavenda.UltimosAcessos = function(callback) {
        const filtro = {
            'order' : 'id desc',
            'include' : 'produtoAfiliadoHotmart',
            'limit' : 50
        }
        Loadpaginavenda.find(filtro,callback);
    }
};
