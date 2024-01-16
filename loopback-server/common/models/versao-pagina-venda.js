'use strict';

module.exports = function (Versaopaginavenda) {

    Versaopaginavenda.ObtemPorId = function(idVersao,callback) {
        const filtro =  {
            'where': { 'id': idVersao },
            'include': [
                {
                    'relation': 'modeloPaginaVenda', 'scope': {
                        'include': [
                            {
                                'relation': 'posicaoElementoPaginaVendas', 'scope': {
                                    'include': {
                                        'relation': 'elementoModeloPaginaVenda', 'scope': {
                                            'include': {
                                                'relation': 'conteudoElementos', 'scope': {
                                                    'where': { 'versaoPaginaVendaId': idVersao }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        };
        Versaopaginavenda.findOne(filtro,callback);
       
    }


    Versaopaginavenda.ObtemListaCriacao = function (callback) {
      const filtro = {'where' : {'cria' : 1}}
      Versaopaginavenda.find(filtro,callback);
    }

};
