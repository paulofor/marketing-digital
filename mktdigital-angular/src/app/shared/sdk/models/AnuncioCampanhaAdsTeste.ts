/* tslint:disable */
import {
  AnuncioAds
} from '../index';

declare var Object: any;
export interface AnuncioCampanhaAdsTesteInterface {
  "anuncioAdsId"?: number;
  "campanhaAdsTesteId"?: number;
  anuncioAds?: AnuncioAds;
}

export class AnuncioCampanhaAdsTeste implements AnuncioCampanhaAdsTesteInterface {
  "anuncioAdsId": number;
  "campanhaAdsTesteId": number;
  anuncioAds: AnuncioAds;
  constructor(data?: AnuncioCampanhaAdsTesteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnuncioCampanhaAdsTeste`.
   */
  public static getModelName() {
    return "AnuncioCampanhaAdsTeste";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnuncioCampanhaAdsTeste for dynamic purposes.
  **/
  public static factory(data: AnuncioCampanhaAdsTesteInterface): AnuncioCampanhaAdsTeste{
    return new AnuncioCampanhaAdsTeste(data);
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
      name: 'AnuncioCampanhaAdsTeste',
      plural: 'AnuncioCampanhaAdsTestes',
      path: 'AnuncioCampanhaAdsTestes',
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
