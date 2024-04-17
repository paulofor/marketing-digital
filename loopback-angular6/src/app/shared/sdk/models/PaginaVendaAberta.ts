/* tslint:disable */
import {
  ProdutoProprio,
  EstruturaPaginaVendaAberta,
  PaginaImplementacao,
  CheckoutProdutoProprio,
  MetaAdsAnuncio
} from '../index';

declare var Object: any;
export interface PaginaVendaAbertaInterface {
  "nome"?: string;
  "codigoHexa"?: string;
  "urlFinal"?: string;
  "atualiza"?: number;
  "urlImagemCompleta"?: string;
  "geraImagemCompleta"?: number;
  "checkoutProdutoProprioId"?: number;
  "produtoProprioId"?: number;
  "estruturaPaginaVendaAbertaId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  estruturaPaginaVendaAberta?: EstruturaPaginaVendaAberta;
  paginaImplementacaos?: PaginaImplementacao[];
  checkoutProdutoProprio?: CheckoutProdutoProprio;
  metaAdsAnuncios?: MetaAdsAnuncio[];
}

export class PaginaVendaAberta implements PaginaVendaAbertaInterface {
  "nome": string;
  "codigoHexa": string;
  "urlFinal": string;
  "atualiza": number;
  "urlImagemCompleta": string;
  "geraImagemCompleta": number;
  "checkoutProdutoProprioId": number;
  "produtoProprioId": number;
  "estruturaPaginaVendaAbertaId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  estruturaPaginaVendaAberta: EstruturaPaginaVendaAberta;
  paginaImplementacaos: PaginaImplementacao[];
  checkoutProdutoProprio: CheckoutProdutoProprio;
  metaAdsAnuncios: MetaAdsAnuncio[];
  constructor(data?: PaginaVendaAbertaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaginaVendaAberta`.
   */
  public static getModelName() {
    return "PaginaVendaAberta";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaginaVendaAberta for dynamic purposes.
  **/
  public static factory(data: PaginaVendaAbertaInterface): PaginaVendaAberta{
    return new PaginaVendaAberta(data);
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
      name: 'PaginaVendaAberta',
      plural: 'PaginaVendaAberta',
      path: 'PaginaVendaAberta',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "codigoHexa": {
          name: 'codigoHexa',
          type: 'string'
        },
        "urlFinal": {
          name: 'urlFinal',
          type: 'string'
        },
        "atualiza": {
          name: 'atualiza',
          type: 'number'
        },
        "urlImagemCompleta": {
          name: 'urlImagemCompleta',
          type: 'string'
        },
        "geraImagemCompleta": {
          name: 'geraImagemCompleta',
          type: 'number'
        },
        "checkoutProdutoProprioId": {
          name: 'checkoutProdutoProprioId',
          type: 'number'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
          type: 'number'
        },
        "estruturaPaginaVendaAbertaId": {
          name: 'estruturaPaginaVendaAbertaId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        produtoProprio: {
          name: 'produtoProprio',
          type: 'ProdutoProprio',
          model: 'ProdutoProprio',
          relationType: 'belongsTo',
                  keyFrom: 'produtoProprioId',
          keyTo: 'id'
        },
        estruturaPaginaVendaAberta: {
          name: 'estruturaPaginaVendaAberta',
          type: 'EstruturaPaginaVendaAberta',
          model: 'EstruturaPaginaVendaAberta',
          relationType: 'belongsTo',
                  keyFrom: 'estruturaPaginaVendaAbertaId',
          keyTo: 'id'
        },
        paginaImplementacaos: {
          name: 'paginaImplementacaos',
          type: 'PaginaImplementacao[]',
          model: 'PaginaImplementacao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaVendaAbertaId'
        },
        checkoutProdutoProprio: {
          name: 'checkoutProdutoProprio',
          type: 'CheckoutProdutoProprio',
          model: 'CheckoutProdutoProprio',
          relationType: 'belongsTo',
                  keyFrom: 'checkoutProdutoProprioId',
          keyTo: 'id'
        },
        metaAdsAnuncios: {
          name: 'metaAdsAnuncios',
          type: 'MetaAdsAnuncio[]',
          model: 'MetaAdsAnuncio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaVendaAbertaId'
        },
      }
    }
  }
}
