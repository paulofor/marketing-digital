/* tslint:disable */
import {
  CampanhaAdsRedeDisplay,
  AnuncioConceitoAdsRedeDisplay
} from '../index';

declare var Object: any;
export interface AnuncioCampanhaAdsRedeDisplayInterface {
  "anuncioAdsDisplayId"?: number;
  "campanhaAdsRedeDisplayId"?: number;
  "anuncioConceitoAdsRedeDisplayId"?: number;
  campanhaAdsRedeDisplay?: CampanhaAdsRedeDisplay;
  anuncioConceitoAdsRedeDisplay?: AnuncioConceitoAdsRedeDisplay;
}

export class AnuncioCampanhaAdsRedeDisplay implements AnuncioCampanhaAdsRedeDisplayInterface {
  "anuncioAdsDisplayId": number;
  "campanhaAdsRedeDisplayId": number;
  "anuncioConceitoAdsRedeDisplayId": number;
  campanhaAdsRedeDisplay: CampanhaAdsRedeDisplay;
  anuncioConceitoAdsRedeDisplay: AnuncioConceitoAdsRedeDisplay;
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
        "anuncioConceitoAdsRedeDisplayId": {
          name: 'anuncioConceitoAdsRedeDisplayId',
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
        anuncioConceitoAdsRedeDisplay: {
          name: 'anuncioConceitoAdsRedeDisplay',
          type: 'AnuncioConceitoAdsRedeDisplay',
          model: 'AnuncioConceitoAdsRedeDisplay',
          relationType: 'belongsTo',
                  keyFrom: 'anuncioConceitoAdsRedeDisplayId',
          keyTo: 'id'
        },
      }
    }
  }
}
