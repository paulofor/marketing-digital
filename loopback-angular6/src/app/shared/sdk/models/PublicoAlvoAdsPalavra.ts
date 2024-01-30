/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  ContaPublicoAlvoAdsPalavra,
  ProdutoPublicoAdsPalavra
} from '../index';

declare var Object: any;
export interface PublicoAlvoAdsPalavraInterface {
  "listaPalavra"?: string;
  "nome"?: string;
  "id"?: number;
  "hotmartId"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  contaPublicoAlvoAdsPalavras?: ContaPublicoAlvoAdsPalavra[];
  produtoPublicoAdsPalavras?: ProdutoPublicoAdsPalavra[];
}

export class PublicoAlvoAdsPalavra implements PublicoAlvoAdsPalavraInterface {
  "listaPalavra": string;
  "nome": string;
  "id": number;
  "hotmartId": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  contaPublicoAlvoAdsPalavras: ContaPublicoAlvoAdsPalavra[];
  produtoPublicoAdsPalavras: ProdutoPublicoAdsPalavra[];
  constructor(data?: PublicoAlvoAdsPalavraInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PublicoAlvoAdsPalavra`.
   */
  public static getModelName() {
    return "PublicoAlvoAdsPalavra";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PublicoAlvoAdsPalavra for dynamic purposes.
  **/
  public static factory(data: PublicoAlvoAdsPalavraInterface): PublicoAlvoAdsPalavra{
    return new PublicoAlvoAdsPalavra(data);
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
      name: 'PublicoAlvoAdsPalavra',
      plural: 'PublicoAlvoAdsPalavras',
      path: 'PublicoAlvoAdsPalavras',
      idName: 'id',
      properties: {
        "listaPalavra": {
          name: 'listaPalavra',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
      },
      relations: {
        produtoAfiliadoHotmart: {
          name: 'produtoAfiliadoHotmart',
          type: 'ProdutoAfiliadoHotmart',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'belongsTo',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        contaPublicoAlvoAdsPalavras: {
          name: 'contaPublicoAlvoAdsPalavras',
          type: 'ContaPublicoAlvoAdsPalavra[]',
          model: 'ContaPublicoAlvoAdsPalavra',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'publicoAlvoAdsPalavraId'
        },
        produtoPublicoAdsPalavras: {
          name: 'produtoPublicoAdsPalavras',
          type: 'ProdutoPublicoAdsPalavra[]',
          model: 'ProdutoPublicoAdsPalavra',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'publicoAlvoAdsPalavraId'
        },
      }
    }
  }
}
