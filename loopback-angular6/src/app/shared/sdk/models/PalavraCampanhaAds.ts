/* tslint:disable */

declare var Object: any;
export interface PalavraCampanhaAdsInterface {
  "id"?: number;
}

export class PalavraCampanhaAds implements PalavraCampanhaAdsInterface {
  "id": number;
  constructor(data?: PalavraCampanhaAdsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PalavraCampanhaAds`.
   */
  public static getModelName() {
    return "PalavraCampanhaAds";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PalavraCampanhaAds for dynamic purposes.
  **/
  public static factory(data: PalavraCampanhaAdsInterface): PalavraCampanhaAds{
    return new PalavraCampanhaAds(data);
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
      name: 'PalavraCampanhaAds',
      plural: 'PalavraCampanhaAds',
      path: 'PalavraCampanhaAds',
      idName: 'id',
      properties: {
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
