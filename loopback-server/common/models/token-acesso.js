'use strict';

module.exports = function(Tokenacesso) {

    Tokenacesso.ObtemPorNome = function(nome,callback) {
        //let filtro = { 'where' : {'nome' : nome} }
        Tokenacesso.findById(nome,callback);
    }

    Tokenacesso.RegistraAcesso = function(nome,callback) {
        const ds = Tokenacesso.dataSource;
        const sql = "update TokenAcesso set dataAcesso = now() where nome = '" + nome + "' ";
        ds.connector.query(sql,callback);
    }
};
