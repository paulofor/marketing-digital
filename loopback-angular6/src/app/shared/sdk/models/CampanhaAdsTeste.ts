/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  ModeloCampanhaAdsTeste,
  PalavraChaveCampanhaAdsTeste,
  AnuncioCampanhaAdsTeste,
  ContaGoogle,
  CampanhaAdsMetrica,
  CampanhaAdsMetricaIntraday,
  PaginaVenda
} from '../index';

declare var Object: any;
export interface CampanhaAdsTesteInterface {
  "nome"?: string;
  "prontaParaTeste"?: number;
  "codigoAds"?: string;
  "dataEnvioGoogle"?: Date;
  "custoTotal"?: number;
  "receitaTotal"?: number;
  "dataInicio"?: Date;
  "dataTermino"?: Date;
  "qtdeImpressao"?: number;
  "qtdeClique"?: number;
  "ctr"?: number;
  "nomeAds"?: string;
  "cpc"?: number;
  "ativa"?: number;
  "cpaMax"?: number;
  "cpcMax"?: number;
  "codigoAdsGrupoAnuncio"?: string;
  "codigoAdsCampanha"?: string;
  "primaryStatus"?: string;
  "primaryStatusReasons"?: string;
  "modeloCampanhaAdsTesteId"?: number;
  "produtoAfiliadoHotmartId"?: number;
  "contaGoogleId"?: number;
  "paginaVendaId"?: number;
  "id"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  modeloCampanhaAdsTeste?: ModeloCampanhaAdsTeste;
  palavraChaveCampanhaAdsTestes?: PalavraChaveCampanhaAdsTeste[];
  anuncioCampanhaAdsTestes?: AnuncioCampanhaAdsTeste[];
  contaGoogle?: ContaGoogle;
  campanhaAdsMetricas?: CampanhaAdsMetrica[];
  campanhaAdsMetricaIntradays?: CampanhaAdsMetricaIntraday[];
  paginaVenda?: PaginaVenda;
}

