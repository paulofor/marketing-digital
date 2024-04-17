/* tslint:disable */
import {
  PaginaVendaAberta,
  MetaAdsConjuntoAnuncio,
  ProdutoProprio,
  ContaInstagram,
  CriativoAnuncio
} from '../index';

declare var Object: any;
export interface MetaAdsAnuncioInterface {
  "impressao"?: number;
  "cpm"?: number;
  "alcance"?: number;
  "frequencia"?: number;
  "ctr"?: number;
  "clique"?: number;
  "cpc"?: number;
  "roas"?: number;
  "conversao"?: number;
  "cpa"?: number;
  "textoPrincipal1"?: string;
  "titulo1"?: string;
  "imagemAnuncio"?: string;
  "idMeta"?: string;
  "imagemInstagramReels"?: string;
  "imagemInstagramStories"?: string;
  "dataHora"?: Date;
  "produtoProprioId"?: number;
  "nome"?: string;
  "titulo2"?: string;
  "titulo3"?: string;
  "titulo4"?: string;
  "titulo5"?: string;
  "paginaVendaAbertaId"?: number;
  "criativoAnuncioId"?: number;
  "metaAdsConjuntoAnuncioId"?: number;
  "contaInstagramId"?: number;
  "id"?: number;
  paginaVendaAberta?: PaginaVendaAberta;
  metaAdsConjuntoAnuncio?: MetaAdsConjuntoAnuncio;
  produtoProprio?: ProdutoProprio;
  contaInstagram?: ContaInstagram;
  criativoAnuncio?: CriativoAnuncio;
}

export class MetaAdsAnuncio implements MetaAdsAnuncioInterface {
  "impressao": number;
  "cpm": number;
  "alcance": number;
  "frequencia": number;
  "ctr": number;
  "clique": number;
  "cpc": number;
  "roas": number;
  "conversao": number;
  "cpa": number;
  "textoPrincipal1": string;
  "titulo1": string;
  "imagemAnuncio": string;
  "idMeta": string;
  "imagemInstagramReels": string;
  "imagemInstagramStories": string;
  "dataHora": Date;
  "produtoProprioId": number;
  "nome": string;
  "titulo2": string;
  "titulo3": string;
  "titulo4": string;
  "titulo5": string;
  "paginaVendaAbertaId": number;
  "criativoAnuncioId": number;
  "metaAdsConjuntoAnuncioId": number;
  "contaInstagramId": number;
  "id": number;
  paginaVendaAberta: PaginaVendaAberta;
  metaAdsConjuntoAnuncio: MetaAdsConjuntoAnuncio;
  produtoProprio: ProdutoProprio;
  contaInstagram: ContaInstagram;
  criativoAnuncio: CriativoAnuncio;
  constructor(data?: MetaAdsAnuncioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MetaAdsAnuncio`.
   */
  public static getModelName() {
    return "MetaAdsAnuncio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MetaAdsAnuncio for dynamic purposes.
  **/
  public static factory(data: MetaAdsAnuncioInterface): MetaAdsAnuncio{
    return new MetaAdsAnuncio(data);
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
      name: 'MetaAdsAnuncio',
      plural: 'MetaAdsAnuncios',
      path: 'MetaAdsAnuncios',
      idName: 'id',
      properties: {
        "impressao": {
          name: 'impressao',
          type: 'number'
        },
        "cpm": {
          name: 'cpm',
          type: 'number'
        },
        "alcance": {
          name: 'alcance',
          type: 'number'
        },
        "frequencia": {
          name: 'frequencia',
          type: 'number'
        },
        "ctr": {
          name: 'ctr',
          type: 'number'
        },
        "clique": {
          name: 'clique',
          type: 'number'
        },
        "cpc": {
          name: 'cpc',
          type: 'number'
        },
        "roas": {
          name: 'roas',
          type: 'number'
        },
        "conversao": {
          name: 'conversao',
          type: 'number'
        },
        "cpa": {
          name: 'cpa',
          type: 'number'
        },
        "textoPrincipal1": {
          name: 'textoPrincipal1',
          type: 'string'
        },
        "titulo1": {
          name: 'titulo1',
          type: 'string'
        },
        "imagemAnuncio": {
          name: 'imagemAnuncio',
          type: 'string'
        },
        "idMeta": {
          name: 'idMeta',
          type: 'string'
        },
        "imagemInstagramReels": {
          name: 'imagemInstagramReels',
          type: 'string'
        },
        "imagemInstagramStories": {
          name: 'imagemInstagramStories',
          type: 'string'
        },
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "titulo2": {
          name: 'titulo2',
          type: 'string'
        },
        "titulo3": {
          name: 'titulo3',
          type: 'string'
        },
        "titulo4": {
          name: 'titulo4',
          type: 'string'
        },
        "titulo5": {
          name: 'titulo5',
          type: 'string'
        },
        "paginaVendaAbertaId": {
          name: 'paginaVendaAbertaId',
          type: 'number'
        },
        "criativoAnuncioId": {
          name: 'criativoAnuncioId',
          type: 'number'
        },
        "metaAdsConjuntoAnuncioId": {
          name: 'metaAdsConjuntoAnuncioId',
          type: 'number'
        },
        "contaInstagramId": {
          name: 'contaInstagramId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        paginaVendaAberta: {
          name: 'paginaVendaAberta',
          type: 'PaginaVendaAberta',
          model: 'PaginaVendaAberta',
          relationType: 'belongsTo',
                  keyFrom: 'paginaVendaAbertaId',
          keyTo: 'id'
        },
        metaAdsConjuntoAnuncio: {
          name: 'metaAdsConjuntoAnuncio',
          type: 'MetaAdsConjuntoAnuncio',
          model: 'MetaAdsConjuntoAnuncio',
          relationType: 'belongsTo',
                  keyFrom: 'metaAdsConjuntoAnuncioId',
          keyTo: 'id'
        },
        produtoProprio: {
          name: 'produtoProprio',
          type: 'ProdutoProprio',
          model: 'ProdutoProprio',
          relationType: 'belongsTo',
                  keyFrom: 'produtoProprioId',
          keyTo: 'id'
        },
        contaInstagram: {
          name: 'contaInstagram',
          type: 'ContaInstagram',
          model: 'ContaInstagram',
          relationType: 'belongsTo',
                  keyFrom: 'contaInstagramId',
          keyTo: 'id'
        },
        criativoAnuncio: {
          name: 'criativoAnuncio',
          type: 'CriativoAnuncio',
          model: 'CriativoAnuncio',
          relationType: 'belongsTo',
                  keyFrom: 'criativoAnuncioId',
          keyTo: 'id'
        },
      }
    }
  }
}
