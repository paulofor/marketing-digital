/* tslint:disable */
import {
  PaginaVendaPropria
} from '../index';

declare var Object: any;
export interface ScrollPaginaVendaPropriaInterface {
  "codigoPaginaVendaPropria"?: string;
  "dataHora"?: Date;
  "codigoLoad"?: string;
  "visitante"?: string;
  "utmCampaign"?: string;
  "paginaVendaPropriaId"?: number;
  "id"?: number;
  paginaVendaPropria?: PaginaVendaPropria;
}

export class ScrollPaginaVendaPropria implements ScrollPaginaVendaPropriaInterface {
  "codigoPaginaVendaPropria": string;
  "dataHora": Date;
  "codigoLoad": string;
  "visitante": string;
  "utmCampaign": string;
  "paginaVendaPropriaId": number;
  "id": number;
  paginaVendaPropria: PaginaVendaPropria;
  constructor(data?: ScrollPaginaVendaPropriaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ScrollPaginaVendaPropria`.
   */
  public static getModelName() {
    return "ScrollPaginaVendaPropria";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ScrollPaginaVendaPropria for dynamic purposes.
  **/
  public static factory(data: ScrollPaginaVendaPropriaInterface): ScrollPaginaVendaPropria{
    return new ScrollPaginaVendaPropria(data);
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
      name: 'ScrollPaginaVendaPropria',
      plural: 'ScrollPaginaVendaPropria',
      path: 'ScrollPaginaVendaPropria',
      idName: 'id',
      properties: {
        "codigoPaginaVendaPropria": {
          name: 'codigoPaginaVendaPropria',
          type: 'string'
        },
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "codigoLoad": {
          name: 'codigoLoad',
          type: 'string'
        },
        "visitante": {
          name: 'visitante',
          type: 'string'
        },
        "utmCampaign": {
          name: 'utmCampaign',
          type: 'string'
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
