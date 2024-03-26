/* tslint:disable */
import {
  EntregavelProduto,
  ImagemConteudo,
  ItemConteudoProduto
} from '../index';

declare var Object: any;
export interface ConteudoProdutoKiwifyInterface {
  "nome"?: string;
  "ordenacao"?: number;
  "entregavelProdutoId"?: number;
  "id"?: number;
  entregavelProduto?: EntregavelProduto;
  imagemConteudos?: ImagemConteudo[];
  itemConteudoProdutos?: ItemConteudoProduto[];
}

export class ConteudoProdutoKiwify implements ConteudoProdutoKiwifyInterface {
  "nome": string;
  "ordenacao": number;
  "entregavelProdutoId": number;
  "id": number;
  entregavelProduto: EntregavelProduto;
  imagemConteudos: ImagemConteudo[];
  itemConteudoProdutos: ItemConteudoProduto[];
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
      }
    }
  }
}
