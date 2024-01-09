/* tslint:disable */
import {
  PaginaVendaSecao
} from '../index';

declare var Object: any;
export interface SecaoWebInterface {
  "html"?: string;
  "style"?: string;
  "categoria"?: string;
  "id"?: number;
  paginaVendaSecaos?: PaginaVendaSecao[];
}

export class SecaoWeb implements SecaoWebInterface {
  "html": string;
  "style": string;
  "categoria": string;
  "id": number;
  paginaVendaSecaos: PaginaVendaSecao[];
  constructor(data?: SecaoWebInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SecaoWeb`.
   */
  public static getModelName() {
    return "SecaoWeb";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SecaoWeb for dynamic purposes.
  **/
  public static factory(data: SecaoWebInterface): SecaoWeb{
    return new SecaoWeb(data);
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
      name: 'SecaoWeb',
      plural: 'SecaoWebs',
      path: 'SecaoWebs',
      idName: 'id',
      properties: {
        "html": {
          name: 'html',
          type: 'string'
        },
        "style": {
          name: 'style',
          type: 'string'
        },
        "categoria": {
          name: 'categoria',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        paginaVendaSecaos: {
          name: 'paginaVendaSecaos',
          type: 'PaginaVendaSecao[]',
          model: 'PaginaVendaSecao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'secaoWebId'
        },
      }
    }
  }
}
