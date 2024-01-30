/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  PublicoAlvoAdsPalavra
} from '../index';

declare var Object: any;
export interface ProdutoPublicoAdsPalavraInterface {
  "hotmartId"?: number;
  "publicoAlvoAdsPalavraId"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  publicoAlvoAdsPalavra?: PublicoAlvoAdsPalavra;
}

export class ProdutoPublicoAdsPalavra implements ProdutoPublicoAdsPalavraInterface {
  "hotmartId": number;
  "publicoAlvoAdsPalavraId": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  publicoAlvoAdsPalavra: PublicoAlvoAdsPalavra;
  constructor(data?: ProdutoPublicoAdsPalavraInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProdutoPublicoAdsPalavra`.
   */
  public static getModelName() {
    return "ProdutoPublicoAdsPalavra";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProdutoPublicoAdsPalavra for dynamic purposes.
  **/
  public static factory(data: ProdutoPublicoAdsPalavraInterface): ProdutoPublicoAdsPalavra{
    return new ProdutoPublicoAdsPalavra(data);
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
      name: 'ProdutoPublicoAdsPalavra',
      plural: 'ProdutoPublicoAdsPalavras',
      path: 'ProdutoPublicoAdsPalavras',
      idName: 'hotmartId',
      properties: {
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "publicoAlvoAdsPalavraId": {
          name: 'publicoAlvoAdsPalavraId',
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
        publicoAlvoAdsPalavra: {
          name: 'publicoAlvoAdsPalavra',
          type: 'PublicoAlvoAdsPalavra',
          model: 'PublicoAlvoAdsPalavra',
          relationType: 'belongsTo',
                  keyFrom: 'publicoAlvoAdsPalavraId',
          keyTo: 'id'
        },
      }
    }
  }
}
