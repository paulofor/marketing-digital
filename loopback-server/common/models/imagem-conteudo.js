'use strict';

module.exports = function(Imagemconteudo) {


 

    Imagemconteudo.ListaPrincipalGeraJpg = function(callback) {
        let filtro = {'where' : {'principal' : 1}, 'include' : 'conteudoProdutoKiwify'}
        Imagemconteudo.find(filtro,callback);
    }


    Imagemconteudo.LigaPrincipal = function(idImagem,callback) {
        Imagemconteudo.findById(idImagem, (err,result) => {
            if (result) {
                let sql1 = "update ImagemConteudo set principal = 0 where conteudoProdutoKiwifyId = " + result.conteudoProdutoKiwifyId;
                let sql2 = "update ImagemConteudo set principal = 1 where id = " + idImagem;
                const ds = Imagemconteudo.dataSource;
                ds.connector.query(sql1, (err,result) => {
                    ds.connector.query(sql2, callback);
                })
            } else {
                callback(null,null)
            }
        })
    }

    Imagemconteudo.RegistraImagem = function(imagem,callback) {
        Imagemconteudo.upsert(imagem,callback);
    }


};
