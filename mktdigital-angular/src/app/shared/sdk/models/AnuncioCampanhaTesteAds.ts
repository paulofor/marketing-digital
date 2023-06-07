/* tslint:disable */
import {
  AnuncioAds
} from '../index';

declare var Object: any;
export interface AnuncioCampanhaTesteAdsInterface {
  "anuncioAdsId"?: number;
  "campanhaAdsTesteId"?: number;
  anuncioAds?: AnuncioAds;
}

export class AnuncioCampanhaTesteAds implements AnuncioCampanhaTesteAdsInterface {
  "anuncioAdsId": number;
  "campanhaAdsTesteId": number;
  anuncioAds: AnuncioAds;
  constructor(data?: AnuncioCampanhaTesteAdsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnuncioCampanhaTesteAds`.
   */
  public static getModelName() {
    return "AnuncioCampanhaTesteAds";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnuncioCampanhaTesteAds for dynamic purposes.
  **/
  public static factory(data: AnuncioCampanhaTesteAdsInterface): AnuncioCampanhaTesteAds{
    return new AnuncioCampanhaTesteAds(data);
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
      name: 'AnuncioCampanhaTesteAds',
      plural: 'AnuncioCampanhaTesteAds',
      path: 'AnuncioCampanhaTesteAds',
      idName: 'anuncioAdsId',
      properties: {
        "anuncioAdsId": {
          name: 'anuncioAdsId',
          type: 'number'
        },
        "campanhaAdsTesteId": {
          name: 'campanhaAdsTesteId',
          type: 'number'
        },
      },
      relations: {
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
