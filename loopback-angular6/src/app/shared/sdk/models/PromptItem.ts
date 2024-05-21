/* tslint:disable */
import {
  ProdutoProprio,
  EntregavelProduto,
  ItemConteudoProduto
} from '../index';

declare var Object: any;
export interface PromptItemInterface {
  "titulo"?: string;
  "prompt"?: string;
  "codigoReplace"?: string;
  "geraConteudo"?: number;
  "ordenacao"?: number;
  "textoInicioNegrito"?: string;
  "textoFinalNegrito"?: string;
  "produtoProprioId"?: number;
  "entregavelProdutoId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  entregavelProduto?: EntregavelProduto;
  itemConteudoProdutos?: ItemConteudoProduto[];
}

export class PromptItem implements PromptItemInterface {
  "titulo": string;
  "prompt": string;
  "codigoReplace": string;
  "geraConteudo": number;
  "ordenacao": number;
  "textoInicioNegrito": string;
  "textoFinalNegrito": string;
  "produtoProprioId": number;
  "entregavelProdutoId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  entregavelProduto: EntregavelProduto;
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
        "geraConteudo": {
          name: 'geraConteudo',
          type: 'number'
        },
        "ordenacao": {
          name: 'ordenacao',
          type: 'number'
        },
        "textoInicioNegrito": {
          name: 'textoInicioNegrito',
          type: 'string'
        },
        "textoFinalNegrito": {
          name: 'textoFinalNegrito',
          type: 'string'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
          type: 'number'
        },
        "entregavelProdutoId": {
          name: 'entregavelProdutoId',
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
        entregavelProduto: {
          name: 'entregavelProduto',
          type: 'EntregavelProduto',
          model: 'EntregavelProduto',
          relationType: 'belongsTo',
                  keyFrom: 'entregavelProdutoId',
          keyTo: 'id'
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
