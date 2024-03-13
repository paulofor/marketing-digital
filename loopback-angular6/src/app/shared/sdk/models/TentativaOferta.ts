/* tslint:disable */
import {
  ProdutoProprio
} from '../index';

declare var Object: any;
export interface TentativaOfertaInterface {
  "data"?: Date;
  "produtoProprioId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
}

export class TentativaOferta implements TentativaOfertaInterface {
  "data": Date;
  "produtoProprioId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  constructor(data?: TentativaOfertaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TentativaOferta`.
   */
  public static getModelName() {
    return "TentativaOferta";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TentativaOferta for dynamic purposes.
  **/
  public static factory(data: TentativaOfertaInterface): TentativaOferta{
    return new TentativaOferta(data);
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
      name: 'TentativaOferta',
      plural: 'TentativaOferta',
      path: 'TentativaOferta',
      idName: 'id',
      properties: {
        "data": {
          name: 'data',
          type: 'Date'
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
