/* tslint:disable */

declare var Object: any;
export interface PaginaFacebookInterface {
  "nome"?: string;
  "id"?: number;
}

export class PaginaFacebook implements PaginaFacebookInterface {
  "nome": string;
  "id": number;
  constructor(data?: PaginaFacebookInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaginaFacebook`.
   */
  public static getModelName() {
    return "PaginaFacebook";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaginaFacebook for dynamic purposes.
  **/
  public static factory(data: PaginaFacebookInterface): PaginaFacebook{
    return new PaginaFacebook(data);
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
      name: 'PaginaFacebook',
      plural: 'PaginaFacebooks',
      path: 'PaginaFacebooks',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
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
