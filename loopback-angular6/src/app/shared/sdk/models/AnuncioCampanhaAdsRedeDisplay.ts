/* tslint:disable */
import {
  AnuncioAdsDisplay,
  CampanhaAdsRedeDisplay
} from '../index';

declare var Object: any;
export interface AnuncioCampanhaAdsRedeDisplayInterface {
  "anuncioAdsDisplayId"?: number;
  "campanhaAdsRedeDisplayId"?: number;
  anuncioAdsDisplay?: AnuncioAdsDisplay;
  campanhaAdsRedeDisplay?: CampanhaAdsRedeDisplay;
}

export class AnuncioCampanhaAdsRedeDisplay implements AnuncioCampanhaAdsRedeDisplayInterface {
  "anuncioAdsDisplayId": number;
  "campanhaAdsRedeDisplayId": number;
  anuncioAdsDisplay: AnuncioAdsDisplay;
  campanhaAdsRedeDisplay: CampanhaAdsRedeDisplay;
  constructor(data?: AnuncioCampanhaAdsRedeDisplayInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnuncioCampanhaAdsRedeDisplay`.
   */
  public static getModelName() {
    return "AnuncioCampanhaAdsRedeDisplay";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnuncioCampanhaAdsRedeDisplay for dynamic purposes.
  **/
  public static factory(data: AnuncioCampanhaAdsRedeDisplayInterface): AnuncioCampanhaAdsRedeDisplay{
    return new AnuncioCampanhaAdsRedeDisplay(data);
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
      name: 'AnuncioCampanhaAdsRedeDisplay',
      plural: 'AnuncioCampanhaAdsRedeDisplays',
      path: 'AnuncioCampanhaAdsRedeDisplays',
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
