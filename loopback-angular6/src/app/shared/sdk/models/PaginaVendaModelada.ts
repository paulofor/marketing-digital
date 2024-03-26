/* tslint:disable */
import {
  SecaoPaginaVendaModelada
} from '../index';

declare var Object: any;
export interface PaginaVendaModeladaInterface {
  "nomeProduto"?: string;
  "url"?: string;
  "fonte"?: string;
  "imagemCompleta"?: string;
  "urlImagemCompleta"?: string;
  "id"?: number;
  secaoPaginaVendaModeladas?: SecaoPaginaVendaModelada[];
}

export class PaginaVendaModelada implements PaginaVendaModeladaInterface {
  "nomeProduto": string;
  "url": string;
  "fonte": string;
  "imagemCompleta": string;
  "urlImagemCompleta": string;
  "id": number;
  secaoPaginaVendaModeladas: SecaoPaginaVendaModelada[];
  constructor(data?: PaginaVendaModeladaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaginaVendaModelada`.
   */
  public static getModelName() {
    return "PaginaVendaModelada";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaginaVendaModelada for dynamic purposes.
  **/
  public static factory(data: PaginaVendaModeladaInterface): PaginaVendaModelada{
    return new PaginaVendaModelada(data);
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
      name: 'PaginaVendaModelada',
      plural: 'PaginaVendaModeladas',
      path: 'PaginaVendaModeladas',
      idName: 'id',
      properties: {
        "nomeProduto": {
          name: 'nomeProduto',
          type: 'string'
        },
        "url": {
          name: 'url',
          type: 'string'
        },
        "fonte": {
          name: 'fonte',
          type: 'string'
        },
        "imagemCompleta": {
          name: 'imagemCompleta',
          type: 'string'
        },
        "urlImagemCompleta": {
          name: 'urlImagemCompleta',
          type: 'string'
        },
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
          keyTo: 'paginaVendaModeladaId'
        },
      }
    }
  }
}
