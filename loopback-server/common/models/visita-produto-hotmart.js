'use strict';

module.exports = function(Visitaprodutohotmart) {

    Visitaprodutohotmart.AjustaDeltaTemperatura = function(callback) {
        const sql = "UPDATE ( " +
            " SELECT hotmartId, " +
            "        temperatura, " +
            "       dataInsercao, " +
            "        @prev_temp AS prev_temp, " +
            "        @prev_temp := temperatura AS dummy, " +
            "        @prev_date AS prev_date, " +
            "        @prev_date := dataInsercao AS dummy2 " +
            " FROM VisitaProdutoHotmart, " +
            "      (SELECT @prev_temp := NULL, @prev_date := NULL) temp " +
            " ORDER BY hotmartId, dataInsercao " +
            " ) AS t " +
            " JOIN VisitaProdutoHotmart vph " +
            " ON t.hotmartId = vph.hotmartId " +
            " AND t.dataInsercao = vph.dataInsercao " +
            " SET vph.deltatemperatura = IF(t.hotmartId = vph.hotmartId, vph.temperatura - t.prev_temp, 0) ";
        let ds = Visitaprodutohotmart.dataSource;
        ds.connector.query(sql,callback);
    }

    

    Visitaprodutohotmart.ListaBomCrescimentoTemperatura = function(callback) {
        const sql = " select hotmartId " +
            " from VisitaProdutoHotmart " +
            " where deltaTemperatura >= 10 " +
            " and (afiliacaoPercentual >= 40 ) " +
            " and afiliacaoValor >= 20 and afiliacaoValor <= 600 " +
            " and maisRecente = 1 " +
            " order by temperatura desc ";
        let ds = Visitaprodutohotmart.dataSource;
        ds.connector.query(sql, (err,result) => {
            console.log('err:' , err);
            // Mapeando a lista para obter apenas os IDs
            var idsParaFiltrar = result.map(item => item.hotmartId);
            const filtro = {
                'include' : 
                [
                    {'relation': 'ideiaPalavraChaves', 'scope' : {'order' : 'mediaPesquisa desc', 'limit' : 15}},
                    'produtoAfiliadoHotmart', 
                    'produtoAfiliadoHotmartPendente'
                ] ,
                'order' : 'temperatura desc',
                'where': {
                    'and' : [
                        {'hotmartId': { inq: idsParaFiltrar } }, 
                        {'maisRecente': 1 }
                    ]
                }
                
            }
            console.log('filtro' , filtro);
            Visitaprodutohotmart.find(filtro,callback);
        })
    }




    Visitaprodutohotmart.ListaEstiloFanart = function(callback) {
        const sql = " select hotmartId " +
            " from VisitaProdutoHotmart " +
            " where temperatura >= 40 and temperatura <= 100 " +
            " and afiliacaoPercentual >= 60 " +
            " and afiliacaoValor >= 100 and afiliacaoValor <=300 " +
            " and maisRecente = 1 " +
            " order by temperatura desc ";
        let ds = Visitaprodutohotmart.dataSource;
        ds.connector.query(sql, (err,result) => {
            console.log('err:' , err);
            // Mapeando a lista para obter apenas os IDs
            var idsParaFiltrar = result.map(item => item.hotmartId);
            const filtro = {
                'include' : {'relation': 'ideiaPalavraChaves', 'scope' : {'order' : 'mediaPesquisa desc', 'limit' : 15}},
                'order' : 'temperatura desc',
                'where': {
                    'and' : [
                        {'hotmartId': { inq: idsParaFiltrar } }, 
                        {'maisRecente': 1 }
                    ]
                }
                
            }
            console.log('filtro' , filtro);
            Visitaprodutohotmart.find(filtro,callback);
        })
    }


    Visitaprodutohotmart.ListaBoaOpcaoIntermediaria = function(callback) {
        console.log('entrou aqui');
        const sql = " select hotmartId " +
            " from VisitaProdutoHotmart " +
            " where temperatura >= 70 " +
            " and (afiliacaoPercentual >= 50 or afiliacaoPercentual = 0) " +
            " and maisRecente = 1 " +
            " order by temperatura desc ";
        let ds = Visitaprodutohotmart.dataSource;
        ds.connector.query(sql, (err,result) => {
            // Mapeando a lista para obter apenas os IDs
            var idsParaFiltrar = result.map(item => item.hotmartId);
            const filtro = {
                'include' : {'relation': 'ideiaPalavraChaves', 'scope' : {'order' : 'mediaPesquisa desc', 'limit' : 15}},
                'order' : 'temperatura desc',
                'where': {
                    'and' : [
                        {'hotmartId': { inq: idsParaFiltrar } }, 
                        {'maisRecente': 1 }
                    ]
                }
                
            }
            console.log('filtro' , filtro);
            Visitaprodutohotmart.find(filtro,callback);
        })
    }



    Visitaprodutohotmart.ResumoPorDataInsercao = function(callback) {
        const sql = "select dataInsercao, count(*) as qtdeProduto " +
            " from VisitaProdutoHotmart " +
            " group by dataInsercao order by dataInsercao desc limit 10";
        let ds = Visitaprodutohotmart.dataSource;
        ds.connector.query(sql,callback);
    }

    Visitaprodutohotmart.AtualizaMaisRecenteProdutoHotmart = function(callback) {
        const sql0 = "UPDATE VisitaProdutoHotmart set maisRecente = 0 ";
        const sql = "UPDATE VisitaProdutoHotmart AS v1 " +
            " JOIN ( " +
            " SELECT MAX(dataInsercao) AS maxDataInsercao " +
            " FROM VisitaProdutoHotmart " +
            " ) AS v2 ON v1.dataInsercao = v2.maxDataInsercao " +
            " SET v1.maisRecente = 1"
        let ds = Visitaprodutohotmart.dataSource;
        ds.connector.query(sql0, (err,result) => {
            ds.connector.query(sql,callback);
        })
    }

    Visitaprodutohotmart.InsereListaProdutoHotmart = function(lista, callback) {
        for (let i=0; i<lista.length; i++) {
            let item = lista[i];
            //console.log(item);
            item['dataInsercao'] = new Date();
            Visitaprodutohotmart.create(item);
        }
        callback(null, {'reult' : 'ok'})
    } 

    Visitaprodutohotmart.ListaParaPesquisaPalavraChave = function(callback) {
        let sql = "SELECT * " +
            " FROM VisitaProdutoHotmart " +
            " where dataInsercao = (select max(dataInsercao) from VisitaProdutoHotmart) " +
            " and possuiPalavraChave = 0 ";
        let ds = Visitaprodutohotmart.dataSource
        ds.connector.query(sql,callback);
    }

};
