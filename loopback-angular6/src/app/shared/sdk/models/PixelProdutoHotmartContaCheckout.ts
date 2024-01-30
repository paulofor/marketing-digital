/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  ContaGoogle
} from '../index';

declare var Object: any;
export interface PixelProdutoHotmartContaCheckoutInterface {
  "codigo1"?: string;
  "codigo2"?: string;
  "instalado"?: number;
  "nome"?: string;
  "contaGoogleId"?: number;
  "id"?: number;
  "hotmartId"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  contaGoogle?: ContaGoogle;
}

export class PixelProdutoHotmartContaCheckout implements PixelProdutoHotmartContaCheckoutInterface {
  "codigo1": string;
  "codigo2": string;
  "instalado": number;
  "nome": string;
  "contaGoogleId": number;
  "id": number;
  "hotmartId": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  contaGoogle: ContaGoogle;
  constructor(data?: PixelProdutoHotmartContaCheckoutInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PixelProdutoHotmartContaCheckout`.
   */
  public static getModelName() {
    return "PixelProdutoHotmartContaCheckout";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PixelProdutoHotmartContaCheckout for dynamic purposes.
  **/
  public static factory(data: PixelProdutoHotmartContaCheckoutInterface): PixelProdutoHotmartContaCheckout{
    return new PixelProdutoHotmartContaCheckout(data);
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
      name: 'PixelProdutoHotmartContaCheckout',
      plural: 'PixelProdutoHotmartContaCheckouts',
      path: 'PixelProdutoHotmartContaCheckouts',
      idName: 'id',
      properties: {
        "codigo1": {
          name: 'codigo1',
          type: 'string'
        },
        "codigo2": {
          name: 'codigo2',
          type: 'string'
        },
        "instalado": {
          name: 'instalado',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
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
        contaGoogle: {
          name: 'contaGoogle',
          type: 'ContaGoogle',
          model: 'ContaGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'contaGoogleId',
          keyTo: 'id'
        },
      }
    }
  }
}
