'use strict';

module.exports = function(Palavrachaveestatistica) {


    Palavrachaveestatistica.InsereLista = function(listaPalavra,palavraChaveRaizId,callback) {
        const sql1 = "update PalavraChaveEstatistica set maisRecente = 0 where maisRecente = 3 and palavraChaveRaizId = " + palavraChaveRaizId;
        const sql2 = "update PalavraChaveEstatistica set maisRecente = 3 where maisRecente = 2 and palavraChaveRaizId = " + palavraChaveRaizId;
        const sql3 = "update PalavraChaveEstatistica set maisRecente = 2 where maisRecente = 1 and palavraChaveRaizId = " + palavraChaveRaizId;
        const sql4 = "update PalavraChaveRaiz set dataUltimaAtualizacao = now() where id = " + palavraChaveRaizId;
        const ds = Palavrachaveestatistica.dataSource;
        ds.connector.query(sql1,(err1,result1) => {
            console.log('err1', err1);
            ds.connector.query(sql2, (err2,result2) => {
                console.log('err2', err2);
                ds.connector.query(sql3,(err3,result3) => {
                    console.log('err3', err3);
                    let conta = 0;
                    listaPalavra.forEach((item) => {
                        item.maisRecente = 1;
                        item.dataConsulta = new Date();
                        Palavrachaveestatistica.create(item);
                        conta++;
                        if (conta==listaPalavra.length) {
                            ds.connector.query(sql4,callback)
                        }
                    });
                })
            })
        })
    }

};
