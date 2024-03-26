'use strict';

module.exports = function(Implementacaoitemestrutura) {

    Implementacaoitemestrutura.PossiveisParaPaginaItem = function(idPaginaAberta,idItem,callback) {
        let filtro = {
            'where' : {'itemEstruturaPaginaVendaId' : idItem},
            'include' : {'relation' : 'paginaImplementacaos' , 'scope' : {
                'where' : {'paginaVendaAbertaId': idPaginaAberta}
            }}
        }
        Implementacaoitemestrutura.find(filtro,callback);
    }
};
