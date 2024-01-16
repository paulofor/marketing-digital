/* tslint:disable */
import {
  VersaoPaginaVenda,
  ImagemPaginaVenda
} from '../index';

declare var Object: any;
export interface ArquivoPaginaVendaInterface {
  "imagemPaginaVendaId"?: number;
  "versaoPaginaVendaId"?: number;
  "url"?: string;
  "codigoMetrica"?: string;
  versaoPaginaVenda?: VersaoPaginaVenda;
  imagemPaginaVenda?: ImagemPaginaVenda;
}

export class ArquivoPaginaVenda implements ArquivoPaginaVendaInterface {
  "imagemPaginaVendaId": number;
  "versaoPaginaVendaId": number;
  "url": string;
  "codigoMetrica": string;
  versaoPaginaVenda: VersaoPaginaVenda;
  imagemPaginaVenda: ImagemPaginaVenda;
  constructor(data?: ArquivoPaginaVendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ArquivoPaginaVenda`.
   */
  public static getModelName() {
    return "ArquivoPaginaVenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ArquivoPaginaVenda for dynamic purposes.
  **/
  public static factory(data: ArquivoPaginaVendaInterface): ArquivoPaginaVenda{
    return new ArquivoPaginaVenda(data);
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
      name: 'ArquivoPaginaVenda',
      plural: 'ArquivoPaginaVendas',
      path: 'ArquivoPaginaVendas',
      idName: 'imagemPaginaVendaId',
      properties: {
        "imagemPaginaVendaId": {
          name: 'imagemPaginaVendaId',
          type: 'number'
        },
        "versaoPaginaVendaId": {
          name: 'versaoPaginaVendaId',
          type: 'number'
        },
        "url": {
          name: 'url',
          type: 'string'
        },
        "codigoMetrica": {
          name: 'codigoMetrica',
          type: 'string'
        },
      },
      relations: {
        versaoPaginaVenda: {
          name: 'versaoPaginaVenda',
          type: 'VersaoPaginaVenda',
          model: 'VersaoPaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'versaoPaginaVendaId',
          keyTo: 'id'
        },
        imagemPaginaVenda: {
          name: 'imagemPaginaVenda',
          type: 'ImagemPaginaVenda',
          model: 'ImagemPaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'imagemPaginaVendaId',
          keyTo: 'id'
        },
      }
    }
  }
}
