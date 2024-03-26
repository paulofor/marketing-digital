/* tslint:disable */

declare var Object: any;
export interface ContaFacebookInterface {
  "id"?: number;
}

export class ContaFacebook implements ContaFacebookInterface {
  "id": number;
  constructor(data?: ContaFacebookInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContaFacebook`.
   */
  public static getModelName() {
    return "ContaFacebook";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContaFacebook for dynamic purposes.
  **/
  public static factory(data: ContaFacebookInterface): ContaFacebook{
    return new ContaFacebook(data);
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
      name: 'ContaFacebook',
      plural: 'ContaFacebooks',
      path: 'ContaFacebooks',
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
