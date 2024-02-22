/* tslint:disable */
import {
  ProdutoProprio,
  PaginaVendaVsl,
  TrechoVsl
} from '../index';

declare var Object: any;
export interface VideoVslInterface {
  "nome"?: string;
  "voz"?: string;
  "produtoProprioId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  paginaVendaVsls?: PaginaVendaVsl[];
  trechoVsls?: TrechoVsl[];
}

export class VideoVsl implements VideoVslInterface {
  "nome": string;
  "voz": string;
  "produtoProprioId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  paginaVendaVsls: PaginaVendaVsl[];
  trechoVsls: TrechoVsl[];
  constructor(data?: VideoVslInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VideoVsl`.
   */
  public static getModelName() {
    return "VideoVsl";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VideoVsl for dynamic purposes.
  **/
  public static factory(data: VideoVslInterface): VideoVsl{
    return new VideoVsl(data);
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
      name: 'VideoVsl',
      plural: 'VideoVsls',
      path: 'VideoVsls',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "voz": {
          name: 'voz',
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
        paginaVendaVsls: {
          name: 'paginaVendaVsls',
          type: 'PaginaVendaVsl[]',
          model: 'PaginaVendaVsl',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'videoVslId'
        },
        trechoVsls: {
          name: 'trechoVsls',
          type: 'TrechoVsl[]',
          model: 'TrechoVsl',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'videoVslId'
        },
      }
    }
  }
}
