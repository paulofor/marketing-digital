/* tslint:disable */
import {
  ProdutoProprio,
  ConteudoProdutoKiwify
} from '../index';

declare var Object: any;
export interface ModuloProdutoKiwifyInterface {
  "nome"?: string;
  "produtoProprioId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  conteudoProdutoKiwifys?: ConteudoProdutoKiwify[];
}

export class ModuloProdutoKiwify implements ModuloProdutoKiwifyInterface {
  "nome": string;
  "produtoProprioId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  conteudoProdutoKiwifys: ConteudoProdutoKiwify[];
  constructor(data?: ModuloProdutoKiwifyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ModuloProdutoKiwify`.
   */
  public static getModelName() {
    return "ModuloProdutoKiwify";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ModuloProdutoKiwify for dynamic purposes.
  **/
  public static factory(data: ModuloProdutoKiwifyInterface): ModuloProdutoKiwify{
    return new ModuloProdutoKiwify(data);
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
      name: 'ModuloProdutoKiwify',
      plural: 'ModuloProdutoKiwifies',
      path: 'ModuloProdutoKiwifies',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
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
          keyTo: 'moduloProdutoKiwifyId'
        },
      }
    }
  }
}
