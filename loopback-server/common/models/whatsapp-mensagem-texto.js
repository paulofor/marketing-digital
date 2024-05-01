'use strict';

module.exports = function(Whatsappmensagemtexto) {


    Whatsappmensagemtexto.LimpaPorGrupo = function(idGrupoPadrao,callback) {
        const sql = "delete from WhatsappMensagemTexto where whatsappGrupoPadraoMensagemId = " + idGrupoPadrao;
        const ds = Whatsappmensagemtexto.dataSource;
        ds.connector.query(sql, callback );
    }

    Whatsappmensagemtexto.SalvaItem = function(mensagem,callback) {
        Whatsappmensagemtexto.create(mensagem,callback);
    }

    Whatsappmensagemtexto.SalvaListaProdutoGrupoPadrao = function(listaMensagem,idGrupo,callback) {
        const sql = "delete from WhatsappMensagemTexto where whatsappGrupoPadraoMensagemId = " + idGrupo;
        const ds = Whatsappmensagemtexto.dataSource;
        ds.connector.query(sql, (err,result) => {
            console.log('err-delete: ' , err);
            console.log('tamanho lista: ' , listaMensagem.length);
            for (let i=0; i<listaMensagem.length; i++) {
                Whatsappmensagemtexto.create(listaMensagem[i], (err,result) => {
                    console.log('Erro create: ' , err);
                });
            }
            callback(null, {'result' : 'ok'});
        })
    }
};