export class CampanhaAdsTeste implements CampanhaAdsTesteInterface {
  "nome": string;
  "prontaParaTeste": number;
  "codigoAds": string;
  "dataEnvioGoogle": Date;
  "custoTotal": number;
  "receitaTotal": number;
  "dataInicio": Date;
  "dataTermino": Date;
  "qtdeImpressao": number;
  "qtdeClique": number;
  "ctr": number;
  "nomeAds": string;
  "cpc": number;
  "ativa": number;
  "cpaMax": number;
  "cpcMax": number;
  "codigoAdsGrupoAnuncio": string;
  "codigoAdsCampanha": string;
  "primaryStatus": string;
  "primaryStatusReasons": string;
  "modeloCampanhaAdsTesteId": number;
  "produtoAfiliadoHotmartId": number;
  "contaGoogleId": number;
  "paginaVendaId": number;
  "id": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  modeloCampanhaAdsTeste: ModeloCampanhaAdsTeste;
  palavraChaveCampanhaAdsTestes: PalavraChaveCampanhaAdsTeste[];
  anuncioCampanhaAdsTestes: AnuncioCampanhaAdsTeste[];
  contaGoogle: ContaGoogle;
  campanhaAdsMetricas: CampanhaAdsMetrica[];
  campanhaAdsMetricaIntradays: CampanhaAdsMetricaIntraday[];
  paginaVenda: PaginaVenda;
  constructor(data?: CampanhaAdsTesteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CampanhaAdsTeste`.
   */
  public static getModelName() {
    return "CampanhaAdsTeste";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CampanhaAdsTeste for dynamic purposes.
  **/
  public static factory(data: CampanhaAdsTesteInterface): CampanhaAdsTeste{
    return new CampanhaAdsTeste(data);
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
      name: 'CampanhaAdsTeste',
      plural: 'CampanhaAdsTestes',
      path: 'CampanhaAdsTestes',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "prontaParaTeste": {
          name: 'prontaParaTeste',
          type: 'number'
        },
        "codigoAds": {
          name: 'codigoAds',
          type: 'string'
        },
        "dataEnvioGoogle": {
          name: 'dataEnvioGoogle',
          type: 'Date'
        },
        "custoTotal": {
          name: 'custoTotal',
          type: 'number'
        },
        "receitaTotal": {
          name: 'receitaTotal',
          type: 'number'
        },
        "dataInicio": {
          name: 'dataInicio',
          type: 'Date'
        },
        "dataTermino": {
          name: 'dataTermino',
          type: 'Date'
        },
        "qtdeImpressao": {
          name: 'qtdeImpressao',
          type: 'number'
        },
        "qtdeClique": {
          name: 'qtdeClique',
          type: 'number'
        },
        "ctr": {
          name: 'ctr',
          type: 'number'
        },
        "nomeAds": {
          name: 'nomeAds',
          type: 'string'
        },
        "cpc": {
          name: 'cpc',
          type: 'number'
        },
        "ativa": {
          name: 'ativa',
          type: 'number'
        },
        "cpaMax": {
          name: 'cpaMax',
          type: 'number'
        },
        "cpcMax": {
          name: 'cpcMax',
          type: 'number'
        },
        "codigoAdsGrupoAnuncio": {
          name: 'codigoAdsGrupoAnuncio',
          type: 'string'
        },
        "codigoAdsCampanha": {
          name: 'codigoAdsCampanha',
          type: 'string'
        },
        "primaryStatus": {
          name: 'primaryStatus',
          type: 'string'
        },
        "primaryStatusReasons": {
          name: 'primaryStatusReasons',
          type: 'string'
        },
        "modeloCampanhaAdsTesteId": {
          name: 'modeloCampanhaAdsTesteId',
          type: 'number'
        },
        "produtoAfiliadoHotmartId": {
          name: 'produtoAfiliadoHotmartId',
          type: 'number'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
          type: 'number'
        },
        "paginaVendaId": {
          name: 'paginaVendaId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        produtoAfiliadoHotmart: {
          name: 'produtoAfiliadoHotmart',
          type: 'ProdutoAfiliadoHotmart',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'belongsTo',
                  keyFrom: 'produtoAfiliadoHotmartId',
          keyTo: 'hotmartId'
        },
        modeloCampanhaAdsTeste: {
          name: 'modeloCampanhaAdsTeste',
          type: 'ModeloCampanhaAdsTeste',
          model: 'ModeloCampanhaAdsTeste',
          relationType: 'belongsTo',
                  keyFrom: 'modeloCampanhaAdsTesteId',
          keyTo: 'id'
        },
        palavraChaveCampanhaAdsTestes: {
          name: 'palavraChaveCampanhaAdsTestes',
          type: 'PalavraChaveCampanhaAdsTeste[]',
          model: 'PalavraChaveCampanhaAdsTeste',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'campanhaAdsTesteId'
        },
        anuncioCampanhaAdsTestes: {
          name: 'anuncioCampanhaAdsTestes',
          type: 'AnuncioCampanhaAdsTeste[]',
          model: 'AnuncioCampanhaAdsTeste',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'campanhaAdsTesteId'
        },
        contaGoogle: {
          name: 'contaGoogle',
          type: 'ContaGoogle',
          model: 'ContaGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'contaGoogleId',
          keyTo: 'id'
        },
        campanhaAdsMetricas: {
          name: 'campanhaAdsMetricas',
          type: 'CampanhaAdsMetrica[]',
          model: 'CampanhaAdsMetrica',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'campanhaAdsTesteId'
        },
        campanhaAdsMetricaIntradays: {
          name: 'campanhaAdsMetricaIntradays',
          type: 'CampanhaAdsMetricaIntraday[]',
          model: 'CampanhaAdsMetricaIntraday',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'codigoAds'
        },
        paginaVenda: {
          name: 'paginaVenda',
          type: 'PaginaVenda',
          model: 'PaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'paginaVendaId',
          keyTo: 'id'
        },
      }
    }
  }
}
