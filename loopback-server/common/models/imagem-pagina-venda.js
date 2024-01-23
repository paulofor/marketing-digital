'use strict';

module.exports = function(Imagempaginavenda) {


    Imagempaginavenda.AlteraDisponivel = function(idImagem, callback) {
        const sql = "UPDATE ImagemPaginaVenda SET disponivel = CASE WHEN disponivel = 0 THEN 1 WHEN disponivel = 1 THEN 0 END " +
            " WHERE id = " + idImagem;
        const ds = Imagempaginavenda.dataSource;
        ds.connector.query(sql,callback);
    }


    Imagempaginavenda.RegistraImagem = function(imagens, callback) {
        imagens.forEach(function(item, index, array) {
            Imagempaginavenda.create(item, function(err, result) {
                // Lógica de tratamento de erro, se necessário
                if (err) {
                    console.error("Erro ao criar imagem:", err);
                } else {
                    console.log("Imagem criada com sucesso:", result);
                }
    
                // Verifica se é a última iteração do loop
                if (index === array.length - 1) {
                    // Se for a última iteração, executa o callback
                    callback(null,{'situacao':'ok'});
                }
            });
        });
    };
    
};
