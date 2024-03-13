/* tslint:disable */
import {
  ProdutoProprio
} from '../index';

declare var Object: any;
export interface AgendaCampanhaInterface {
  "data"?: Date;
  "descricao"?: string;
  "produtoProprioId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
}

export class AgendaCampanha implements AgendaCampanhaInterface {
  "data": Date;
  "descricao": string;
  "produtoProprioId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  constructor(data?: AgendaCampanhaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AgendaCampanha`.
   */
  public static getModelName() {
    return "AgendaCampanha";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AgendaCampanha for dynamic purposes.
  **/
  public static factory(data: AgendaCampanhaInterface): AgendaCampanha{
    return new AgendaCampanha(data);
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
      name: 'AgendaCampanha',
      plural: 'AgendaCampanhas',
      path: 'AgendaCampanhas',
      idName: 'id',
      properties: {
        "data": {
          name: 'data',
          type: 'Date'
        },
        "descricao": {
          name: 'descricao',
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
      }
    }
  }
}
