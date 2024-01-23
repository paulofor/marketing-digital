/* tslint:disable */
import {
  PaginaVendaPropria
} from '../index';

declare var Object: any;
export interface LoadPaginaVendaPropriaInterface {
  "codigoPaginaVendaPropria"?: string;
  "utmSource"?: string;
  "utmMedium"?: string;
  "utmCampaign"?: string;
  "utmTerm"?: string;
  "utmContent"?: string;
  "codigoLoad"?: string;
  "paginaVendaPropriaId"?: number;
  "id"?: number;
  paginaVendaPropria?: PaginaVendaPropria;
}

export class LoadPaginaVendaPropria implements LoadPaginaVendaPropriaInterface {
  "codigoPaginaVendaPropria": string;
  "utmSource": string;
  "utmMedium": string;
  "utmCampaign": string;
  "utmTerm": string;
  "utmContent": string;
  "codigoLoad": string;
  "paginaVendaPropriaId": number;
  "id": number;
  paginaVendaPropria: PaginaVendaPropria;
  constructor(data?: LoadPaginaVendaPropriaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `LoadPaginaVendaPropria`.
   */
  public static getModelName() {
    return "LoadPaginaVendaPropria";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of LoadPaginaVendaPropria for dynamic purposes.
  **/
  public static factory(data: LoadPaginaVendaPropriaInterface): LoadPaginaVendaPropria{
    return new LoadPaginaVendaPropria(data);
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
      name: 'LoadPaginaVendaPropria',
      plural: 'LoadPaginaVendaPropria',
      path: 'LoadPaginaVendaPropria',
      idName: 'id',
      properties: {
        "codigoPaginaVendaPropria": {
          name: 'codigoPaginaVendaPropria',
          type: 'string'
        },
        "utmSource": {
          name: 'utmSource',
          type: 'string'
        },
        "utmMedium": {
          name: 'utmMedium',
          type: 'string'
        },
        "utmCampaign": {
          name: 'utmCampaign',
          type: 'string'
        },
        "utmTerm": {
          name: 'utmTerm',
          type: 'string'
        },
        "utmContent": {
          name: 'utmContent',
          type: 'string'
        },
        "codigoLoad": {
          name: 'codigoLoad',
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
