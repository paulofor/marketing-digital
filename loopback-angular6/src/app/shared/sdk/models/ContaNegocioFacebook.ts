/* tslint:disable */
import {
  ContaBm
} from '../index';

declare var Object: any;
export interface ContaNegocioFacebookInterface {
  "nome"?: string;
  "id"?: number;
  contaBms?: ContaBm[];
}

export class ContaNegocioFacebook implements ContaNegocioFacebookInterface {
  "nome": string;
  "id": number;
  contaBms: ContaBm[];
  constructor(data?: ContaNegocioFacebookInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContaNegocioFacebook`.
   */
  public static getModelName() {
    return "ContaNegocioFacebook";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContaNegocioFacebook for dynamic purposes.
  **/
  public static factory(data: ContaNegocioFacebookInterface): ContaNegocioFacebook{
    return new ContaNegocioFacebook(data);
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
      name: 'ContaNegocioFacebook',
      plural: 'ContaNegocioFacebooks',
      path: 'ContaNegocioFacebooks',
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
        contaBms: {
          name: 'contaBms',
          type: 'ContaBm[]',
          model: 'ContaBm',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaNegocioFacebookId'
        },
      }
    }
  }
}
