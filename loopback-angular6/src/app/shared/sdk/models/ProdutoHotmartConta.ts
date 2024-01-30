/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  ContaGoogle
} from '../index';

declare var Object: any;
export interface ProdutoHotmartContaInterface {
  "hotmartId"?: number;
  "contaGoogleId"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  contaGoogle?: ContaGoogle;
}

export class ProdutoHotmartConta implements ProdutoHotmartContaInterface {
  "hotmartId": number;
  "contaGoogleId": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  contaGoogle: ContaGoogle;
  constructor(data?: ProdutoHotmartContaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProdutoHotmartConta`.
   */
  public static getModelName() {
    return "ProdutoHotmartConta";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProdutoHotmartConta for dynamic purposes.
  **/
  public static factory(data: ProdutoHotmartContaInterface): ProdutoHotmartConta{
    return new ProdutoHotmartConta(data);
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
      name: 'ProdutoHotmartConta',
      plural: 'ProdutoHotmartConta',
      path: 'ProdutoHotmartConta',
      idName: 'hotmartId',
      properties: {
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
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
