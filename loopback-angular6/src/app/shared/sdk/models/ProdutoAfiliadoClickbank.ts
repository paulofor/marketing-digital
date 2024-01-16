/* tslint:disable */
import {
  VersaoPaginaVenda
} from '../index';

declare var Object: any;
export interface ProdutoAfiliadoClickbankInterface {
  "id"?: number;
  versaoPaginaVendas?: VersaoPaginaVenda[];
}

export class ProdutoAfiliadoClickbank implements ProdutoAfiliadoClickbankInterface {
  "id": number;
  versaoPaginaVendas: VersaoPaginaVenda[];
  constructor(data?: ProdutoAfiliadoClickbankInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProdutoAfiliadoClickbank`.
   */
  public static getModelName() {
    return "ProdutoAfiliadoClickbank";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProdutoAfiliadoClickbank for dynamic purposes.
  **/
  public static factory(data: ProdutoAfiliadoClickbankInterface): ProdutoAfiliadoClickbank{
    return new ProdutoAfiliadoClickbank(data);
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
      name: 'ProdutoAfiliadoClickbank',
      plural: 'ProdutoAfiliadoClickbanks',
      path: 'ProdutoAfiliadoClickbanks',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        versaoPaginaVendas: {
          name: 'versaoPaginaVendas',
          type: 'VersaoPaginaVenda[]',
          model: 'VersaoPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoAfiliadoClickbankId'
        },
      }
    }
  }
}
