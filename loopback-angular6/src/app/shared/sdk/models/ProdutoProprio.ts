/* tslint:disable */
import {
  CampanhaAdsRedeDisplay,
  ImagemConjunto,
  ProdutoProprioVersao,
  VersaoPaginaVenda,
  ImagemPaginaVenda,
  PublicoAlvoAdsPalavra,
  AnuncioConceitoAdsRedeDisplay,
  VideoVsl,
  PaginaVendaVsl
} from '../index';

declare var Object: any;
export interface ProdutoProprioInterface {
  "nome"?: string;
  "status"?: string;
  "urlKiwify"?: string;
  "id"?: number;
  campanhaAdsRedeDisplays?: CampanhaAdsRedeDisplay[];
  imagemConjuntos?: ImagemConjunto[];
  produtoProprioVersaos?: ProdutoProprioVersao[];
  versaoPaginaVendas?: VersaoPaginaVenda[];
  imagemPaginaVendas?: ImagemPaginaVenda[];
  publicoAlvoAdsPalavras?: PublicoAlvoAdsPalavra[];
  anuncioConceitoAdsRedeDisplays?: AnuncioConceitoAdsRedeDisplay[];
  videoVsls?: VideoVsl[];
  paginaVendaVsls?: PaginaVendaVsl[];
}

export class ProdutoProprio implements ProdutoProprioInterface {
  "nome": string;
  "status": string;
  "urlKiwify": string;
  "id": number;
  campanhaAdsRedeDisplays: CampanhaAdsRedeDisplay[];
  imagemConjuntos: ImagemConjunto[];
  produtoProprioVersaos: ProdutoProprioVersao[];
  versaoPaginaVendas: VersaoPaginaVenda[];
  imagemPaginaVendas: ImagemPaginaVenda[];
  publicoAlvoAdsPalavras: PublicoAlvoAdsPalavra[];
  anuncioConceitoAdsRedeDisplays: AnuncioConceitoAdsRedeDisplay[];
  videoVsls: VideoVsl[];
  paginaVendaVsls: PaginaVendaVsl[];
  constructor(data?: ProdutoProprioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProdutoProprio`.
   */
  public static getModelName() {
    return "ProdutoProprio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProdutoProprio for dynamic purposes.
  **/
  public static factory(data: ProdutoProprioInterface): ProdutoProprio{
    return new ProdutoProprio(data);
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
      name: 'ProdutoProprio',
      plural: 'ProdutoProprios',
      path: 'ProdutoProprios',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "urlKiwify": {
          name: 'urlKiwify',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        campanhaAdsRedeDisplays: {
          name: 'campanhaAdsRedeDisplays',
          type: 'CampanhaAdsRedeDisplay[]',
          model: 'CampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        imagemConjuntos: {
          name: 'imagemConjuntos',
          type: 'ImagemConjunto[]',
          model: 'ImagemConjunto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        produtoProprioVersaos: {
          name: 'produtoProprioVersaos',
          type: 'ProdutoProprioVersao[]',
          model: 'ProdutoProprioVersao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        versaoPaginaVendas: {
          name: 'versaoPaginaVendas',
          type: 'VersaoPaginaVenda[]',
          model: 'VersaoPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        imagemPaginaVendas: {
          name: 'imagemPaginaVendas',
          type: 'ImagemPaginaVenda[]',
          model: 'ImagemPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        publicoAlvoAdsPalavras: {
          name: 'publicoAlvoAdsPalavras',
          type: 'PublicoAlvoAdsPalavra[]',
          model: 'PublicoAlvoAdsPalavra',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        anuncioConceitoAdsRedeDisplays: {
          name: 'anuncioConceitoAdsRedeDisplays',
          type: 'AnuncioConceitoAdsRedeDisplay[]',
          model: 'AnuncioConceitoAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        videoVsls: {
          name: 'videoVsls',
          type: 'VideoVsl[]',
          model: 'VideoVsl',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        paginaVendaVsls: {
          name: 'paginaVendaVsls',
          type: 'PaginaVendaVsl[]',
          model: 'PaginaVendaVsl',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
      }
    }
  }
}
