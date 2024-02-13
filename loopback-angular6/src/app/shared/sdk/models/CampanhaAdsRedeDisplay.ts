/* tslint:disable */
import {
  ContaGoogle,
  ProdutoAfiliadoHotmart,
  ImagemConjunto,
  PaginaVendaPropria,
  AnuncioCampanhaAdsRedeDisplay,
  GrupoCampanhaAdsRedeDisplay,
  PublicoAlvoAdsPalavra,
  AnuncioConceitoAdsRedeDisplay,
  MetricaCampanhaAdsRedeDisplay
} from '../index';

declare var Object: any;
export interface CampanhaAdsRedeDisplayInterface {
  "nome"?: string;
  "nomeAds"?: string;
  "dataEnvioGoogle"?: Date;
  "custoAtual"?: number;
  "resourceName"?: string;
  "resourceNameGrupo"?: string;
  "prontaParaEnvio"?: number;
  "resourceNameBudget"?: string;
  "tipoCampanha"?: string;
  "contaGoogleId"?: number;
  "codigoHexa"?: string;
  "urlPrincipal"?: string;
  "custoTotal"?: number;
  "cpc"?: number;
  "cliqueTotal"?: number;
  "impressaoTotal"?: number;
  "ctr"?: number;
  "loadUnico"?: number;
  "scroll20"?: number;
  "scroll40"?: number;
  "scroll60"?: number;
  "scroll80"?: number;
  "checkout"?: number;
  "percentualScroll"?: number;
  "percentualCheckout"?: number;
  "atualizacaoAds"?: Date;
  "atualizacaoPessoal"?: Date;
  "cpl"?: number;
  "cps"?: number;
  "cpcheck"?: number;
  "percentualLoad"?: number;
  "paginaVendaPropriaId"?: number;
  "faixaHorarioCampanhaAdsId"?: number;
  "publicoAlvoAdsPalavraId"?: number;
  "anuncioConceitoAdsRedeDisplayId"?: number;
  "imagemConjuntoId"?: number;
  "id"?: number;
  "hotmartId"?: number;
  contaGoogle?: ContaGoogle;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  imagemConjunto?: ImagemConjunto;
  paginaVendaPropria?: PaginaVendaPropria;
  anuncioCampanhaAdsRedeDisplays?: AnuncioCampanhaAdsRedeDisplay[];
  grupoCampanhaAdsRedeDisplays?: GrupoCampanhaAdsRedeDisplay[];
  publicoAlvoAdsPalavra?: PublicoAlvoAdsPalavra;
  anuncioConceitoAdsRedeDisplay?: AnuncioConceitoAdsRedeDisplay;
  metricaCampanhaAdsRedeDisplays?: MetricaCampanhaAdsRedeDisplay[];
}

