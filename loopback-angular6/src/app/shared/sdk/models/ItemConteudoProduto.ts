/* tslint:disable */
import {
  ConteudoProdutoKiwify,
  PromptItem
} from '../index';

declare var Object: any;
export interface ItemConteudoProdutoInterface {
  "titulo"?: string;
  "texto"?: string;
  "ordenacao"?: number;
  "conteudoProdutoKiwifyId"?: number;
  "promptItemId"?: number;
  "id"?: number;
  conteudoProdutoKiwify?: ConteudoProdutoKiwify;
  promptItem?: PromptItem;
}

export class ItemConteudoProduto implements ItemConteudoProdutoInterface {
  "titulo": string;
  "texto": string;
  "ordenacao": number;
  "conteudoProdutoKiwifyId": number;
  "promptItemId": number;
  "id": number;
  conteudoProdutoKiwify: ConteudoProdutoKiwify;
  promptItem: PromptItem;
  constructor(data?: ItemConteudoProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ItemConteudoProduto`.
   */
  public static getModelName() {
    return "ItemConteudoProduto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ItemConteudoProduto for dynamic purposes.
  **/
  public static factory(data: ItemConteudoProdutoInterface): ItemConteudoProduto{
    return new ItemConteudoProduto(data);
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
      name: 'ItemConteudoProduto',
      plural: 'ItemConteudoProdutos',
      path: 'ItemConteudoProdutos',
      idName: 'id',
      properties: {
        "titulo": {
          name: 'titulo',
          type: 'string'
        },
        "texto": {
          name: 'texto',
          type: 'string'
        },
        "ordenacao": {
          name: 'ordenacao',
          type: 'number'
        },
        "conteudoProdutoKiwifyId": {
          name: 'conteudoProdutoKiwifyId',
          type: 'number'
        },
        "promptItemId": {
          name: 'promptItemId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        conteudoProdutoKiwify: {
          name: 'conteudoProdutoKiwify',
          type: 'ConteudoProdutoKiwify',
          model: 'ConteudoProdutoKiwify',
          relationType: 'belongsTo',
                  keyFrom: 'conteudoProdutoKiwifyId',
          keyTo: 'id'
        },
        promptItem: {
          name: 'promptItem',
          type: 'PromptItem',
          model: 'PromptItem',
          relationType: 'belongsTo',
                  keyFrom: 'promptItemId',
          keyTo: 'id'
        },
      }
    }
  }
}
