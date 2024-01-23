/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  PaginaVenda,
  ImagemPaginaVenda,
  PaginaVendaPropria
} from '../index';

declare var Object: any;
export interface ProdutoAfiliadoHotlinkInterface {
  "url"?: string;
  "hotlink"?: string;
  "descricao"?: string;
  "hasHotLead"?: number;
  "specialCampaign"?: number;
  "hotmartId"?: number;
  "id"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  paginaVendas?: PaginaVenda[];
  imagemPaginaVendas?: ImagemPaginaVenda[];
  paginaVendaProprias?: PaginaVendaPropria[];
}

export class ProdutoAfiliadoHotlink implements ProdutoAfiliadoHotlinkInterface {
  "url": string;
  "hotlink": string;
  "descricao": string;
  "hasHotLead": number;
  "specialCampaign": number;
  "hotmartId": number;
  "id": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  paginaVendas: PaginaVenda[];
  imagemPaginaVendas: ImagemPaginaVenda[];
  paginaVendaProprias: PaginaVendaPropria[];
  constructor(data?: ProdutoAfiliadoHotlinkInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProdutoAfiliadoHotlink`.
   */
  public static getModelName() {
    return "ProdutoAfiliadoHotlink";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProdutoAfiliadoHotlink for dynamic purposes.
  **/
  public static factory(data: ProdutoAfiliadoHotlinkInterface): ProdutoAfiliadoHotlink{
    return new ProdutoAfiliadoHotlink(data);
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
      name: 'ProdutoAfiliadoHotlink',
      plural: 'ProdutoAfiliadoHotlinks',
      path: 'ProdutoAfiliadoHotlinks',
      idName: 'id',
      properties: {
        "url": {
          name: 'url',
          type: 'string'
        },
        "hotlink": {
          name: 'hotlink',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "hasHotLead": {
          name: 'hasHotLead',
          type: 'number'
        },
        "specialCampaign": {
          name: 'specialCampaign',
          type: 'number'
        },
        "hotmartId": {
          name: 'hotmartId',
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
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        paginaVendas: {
          name: 'paginaVendas',
          type: 'PaginaVenda[]',
          model: 'PaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoAfiliadoHotlinkId'
        },
        imagemPaginaVendas: {
          name: 'imagemPaginaVendas',
          type: 'ImagemPaginaVenda[]',
          model: 'ImagemPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'hotmartId'
        },
        paginaVendaProprias: {
          name: 'paginaVendaProprias',
          type: 'PaginaVendaPropria[]',
          model: 'PaginaVendaPropria',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoAfiliadoHotlinkId'
        },
      }
    }
  }
}
