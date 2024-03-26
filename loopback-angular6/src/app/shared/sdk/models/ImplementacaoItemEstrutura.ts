/* tslint:disable */
import {
  ItemEstruturaPaginaVenda,
  PaginaImplementacao
} from '../index';

declare var Object: any;
export interface ImplementacaoItemEstruturaInterface {
  "codigoHtml"?: string;
  "nome"?: string;
  "itemEstruturaPaginaVendaId"?: number;
  "id"?: number;
  itemEstruturaPaginaVenda?: ItemEstruturaPaginaVenda;
  paginaImplementacaos?: PaginaImplementacao[];
}

export class ImplementacaoItemEstrutura implements ImplementacaoItemEstruturaInterface {
  "codigoHtml": string;
  "nome": string;
  "itemEstruturaPaginaVendaId": number;
  "id": number;
  itemEstruturaPaginaVenda: ItemEstruturaPaginaVenda;
  paginaImplementacaos: PaginaImplementacao[];
  constructor(data?: ImplementacaoItemEstruturaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ImplementacaoItemEstrutura`.
   */
  public static getModelName() {
    return "ImplementacaoItemEstrutura";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ImplementacaoItemEstrutura for dynamic purposes.
  **/
  public static factory(data: ImplementacaoItemEstruturaInterface): ImplementacaoItemEstrutura{
    return new ImplementacaoItemEstrutura(data);
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
      name: 'ImplementacaoItemEstrutura',
      plural: 'ImplementacaoItemEstruturas',
      path: 'ImplementacaoItemEstruturas',
      idName: 'id',
      properties: {
        "codigoHtml": {
          name: 'codigoHtml',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "itemEstruturaPaginaVendaId": {
          name: 'itemEstruturaPaginaVendaId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        itemEstruturaPaginaVenda: {
          name: 'itemEstruturaPaginaVenda',
          type: 'ItemEstruturaPaginaVenda',
          model: 'ItemEstruturaPaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'itemEstruturaPaginaVendaId',
          keyTo: 'id'
        },
        paginaImplementacaos: {
          name: 'paginaImplementacaos',
          type: 'PaginaImplementacao[]',
          model: 'PaginaImplementacao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'implementacaoItemEstruturaId'
        },
      }
    }
  }
}
