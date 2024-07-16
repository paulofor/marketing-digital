/* tslint:disable */
import {
  ContaBm
} from '../index';

declare var Object: any;
export interface BusinessManagerInterface {
  "nome"?: string;
  "matriz"?: number;
  "id"?: number;
  contaBms?: ContaBm[];
}

export class BusinessManager implements BusinessManagerInterface {
  "nome": string;
  "matriz": number;
  "id": number;
  contaBms: ContaBm[];
  constructor(data?: BusinessManagerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `BusinessManager`.
   */
  public static getModelName() {
    return "BusinessManager";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of BusinessManager for dynamic purposes.
  **/
  public static factory(data: BusinessManagerInterface): BusinessManager{
    return new BusinessManager(data);
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
      name: 'BusinessManager',
      plural: 'BusinessManagers',
      path: 'BusinessManagers',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "matriz": {
          name: 'matriz',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        contaBms: {
          name: 'contaBms',
          type: 'ContaBm[]',
          model: 'ContaBm',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'businessManagerId'
        },
      }
    }
  }
}
