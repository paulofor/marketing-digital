/* tslint:disable */
import {
  ProdutoProprio,
  VideoVsl
} from '../index';

declare var Object: any;
export interface PaginaVendaVslInterface {
  "headline"?: string;
  "produtoProprioId"?: number;
  "videoVslId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  videoVsl?: VideoVsl;
}

export class PaginaVendaVsl implements PaginaVendaVslInterface {
  "headline": string;
  "produtoProprioId": number;
  "videoVslId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  videoVsl: VideoVsl;
  constructor(data?: PaginaVendaVslInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaginaVendaVsl`.
   */
  public static getModelName() {
    return "PaginaVendaVsl";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaginaVendaVsl for dynamic purposes.
  **/
  public static factory(data: PaginaVendaVslInterface): PaginaVendaVsl{
    return new PaginaVendaVsl(data);
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
      name: 'PaginaVendaVsl',
      plural: 'PaginaVendaVsls',
      path: 'PaginaVendaVsls',
      idName: 'id',
      properties: {
        "headline": {
          name: 'headline',
          type: 'string'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
          type: 'number'
        },
        "videoVslId": {
          name: 'videoVslId',
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
        videoVsl: {
          name: 'videoVsl',
          type: 'VideoVsl',
          model: 'VideoVsl',
          relationType: 'belongsTo',
                  keyFrom: 'videoVslId',
          keyTo: 'id'
        },
      }
    }
  }
}
