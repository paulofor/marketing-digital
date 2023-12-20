/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  CampanhaAdsRedeDisplay,
  PublicoAlvoAds,
  AnuncioAdsDisplay,
  LoadPaginaVenda,
  CampanhaAdsTeste
} from '../index';

declare var Object: any;
export interface PaginaVendaInterface {
  "url"?: string;
  "id"?: number;
  "hotmartId"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  campanhaAdsRedeDisplays?: CampanhaAdsRedeDisplay[];
  publicoAlvoAds?: PublicoAlvoAds[];
  anuncioAdsDisplays?: AnuncioAdsDisplay[];
  loadPaginaVendas?: LoadPaginaVenda[];
  campanhaAdsTestes?: CampanhaAdsTeste[];
}

export class PaginaVenda implements PaginaVendaInterface {
  "url": string;
  "id": number;
  "hotmartId": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  campanhaAdsRedeDisplays: CampanhaAdsRedeDisplay[];
  publicoAlvoAds: PublicoAlvoAds[];
  anuncioAdsDisplays: AnuncioAdsDisplay[];
  loadPaginaVendas: LoadPaginaVenda[];
  campanhaAdsTestes: CampanhaAdsTeste[];
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
      }
    }
  }
}
