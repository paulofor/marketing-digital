/* tslint:disable */
import {
  CampanhaAdsTeste,
  ContaGoogle,
  ProdutoAfiliadoHotmart
} from '../index';

declare var Object: any;
export interface CampanhaAdsMetricaInterface {
  "dataHora"?: Date;
  "cpcMedio"?: number;
  "custoCampanha"?: number;
  "impressao"?: number;
  "clique"?: number;
  "cpcCampanha"?: number;
  "codigoAds"?: string;
  "campanhaAdsTesteId"?: number;
  "status"?: string;
  "contaGoogleId"?: number;
  "estrategia"?: string;
  "rede"?: string;
  "conversao"?: number;
  "maisRecente"?: number;
  "nomeCampanha"?: string;
  "statusRejeicao"?: string;
  "urlFinal"?: string;
  "hotmartId"?: number;
  "cpaMedio"?: number;
  "cpaCampanha"?: number;
  "id"?: number;
  campanhaAdsTeste?: CampanhaAdsTeste;
  contaGoogle?: ContaGoogle;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
}

export class CampanhaAdsMetrica implements CampanhaAdsMetricaInterface {
  "dataHora": Date;
  "cpcMedio": number;
  "custoCampanha": number;
  "impressao": number;
  "clique": number;
  "cpcCampanha": number;
  "codigoAds": string;
  "campanhaAdsTesteId": number;
  "status": string;
  "contaGoogleId": number;
  "estrategia": string;
  "rede": string;
  "conversao": number;
  "maisRecente": number;
  "nomeCampanha": string;
  "statusRejeicao": string;
  "urlFinal": string;
  "hotmartId": number;
  "cpaMedio": number;
  "cpaCampanha": number;
  "id": number;
  campanhaAdsTeste: CampanhaAdsTeste;
  contaGoogle: ContaGoogle;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  constructor(data?: CampanhaAdsMetricaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CampanhaAdsMetrica`.
   */
  public static getModelName() {
    return "CampanhaAdsMetrica";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CampanhaAdsMetrica for dynamic purposes.
  **/
  public static factory(data: CampanhaAdsMetricaInterface): CampanhaAdsMetrica{
    return new CampanhaAdsMetrica(data);
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
      name: 'CampanhaAdsMetrica',
      plural: 'CampanhaAdsMetricas',
      path: 'CampanhaAdsMetricas',
      idName: 'id',
      properties: {
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "cpcMedio": {
          name: 'cpcMedio',
          type: 'number'
        },
        "custoCampanha": {
          name: 'custoCampanha',
          type: 'number'
        },
        "impressao": {
          name: 'impressao',
          type: 'number'
        },
        "clique": {
          name: 'clique',
          type: 'number'
        },
        "cpcCampanha": {
          name: 'cpcCampanha',
          type: 'number'
        },
        "codigoAds": {
          name: 'codigoAds',
          type: 'string'
        },
        "campanhaAdsTesteId": {
          name: 'campanhaAdsTesteId',
          type: 'number'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
          type: 'number'
        },
        "estrategia": {
          name: 'estrategia',
          type: 'string'
        },
        "rede": {
          name: 'rede',
          type: 'string'
        },
        "conversao": {
          name: 'conversao',
          type: 'number'
        },
        "maisRecente": {
          name: 'maisRecente',
          type: 'number'
        },
        "nomeCampanha": {
          name: 'nomeCampanha',
          type: 'string'
        },
        "statusRejeicao": {
          name: 'statusRejeicao',
          type: 'string'
        },
        "urlFinal": {
          name: 'urlFinal',
          type: 'string'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "cpaMedio": {
          name: 'cpaMedio',
          type: 'number'
        },
        "cpaCampanha": {
          name: 'cpaCampanha',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        campanhaAdsTeste: {
          name: 'campanhaAdsTeste',
          type: 'CampanhaAdsTeste',
          model: 'CampanhaAdsTeste',
          relationType: 'belongsTo',
                  keyFrom: 'campanhaAdsTesteId',
          keyTo: 'id'
        },
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
      }
    }
  }
}
