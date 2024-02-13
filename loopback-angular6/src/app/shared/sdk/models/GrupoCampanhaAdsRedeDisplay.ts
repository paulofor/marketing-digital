/* tslint:disable */
import {
  AnuncioAdsDisplay,
  CampanhaAdsRedeDisplay
} from '../index';

declare var Object: any;
export interface GrupoCampanhaAdsRedeDisplayInterface {
  "anuncioAdsDisplayId"?: number;
  "campanhaAdsRedeDisplayId"?: number;
  "id"?: number;
  anuncioAdsDisplay?: AnuncioAdsDisplay;
  campanhaAdsRedeDisplay?: CampanhaAdsRedeDisplay;
}

export class GrupoCampanhaAdsRedeDisplay implements GrupoCampanhaAdsRedeDisplayInterface {
  "anuncioAdsDisplayId": number;
  "campanhaAdsRedeDisplayId": number;
  "id": number;
  anuncioAdsDisplay: AnuncioAdsDisplay;
  campanhaAdsRedeDisplay: CampanhaAdsRedeDisplay;
  constructor(data?: GrupoCampanhaAdsRedeDisplayInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GrupoCampanhaAdsRedeDisplay`.
   */
  public static getModelName() {
    return "GrupoCampanhaAdsRedeDisplay";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GrupoCampanhaAdsRedeDisplay for dynamic purposes.
  **/
  public static factory(data: GrupoCampanhaAdsRedeDisplayInterface): GrupoCampanhaAdsRedeDisplay{
    return new GrupoCampanhaAdsRedeDisplay(data);
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
      name: 'GrupoCampanhaAdsRedeDisplay',
      plural: 'GrupoCampanhaAdsRedeDisplays',
      path: 'GrupoCampanhaAdsRedeDisplays',
      idName: 'id',
      properties: {
        "anuncioAdsDisplayId": {
          name: 'anuncioAdsDisplayId',
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
