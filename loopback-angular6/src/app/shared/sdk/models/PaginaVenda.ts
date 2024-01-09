/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  ProdutoAfiliadoHotlink,
  CampanhaAdsRedeDisplay,
  PublicoAlvoAds,
  AnuncioAdsDisplay,
  LoadPaginaVenda,
  CampanhaAdsTeste,
  PaginaVendaSecao
} from '../index';

declare var Object: any;
export interface PaginaVendaInterface {
  "url"?: string;
  "precoProduto"?: string;
  "produtoAfiliadoHotlinkId"?: number;
  "id"?: number;
  "hotmartId"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  produtoAfiliadoHotlink?: ProdutoAfiliadoHotlink;
  campanhaAdsRedeDisplays?: CampanhaAdsRedeDisplay[];
  publicoAlvoAds?: PublicoAlvoAds[];
  anuncioAdsDisplays?: AnuncioAdsDisplay[];
  loadPaginaVendas?: LoadPaginaVenda[];
  campanhaAdsTestes?: CampanhaAdsTeste[];
  paginaVendaSecaos?: PaginaVendaSecao[];
}

export class PaginaVenda implements PaginaVendaInterface {
  "url": string;
  "precoProduto": string;
  "produtoAfiliadoHotlinkId": number;
  "id": number;
  "hotmartId": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  produtoAfiliadoHotlink: ProdutoAfiliadoHotlink;
  campanhaAdsRedeDisplays: CampanhaAdsRedeDisplay[];
  publicoAlvoAds: PublicoAlvoAds[];
  anuncioAdsDisplays: AnuncioAdsDisplay[];
  loadPaginaVendas: LoadPaginaVenda[];
  campanhaAdsTestes: CampanhaAdsTeste[];
  paginaVendaSecaos: PaginaVendaSecao[];
  constructor(data?: PaginaVendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaginaVenda`.
   */
  public static getModelName() {
    return "PaginaVenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaginaVenda for dynamic purposes.
  **/
  public static factory(data: PaginaVendaInterface): PaginaVenda{
    return new PaginaVenda(data);
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
      name: 'PaginaVenda',
      plural: 'PaginaVendas',
      path: 'PaginaVendas',
      idName: 'id',
      properties: {
        "url": {
          name: 'url',
          type: 'string'
        },
        "precoProduto": {
          name: 'precoProduto',
          type: 'string'
        },
        "produtoAfiliadoHotlinkId": {
          name: 'produtoAfiliadoHotlinkId',
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
        produtoAfiliadoHotlink: {
          name: 'produtoAfiliadoHotlink',
          type: 'ProdutoAfiliadoHotlink',
          model: 'ProdutoAfiliadoHotlink',
          relationType: 'belongsTo',
                  keyFrom: 'produtoAfiliadoHotlinkId',
          keyTo: 'id'
        },
        campanhaAdsRedeDisplays: {
          name: 'campanhaAdsRedeDisplays',
          type: 'CampanhaAdsRedeDisplay[]',
          model: 'CampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaVendaId'
        },
        publicoAlvoAds: {
          name: 'publicoAlvoAds',
          type: 'PublicoAlvoAds[]',
          model: 'PublicoAlvoAds',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaVendaId'
        },
        anuncioAdsDisplays: {
          name: 'anuncioAdsDisplays',
          type: 'AnuncioAdsDisplay[]',
          model: 'AnuncioAdsDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaVendaId'
        },
        loadPaginaVendas: {
          name: 'loadPaginaVendas',
          type: 'LoadPaginaVenda[]',
          model: 'LoadPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaVendaId'
        },
        campanhaAdsTestes: {
          name: 'campanhaAdsTestes',
          type: 'CampanhaAdsTeste[]',
          model: 'CampanhaAdsTeste',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaVendaId'
        },
        paginaVendaSecaos: {
          name: 'paginaVendaSecaos',
          type: 'PaginaVendaSecao[]',
          model: 'PaginaVendaSecao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaVendaId'
        },
      }
    }
  }
}
