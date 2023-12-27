/* tslint:disable */
import {
  VisitaProdutoHotmart
} from '../index';

declare var Object: any;
export interface ProdutoAfiliadoHotmartPendenteInterface {
  "hotmartId"?: number;
  visitaProdutoHotmarts?: VisitaProdutoHotmart[];
}

export class ProdutoAfiliadoHotmartPendente implements ProdutoAfiliadoHotmartPendenteInterface {
  "hotmartId": number;
  visitaProdutoHotmarts: VisitaProdutoHotmart[];
  constructor(data?: ProdutoAfiliadoHotmartPendenteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProdutoAfiliadoHotmartPendente`.
   */
  public static getModelName() {
    return "ProdutoAfiliadoHotmartPendente";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProdutoAfiliadoHotmartPendente for dynamic purposes.
  **/
  public static factory(data: ProdutoAfiliadoHotmartPendenteInterface): ProdutoAfiliadoHotmartPendente{
    return new ProdutoAfiliadoHotmartPendente(data);
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
      name: 'ProdutoAfiliadoHotmartPendente',
      plural: 'ProdutoAfiliadoHotmartPendentes',
      path: 'ProdutoAfiliadoHotmartPendentes',
      idName: 'hotmartId',
      properties: {
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
      },
      relations: {
        visitaProdutoHotmarts: {
          name: 'visitaProdutoHotmarts',
          type: 'VisitaProdutoHotmart[]',
          model: 'VisitaProdutoHotmart',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
      }
    }
  }
}
