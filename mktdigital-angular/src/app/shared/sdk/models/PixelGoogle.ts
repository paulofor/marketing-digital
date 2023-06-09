/* tslint:disable */

declare var Object: any;
export interface PixelGoogleInterface {
  "identificador"?: string;
  "script"?: string;
  "id"?: number;
}

export class PixelGoogle implements PixelGoogleInterface {
  "identificador": string;
  "script": string;
  "id": number;
  constructor(data?: PixelGoogleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PixelGoogle`.
   */
  public static getModelName() {
    return "PixelGoogle";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PixelGoogle for dynamic purposes.
  **/
  public static factory(data: PixelGoogleInterface): PixelGoogle{
    return new PixelGoogle(data);
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
      name: 'PixelGoogle',
      plural: 'PixelGoogles',
      path: 'PixelGoogles',
      idName: 'id',
      properties: {
        "identificador": {
          name: 'identificador',
          type: 'string'
        },
        "script": {
          name: 'script',
          type: 'string'
        },
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
