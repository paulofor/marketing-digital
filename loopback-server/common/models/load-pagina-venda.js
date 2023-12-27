'use strict';

module.exports = function(Loadpaginavenda) {

    Loadpaginavenda.InsereItem = function(idHm,visitante, tempo, dominio, callback) {
        console.log('entrou no load  idHm:' + idHm + " ,tempo:" + tempo + ", dominio:" + dominio);
        const ds = Loadpaginavenda.dataSource;
        if (!visitante) {
            visitante = "";
            if (dominio) {
                const sql = "insert into LoadPaginaVenda (hotmartId, dominio, dataHora) values (" + idHm + " , '" + dominio + "' , now() )";
                console.log(sql);
                ds.connector.query(sql, callback);
            } else {
                const sql = "insert into LoadPaginaVenda (hotmartId,visitante, dataHora, qtdeVisita) values (" + idHm + " , '" + visitante + "' , now(), 0 )";
                ds.connector.query(sql, callback);
            }
        } else {
            if (!tempo) {
                if (dominio) {
                    const sql = "insert into LoadPaginaVenda (hotmartId, dominio, dataHora) values (" + idHm + " , '" + dominio + "' , now() )";
                    console.log(sql);
                    ds.connector.query(sql, callback);
                }  else {
                    const qtde = "(select (count(*)+1) as qtde from LoadPaginaVenda where hotmartId = " + idHm + " and visitante = '" + visitante + "' )";
                    ds.connector.query(qtde,(err,result) => {
                        const sql = "insert into LoadPaginaVenda (hotmartId,visitante, dataHora, qtdeVisita) values (" + idHm + " , '" + visitante + "' , now(), " + result[0].qtde + " )"; 
                        ds.connector.query(sql, callback);
                    })
                }
              
            } else {
                if (!dominio) {
                    const sql = "insert into LoadPaginaVenda (hotmartId, tempo, dataHora) values (" + idHm + " , '" + tempo + "' , now() )";
                    console.log(sql)
                    ds.connector.query(sql, callback);
                } else {
                    const sql = "insert into LoadPaginaVenda (hotmartId, tempo, dataHora, dominio) values (" + idHm + " , '" + tempo + "' , now() , '" + dominio + "')";
                    console.log(sql)
                    ds.connector.query(sql, callback);
                }
              
            }
        }
    }

    Loadpaginavenda.UltimosAcessos = function(callback) {
        const filtro = {
            'order' : 'id desc',
            'include' : 'produtoAfiliadoHotmart',
            'limit' : 60
        }
        Loadpaginavenda.find(filtro,callback);
    }

    Loadpaginavenda.LimpaMeuAcesso = function(callback) {
        const sql = "delete from LoadPaginaVenda where visitante in ('ea8b0cefbcb606c') ";
        const sql2 = "delete from SolicitacaoCheckout where visitante in ('ea8b0cefbcb606c') ";
        const ds = Loadpaginavenda.dataSource;
        ds.connector.query(sql,(err,result) => {
            ds.connector.query(sql2,callback);
        });
    }
};
