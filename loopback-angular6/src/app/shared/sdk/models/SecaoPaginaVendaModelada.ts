/* tslint:disable */
import {
  PaginaVendaModelada,
  TipoSecaoPaginaVenda
} from '../index';

declare var Object: any;
export interface SecaoPaginaVendaModeladaInterface {
  "paginaVendaModeladaId"?: number;
  "tipoSecaoPaginaVendaId"?: number;
  "id"?: number;
  paginaVendaModelada?: PaginaVendaModelada;
  tipoSecaoPaginaVenda?: TipoSecaoPaginaVenda;
}

export class SecaoPaginaVendaModelada implements SecaoPaginaVendaModeladaInterface {
  "paginaVendaModeladaId": number;
  "tipoSecaoPaginaVendaId": number;
  "id": number;
  paginaVendaModelada: PaginaVendaModelada;
  tipoSecaoPaginaVenda: TipoSecaoPaginaVenda;
  constructor(data?: SecaoPaginaVendaModeladaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SecaoPaginaVendaModelada`.
   */
  public static getModelName() {
    return "SecaoPaginaVendaModelada";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SecaoPaginaVendaModelada for dynamic purposes.
  **/
  public static factory(data: SecaoPaginaVendaModeladaInterface): SecaoPaginaVendaModelada{
    return new SecaoPaginaVendaModelada(data);
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
      name: 'SecaoPaginaVendaModelada',
      plural: 'SecaoPaginaVendaModeladas',
      path: 'SecaoPaginaVendaModeladas',
      idName: 'id',
      properties: {
        "paginaVendaModeladaId": {
          name: 'paginaVendaModeladaId',
          type: 'number'
        },
        "tipoSecaoPaginaVendaId": {
          name: 'tipoSecaoPaginaVendaId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        paginaVendaModelada: {
          name: 'paginaVendaModelada',
          type: 'PaginaVendaModelada',
          model: 'PaginaVendaModelada',
          relationType: 'belongsTo',
                  keyFrom: 'paginaVendaModeladaId',
          keyTo: 'id'
        },
        tipoSecaoPaginaVenda: {
          name: 'tipoSecaoPaginaVenda',
          type: 'TipoSecaoPaginaVenda',
          model: 'TipoSecaoPaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'tipoSecaoPaginaVendaId',
          keyTo: 'id'
        },
      }
    }
  }
}
