/* tslint:disable */
import {
  PaginaVendaAberta,
  ImagemPaginaVenda
} from '../index';

declare var Object: any;
export interface AnuncioFacebookInterface {
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
  "idFacebook"?: string;
  "imagemInstagramReels"?: string;
  "imagemInstagramStories"?: string;
  "paginaVendaAbertaId"?: number;
  "imagemPaginaVendaId"?: number;
  "id"?: number;
  paginaVendaAberta?: PaginaVendaAberta;
  imagemPaginaVenda?: ImagemPaginaVenda;
}

export class AnuncioFacebook implements AnuncioFacebookInterface {
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
  "idFacebook": string;
  "imagemInstagramReels": string;
  "imagemInstagramStories": string;
  "paginaVendaAbertaId": number;
  "imagemPaginaVendaId": number;
  "id": number;
  paginaVendaAberta: PaginaVendaAberta;
  imagemPaginaVenda: ImagemPaginaVenda;
  constructor(data?: AnuncioFacebookInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnuncioFacebook`.
   */
  public static getModelName() {
    return "AnuncioFacebook";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnuncioFacebook for dynamic purposes.
  **/
  public static factory(data: AnuncioFacebookInterface): AnuncioFacebook{
    return new AnuncioFacebook(data);
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
      name: 'AnuncioFacebook',
      plural: 'AnuncioFacebooks',
      path: 'AnuncioFacebooks',
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
        "idFacebook": {
          name: 'idFacebook',
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
        "paginaVendaAbertaId": {
          name: 'paginaVendaAbertaId',
          type: 'number'
        },
        "imagemPaginaVendaId": {
          name: 'imagemPaginaVendaId',
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
        imagemPaginaVenda: {
          name: 'imagemPaginaVenda',
          type: 'ImagemPaginaVenda',
          model: 'ImagemPaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'imagemPaginaVendaId',
          keyTo: 'id'
        },
      }
    }
  }
}
