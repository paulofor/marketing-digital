/* tslint:disable */
import {
  SecaoPaginaVendaModelada
} from '../index';

declare var Object: any;
export interface TipoSecaoPaginaVendaInterface {
  "id"?: number;
  secaoPaginaVendaModeladas?: SecaoPaginaVendaModelada[];
}

export class TipoSecaoPaginaVenda implements TipoSecaoPaginaVendaInterface {
  "id": number;
  secaoPaginaVendaModeladas: SecaoPaginaVendaModelada[];
  constructor(data?: TipoSecaoPaginaVendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TipoSecaoPaginaVenda`.
   */
  public static getModelName() {
    return "TipoSecaoPaginaVenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TipoSecaoPaginaVenda for dynamic purposes.
  **/
  public static factory(data: TipoSecaoPaginaVendaInterface): TipoSecaoPaginaVenda{
    return new TipoSecaoPaginaVenda(data);
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
      name: 'TipoSecaoPaginaVenda',
      plural: 'TipoSecaoPaginaVendas',
      path: 'TipoSecaoPaginaVendas',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        secaoPaginaVendaModeladas: {
          name: 'secaoPaginaVendaModeladas',
          type: 'SecaoPaginaVendaModelada[]',
          model: 'SecaoPaginaVendaModelada',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'tipoSecaoPaginaVendaId'
        },
      }
    }
  }
}
