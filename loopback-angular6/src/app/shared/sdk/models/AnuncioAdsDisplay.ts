/* tslint:disable */

declare var Object: any;
export interface AnuncioAdsDisplayInterface {
  "id"?: number;
}

export class AnuncioAdsDisplay implements AnuncioAdsDisplayInterface {
  "id": number;
  constructor(data?: AnuncioAdsDisplayInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnuncioAdsDisplay`.
   */
  public static getModelName() {
    return "AnuncioAdsDisplay";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnuncioAdsDisplay for dynamic purposes.
  **/
  public static factory(data: AnuncioAdsDisplayInterface): AnuncioAdsDisplay{
    return new AnuncioAdsDisplay(data);
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
      name: 'AnuncioAdsDisplay',
      plural: 'AnuncioAdsDisplays',
      path: 'AnuncioAdsDisplays',
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
