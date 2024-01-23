/* tslint:disable */
import {
  PaginaVendaPropria
} from '../index';

declare var Object: any;
export interface SolicitacaoCheckoutPaginaVendaPropriaInterface {
  "codigoPaginaVendaPropria"?: string;
  "utmSource"?: string;
  "utmMedium"?: string;
  "utmCampaign"?: string;
  "utmTerm"?: string;
  "utmContent"?: string;
  "dataHora"?: Date;
  "paginaVendaPropriaId"?: number;
  "id"?: number;
  paginaVendaPropria?: PaginaVendaPropria;
}

export class SolicitacaoCheckoutPaginaVendaPropria implements SolicitacaoCheckoutPaginaVendaPropriaInterface {
  "codigoPaginaVendaPropria": string;
  "utmSource": string;
  "utmMedium": string;
  "utmCampaign": string;
  "utmTerm": string;
  "utmContent": string;
  "dataHora": Date;
  "paginaVendaPropriaId": number;
  "id": number;
  paginaVendaPropria: PaginaVendaPropria;
  constructor(data?: SolicitacaoCheckoutPaginaVendaPropriaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SolicitacaoCheckoutPaginaVendaPropria`.
   */
  public static getModelName() {
    return "SolicitacaoCheckoutPaginaVendaPropria";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SolicitacaoCheckoutPaginaVendaPropria for dynamic purposes.
  **/
  public static factory(data: SolicitacaoCheckoutPaginaVendaPropriaInterface): SolicitacaoCheckoutPaginaVendaPropria{
    return new SolicitacaoCheckoutPaginaVendaPropria(data);
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
      name: 'SolicitacaoCheckoutPaginaVendaPropria',
      plural: 'SolicitacaoCheckoutPaginaVendaPropria',
      path: 'SolicitacaoCheckoutPaginaVendaPropria',
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
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
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
