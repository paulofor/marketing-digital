'use strict';

module.exports = function(Produtoafiliadohotmartpendente) {


    Produtoafiliadohotmartpendente.AtualizaPendente = function(listaHotmartId,callback) {
        const ds = Produtoafiliadohotmartpendente.dataSource;
        console.log('Tamanho Pendente: ', listaHotmartId.length);
        const sqlLimpa = "delete from ProdutoAfiliadoHotmartPendente";
        ds.connector.query(sqlLimpa, (err,result) => {
            for (let i=0; i<listaHotmartId.length;i++) {
                let sql = "insert into ProdutoAfiliadoHotmartPendente ( hotmartId ) values ( " +  listaHotmartId[i].hotmartId + " )";
                //console.log(sql)
                ds.connector.query(sql,(err,result) => {
                    //console.log('Erro:' , err);
                })
            } 
        })
        
        callback(null, {'resposta' : 'ok'})
    }

};
