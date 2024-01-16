'use strict';

module.exports = function(Imagempaginavenda) {

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
