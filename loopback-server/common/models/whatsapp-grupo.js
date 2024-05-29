'use strict';

module.exports = function(Whatsappgrupo) {

    Whatsappgrupo.AtualizaMetricaGrupo = function(idGrupoWhatsapp,callback) {
        const sql1 = "update WhatsappGrupo " +
            " set custoTotal = " +
            " (select sum(custoTotal) from CampanhaAdsRedeDisplay where WhatsappGrupo.id = CampanhaAdsRedeDisplay.whatsappGrupoId) " +
            " where id = " + idGrupoWhatsapp;
        const sql2 = "update WhatsappGrupo set custoPessoa = (custoTotal/quantidadePessoa)  " +
            " where id = " + idGrupoWhatsapp + " and quantidadePessoa > 0";
        const ds = Whatsappgrupo.dataSource;
        ds.connector.query(sql1, (err,result) => {
            console.log('err:' , err);
            ds.connector.query(sql2, callback);
        })
    }
};
