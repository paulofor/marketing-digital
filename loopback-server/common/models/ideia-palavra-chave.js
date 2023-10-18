'use strict';

module.exports = function(Ideiapalavrachave) {

    Ideiapalavrachave.ListaTop = function(callback) {
        const sql = "select *  " +
            " from IdeiaPalavraChave, VisitaProdutoHotmart " +
            " where IdeiaPalavraChave.hotmartId = VisitaProdutoHotmart.hotmartId " +
            " and IdeiaPalavraChave.maisRecente = 1 " +
            " and VisitaProdutoHotmart.maisRecente = 1 " +
            " and cpcPara75 > cpcMinimoTopPage " +
            " and quantidadePorVisita < 8 " +
            " and afiliacaoPercentual > 30 " +
            " and afiliacaoValor < 200 " +
            " and concorrencia = 'LOW' " +
            " order by mediaPesquisa desc";
        let ds = Ideiapalavrachave.dataSource;
        ds.connector.query(sql,callback);
    }

    Ideiapalavrachave.ListaTopPesquisa = function(callback) {
        const sql = "select *  " +
            " from IdeiaPalavraChave, VisitaProdutoHotmart " +
            " where IdeiaPalavraChave.hotmartId = VisitaProdutoHotmart.hotmartId " +
            " and IdeiaPalavraChave.maisRecente = 1 " +
            " and VisitaProdutoHotmart.maisRecente = 1 " +
            " and quantidadePorVisita < 8 " +
            " and afiliacaoPercentual > 30 " +
            " and afiliacaoValor < 200 " +
            " order by mediaPesquisa desc limit 50";
        let ds = Ideiapalavrachave.dataSource;
        ds.connector.query(sql,callback);
    }



    Ideiapalavrachave.CalculaCpcAlvo = function(callback) {
        const sql = " update IdeiaPalavraChave " +
            " set cpcPara50 = " +
            " (((select afiliacaoValor from VisitaProdutoHotmart where hotmartId = IdeiaPalavraChave.hotmartId and maisRecente = 1) * 0.5)/50), " +
            " cpcPara75 = " +
            " (((select afiliacaoValor from VisitaProdutoHotmart where hotmartId = IdeiaPalavraChave.hotmartId and maisRecente = 1) * 0.75)/50) " +
            " where maisRecente = 1";
        let ds = Ideiapalavrachave.dataSource;
        ds.connector.query(sql,callback);
    }

    Ideiapalavrachave.AtualizaQuantidadeVisita = function(callback) {
        const sql = "UPDATE IdeiaPalavraChave AS ipc " +
            " SET ipc.quantidadePorVisita = ( " +
            " SELECT COUNT(*) " +
            " FROM VisitaProdutoHotmart AS vph " +
            " WHERE vph.hotmartId = ipc.hotmartId " +
            " and maisRecente = 1 " +
            " ) " +
            " where maisRecente = 1";
        let ds = Ideiapalavrachave.dataSource;
        ds.connector.query(sql,callback);      
    }

    Ideiapalavrachave.MelhoresCpcComVisita = function(limite,callback) {
        const sql = "select IdeiaPalavraChave.*, VisitaProdutoHotmart.* " +
            " from IdeiaPalavraChave, VisitaProdutoHotmart " +
            " where IdeiaPalavraChave.hotmartId = VisitaProdutoHotmart.hotmartId " +
            " and cpcPara50 >= cpcMinimoTopPage " +
            " and afiliacaoValor <= 70 and afiliacaoValor > 0 " +
            " and quantidadePorVisita < 20 " +
            " and afiliacaoPercentual >= 30 " +
            " and IdeiaPalavraChave.maisRecente = 1 and VisitaProdutoHotmart.maisRecente = 1 " +
            " order by mediaPesquisa desc limit " + limite;
        let ds = Ideiapalavrachave.dataSource;
        ds.connector.query(sql,callback);
    }

    Ideiapalavrachave.AtualizaMaisRecentePalavraChave = function(callback) {
        const sql0 = "UPDATE IdeiaPalavraChave set maisRecente = 0";
        const sql = "UPDATE IdeiaPalavraChave AS v1 " +
            " JOIN ( " +
            " SELECT MAX(dataAcesso) AS maxDataInsercao " +
            " FROM IdeiaPalavraChave " +
            " ) AS v2 ON v1.dataAcesso = v2.maxDataInsercao " +
            " SET v1.maisRecente = 1"
        let ds = Ideiapalavrachave.dataSource;
        ds.connector.query(sql0,(err,result) => {
            ds.connector.query(sql,callback);
        });
    }


    Ideiapalavrachave.RecebeLista = function(lista, hotmartId, callback) {
        for (let i=0; i<lista.length; i++) {
            let item = lista[i];
            //console.log(item);
            item['dataAcesso'] = new Date();
            Ideiapalavrachave.create(item);
        }
        const sql = "update VisitaProdutoHotmart set possuiPalavraChave = 1 " +
            " where maisRecente = 1 and hotmartId = " + hotmartId;
        let ds = Ideiapalavrachave.dataSource;
        ds.connector.query(sql,callback);
    } 

    Ideiapalavrachave.MelhoresUltimaData = function(limiteMensal,callback) {
        let ds = Ideiapalavrachave.dataSource;
        let sql = "select * from IdeiaPalavraChave " +
            " inner join VisitaProdutoHotmart on VisitaProdutoHotmart.hotmartId = IdeiaPalavraChave.hotmartId " +
            " and VisitaProdutoHotmart.dataInsercao = (select max(dataInsercao) from VisitaProdutoHotmart) " +
            " where dataAcesso = (select max(dataAcesso) from IdeiaPalavraChave) " +
            " and mediaPesquisa >= " + limiteMensal + 
            " order by mediaPesquisa desc";
        ds.connector.query(sql,callback);
    }
};
