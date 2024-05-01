/* tslint:disable */

declare var Object: any;
export interface MetaAdsAnuncioMetricaInterface {
  "dataHora"?: Date;
  "nome"?: string;
  "idMeta"?: string;
  "status"?: string;
  "spend"?: number;
  "cpc"?: number;
  "cpa"?: number;
  "impressao"?: number;
  "clique"?: number;
  "ctr"?: number;
  "maisRecente"?: number;
  "idMetaCampanha"?: string;
  "idMetaConjunto"?: string;
  "nomeCampanha"?: string;
  "nomeConjunto"?: string;
  "json"?: string;
}

export class MetaAdsAnuncioMetrica implements MetaAdsAnuncioMetricaInterface {
  "dataHora": Date;
  "nome": string;
  "idMeta": string;
  "status": string;
  "spend": number;
  "cpc": number;
  "cpa": number;
  "impressao": number;
  "clique": number;
  "ctr": number;
  "maisRecente": number;
  "idMetaCampanha": string;
  "idMetaConjunto": string;
  "nomeCampanha": string;
  "nomeConjunto": string;
  "json": string;
  constructor(data?: MetaAdsAnuncioMetricaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MetaAdsAnuncioMetrica`.
   */
  public static getModelName() {
    return "MetaAdsAnuncioMetrica";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MetaAdsAnuncioMetrica for dynamic purposes.
  **/
  public static factory(data: MetaAdsAnuncioMetricaInterface): MetaAdsAnuncioMetrica{
    return new MetaAdsAnuncioMetrica(data);
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
      name: 'MetaAdsAnuncioMetrica',
      plural: 'MetaAdsAnuncioMetricas',
      path: 'MetaAdsAnuncioMetricas',
      idName: 'dataHora',
      properties: {
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "idMeta": {
          name: 'idMeta',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "spend": {
          name: 'spend',
          type: 'number'
        },
        "cpc": {
          name: 'cpc',
          type: 'number'
        },
        "cpa": {
          name: 'cpa',
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
        "ctr": {
          name: 'ctr',
          type: 'number'
        },
        "maisRecente": {
          name: 'maisRecente',
          type: 'number'
        },
        "idMetaCampanha": {
          name: 'idMetaCampanha',
          type: 'string'
        },
        "idMetaConjunto": {
          name: 'idMetaConjunto',
          type: 'string'
        },
        "nomeCampanha": {
          name: 'nomeCampanha',
          type: 'string'
        },
        "nomeConjunto": {
          name: 'nomeConjunto',
          type: 'string'
        },
        "json": {
          name: 'json',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
