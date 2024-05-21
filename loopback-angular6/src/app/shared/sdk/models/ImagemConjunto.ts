/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  AnuncioAdsDisplay,
  CampanhaAdsRedeDisplay,
  ProdutoProprio,
  ImagemPaginaVenda,
  AnuncioConceitoAdsRedeDisplay,
  FonteLocal
} from '../index';

declare var Object: any;
export interface ImagemConjuntoInterface {
  "nome"?: string;
  "nomeImagem1200x628"?: string;
  "nomeImagem1200x1200"?: string;
  "nomeImagem960x1600"?: string;
  "urlImagemDeitada"?: string;
  "urlImagem2"?: string;
  "urlImagemQuadrada"?: string;
  "produtoProprioId"?: number;
  "geraDeImagemVenda"?: number;
  "textoCopyLinha1"?: string;
  "textoCopyLinha2"?: string;
  "fontColor"?: string;
  "fundoColor"?: string;
  "logoGrupoWhatsapp"?: string;
  "textoCopyLinha3"?: string;
  "imagemPaginaVendaId"?: number;
  "fonteLocalId"?: number;
  "id"?: number;
  "hotmartId"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  anuncioAdsDisplays?: AnuncioAdsDisplay[];
  campanhaAdsRedeDisplays?: CampanhaAdsRedeDisplay[];
  produtoProprio?: ProdutoProprio;
  imagemPaginaVenda?: ImagemPaginaVenda;
  anuncioConceitoAdsRedeDisplays?: AnuncioConceitoAdsRedeDisplay[];
  fonteLocal?: FonteLocal;
}

export class ImagemConjunto implements ImagemConjuntoInterface {
  "nome": string;
  "nomeImagem1200x628": string;
  "nomeImagem1200x1200": string;
  "nomeImagem960x1600": string;
  "urlImagemDeitada": string;
  "urlImagem2": string;
  "urlImagemQuadrada": string;
  "produtoProprioId": number;
  "geraDeImagemVenda": number;
  "textoCopyLinha1": string;
  "textoCopyLinha2": string;
  "fontColor": string;
  "fundoColor": string;
  "logoGrupoWhatsapp": string;
  "textoCopyLinha3": string;
  "imagemPaginaVendaId": number;
  "fonteLocalId": number;
  "id": number;
  "hotmartId": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  anuncioAdsDisplays: AnuncioAdsDisplay[];
  campanhaAdsRedeDisplays: CampanhaAdsRedeDisplay[];
  produtoProprio: ProdutoProprio;
  imagemPaginaVenda: ImagemPaginaVenda;
  anuncioConceitoAdsRedeDisplays: AnuncioConceitoAdsRedeDisplay[];
  fonteLocal: FonteLocal;
  constructor(data?: ImagemConjuntoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ImagemConjunto`.
   */
  public static getModelName() {
    return "ImagemConjunto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ImagemConjunto for dynamic purposes.
  **/
  public static factory(data: ImagemConjuntoInterface): ImagemConjunto{
    return new ImagemConjunto(data);
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
      name: 'ImagemConjunto',
      plural: 'ImagemConjuntos',
      path: 'ImagemConjuntos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "nomeImagem1200x628": {
          name: 'nomeImagem1200x628',
          type: 'string'
        },
        "nomeImagem1200x1200": {
          name: 'nomeImagem1200x1200',
          type: 'string'
        },
        "nomeImagem960x1600": {
          name: 'nomeImagem960x1600',
          type: 'string'
        },
        "urlImagemDeitada": {
          name: 'urlImagemDeitada',
          type: 'string'
        },
        "urlImagem2": {
          name: 'urlImagem2',
          type: 'string'
        },
        "urlImagemQuadrada": {
          name: 'urlImagemQuadrada',
          type: 'string'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
          type: 'number'
        },
        "geraDeImagemVenda": {
          name: 'geraDeImagemVenda',
          type: 'number'
        },
        "textoCopyLinha1": {
          name: 'textoCopyLinha1',
          type: 'string'
        },
        "textoCopyLinha2": {
          name: 'textoCopyLinha2',
          type: 'string'
        },
        "fontColor": {
          name: 'fontColor',
          type: 'string'
        },
        "fundoColor": {
          name: 'fundoColor',
          type: 'string'
        },
        "logoGrupoWhatsapp": {
          name: 'logoGrupoWhatsapp',
          type: 'string'
        },
        "textoCopyLinha3": {
          name: 'textoCopyLinha3',
          type: 'string'
        },
        "imagemPaginaVendaId": {
          name: 'imagemPaginaVendaId',
          type: 'number'
        },
        "fonteLocalId": {
          name: 'fonteLocalId',
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
        anuncioAdsDisplays: {
          name: 'anuncioAdsDisplays',
          type: 'AnuncioAdsDisplay[]',
          model: 'AnuncioAdsDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'imagemConjuntoId'
        },
        campanhaAdsRedeDisplays: {
          name: 'campanhaAdsRedeDisplays',
          type: 'CampanhaAdsRedeDisplay[]',
          model: 'CampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'imagemConjuntoId'
        },
        produtoProprio: {
          name: 'produtoProprio',
          type: 'ProdutoProprio',
          model: 'ProdutoProprio',
          relationType: 'belongsTo',
                  keyFrom: 'produtoProprioId',
          keyTo: 'id'
        },
        imagemPaginaVenda: {
          name: 'imagemPaginaVenda',
          type: 'ImagemPaginaVenda',
          model: 'ImagemPaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'imagemPaginaVendaId',
          keyTo: 'id'
        },
        anuncioConceitoAdsRedeDisplays: {
          name: 'anuncioConceitoAdsRedeDisplays',
          type: 'AnuncioConceitoAdsRedeDisplay[]',
          model: 'AnuncioConceitoAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'imagemConjuntoId'
        },
        fonteLocal: {
          name: 'fonteLocal',
          type: 'FonteLocal',
          model: 'FonteLocal',
          relationType: 'belongsTo',
                  keyFrom: 'fonteLocalId',
          keyTo: 'id'
        },
      }
    }
  }
}
