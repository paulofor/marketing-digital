/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  AnuncioCampanhaAds,
  AnuncioCampanhaAdsTeste
} from '../index';

declare var Object: any;
export interface AnuncioAdsInterface {
  "titulo1"?: string;
  "titulo2"?: string;
  "titulo3"?: string;
  "descricao1"?: string;
  "descricao2"?: string;
  "siteLink1Descricao1"?: string;
  "siteLink1Descricao2"?: string;
  "siteLink1Texto"?: string;
  "siteLink3Texto"?: string;
  "siteLink2Descricao1"?: string;
  "siteLink2Descricao2"?: string;
  "siteLink2Texto"?: string;
  "siteLink3Descricao1"?: string;
  "siteLink3Descricao2"?: string;
  "produtoAfiliadoHotmartId"?: number;
  "id"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  anuncioCampanhaAds?: AnuncioCampanhaAds[];
  anuncioCampanhaAdsTestes?: AnuncioCampanhaAdsTeste[];
}

export class AnuncioAds implements AnuncioAdsInterface {
  "titulo1": string;
  "titulo2": string;
  "titulo3": string;
  "descricao1": string;
  "descricao2": string;
  "siteLink1Descricao1": string;
  "siteLink1Descricao2": string;
  "siteLink1Texto": string;
  "siteLink3Texto": string;
  "siteLink2Descricao1": string;
  "siteLink2Descricao2": string;
  "siteLink2Texto": string;
  "siteLink3Descricao1": string;
  "siteLink3Descricao2": string;
  "produtoAfiliadoHotmartId": number;
  "id": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  anuncioCampanhaAds: AnuncioCampanhaAds[];
  anuncioCampanhaAdsTestes: AnuncioCampanhaAdsTeste[];
  constructor(data?: AnuncioAdsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnuncioAds`.
   */
  public static getModelName() {
    return "AnuncioAds";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnuncioAds for dynamic purposes.
  **/
  public static factory(data: AnuncioAdsInterface): AnuncioAds{
    return new AnuncioAds(data);
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
      name: 'AnuncioAds',
      plural: 'AnuncioAds',
      path: 'AnuncioAds',
      idName: 'id',
      properties: {
        "titulo1": {
          name: 'titulo1',
          type: 'string'
        },
        "titulo2": {
          name: 'titulo2',
          type: 'string'
        },
        "titulo3": {
          name: 'titulo3',
          type: 'string'
        },
        "descricao1": {
          name: 'descricao1',
          type: 'string'
        },
        "descricao2": {
          name: 'descricao2',
          type: 'string'
        },
        "siteLink1Descricao1": {
          name: 'siteLink1Descricao1',
          type: 'string'
        },
        "siteLink1Descricao2": {
          name: 'siteLink1Descricao2',
          type: 'string'
        },
        "siteLink1Texto": {
          name: 'siteLink1Texto',
          type: 'string'
        },
        "siteLink3Texto": {
          name: 'siteLink3Texto',
          type: 'string'
        },
        "siteLink2Descricao1": {
          name: 'siteLink2Descricao1',
          type: 'string'
        },
        "siteLink2Descricao2": {
          name: 'siteLink2Descricao2',
          type: 'string'
        },
        "siteLink2Texto": {
          name: 'siteLink2Texto',
          type: 'string'
        },
        "siteLink3Descricao1": {
          name: 'siteLink3Descricao1',
          type: 'string'
        },
        "siteLink3Descricao2": {
          name: 'siteLink3Descricao2',
          type: 'string'
        },
        "produtoAfiliadoHotmartId": {
          name: 'produtoAfiliadoHotmartId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        produtoAfiliadoHotmart: {
          name: 'produtoAfiliadoHotmart',
          type: 'ProdutoAfiliadoHotmart',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'belongsTo',
                  keyFrom: 'produtoAfiliadoHotmartId',
          keyTo: 'hotmartId'
        },
        anuncioCampanhaAds: {
          name: 'anuncioCampanhaAds',
          type: 'AnuncioCampanhaAds[]',
          model: 'AnuncioCampanhaAds',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'anuncioAdsId'
        },
        anuncioCampanhaAdsTestes: {
          name: 'anuncioCampanhaAdsTestes',
          type: 'AnuncioCampanhaAdsTeste[]',
          model: 'AnuncioCampanhaAdsTeste',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'anuncioAdsId'
        },
      }
    }
  }
}
