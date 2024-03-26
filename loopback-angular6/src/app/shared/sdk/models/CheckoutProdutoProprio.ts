/* tslint:disable */
import {
  ProdutoProprio,
  PaginaVendaAberta
} from '../index';

declare var Object: any;
export interface CheckoutProdutoProprioInterface {
  "url"?: string;
  "preco"?: number;
  "ativo"?: number;
  "nome"?: string;
  "produtoProprioId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  paginaVendaAbertas?: PaginaVendaAberta[];
}

export class CheckoutProdutoProprio implements CheckoutProdutoProprioInterface {
  "url": string;
  "preco": number;
  "ativo": number;
  "nome": string;
  "produtoProprioId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  paginaVendaAbertas: PaginaVendaAberta[];
  constructor(data?: CheckoutProdutoProprioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CheckoutProdutoProprio`.
   */
  public static getModelName() {
    return "CheckoutProdutoProprio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CheckoutProdutoProprio for dynamic purposes.
  **/
  public static factory(data: CheckoutProdutoProprioInterface): CheckoutProdutoProprio{
    return new CheckoutProdutoProprio(data);
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
      name: 'CheckoutProdutoProprio',
      plural: 'CheckoutProdutoProprios',
      path: 'CheckoutProdutoProprios',
      idName: 'id',
      properties: {
        "url": {
          name: 'url',
          type: 'string'
        },
        "preco": {
          name: 'preco',
          type: 'number'
        },
        "ativo": {
          name: 'ativo',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
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
        paginaVendaAbertas: {
          name: 'paginaVendaAbertas',
          type: 'PaginaVendaAberta[]',
          model: 'PaginaVendaAberta',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'checkoutProdutoProprioId'
        },
      }
    }
  }
}
