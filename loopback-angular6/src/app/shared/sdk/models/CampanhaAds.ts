/* tslint:disable */
import {
  AnuncioCampanhaAds
} from '../index';

declare var Object: any;
export interface CampanhaAdsInterface {
  "nome"?: string;
  anuncioCampanhaAds?: AnuncioCampanhaAds[];
}

export class CampanhaAds implements CampanhaAdsInterface {
  "nome": string;
  anuncioCampanhaAds: AnuncioCampanhaAds[];
  constructor(data?: CampanhaAdsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CampanhaAds`.
   */
  public static getModelName() {
    return "CampanhaAds";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CampanhaAds for dynamic purposes.
  **/
  public static factory(data: CampanhaAdsInterface): CampanhaAds{
    return new CampanhaAds(data);
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
      name: 'CampanhaAds',
      plural: 'CampanhaAds',
      path: 'CampanhaAds',
      idName: 'nome',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
      },
      relations: {
        anuncioCampanhaAds: {
          name: 'anuncioCampanhaAds',
          type: 'AnuncioCampanhaAds[]',
          model: 'AnuncioCampanhaAds',
          relationType: 'hasMany',
                  keyFrom: 'nome',
          keyTo: 'campanhaAdsId'
        },
      }
    }
  }
}
