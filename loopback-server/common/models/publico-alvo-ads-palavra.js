'use strict';

module.exports = function(Publicoalvoadspalavra) {

    Publicoalvoadspalavra.ListaParaCriar = function(callback) {
        let filtro = {
            'where' : {'and' : [{'pronta':1}] },
            'include' : ['contaGoogle']
        }
        Publicoalvoadspalavra.find(filtro,callback);
    }

    Publicoalvoadspalavra.RegistraCriacao = function(idPublico, resourceName,  callback) {
        const sql = "update PublicoAlvoAdsPalavra set resourceName = '" + resourceName + "' , dataCriacaoAds = now(), pronta = 2 " +
            " where id = " + idPublico;
        const ds = Publicoalvoadspalavra.dataSource;
        console.log(sql);
        ds.connector.query(sql,callback);
    } 
};
