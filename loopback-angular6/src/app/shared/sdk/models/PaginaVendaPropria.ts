/* tslint:disable */
import {
  ImagemPaginaVenda,
  VersaoPaginaVenda,
  PixelAdsSegmentoMercado,
  ProdutoAfiliadoHotmart,
  CampanhaAdsRedeDisplay,
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
  "geraArquivo"?: number;
  "nome"?: string;
  "urlCompleta"?: string;
  "pixelAdsSegmentoMercadoId"?: number;
  "id"?: number;
  imagemPaginaVenda?: ImagemPaginaVenda;
  versaoPaginaVenda?: VersaoPaginaVenda;
  pixelAdsSegmentoMercado?: PixelAdsSegmentoMercado;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  campanhaAdsRedeDisplays?: CampanhaAdsRedeDisplay[];
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
  "geraArquivo": number;
  "nome": string;
  "urlCompleta": string;
  "pixelAdsSegmentoMercadoId": number;
  "id": number;
  imagemPaginaVenda: ImagemPaginaVenda;
  versaoPaginaVenda: VersaoPaginaVenda;
  pixelAdsSegmentoMercado: PixelAdsSegmentoMercado;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  campanhaAdsRedeDisplays: CampanhaAdsRedeDisplay[];
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
        "geraArquivo": {
          name: 'geraArquivo',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "urlCompleta": {
          name: 'urlCompleta',
          type: 'string'
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
        pixelAdsSegmentoMercado: {
          name: 'pixelAdsSegmentoMercado',
          type: 'PixelAdsSegmentoMercado',
          model: 'PixelAdsSegmentoMercado',
          relationType: 'belongsTo',
                  keyFrom: 'pixelAdsSegmentoMercadoId',
          keyTo: 'id'
        },
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
          keyTo: 'paginaVendaPropriaId'
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
