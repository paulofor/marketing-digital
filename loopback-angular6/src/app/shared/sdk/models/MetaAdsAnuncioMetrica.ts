/* tslint:disable */

declare var Object: any;
export interface MetaAdsAnuncioMetricaInterface {
  "dataHora"?: Date;
  "id"?: number;
}

export class MetaAdsAnuncioMetrica implements MetaAdsAnuncioMetricaInterface {
  "dataHora": Date;
  "id": number;
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
      idName: 'id',
      properties: {
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
