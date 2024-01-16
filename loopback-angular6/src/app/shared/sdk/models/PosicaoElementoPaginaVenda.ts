/* tslint:disable */
import {
  ModeloPaginaVenda,
  ElementoModeloPaginaVenda
} from '../index';

declare var Object: any;
export interface PosicaoElementoPaginaVendaInterface {
  "modeloPaginaVendaId"?: number;
  "elementoModeloPaginaVendaId"?: number;
  "posicao"?: number;
  modeloPaginaVenda?: ModeloPaginaVenda;
  elementoModeloPaginaVenda?: ElementoModeloPaginaVenda;
}

export class PosicaoElementoPaginaVenda implements PosicaoElementoPaginaVendaInterface {
  "modeloPaginaVendaId": number;
  "elementoModeloPaginaVendaId": number;
  "posicao": number;
  modeloPaginaVenda: ModeloPaginaVenda;
  elementoModeloPaginaVenda: ElementoModeloPaginaVenda;
  constructor(data?: PosicaoElementoPaginaVendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PosicaoElementoPaginaVenda`.
   */
  public static getModelName() {
    return "PosicaoElementoPaginaVenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PosicaoElementoPaginaVenda for dynamic purposes.
  **/
  public static factory(data: PosicaoElementoPaginaVendaInterface): PosicaoElementoPaginaVenda{
    return new PosicaoElementoPaginaVenda(data);
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
      name: 'PosicaoElementoPaginaVenda',
      plural: 'PosicaoElementoPaginaVendas',
      path: 'PosicaoElementoPaginaVendas',
      idName: 'modeloPaginaVendaId',
      properties: {
        "modeloPaginaVendaId": {
          name: 'modeloPaginaVendaId',
          type: 'number'
        },
        "elementoModeloPaginaVendaId": {
          name: 'elementoModeloPaginaVendaId',
          type: 'number'
        },
        "posicao": {
          name: 'posicao',
          type: 'number'
        },
      },
      relations: {
        modeloPaginaVenda: {
          name: 'modeloPaginaVenda',
          type: 'ModeloPaginaVenda',
          model: 'ModeloPaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'modeloPaginaVendaId',
          keyTo: 'id'
        },
        elementoModeloPaginaVenda: {
          name: 'elementoModeloPaginaVenda',
          type: 'ElementoModeloPaginaVenda',
          model: 'ElementoModeloPaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'elementoModeloPaginaVendaId',
          keyTo: 'id'
        },
      }
    }
  }
}
