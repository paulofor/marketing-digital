/* tslint:disable */

declare var Object: any;
export interface ContaInstagramInterface {
  "nome"?: string;
  "id"?: number;
}

export class ContaInstagram implements ContaInstagramInterface {
  "nome": string;
  "id": number;
  constructor(data?: ContaInstagramInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContaInstagram`.
   */
  public static getModelName() {
    return "ContaInstagram";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContaInstagram for dynamic purposes.
  **/
  public static factory(data: ContaInstagramInterface): ContaInstagram{
    return new ContaInstagram(data);
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
      name: 'ContaInstagram',
      plural: 'ContaInstagrams',
      path: 'ContaInstagrams',
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
