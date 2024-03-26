/* tslint:disable */
import {
  ProdutoProprio,
  ConteudoProdutoKiwify,
  EntregavelPrompt,
  PromptImagemConteudo
} from '../index';

declare var Object: any;
export interface EntregavelProdutoInterface {
  "nome"?: string;
  "tipo"?: string;
  "produtoProprioId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  conteudoProdutoKiwifys?: ConteudoProdutoKiwify[];
  entregavelPrompts?: EntregavelPrompt[];
  promptImagemConteudos?: PromptImagemConteudo[];
}

export class EntregavelProduto implements EntregavelProdutoInterface {
  "nome": string;
  "tipo": string;
  "produtoProprioId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  conteudoProdutoKiwifys: ConteudoProdutoKiwify[];
  entregavelPrompts: EntregavelPrompt[];
  promptImagemConteudos: PromptImagemConteudo[];
  constructor(data?: EntregavelProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EntregavelProduto`.
   */
  public static getModelName() {
    return "EntregavelProduto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EntregavelProduto for dynamic purposes.
  **/
  public static factory(data: EntregavelProdutoInterface): EntregavelProduto{
    return new EntregavelProduto(data);
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
      name: 'EntregavelProduto',
      plural: 'EntregavelProdutos',
      path: 'EntregavelProdutos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "tipo": {
          name: 'tipo',
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
        conteudoProdutoKiwifys: {
          name: 'conteudoProdutoKiwifys',
          type: 'ConteudoProdutoKiwify[]',
          model: 'ConteudoProdutoKiwify',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'entregavelProdutoId'
        },
        entregavelPrompts: {
          name: 'entregavelPrompts',
          type: 'EntregavelPrompt[]',
          model: 'EntregavelPrompt',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'entregavelProdutoId'
        },
        promptImagemConteudos: {
          name: 'promptImagemConteudos',
          type: 'PromptImagemConteudo[]',
          model: 'PromptImagemConteudo',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'entregavelProdutoId'
        },
      }
    }
  }
}
