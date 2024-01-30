/* tslint:disable */
import {
  ContaGoogle,
  ProdutoAfiliadoHotmart
} from '../index';

declare var Object: any;
export interface PixelProdutoHotmartContaInterface {
  "fase"?: number;
  "codigo1"?: string;
  "codigo2"?: string;
  "nome"?: string;
  "hotmartId"?: number;
  "contaGoogleId"?: number;
  "resourceName"?: string;
  "resourceNameSegmento"?: string;
  "nomeSegmento"?: string;
  "id"?: number;
  contaGoogle?: ContaGoogle;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
}

export class PixelProdutoHotmartConta implements PixelProdutoHotmartContaInterface {
  "fase": number;
  "codigo1": string;
  "codigo2": string;
  "nome": string;
  "hotmartId": number;
  "contaGoogleId": number;
  "resourceName": string;
  "resourceNameSegmento": string;
  "nomeSegmento": string;
  "id": number;
  contaGoogle: ContaGoogle;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  constructor(data?: PixelProdutoHotmartContaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PixelProdutoHotmartConta`.
   */
  public static getModelName() {
    return "PixelProdutoHotmartConta";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PixelProdutoHotmartConta for dynamic purposes.
  **/
  public static factory(data: PixelProdutoHotmartContaInterface): PixelProdutoHotmartConta{
    return new PixelProdutoHotmartConta(data);
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
      name: 'PixelProdutoHotmartConta',
      plural: 'PixelProdutoHotmartConta',
      path: 'PixelProdutoHotmartConta',
      idName: 'id',
      properties: {
        "fase": {
          name: 'fase',
          type: 'number'
        },
        "codigo1": {
          name: 'codigo1',
          type: 'string'
        },
        "codigo2": {
          name: 'codigo2',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
          type: 'number'
        },
        "resourceName": {
          name: 'resourceName',
          type: 'string'
        },
        "resourceNameSegmento": {
          name: 'resourceNameSegmento',
          type: 'string'
        },
        "nomeSegmento": {
          name: 'nomeSegmento',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        contaGoogle: {
          name: 'contaGoogle',
          type: 'ContaGoogle',
          model: 'ContaGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'contaGoogleId',
          keyTo: 'id'
        },
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
