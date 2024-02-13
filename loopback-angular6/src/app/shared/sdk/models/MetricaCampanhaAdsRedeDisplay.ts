/* tslint:disable */
import {
  CampanhaAdsRedeDisplay
} from '../index';

declare var Object: any;
export interface MetricaCampanhaAdsRedeDisplayInterface {
  "qtdeLoad"?: number;
  "qtdeScroll20"?: number;
  "qtdeScroll40"?: number;
  "qtdeScroll60"?: number;
  "qtdeScroll80"?: number;
  "qtdeCheckout"?: number;
  "dataHora"?: Date;
  "maisRecente"?: number;
  "campanhaAdsRedeDisplayId"?: number;
  "id"?: number;
  campanhaAdsRedeDisplay?: CampanhaAdsRedeDisplay;
}

export class MetricaCampanhaAdsRedeDisplay implements MetricaCampanhaAdsRedeDisplayInterface {
  "qtdeLoad": number;
  "qtdeScroll20": number;
  "qtdeScroll40": number;
  "qtdeScroll60": number;
  "qtdeScroll80": number;
  "qtdeCheckout": number;
  "dataHora": Date;
  "maisRecente": number;
  "campanhaAdsRedeDisplayId": number;
  "id": number;
  campanhaAdsRedeDisplay: CampanhaAdsRedeDisplay;
  constructor(data?: MetricaCampanhaAdsRedeDisplayInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MetricaCampanhaAdsRedeDisplay`.
   */
  public static getModelName() {
    return "MetricaCampanhaAdsRedeDisplay";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MetricaCampanhaAdsRedeDisplay for dynamic purposes.
  **/
  public static factory(data: MetricaCampanhaAdsRedeDisplayInterface): MetricaCampanhaAdsRedeDisplay{
    return new MetricaCampanhaAdsRedeDisplay(data);
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
      name: 'MetricaCampanhaAdsRedeDisplay',
      plural: 'MetricaCampanhaAdsRedeDisplays',
      path: 'MetricaCampanhaAdsRedeDisplays',
      idName: 'id',
      properties: {
        "qtdeLoad": {
          name: 'qtdeLoad',
          type: 'number'
        },
        "qtdeScroll20": {
          name: 'qtdeScroll20',
          type: 'number'
        },
        "qtdeScroll40": {
          name: 'qtdeScroll40',
          type: 'number'
        },
        "qtdeScroll60": {
          name: 'qtdeScroll60',
          type: 'number'
        },
        "qtdeScroll80": {
          name: 'qtdeScroll80',
          type: 'number'
        },
        "qtdeCheckout": {
          name: 'qtdeCheckout',
          type: 'number'
        },
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "maisRecente": {
          name: 'maisRecente',
          type: 'number'
        },
        "campanhaAdsRedeDisplayId": {
          name: 'campanhaAdsRedeDisplayId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        campanhaAdsRedeDisplay: {
          name: 'campanhaAdsRedeDisplay',
          type: 'CampanhaAdsRedeDisplay',
          model: 'CampanhaAdsRedeDisplay',
          relationType: 'belongsTo',
                  keyFrom: 'campanhaAdsRedeDisplayId',
          keyTo: 'id'
        },
      }
    }
  }
}
