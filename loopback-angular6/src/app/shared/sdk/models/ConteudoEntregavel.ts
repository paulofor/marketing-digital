/* tslint:disable */
import {
  EntregavelProduto,
  ConteudoProdutoKiwify
} from '../index';

declare var Object: any;
export interface ConteudoEntregavelInterface {
  "entregavelProdutoId"?: number;
  "conteudoProdutoKiwifyId"?: number;
  "ordenacao"?: number;
  "id"?: number;
  entregavelProduto?: EntregavelProduto;
  conteudoProdutoKiwify?: ConteudoProdutoKiwify;
}

export class ConteudoEntregavel implements ConteudoEntregavelInterface {
  "entregavelProdutoId": number;
  "conteudoProdutoKiwifyId": number;
  "ordenacao": number;
  "id": number;
  entregavelProduto: EntregavelProduto;
  conteudoProdutoKiwify: ConteudoProdutoKiwify;
  constructor(data?: ConteudoEntregavelInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ConteudoEntregavel`.
   */
  public static getModelName() {
    return "ConteudoEntregavel";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ConteudoEntregavel for dynamic purposes.
  **/
  public static factory(data: ConteudoEntregavelInterface): ConteudoEntregavel{
    return new ConteudoEntregavel(data);
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
      name: 'ConteudoEntregavel',
      plural: 'ConteudoEntregavels',
      path: 'ConteudoEntregavels',
      idName: 'id',
      properties: {
        "entregavelProdutoId": {
          name: 'entregavelProdutoId',
          type: 'number'
        },
        "conteudoProdutoKiwifyId": {
          name: 'conteudoProdutoKiwifyId',
          type: 'number'
        },
        "ordenacao": {
          name: 'ordenacao',
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
        conteudoProdutoKiwify: {
          name: 'conteudoProdutoKiwify',
          type: 'ConteudoProdutoKiwify',
          model: 'ConteudoProdutoKiwify',
          relationType: 'belongsTo',
                  keyFrom: 'conteudoProdutoKiwifyId',
          keyTo: 'id'
        },
      }
    }
  }
}