export class CampanhaAdsRedeDisplay implements CampanhaAdsRedeDisplayInterface {
  "nome": string;
  "nomeAds": string;
  "dataEnvioGoogle": Date;
  "custoAtual": number;
  "resourceName": string;
  "resourceNameGrupo": string;
  "prontaParaEnvio": number;
  "resourceNameBudget": string;
  "tipoCampanha": string;
  "contaGoogleId": number;
  "codigoHexa": string;
  "urlPrincipal": string;
  "custoTotal": number;
  "cpc": number;
  "cliqueTotal": number;
  "impressaoTotal": number;
  "ctr": number;
  "loadUnico": number;
  "scroll20": number;
  "scroll40": number;
  "scroll60": number;
  "scroll80": number;
  "checkout": number;
  "percentualScroll": number;
  "percentualCheckout": number;
  "atualizacaoAds": Date;
  "atualizacaoPessoal": Date;
  "cpl": number;
  "cps": number;
  "cpcheck": number;
  "percentualLoad": number;
  "paginaVendaPropriaId": number;
  "faixaHorarioCampanhaAdsId": number;
  "publicoAlvoAdsPalavraId": number;
  "anuncioConceitoAdsRedeDisplayId": number;
  "imagemConjuntoId": number;
  "id": number;
  "hotmartId": number;
  contaGoogle: ContaGoogle;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  imagemConjunto: ImagemConjunto;
  paginaVendaPropria: PaginaVendaPropria;
  anuncioCampanhaAdsRedeDisplays: AnuncioCampanhaAdsRedeDisplay[];
  grupoCampanhaAdsRedeDisplays: GrupoCampanhaAdsRedeDisplay[];
  publicoAlvoAdsPalavra: PublicoAlvoAdsPalavra;
  anuncioConceitoAdsRedeDisplay: AnuncioConceitoAdsRedeDisplay;
  metricaCampanhaAdsRedeDisplays: MetricaCampanhaAdsRedeDisplay[];
  constructor(data?: CampanhaAdsRedeDisplayInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CampanhaAdsRedeDisplay`.
   */
  public static getModelName() {
    return "CampanhaAdsRedeDisplay";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CampanhaAdsRedeDisplay for dynamic purposes.
  **/
  public static factory(data: CampanhaAdsRedeDisplayInterface): CampanhaAdsRedeDisplay{
    return new CampanhaAdsRedeDisplay(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'CampanhaAdsRedeDisplay',
      plural: 'CampanhaAdsRedeDisplays',
      path: 'CampanhaAdsRedeDisplays',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "nomeAds": {
          name: 'nomeAds',
          type: 'string'
        },
        "dataEnvioGoogle": {
          name: 'dataEnvioGoogle',
          type: 'Date'
        },
        "custoAtual": {
          name: 'custoAtual',
          type: 'number'
        },
        "resourceName": {
          name: 'resourceName',
          type: 'string'
        },
        "resourceNameGrupo": {
          name: 'resourceNameGrupo',
          type: 'string'
        },
        "prontaParaEnvio": {
          name: 'prontaParaEnvio',
          type: 'number'
        },
        "resourceNameBudget": {
          name: 'resourceNameBudget',
          type: 'string'
        },
        "tipoCampanha": {
          name: 'tipoCampanha',
          type: 'string'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
          type: 'number'
        },
        "codigoHexa": {
          name: 'codigoHexa',
          type: 'string'
        },
        "urlPrincipal": {
          name: 'urlPrincipal',
          type: 'string'
        },
        "custoTotal": {
          name: 'custoTotal',
          type: 'number'
        },
        "cpc": {
          name: 'cpc',
          type: 'number'
        },
        "cliqueTotal": {
          name: 'cliqueTotal',
          type: 'number'
        },
        "impressaoTotal": {
          name: 'impressaoTotal',
          type: 'number'
        },
        "ctr": {
          name: 'ctr',
          type: 'number'
        },
        "loadUnico": {
          name: 'loadUnico',
          type: 'number'
        },
        "scroll20": {
          name: 'scroll20',
          type: 'number'
        },
        "scroll40": {
          name: 'scroll40',
          type: 'number'
        },
        "scroll60": {
          name: 'scroll60',
          type: 'number'
        },
        "scroll80": {
          name: 'scroll80',
          type: 'number'
        },
        "checkout": {
          name: 'checkout',
          type: 'number'
        },
        "percentualScroll": {
          name: 'percentualScroll',
          type: 'number'
        },
        "percentualCheckout": {
          name: 'percentualCheckout',
          type: 'number'
        },
        "atualizacaoAds": {
          name: 'atualizacaoAds',
          type: 'Date'
        },
        "atualizacaoPessoal": {
          name: 'atualizacaoPessoal',
          type: 'Date'
        },
        "cpl": {
          name: 'cpl',
          type: 'number'
        },
        "cps": {
          name: 'cps',
          type: 'number'
        },
        "cpcheck": {
          name: 'cpcheck',
          type: 'number'
        },
        "percentualLoad": {
          name: 'percentualLoad',
          type: 'number'
        },
        "paginaVendaPropriaId": {
          name: 'paginaVendaPropriaId',
          type: 'number'
        },
        "faixaHorarioCampanhaAdsId": {
          name: 'faixaHorarioCampanhaAdsId',
          type: 'number'
        },
        "publicoAlvoAdsPalavraId": {
          name: 'publicoAlvoAdsPalavraId',
          type: 'number'
        },
        "anuncioConceitoAdsRedeDisplayId": {
          name: 'anuncioConceitoAdsRedeDisplayId',
          type: 'number'
        },
        "imagemConjuntoId": {
          name: 'imagemConjuntoId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
      },
      relations: {
        contaGoogle: {
          name: 'contaGoogle',
          type: 'ContaGoogle',
          model: 'ContaGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'contaGoogleId',
          keyTo: 'id'
        },
        produtoAfiliadoHotmart: {
          name: 'produtoAfiliadoHotmart',
          type: 'ProdutoAfiliadoHotmart',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'belongsTo',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        imagemConjunto: {
          name: 'imagemConjunto',
          type: 'ImagemConjunto',
          model: 'ImagemConjunto',
          relationType: 'belongsTo',
                  keyFrom: 'imagemConjuntoId',
          keyTo: 'id'
        },
        paginaVendaPropria: {
          name: 'paginaVendaPropria',
          type: 'PaginaVendaPropria',
          model: 'PaginaVendaPropria',
          relationType: 'belongsTo',
                  keyFrom: 'paginaVendaPropriaId',
          keyTo: 'id'
        },
        anuncioCampanhaAdsRedeDisplays: {
          name: 'anuncioCampanhaAdsRedeDisplays',
          type: 'AnuncioCampanhaAdsRedeDisplay[]',
          model: 'AnuncioCampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'campanhaAdsRedeDisplayId'
        },
        grupoCampanhaAdsRedeDisplays: {
          name: 'grupoCampanhaAdsRedeDisplays',
          type: 'GrupoCampanhaAdsRedeDisplay[]',
          model: 'GrupoCampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'campanhaAdsRedeDisplayId'
        },
        publicoAlvoAdsPalavra: {
          name: 'publicoAlvoAdsPalavra',
          type: 'PublicoAlvoAdsPalavra',
          model: 'PublicoAlvoAdsPalavra',
          relationType: 'belongsTo',
                  keyFrom: 'publicoAlvoAdsPalavraId',
          keyTo: 'id'
        },
        anuncioConceitoAdsRedeDisplay: {
          name: 'anuncioConceitoAdsRedeDisplay',
          type: 'AnuncioConceitoAdsRedeDisplay',
          model: 'AnuncioConceitoAdsRedeDisplay',
          relationType: 'belongsTo',
                  keyFrom: 'anuncioConceitoAdsRedeDisplayId',
          keyTo: 'id'
        },
        metricaCampanhaAdsRedeDisplays: {
          name: 'metricaCampanhaAdsRedeDisplays',
          type: 'MetricaCampanhaAdsRedeDisplay[]',
          model: 'MetricaCampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'campanhaAdsRedeDisplayId'
        },
      }
    }
  }
}
