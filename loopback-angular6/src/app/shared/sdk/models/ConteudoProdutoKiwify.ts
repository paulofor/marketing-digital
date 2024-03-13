/* tslint:disable */
import {
  ModuloProdutoKiwify
} from '../index';

declare var Object: any;
export interface ConteudoProdutoKiwifyInterface {
  "texto"?: string;
  "titulo"?: string;
  "ordenacao"?: number;
  "moduloProdutoKiwifyId"?: number;
  "id"?: number;
  moduloProdutoKiwify?: ModuloProdutoKiwify;
}

export class ConteudoProdutoKiwify implements ConteudoProdutoKiwifyInterface {
  "texto": string;
  "titulo": string;
  "ordenacao": number;
  "moduloProdutoKiwifyId": number;
  "id": number;
  moduloProdutoKiwify: ModuloProdutoKiwify;
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
        "texto": {
          name: 'texto',
          type: 'string'
        },
        "titulo": {
          name: 'titulo',
          type: 'string'
        },
        "ordenacao": {
          name: 'ordenacao',
          type: 'number'
        },
        "moduloProdutoKiwifyId": {
          name: 'moduloProdutoKiwifyId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        moduloProdutoKiwify: {
          name: 'moduloProdutoKiwify',
          type: 'ModuloProdutoKiwify',
          model: 'ModuloProdutoKiwify',
          relationType: 'belongsTo',
                  keyFrom: 'moduloProdutoKiwifyId',
          keyTo: 'id'
        },
      }
    }
  }
}
