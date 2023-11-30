/* tslint:disable */
import {
  ProdutoAfiliadoHotmart
} from '../index';

declare var Object: any;
export interface LinkCheckoutInterface {
  "url"?: string;
  "titulo"?: string;
  "hotmartId"?: number;
  "id"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
}

export class LinkCheckout implements LinkCheckoutInterface {
  "url": string;
  "titulo": string;
  "hotmartId": number;
  "id": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  constructor(data?: LinkCheckoutInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `LinkCheckout`.
   */
  public static getModelName() {
    return "LinkCheckout";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of LinkCheckout for dynamic purposes.
  **/
  public static factory(data: LinkCheckoutInterface): LinkCheckout{
    return new LinkCheckout(data);
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
      name: 'LinkCheckout',
      plural: 'LinkCheckouts',
      path: 'LinkCheckouts',
      idName: 'id',
      properties: {
        "url": {
          name: 'url',
          type: 'string'
        },
        "titulo": {
          name: 'titulo',
          type: 'string'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "id": {
          name: 'id',
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
      }
    }
  }
}
