'use strict';

module.exports = function(Campanhaadsrededisplay) {

    Campanhaadsrededisplay.AtualizaIndicadorAds = function(campanha, callback) {
        const sql = "update CampanhaAdsRedeDisplay set custoTotal = " + campanha.custoTotal + " , " +
            " cpc = " + campanha.cpc + " , " + 
            " cliqueTotal = " + campanha.cliqueTotal + " , " +
            " impressaoTotal = " + campanha.impressaoTotal + " , " +
            " ctr = " + campanha.ctr + " , " +
            " atualizacaoAds = now() " +
            " where id = " + campanha.id;
        const sql2 = "update CampanhaAdsRedeDisplay set custoEntradaGrupo = (custoTotal/quantidadeEntradaGrupo) , " +
            " percentualEntradaGrupo = (quantidadeEntradaGrupo/cliqueTotal) * 100 " +
            " where id = " + campanha.id + " and quantidadeEntradaGrupo > 0";
        const ds = Campanhaadsrededisplay.dataSource;
        ds.connector.query(sql,(err,result) => {
            console.log('err:' ,err );
            //console.log(sql)
            ds.connector.query(sql2,callback);
        });
    }


    Campanhaadsrededisplay.ListaParaResultadoComConta = function(callback) {
        const filtro = {'where' : {'resourceName' : { 'neq' :  null }} , 'include' : 'contaGoogle'};
        Campanhaadsrededisplay.find(filtro,callback);
    }

    Campanhaadsrededisplay.AtualizaIndicadorPessoal = function(callback) {
        const ds = Campanhaadsrededisplay.dataSource;
        const sql = "update CampanhaAdsRedeDisplay set " + 
            " loadUnico = " + 
            " (select count(distinct visitante) from LoadPaginaVendaPropria  " + 
            " where LoadPaginaVendaPropria.utmCampaign = CampanhaAdsRedeDisplay.codigoHexa), " + 
            " checkout =  " + 
            " (select count(distinct visitante) from SolicitacaoCheckoutPaginaVendaPropria  " + 
            " where SolicitacaoCheckoutPaginaVendaPropria.utmCampaign = CampanhaAdsRedeDisplay.codigoHexa), " + 
            " scroll20 =  " + 
            " (select count(distinct visitante) from ScrollPaginaVendaPropria  " + 
            " where ScrollPaginaVendaPropria.utmCampaign = CampanhaAdsRedeDisplay.codigoHexa and posicao = 20), " + 
            " scroll40 = " + 
            " (select count(distinct visitante) from ScrollPaginaVendaPropria  " + 
            " where ScrollPaginaVendaPropria.utmCampaign = CampanhaAdsRedeDisplay.codigoHexa and posicao = 40), " + 
            " scroll60 = " + 
            " (select count(distinct visitante) from ScrollPaginaVendaPropria  " + 
            " where ScrollPaginaVendaPropria.utmCampaign = CampanhaAdsRedeDisplay.codigoHexa and posicao = 60), " + 
            " scroll80 =  " + 
            " (select count(distinct visitante) from ScrollPaginaVendaPropria  " + 
            " where ScrollPaginaVendaPropria.utmCampaign = CampanhaAdsRedeDisplay.codigoHexa and posicao = 80)";
        const sql2 = "update CampanhaAdsRedeDisplay set cpl = (custoTotal / loadUnico) , cps = (custoTotal / scroll20) , " +
            " cpcheck = (custoTotal / checkout), atualizacaoPessoal = now() , percentualScroll = (scroll20/loadUnico), percentualCheckout = (checkout/loadUnico), " +
            " percentualLoad = (loadUnico/cliqueTotal) " +
            " where loadUnico > 0 and scroll20 > 0 and checkout > 0 and cliqueTotal > 0";

        ds.connector.query(sql,(erro,result) => {
            ds.connector.query(sql2,callback);
        });
    }


    Campanhaadsrededisplay.ObtemListaParaCriacao = function(callback) {
        let filtro = {
            'where' : {'prontaParaEnvio': 1 },
            'include' : [
                {'relation' : 'contaGoogle'},
                {'relation' : 'paginaVendaVsl'},
                {'relation' : 'imagemConjunto'},
                {'relation' : 'anuncioConceitoAdsRedeDisplay'},
                {'relation' : 'paginaVendaPropria'},
                {'relation' : 'whatsappGrupo'},
                {'relation' : 'publicoAlvoAdsPalavra' , 'scope' : {'include' : 
                    {'relation' : 'contaPublicoAlvoAdsPalavras' }
                }}
            ]
        }
        Campanhaadsrededisplay.find(filtro,callback);
    }

    Campanhaadsrededisplay.AtualizaCampanhaCriada = function(resourceName,resourceNameGrupo,nomeAds,idCampanha,callback) {
        const sql = "update CampanhaAdsRedeDisplay set resourceName = '" + resourceName + "' , " +
            " resourceNameGrupo = '" + resourceNameGrupo + "' , " +
            " nomeAds = '" + nomeAds + "' , " +
            " dataEnvioGoogle = now() , prontaParaEnvio = 2 " +
            " where id = " + idCampanha;
        const ds = Campanhaadsrededisplay.dataSource;
        ds.connector.query(sql,callback);
    }
};
