/* tslint:disable */
import {
  ProdutoProprio,
  EntregavelPrompt,
  ItemConteudoProduto
} from '../index';

declare var Object: any;
export interface PromptItemInterface {
  "titulo"?: string;
  "prompt"?: string;
  "codigoReplace"?: string;
  "produtoProprioId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  entregavelPrompts?: EntregavelPrompt[];
  itemConteudoProdutos?: ItemConteudoProduto[];
}

export class PromptItem implements PromptItemInterface {
  "titulo": string;
  "prompt": string;
  "codigoReplace": string;
  "produtoProprioId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  entregavelPrompts: EntregavelPrompt[];
  itemConteudoProdutos: ItemConteudoProduto[];
  constructor(data?: PromptItemInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PromptItem`.
   */
  public static getModelName() {
    return "PromptItem";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PromptItem for dynamic purposes.
  **/
  public static factory(data: PromptItemInterface): PromptItem{
    return new PromptItem(data);
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
      name: 'PromptItem',
      plural: 'PromptItems',
      path: 'PromptItems',
      idName: 'id',
      properties: {
        "titulo": {
          name: 'titulo',
          type: 'string'
        },
        "prompt": {
          name: 'prompt',
          type: 'string'
        },
        "codigoReplace": {
          name: 'codigoReplace',
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
        entregavelPrompts: {
          name: 'entregavelPrompts',
          type: 'EntregavelPrompt[]',
          model: 'EntregavelPrompt',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'promptItemId'
        },
        itemConteudoProdutos: {
          name: 'itemConteudoProdutos',
          type: 'ItemConteudoProduto[]',
          model: 'ItemConteudoProduto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'promptItemId'
        },
      }
    }
  }
}
