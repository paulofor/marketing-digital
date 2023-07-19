/* tslint:disable */
import {
  CampanhaAds,
  AnuncioAds
} from '../index';

declare var Object: any;
export interface AnuncioCampanhaAdsInterface {
  "campanhaAdsId"?: string;
  "anuncioAdsId"?: number;
  "id"?: number;
  campanhaAds?: CampanhaAds;
  anuncioAds?: AnuncioAds;
}

export class AnuncioCampanhaAds implements AnuncioCampanhaAdsInterface {
  "campanhaAdsId": string;
  "anuncioAdsId": number;
  "id": number;
  campanhaAds: CampanhaAds;
  anuncioAds: AnuncioAds;
  constructor(data?: AnuncioCampanhaAdsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnuncioCampanhaAds`.
   */
  public static getModelName() {
    return "AnuncioCampanhaAds";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnuncioCampanhaAds for dynamic purposes.
  **/
  public static factory(data: AnuncioCampanhaAdsInterface): AnuncioCampanhaAds{
    return new AnuncioCampanhaAds(data);
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
      name: 'AnuncioCampanhaAds',
      plural: 'AnuncioCampanhaAds',
      path: 'AnuncioCampanhaAds',
      idName: 'id',
      properties: {
        "campanhaAdsId": {
          name: 'campanhaAdsId',
          type: 'string'
        },
        "anuncioAdsId": {
          name: 'anuncioAdsId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        campanhaAds: {
          name: 'campanhaAds',
          type: 'CampanhaAds',
          model: 'CampanhaAds',
          relationType: 'belongsTo',
                  keyFrom: 'campanhaAdsId',
          keyTo: 'nome'
        },
        anuncioAds: {
          name: 'anuncioAds',
          type: 'AnuncioAds',
          model: 'AnuncioAds',
          relationType: 'belongsTo',
                  keyFrom: 'anuncioAdsId',
          keyTo: 'id'
        },
      }
    }
  }
}
