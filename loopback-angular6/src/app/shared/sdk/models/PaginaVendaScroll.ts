/* tslint:disable */
import {
  PaginaVendaPropria
} from '../index';

declare var Object: any;
export interface PaginaVendaScrollInterface {
  "hotmartId"?: number;
  "dataHora"?: Date;
  "posicaoScroll"?: number;
  "paginaVendaPropriaId"?: number;
  "id"?: number;
  paginaVendaPropria?: PaginaVendaPropria;
}

export class PaginaVendaScroll implements PaginaVendaScrollInterface {
  "hotmartId": number;
  "dataHora": Date;
  "posicaoScroll": number;
  "paginaVendaPropriaId": number;
  "id": number;
  paginaVendaPropria: PaginaVendaPropria;
  constructor(data?: PaginaVendaScrollInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaginaVendaScroll`.
   */
  public static getModelName() {
    return "PaginaVendaScroll";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaginaVendaScroll for dynamic purposes.
  **/
  public static factory(data: PaginaVendaScrollInterface): PaginaVendaScroll{
    return new PaginaVendaScroll(data);
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
      name: 'PaginaVendaScroll',
      plural: 'PaginaVendaScrolls',
      path: 'PaginaVendaScrolls',
      idName: 'id',
      properties: {
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "posicaoScroll": {
          name: 'posicaoScroll',
          type: 'number'
        },
        "paginaVendaPropriaId": {
          name: 'paginaVendaPropriaId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        paginaVendaPropria: {
          name: 'paginaVendaPropria',
          type: 'PaginaVendaPropria',
          model: 'PaginaVendaPropria',
          relationType: 'belongsTo',
                  keyFrom: 'paginaVendaPropriaId',
          keyTo: 'id'
        },
      }
    }
  }
}
