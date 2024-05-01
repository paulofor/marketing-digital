/* tslint:disable */

declare var Object: any;
export interface MetaAdsConjuntoAnuncioMetricaInterface {
  "nome"?: string;
  "idMeta"?: string;
  "idMetaCampanha"?: string;
  "status"?: string;
  "dataHora"?: Date;
  "json"?: string;
}

export class MetaAdsConjuntoAnuncioMetrica implements MetaAdsConjuntoAnuncioMetricaInterface {
  "nome": string;
  "idMeta": string;
  "idMetaCampanha": string;
  "status": string;
  "dataHora": Date;
  "json": string;
  constructor(data?: MetaAdsConjuntoAnuncioMetricaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MetaAdsConjuntoAnuncioMetrica`.
   */
  public static getModelName() {
    return "MetaAdsConjuntoAnuncioMetrica";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MetaAdsConjuntoAnuncioMetrica for dynamic purposes.
  **/
  public static factory(data: MetaAdsConjuntoAnuncioMetricaInterface): MetaAdsConjuntoAnuncioMetrica{
    return new MetaAdsConjuntoAnuncioMetrica(data);
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
      name: 'MetaAdsConjuntoAnuncioMetrica',
      plural: 'MetaAdsConjuntoAnuncioMetricas',
      path: 'MetaAdsConjuntoAnuncioMetricas',
      idName: 'idMeta',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "idMeta": {
          name: 'idMeta',
          type: 'string'
        },
        "idMetaCampanha": {
          name: 'idMetaCampanha',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
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
