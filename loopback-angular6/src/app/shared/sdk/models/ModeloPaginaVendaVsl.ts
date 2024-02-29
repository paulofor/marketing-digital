/* tslint:disable */
import {
  PaginaVendaVsl
} from '../index';

declare var Object: any;
export interface ModeloPaginaVendaVslInterface {
  "nome"?: string;
  "dataCriacao"?: Date;
  "codigoFonte"?: string;
  "id"?: number;
  paginaVendaVsls?: PaginaVendaVsl[];
}

export class ModeloPaginaVendaVsl implements ModeloPaginaVendaVslInterface {
  "nome": string;
  "dataCriacao": Date;
  "codigoFonte": string;
  "id": number;
  paginaVendaVsls: PaginaVendaVsl[];
  constructor(data?: ModeloPaginaVendaVslInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ModeloPaginaVendaVsl`.
   */
  public static getModelName() {
    return "ModeloPaginaVendaVsl";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ModeloPaginaVendaVsl for dynamic purposes.
  **/
  public static factory(data: ModeloPaginaVendaVslInterface): ModeloPaginaVendaVsl{
    return new ModeloPaginaVendaVsl(data);
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
      name: 'ModeloPaginaVendaVsl',
      plural: 'ModeloPaginaVendaVsls',
      path: 'ModeloPaginaVendaVsls',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "dataCriacao": {
          name: 'dataCriacao',
          type: 'Date'
        },
        "codigoFonte": {
          name: 'codigoFonte',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        paginaVendaVsls: {
          name: 'paginaVendaVsls',
          type: 'PaginaVendaVsl[]',
          model: 'PaginaVendaVsl',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'modeloPaginaVendaVslId'
        },
      }
    }
  }
}
