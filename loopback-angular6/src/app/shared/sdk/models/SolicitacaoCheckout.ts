/* tslint:disable */
import {
  ProdutoAfiliadoHotmart
} from '../index';

declare var Object: any;
export interface SolicitacaoCheckoutInterface {
  "dataHora"?: Date;
  "visitante"?: string;
  "hotmartId"?: number;
  "id"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
}

export class SolicitacaoCheckout implements SolicitacaoCheckoutInterface {
  "dataHora": Date;
  "visitante": string;
  "hotmartId": number;
  "id": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  constructor(data?: SolicitacaoCheckoutInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SolicitacaoCheckout`.
   */
  public static getModelName() {
    return "SolicitacaoCheckout";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SolicitacaoCheckout for dynamic purposes.
  **/
  public static factory(data: SolicitacaoCheckoutInterface): SolicitacaoCheckout{
    return new SolicitacaoCheckout(data);
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
      name: 'SolicitacaoCheckout',
      plural: 'SolicitacaoCheckouts',
      path: 'SolicitacaoCheckouts',
      idName: 'id',
      properties: {
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "visitante": {
          name: 'visitante',
          type: 'string'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "id": {
          name: 'id',
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
      }
    }
  }
}
