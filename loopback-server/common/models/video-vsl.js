'use strict';

module.exports = function(Videovsl) {
    
    
    Videovsl.ListaGeraAudioComTrecho = function(callback) {
        let filtro = {'include' : {'relation' : 'trechoVsls' , 'scope' : {'where' : {'tempo' : 0}}}}
        Videovsl.find(filtro,callback);
    }

    Videovsl.ListaCriaAudioLegendaVsl = function(callback) {
        let filtro = {'where' : {'criaAudioLegenda' : 1 }, 'include' : {'relation' : 'trechoVsls' , 'scope' : {'order' : 'ordenacao'} }}
        Videovsl.find(filtro,callback);
    }

    Videovsl.ObtemPorIdComTrechoOrdenado = function(idVideo,callback) {
        let filtro = {'include' : {'relation' : 'trechoVsls' , 'scope' : {'order' : 'ordenacao'} }}
        Videovsl.findById(idVideo,filtro,callback);
    }

};
