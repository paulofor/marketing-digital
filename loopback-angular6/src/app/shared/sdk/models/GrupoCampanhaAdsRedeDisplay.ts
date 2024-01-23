/* tslint:disable */

declare var Object: any;
export interface GrupoCampanhaAdsRedeDisplayInterface {
  "id"?: number;
}

export class GrupoCampanhaAdsRedeDisplay implements GrupoCampanhaAdsRedeDisplayInterface {
  "id": number;
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
