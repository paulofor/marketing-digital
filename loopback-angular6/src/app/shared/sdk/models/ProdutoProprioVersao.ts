/* tslint:disable */
import {
  ProdutoProprio,
  ProdutoProprioItemNivel1
} from '../index';

declare var Object: any;
export interface ProdutoProprioVersaoInterface {
  "numero"?: number;
  "correnteProducao"?: number;
  "produtoProprioId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  produtoProprioItemNivel1s?: ProdutoProprioItemNivel1[];
}

export class ProdutoProprioVersao implements ProdutoProprioVersaoInterface {
  "numero": number;
  "correnteProducao": number;
  "produtoProprioId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  produtoProprioItemNivel1s: ProdutoProprioItemNivel1[];
  constructor(data?: ProdutoProprioVersaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProdutoProprioVersao`.
   */
  public static getModelName() {
    return "ProdutoProprioVersao";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProdutoProprioVersao for dynamic purposes.
  **/
  public static factory(data: ProdutoProprioVersaoInterface): ProdutoProprioVersao{
    return new ProdutoProprioVersao(data);
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
      name: 'ProdutoProprioVersao',
      plural: 'ProdutoProprioVersaos',
      path: 'ProdutoProprioVersaos',
      idName: 'id',
      properties: {
        "numero": {
          name: 'numero',
          type: 'number'
        },
        "correnteProducao": {
          name: 'correnteProducao',
          type: 'number'
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
        produtoProprioItemNivel1s: {
          name: 'produtoProprioItemNivel1s',
          type: 'ProdutoProprioItemNivel1[]',
          model: 'ProdutoProprioItemNivel1',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioVersaoId'
        },
      }
    }
  }
}
