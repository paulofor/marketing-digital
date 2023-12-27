/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  PaginaVenda
} from '../index';

declare var Object: any;
export interface LoadPaginaVendaInterface {
  "dataHora"?: Date;
  "tempoConsumido"?: number;
  "visitante"?: string;
  "qtdeVisita"?: number;
  "dominio"?: string;
  "paginaVendaId"?: number;
  "id"?: number;
  "hotmartId"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  paginaVenda?: PaginaVenda;
}

export class LoadPaginaVenda implements LoadPaginaVendaInterface {
  "dataHora": Date;
  "tempoConsumido": number;
  "visitante": string;
  "qtdeVisita": number;
  "dominio": string;
  "paginaVendaId": number;
  "id": number;
  "hotmartId": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  paginaVenda: PaginaVenda;
  constructor(data?: LoadPaginaVendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `LoadPaginaVenda`.
   */
  public static getModelName() {
    return "LoadPaginaVenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of LoadPaginaVenda for dynamic purposes.
  **/
  public static factory(data: LoadPaginaVendaInterface): LoadPaginaVenda{
    return new LoadPaginaVenda(data);
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
      name: 'LoadPaginaVenda',
      plural: 'LoadPaginaVendas',
      path: 'LoadPaginaVendas',
      idName: 'id',
      properties: {
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "tempoConsumido": {
          name: 'tempoConsumido',
          type: 'number'
        },
        "visitante": {
          name: 'visitante',
          type: 'string'
        },
        "qtdeVisita": {
          name: 'qtdeVisita',
          type: 'number'
        },
        "dominio": {
          name: 'dominio',
          type: 'string'
        },
        "paginaVendaId": {
          name: 'paginaVendaId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
      },
      relations: {
        produtoAfiliadoHotmart: {
          name: 'produtoAfiliadoHotmart',
          type: 'ProdutoAfiliadoHotmart',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'belongsTo',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        paginaVenda: {
          name: 'paginaVenda',
          type: 'PaginaVenda',
          model: 'PaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'paginaVendaId',
          keyTo: 'id'
        },
      }
    }
  }
}
