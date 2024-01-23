/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  PaginaVenda,
  ImagemConjunto,
  AnuncioCampanhaAdsRedeDisplay
} from '../index';

declare var Object: any;
export interface AnuncioAdsDisplayInterface {
  "urlFinal"?: string;
  "nomeEmpresa"?: string;
  "titulo"?: string;
  "tituloLongo"?: string;
  "descricao"?: string;
  "nomeImagem1200x628"?: string;
  "nomeImagem1200x1200"?: string;
  "nomeImagem960x1600"?: string;
  "paginaVendaId"?: number;
  "imagemConjuntoId"?: number;
  "id"?: number;
  "hotmartId"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  paginaVenda?: PaginaVenda;
  imagemConjunto?: ImagemConjunto;
  anuncioCampanhaAdsRedeDisplays?: AnuncioCampanhaAdsRedeDisplay[];
}

export class AnuncioAdsDisplay implements AnuncioAdsDisplayInterface {
  "urlFinal": string;
  "nomeEmpresa": string;
  "titulo": string;
  "tituloLongo": string;
  "descricao": string;
  "nomeImagem1200x628": string;
  "nomeImagem1200x1200": string;
  "nomeImagem960x1600": string;
  "paginaVendaId": number;
  "imagemConjuntoId": number;
  "id": number;
  "hotmartId": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  paginaVenda: PaginaVenda;
  imagemConjunto: ImagemConjunto;
  anuncioCampanhaAdsRedeDisplays: AnuncioCampanhaAdsRedeDisplay[];
  constructor(data?: AnuncioAdsDisplayInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnuncioAdsDisplay`.
   */
  public static getModelName() {
    return "AnuncioAdsDisplay";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnuncioAdsDisplay for dynamic purposes.
  **/
  public static factory(data: AnuncioAdsDisplayInterface): AnuncioAdsDisplay{
    return new AnuncioAdsDisplay(data);
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
      name: 'AnuncioAdsDisplay',
      plural: 'AnuncioAdsDisplays',
      path: 'AnuncioAdsDisplays',
      idName: 'id',
      properties: {
        "urlFinal": {
          name: 'urlFinal',
          type: 'string'
        },
        "nomeEmpresa": {
          name: 'nomeEmpresa',
          type: 'string'
        },
        "titulo": {
          name: 'titulo',
          type: 'string'
        },
        "tituloLongo": {
          name: 'tituloLongo',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
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
        "paginaVendaId": {
          name: 'paginaVendaId',
          type: 'number'
        },
        "imagemConjuntoId": {
          name: 'imagemConjuntoId',
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
        imagemConjunto: {
          name: 'imagemConjunto',
          type: 'ImagemConjunto',
          model: 'ImagemConjunto',
          relationType: 'belongsTo',
                  keyFrom: 'imagemConjuntoId',
          keyTo: 'id'
        },
        anuncioCampanhaAdsRedeDisplays: {
          name: 'anuncioCampanhaAdsRedeDisplays',
          type: 'AnuncioCampanhaAdsRedeDisplay[]',
          model: 'AnuncioCampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'anuncioAdsDisplayId'
        },
      }
    }
  }
}
