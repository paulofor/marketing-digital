/* tslint:disable */
import {
  ProdutoProprio,
  EntregavelProduto,
  ImagemConteudo,
  ItemConteudoProduto,
  ConteudoEntregavel
} from '../index';

declare var Object: any;
export interface ConteudoProdutoKiwifyInterface {
  "nome"?: string;
  "ordenacao"?: number;
  "geraImagem"?: number;
  "promptIndividual1"?: string;
  "promptIndividual2"?: string;
  "promptIndividual3"?: string;
  "numeroBonus"?: number;
  "entregavelProdutoId"?: number;
  "geraTexto"?: number;
  "subNome"?: string;
  "produtoProprioId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  entregavelProduto?: EntregavelProduto;
  imagemConteudos?: ImagemConteudo[];
  itemConteudoProdutos?: ItemConteudoProduto[];
  conteudoEntregavels?: ConteudoEntregavel[];
}

export class ConteudoProdutoKiwify implements ConteudoProdutoKiwifyInterface {
  "nome": string;
  "ordenacao": number;
  "geraImagem": number;
  "promptIndividual1": string;
  "promptIndividual2": string;
  "promptIndividual3": string;
  "numeroBonus": number;
  "entregavelProdutoId": number;
  "geraTexto": number;
  "subNome": string;
  "produtoProprioId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  entregavelProduto: EntregavelProduto;
  imagemConteudos: ImagemConteudo[];
  itemConteudoProdutos: ItemConteudoProduto[];
  conteudoEntregavels: ConteudoEntregavel[];
  constructor(data?: ConteudoProdutoKiwifyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ConteudoProdutoKiwify`.
   */
  public static getModelName() {
    return "ConteudoProdutoKiwify";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ConteudoProdutoKiwify for dynamic purposes.
  **/
  public static factory(data: ConteudoProdutoKiwifyInterface): ConteudoProdutoKiwify{
    return new ConteudoProdutoKiwify(data);
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
      name: 'ConteudoProdutoKiwify',
      plural: 'ConteudoProdutoKiwifies',
      path: 'ConteudoProdutoKiwifies',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "ordenacao": {
          name: 'ordenacao',
          type: 'number'
        },
        "geraImagem": {
          name: 'geraImagem',
          type: 'number'
        },
        "promptIndividual1": {
          name: 'promptIndividual1',
          type: 'string'
        },
        "promptIndividual2": {
          name: 'promptIndividual2',
          type: 'string'
        },
        "promptIndividual3": {
          name: 'promptIndividual3',
          type: 'string'
        },
        "numeroBonus": {
          name: 'numeroBonus',
          type: 'number'
        },
        "entregavelProdutoId": {
          name: 'entregavelProdutoId',
          type: 'number'
        },
        "geraTexto": {
          name: 'geraTexto',
          type: 'number'
        },
        "subNome": {
          name: 'subNome',
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
        entregavelProduto: {
          name: 'entregavelProduto',
          type: 'EntregavelProduto',
          model: 'EntregavelProduto',
          relationType: 'belongsTo',
                  keyFrom: 'entregavelProdutoId',
          keyTo: 'id'
        },
        imagemConteudos: {
          name: 'imagemConteudos',
          type: 'ImagemConteudo[]',
          model: 'ImagemConteudo',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'conteudoProdutoKiwifyId'
        },
        itemConteudoProdutos: {
          name: 'itemConteudoProdutos',
          type: 'ItemConteudoProduto[]',
          model: 'ItemConteudoProduto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'conteudoProdutoKiwifyId'
        },
        conteudoEntregavels: {
          name: 'conteudoEntregavels',
          type: 'ConteudoEntregavel[]',
          model: 'ConteudoEntregavel',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'conteudoProdutoKiwifyId'
        },
      }
    }
  }
}
