/* tslint:disable */
import {
  ProdutoProprio,
  ConteudoProdutoKiwify,
  PromptItem,
  PromptImagemConteudo,
  ConteudoEntregavel,
  WhatsappGrupoPadraoMensagem
} from '../index';

declare var Object: any;
export interface EntregavelProdutoInterface {
  "nome"?: string;
  "tipo"?: string;
  "promptLista"?: string;
  "geraLista"?: number;
  "geraImagemConteudo"?: number;
  "diretorioGravacaoLocal"?: string;
  "geraEbook"?: number;
  "produtoProprioId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  conteudoProdutoKiwifys?: ConteudoProdutoKiwify[];
  promptItems?: PromptItem[];
  promptImagemConteudos?: PromptImagemConteudo[];
  conteudoEntregavels?: ConteudoEntregavel[];
  whatsappGrupoPadraoMensagems?: WhatsappGrupoPadraoMensagem[];
}

export class EntregavelProduto implements EntregavelProdutoInterface {
  "nome": string;
  "tipo": string;
  "promptLista": string;
  "geraLista": number;
  "geraImagemConteudo": number;
  "diretorioGravacaoLocal": string;
  "geraEbook": number;
  "produtoProprioId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  conteudoProdutoKiwifys: ConteudoProdutoKiwify[];
  promptItems: PromptItem[];
  promptImagemConteudos: PromptImagemConteudo[];
  conteudoEntregavels: ConteudoEntregavel[];
  whatsappGrupoPadraoMensagems: WhatsappGrupoPadraoMensagem[];
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
        "promptLista": {
          name: 'promptLista',
          type: 'string'
        },
        "geraLista": {
          name: 'geraLista',
          type: 'number'
        },
        "geraImagemConteudo": {
          name: 'geraImagemConteudo',
          type: 'number'
        },
        "diretorioGravacaoLocal": {
          name: 'diretorioGravacaoLocal',
          type: 'string'
        },
        "geraEbook": {
          name: 'geraEbook',
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
        conteudoProdutoKiwifys: {
          name: 'conteudoProdutoKiwifys',
          type: 'ConteudoProdutoKiwify[]',
          model: 'ConteudoProdutoKiwify',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'entregavelProdutoId'
        },
        promptItems: {
          name: 'promptItems',
          type: 'PromptItem[]',
          model: 'PromptItem',
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
        conteudoEntregavels: {
          name: 'conteudoEntregavels',
          type: 'ConteudoEntregavel[]',
          model: 'ConteudoEntregavel',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'entregavelProdutoId'
        },
        whatsappGrupoPadraoMensagems: {
          name: 'whatsappGrupoPadraoMensagems',
          type: 'WhatsappGrupoPadraoMensagem[]',
          model: 'WhatsappGrupoPadraoMensagem',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'entregavelProdutoId'
        },
      }
    }
  }
}
