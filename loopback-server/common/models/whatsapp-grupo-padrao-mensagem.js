'use strict';

module.exports = function(Whatsappgrupopadraomensagem) {

    Whatsappgrupopadraomensagem.ObtemParaGerarMensagem = function(callback) {
        let filtro = {
            'where' : {'geraMensagem' : 1},
            'include' : {'relation' : 'whatsappGrupoDiaAgendas', 'scope' : {
                'order' : 'dia',
                'include' : {'relation' : 'whatsappModeloMensagems' , 'scope' : {
                    'order' : 'ordenacao'

                }}
            }}
        }
        Whatsappgrupopadraomensagem.find(filtro,callback);
    }
};
