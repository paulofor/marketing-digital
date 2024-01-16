'use strict';

module.exports = function(Elementomodelopaginavenda) {

    Elementomodelopaginavenda.ListaComConteudoPorVersaoPagina = function(idVersao,callback) {
        const ds = Elementomodelopaginavenda.dataSource;
        const sqlQuery = "select ElementoModeloPaginaVenda.id as elementoModeloPaginaVendaIdOrigem, " +
            " ElementoModeloPaginaVenda.rotulo, " +
            " ConteudoElemento.*, " +
            " VersaoPaginaVenda.id as versaoPaginaVendaIdOrigem, " +
            " PosicaoElementoPaginaVenda.modeloPaginaVendaId as modeloPaginaVendaIdOrigem " +
            " from ElementoModeloPaginaVenda " +
            " left join ConteudoElemento on ConteudoElemento.elementoModeloPaginaVendaId = ElementoModeloPaginaVenda.id " +
            " and ConteudoElemento.versaoPaginaVendaId = " + idVersao +
            " inner join PosicaoElementoPaginaVenda on ElementoModeloPaginaVenda.id = PosicaoElementoPaginaVenda.elementoModeloPaginaVendaId " +
            " inner join VersaoPaginaVenda on VersaoPaginaVenda.modeloPaginaVendaId = PosicaoElementoPaginaVenda.modeloPaginaVendaId " +
            " where VersaoPaginaVenda.id = " + idVersao + 
            " order by PosicaoElementoPaginaVenda.posicao ";
        ds.connector.query(sqlQuery,callback);
        /*
        Elementomodelopaginavenda.dataSource.connector.execute(sqlQuery, [], function(err, results) {
                if (err) {
                  console.error('Erro ao executar consulta SQL:', err);
                  callback(err);
                } else {

                    const resultadosAninhados = results.map(resultado => {
                        console.log('Resultado:' , resultado);
                        return {
                          ...resultado.ElementoModeloPaginaVenda,
                          conteudoElemento: {
                            ...resultado.ConteudoElemento
                          }
                        };
                      });
                  callback(null, resultadosAninhados);
                }
        });
        */
   
    }
};
