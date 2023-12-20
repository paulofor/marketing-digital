/* tslint:disable */
import {
  AnuncioAdsDisplay,
  CampanhaAdsRedeDisplay
} from '../index';

declare var Object: any;
export interface AnuncioCampanhaAdsDisplayInterface {
  "anuncioAdsDisplayId"?: number;
  "campanhaAdsRedeDisplayId"?: number;
  anuncioAdsDisplay?: AnuncioAdsDisplay;
  campanhaAdsRedeDisplay?: CampanhaAdsRedeDisplay;
}

export class AnuncioCampanhaAdsDisplay implements AnuncioCampanhaAdsDisplayInterface {
  "anuncioAdsDisplayId": number;
  "campanhaAdsRedeDisplayId": number;
  anuncioAdsDisplay: AnuncioAdsDisplay;
  campanhaAdsRedeDisplay: CampanhaAdsRedeDisplay;
  constructor(data?: AnuncioCampanhaAdsDisplayInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnuncioCampanhaAdsDisplay`.
   */
  public static getModelName() {
    return "AnuncioCampanhaAdsDisplay";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnuncioCampanhaAdsDisplay for dynamic purposes.
  **/
  public static factory(data: AnuncioCampanhaAdsDisplayInterface): AnuncioCampanhaAdsDisplay{
    return new AnuncioCampanhaAdsDisplay(data);
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
      name: 'AnuncioCampanhaAdsDisplay',
      plural: 'AnuncioCampanhaAdsDisplays',
      path: 'AnuncioCampanhaAdsDisplays',
      idName: 'anuncioAdsDisplayId',
      properties: {
        "anuncioAdsDisplayId": {
          name: 'anuncioAdsDisplayId',
          type: 'number'
        },
        "campanhaAdsRedeDisplayId": {
          name: 'campanhaAdsRedeDisplayId',
          type: 'number'
        },
      },
      relations: {
        anuncioAdsDisplay: {
          name: 'anuncioAdsDisplay',
          type: 'AnuncioAdsDisplay',
          model: 'AnuncioAdsDisplay',
          relationType: 'belongsTo',
                  keyFrom: 'anuncioAdsDisplayId',
          keyTo: 'id'
        },
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
