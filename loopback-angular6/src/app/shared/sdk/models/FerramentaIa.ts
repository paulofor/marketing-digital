/* tslint:disable */

declare var Object: any;
export interface FerramentaIaInterface {
  "nome"?: string;
  "observacao"?: string;
  "preco"?: string;
  "url"?: string;
  "id"?: number;
}

export class FerramentaIa implements FerramentaIaInterface {
  "nome": string;
  "observacao": string;
  "preco": string;
  "url": string;
  "id": number;
  constructor(data?: FerramentaIaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FerramentaIa`.
   */
  public static getModelName() {
    return "FerramentaIa";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FerramentaIa for dynamic purposes.
  **/
  public static factory(data: FerramentaIaInterface): FerramentaIa{
    return new FerramentaIa(data);
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
      name: 'FerramentaIa',
      plural: 'FerramentaIa',
      path: 'FerramentaIa',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "observacao": {
          name: 'observacao',
          type: 'string'
        },
        "preco": {
          name: 'preco',
          type: 'string'
        },
        "url": {
          name: 'url',
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
