/* tslint:disable */
import {
  ImagemPaginaVenda,
  VersaoPaginaVenda,
  ProdutoAfiliadoHotlink,
  PixelAdsSegmentoMercado,
  LoadPaginaVenda,
  PaginaVendaScroll,
  LoadPaginaVendaPropria,
  ScrollPaginaVendaPropria,
  SolicitacaoCheckoutPaginaVendaPropria
} from '../index';

declare var Object: any;
export interface PaginaVendaPropriaInterface {
  "hotmartId"?: number;
  "codigoUrl"?: string;
  "status"?: string;
  "versaoPaginaVendaId"?: number;
  "imagemPaginaVendaId"?: number;
  "html"?: string;
  "css"?: string;
  "tipoGeracao"?: string;
  "produtoAfiliadoHotlinkId"?: number;
  "pixelAdsSegmentoMercadoId"?: number;
  "id"?: number;
  imagemPaginaVenda?: ImagemPaginaVenda;
  versaoPaginaVenda?: VersaoPaginaVenda;
  produtoAfiliadoHotlink?: ProdutoAfiliadoHotlink;
  pixelAdsSegmentoMercado?: PixelAdsSegmentoMercado;
  loadPaginaVendas?: LoadPaginaVenda[];
  paginaVendaScrolls?: PaginaVendaScroll[];
  loadPaginaVendaProprias?: LoadPaginaVendaPropria[];
  scrollPaginaVendaProprias?: ScrollPaginaVendaPropria[];
  solicitacaoCheckoutPaginaVendaProprias?: SolicitacaoCheckoutPaginaVendaPropria[];
}

export class PaginaVendaPropria implements PaginaVendaPropriaInterface {
  "hotmartId": number;
  "codigoUrl": string;
  "status": string;
  "versaoPaginaVendaId": number;
  "imagemPaginaVendaId": number;
  "html": string;
  "css": string;
  "tipoGeracao": string;
  "produtoAfiliadoHotlinkId": number;
  "pixelAdsSegmentoMercadoId": number;
  "id": number;
  imagemPaginaVenda: ImagemPaginaVenda;
  versaoPaginaVenda: VersaoPaginaVenda;
  produtoAfiliadoHotlink: ProdutoAfiliadoHotlink;
  pixelAdsSegmentoMercado: PixelAdsSegmentoMercado;
  loadPaginaVendas: LoadPaginaVenda[];
  paginaVendaScrolls: PaginaVendaScroll[];
  loadPaginaVendaProprias: LoadPaginaVendaPropria[];
  scrollPaginaVendaProprias: ScrollPaginaVendaPropria[];
  solicitacaoCheckoutPaginaVendaProprias: SolicitacaoCheckoutPaginaVendaPropria[];
  constructor(data?: PaginaVendaPropriaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaginaVendaPropria`.
   */
  public static getModelName() {
    return "PaginaVendaPropria";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaginaVendaPropria for dynamic purposes.
  **/
  public static factory(data: PaginaVendaPropriaInterface): PaginaVendaPropria{
    return new PaginaVendaPropria(data);
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
      name: 'PaginaVendaPropria',
      plural: 'PaginaVendaPropria',
      path: 'PaginaVendaPropria',
      idName: 'id',
      properties: {
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "codigoUrl": {
          name: 'codigoUrl',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "versaoPaginaVendaId": {
          name: 'versaoPaginaVendaId',
          type: 'number'
        },
        "imagemPaginaVendaId": {
          name: 'imagemPaginaVendaId',
          type: 'number'
        },
        "html": {
          name: 'html',
          type: 'string'
        },
        "css": {
          name: 'css',
          type: 'string'
        },
        "tipoGeracao": {
          name: 'tipoGeracao',
          type: 'string'
        },
        "produtoAfiliadoHotlinkId": {
          name: 'produtoAfiliadoHotlinkId',
          type: 'number'
        },
        "pixelAdsSegmentoMercadoId": {
          name: 'pixelAdsSegmentoMercadoId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        imagemPaginaVenda: {
          name: 'imagemPaginaVenda',
          type: 'ImagemPaginaVenda',
          model: 'ImagemPaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'imagemPaginaVendaId',
          keyTo: 'id'
        },
        versaoPaginaVenda: {
          name: 'versaoPaginaVenda',
          type: 'VersaoPaginaVenda',
          model: 'VersaoPaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'versaoPaginaVendaId',
          keyTo: 'id'
        },
        produtoAfiliadoHotlink: {
          name: 'produtoAfiliadoHotlink',
          type: 'ProdutoAfiliadoHotlink',
          model: 'ProdutoAfiliadoHotlink',
          relationType: 'belongsTo',
                  keyFrom: 'produtoAfiliadoHotlinkId',
          keyTo: 'id'
        },
        pixelAdsSegmentoMercado: {
          name: 'pixelAdsSegmentoMercado',
          type: 'PixelAdsSegmentoMercado',
          model: 'PixelAdsSegmentoMercado',
          relationType: 'belongsTo',
                  keyFrom: 'pixelAdsSegmentoMercadoId',
          keyTo: 'id'
        },
        loadPaginaVendas: {
          name: 'loadPaginaVendas',
          type: 'LoadPaginaVenda[]',
          model: 'LoadPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaVendaPropriaId'
        },
        paginaVendaScrolls: {
          name: 'paginaVendaScrolls',
          type: 'PaginaVendaScroll[]',
          model: 'PaginaVendaScroll',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaVendaPropriaId'
        },
        loadPaginaVendaProprias: {
          name: 'loadPaginaVendaProprias',
          type: 'LoadPaginaVendaPropria[]',
          model: 'LoadPaginaVendaPropria',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaVendaPropriaId'
        },
        scrollPaginaVendaProprias: {
          name: 'scrollPaginaVendaProprias',
          type: 'ScrollPaginaVendaPropria[]',
          model: 'ScrollPaginaVendaPropria',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaVendaPropriaId'
        },
        solicitacaoCheckoutPaginaVendaProprias: {
          name: 'solicitacaoCheckoutPaginaVendaProprias',
          type: 'SolicitacaoCheckoutPaginaVendaPropria[]',
          model: 'SolicitacaoCheckoutPaginaVendaPropria',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaVendaPropriaId'
        },
      }
    }
  }
}
