/* tslint:disable */
import {
  ProdutoAfiliadoHotmart
} from '../index';

declare var Object: any;
export interface TagIdSecaoPaginaVendaInterface {
  "tagId"?: string;
  "produtoAfiliadoHotmartId"?: number;
  "id"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
}

export class TagIdSecaoPaginaVenda implements TagIdSecaoPaginaVendaInterface {
  "tagId": string;
  "produtoAfiliadoHotmartId": number;
  "id": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  constructor(data?: TagIdSecaoPaginaVendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TagIdSecaoPaginaVenda`.
   */
  public static getModelName() {
    return "TagIdSecaoPaginaVenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TagIdSecaoPaginaVenda for dynamic purposes.
  **/
  public static factory(data: TagIdSecaoPaginaVendaInterface): TagIdSecaoPaginaVenda{
    return new TagIdSecaoPaginaVenda(data);
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
      name: 'TagIdSecaoPaginaVenda',
      plural: 'TagIdSecaoPaginaVendas',
      path: 'TagIdSecaoPaginaVendas',
      idName: 'id',
      properties: {
        "tagId": {
          name: 'tagId',
          type: 'string'
        },
        "produtoAfiliadoHotmartId": {
          name: 'produtoAfiliadoHotmartId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        produtoAfiliadoHotmart: {
          name: 'produtoAfiliadoHotmart',
          type: 'ProdutoAfiliadoHotmart',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'belongsTo',
                  keyFrom: 'produtoAfiliadoHotmartId',
          keyTo: 'hotmartId'
        },
      }
    }
  }
}
