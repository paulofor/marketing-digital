/* tslint:disable */
import {
  CampanhaAdsTeste,
  ContaGoogle
} from '../index';

declare var Object: any;
export interface CampanhaAdsMetricaIntradayInterface {
  "codigoAds"?: number;
  "cpc"?: number;
  "custoDia"?: number;
  "dataHora"?: Date;
  "status"?: string;
  "contaGoogleId"?: number;
  "nomeCampanha"?: string;
  "clique"?: number;
  "impressao"?: number;
  "conversao"?: number;
  "primaryStatus"?: string;
  "primaryStatusReasons"?: string;
  campanhaAdsTeste?: CampanhaAdsTeste;
  contaGoogle?: ContaGoogle;
}

export class CampanhaAdsMetricaIntraday implements CampanhaAdsMetricaIntradayInterface {
  "codigoAds": number;
  "cpc": number;
  "custoDia": number;
  "dataHora": Date;
  "status": string;
  "contaGoogleId": number;
  "nomeCampanha": string;
  "clique": number;
  "impressao": number;
  "conversao": number;
  "primaryStatus": string;
  "primaryStatusReasons": string;
  campanhaAdsTeste: CampanhaAdsTeste;
  contaGoogle: ContaGoogle;
  constructor(data?: CampanhaAdsMetricaIntradayInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CampanhaAdsMetricaIntraday`.
   */
  public static getModelName() {
    return "CampanhaAdsMetricaIntraday";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CampanhaAdsMetricaIntraday for dynamic purposes.
  **/
  public static factory(data: CampanhaAdsMetricaIntradayInterface): CampanhaAdsMetricaIntraday{
    return new CampanhaAdsMetricaIntraday(data);
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
      name: 'CampanhaAdsMetricaIntraday',
      plural: 'CampanhaAdsMetricaIntradays',
      path: 'CampanhaAdsMetricaIntradays',
      idName: 'codigoAds',
      properties: {
        "codigoAds": {
          name: 'codigoAds',
          type: 'number'
        },
        "cpc": {
          name: 'cpc',
          type: 'number'
        },
        "custoDia": {
          name: 'custoDia',
          type: 'number'
        },
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
          type: 'number'
        },
        "nomeCampanha": {
          name: 'nomeCampanha',
          type: 'string'
        },
        "clique": {
          name: 'clique',
          type: 'number'
        },
        "impressao": {
          name: 'impressao',
          type: 'number'
        },
        "conversao": {
          name: 'conversao',
          type: 'number'
        },
        "primaryStatus": {
          name: 'primaryStatus',
          type: 'string'
        },
        "primaryStatusReasons": {
          name: 'primaryStatusReasons',
          type: 'string'
        },
      },
      relations: {
        campanhaAdsTeste: {
          name: 'campanhaAdsTeste',
          type: 'CampanhaAdsTeste',
          model: 'CampanhaAdsTeste',
          relationType: 'belongsTo',
                  keyFrom: 'codigoAds',
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
      }
    }
  }
}
