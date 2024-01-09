/* tslint:disable */
import {
  PaginaVenda,
  SecaoWeb
} from '../index';

declare var Object: any;
export interface PaginaVendaSecaoInterface {
  "secaoWebId"?: number;
  "paginaVendaId"?: number;
  "posicao"?: number;
  paginaVenda?: PaginaVenda;
  secaoWeb?: SecaoWeb;
}

export class PaginaVendaSecao implements PaginaVendaSecaoInterface {
  "secaoWebId": number;
  "paginaVendaId": number;
  "posicao": number;
  paginaVenda: PaginaVenda;
  secaoWeb: SecaoWeb;
  constructor(data?: PaginaVendaSecaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaginaVendaSecao`.
   */
  public static getModelName() {
    return "PaginaVendaSecao";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaginaVendaSecao for dynamic purposes.
  **/
  public static factory(data: PaginaVendaSecaoInterface): PaginaVendaSecao{
    return new PaginaVendaSecao(data);
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
      name: 'PaginaVendaSecao',
      plural: 'PaginaVendaSecaos',
      path: 'PaginaVendaSecaos',
      idName: 'secaoWebId',
      properties: {
        "secaoWebId": {
          name: 'secaoWebId',
          type: 'number'
        },
        "paginaVendaId": {
          name: 'paginaVendaId',
          type: 'number'
        },
        "posicao": {
          name: 'posicao',
          type: 'number'
        },
      },
      relations: {
        paginaVenda: {
          name: 'paginaVenda',
          type: 'PaginaVenda',
          model: 'PaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'paginaVendaId',
          keyTo: 'id'
        },
        secaoWeb: {
          name: 'secaoWeb',
          type: 'SecaoWeb',
          model: 'SecaoWeb',
          relationType: 'belongsTo',
                  keyFrom: 'secaoWebId',
          keyTo: 'id'
        },
      }
    }
  }
}
