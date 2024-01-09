/* tslint:disable */
import {
  ProdutoProprioVersao
} from '../index';

declare var Object: any;
export interface ProdutoProprioItemNivel1Interface {
  "posicao"?: number;
  "json"?: string;
  "nome"?: string;
  "produtoProprioVersaoId"?: number;
  "id"?: number;
  produtoProprioVersao?: ProdutoProprioVersao;
}

export class ProdutoProprioItemNivel1 implements ProdutoProprioItemNivel1Interface {
  "posicao": number;
  "json": string;
  "nome": string;
  "produtoProprioVersaoId": number;
  "id": number;
  produtoProprioVersao: ProdutoProprioVersao;
  constructor(data?: ProdutoProprioItemNivel1Interface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProdutoProprioItemNivel1`.
   */
  public static getModelName() {
    return "ProdutoProprioItemNivel1";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProdutoProprioItemNivel1 for dynamic purposes.
  **/
  public static factory(data: ProdutoProprioItemNivel1Interface): ProdutoProprioItemNivel1{
    return new ProdutoProprioItemNivel1(data);
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
      name: 'ProdutoProprioItemNivel1',
      plural: 'ProdutoProprioItemNivel1s',
      path: 'ProdutoProprioItemNivel1s',
      idName: 'id',
      properties: {
        "posicao": {
          name: 'posicao',
          type: 'number'
        },
        "json": {
          name: 'json',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "produtoProprioVersaoId": {
          name: 'produtoProprioVersaoId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        produtoProprioVersao: {
          name: 'produtoProprioVersao',
          type: 'ProdutoProprioVersao',
          model: 'ProdutoProprioVersao',
          relationType: 'belongsTo',
                  keyFrom: 'produtoProprioVersaoId',
          keyTo: 'id'
        },
      }
    }
  }
}
