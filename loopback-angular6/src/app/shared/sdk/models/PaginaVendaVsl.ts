/* tslint:disable */
import {
  ProdutoProprio,
  VideoVsl,
  CampanhaAdsRedeDisplay,
  ModeloPaginaVendaVsl
} from '../index';

declare var Object: any;
export interface PaginaVendaVslInterface {
  "headline"?: string;
  "subtitulo"?: string;
  "produtoProprioId"?: number;
  "prontoCriacao"?: number;
  "url"?: string;
  "codigoHexa"?: string;
  "html"?: string;
  "nome"?: string;
  "dataPublicacao"?: Date;
  "videoVslId"?: number;
  "modeloPaginaVendaVslId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  videoVsl?: VideoVsl;
  campanhaAdsRedeDisplays?: CampanhaAdsRedeDisplay[];
  modeloPaginaVendaVsl?: ModeloPaginaVendaVsl;
}

export class PaginaVendaVsl implements PaginaVendaVslInterface {
  "headline": string;
  "subtitulo": string;
  "produtoProprioId": number;
  "prontoCriacao": number;
  "url": string;
  "codigoHexa": string;
  "html": string;
  "nome": string;
  "dataPublicacao": Date;
  "videoVslId": number;
  "modeloPaginaVendaVslId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  videoVsl: VideoVsl;
  campanhaAdsRedeDisplays: CampanhaAdsRedeDisplay[];
  modeloPaginaVendaVsl: ModeloPaginaVendaVsl;
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
        "subtitulo": {
          name: 'subtitulo',
          type: 'string'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
          type: 'number'
        },
        "prontoCriacao": {
          name: 'prontoCriacao',
          type: 'number'
        },
        "url": {
          name: 'url',
          type: 'string'
        },
        "codigoHexa": {
          name: 'codigoHexa',
          type: 'string'
        },
        "html": {
          name: 'html',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "dataPublicacao": {
          name: 'dataPublicacao',
          type: 'Date'
        },
        "videoVslId": {
          name: 'videoVslId',
          type: 'number'
        },
        "modeloPaginaVendaVslId": {
          name: 'modeloPaginaVendaVslId',
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
        campanhaAdsRedeDisplays: {
          name: 'campanhaAdsRedeDisplays',
          type: 'CampanhaAdsRedeDisplay[]',
          model: 'CampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaVendaVslId'
        },
        modeloPaginaVendaVsl: {
          name: 'modeloPaginaVendaVsl',
          type: 'ModeloPaginaVendaVsl',
          model: 'ModeloPaginaVendaVsl',
          relationType: 'belongsTo',
                  keyFrom: 'modeloPaginaVendaVslId',
          keyTo: 'id'
        },
      }
    }
  }
}
