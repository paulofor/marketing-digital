/* tslint:disable */
import {
  AnuncioCampanhaTesteAds,
  ProdutoAfiliadoHotmart,
  ModeloCampanhaAdsTeste
} from '../index';

declare var Object: any;
export interface CampanhaAdsTesteInterface {
  "nome"?: string;
  "prontaParaTeste"?: number;
  "id"?: number;
  "produtoAfiliadoHotmartId"?: number;
  "modeloCampanhaAdsTesteId"?: number;
  anuncioCampanhaTesteAds?: AnuncioCampanhaTesteAds[];
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  modeloCampanhaAdsTeste?: ModeloCampanhaAdsTeste;
}

export class CampanhaAdsTeste implements CampanhaAdsTesteInterface {
  "nome": string;
  "prontaParaTeste": number;
  "id": number;
  "produtoAfiliadoHotmartId": number;
  "modeloCampanhaAdsTesteId": number;
  anuncioCampanhaTesteAds: AnuncioCampanhaTesteAds[];
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  modeloCampanhaAdsTeste: ModeloCampanhaAdsTeste;
  constructor(data?: CampanhaAdsTesteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CampanhaAdsTeste`.
   */
  public static getModelName() {
    return "CampanhaAdsTeste";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CampanhaAdsTeste for dynamic purposes.
  **/
  public static factory(data: CampanhaAdsTesteInterface): CampanhaAdsTeste{
    return new CampanhaAdsTeste(data);
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
      name: 'CampanhaAdsTeste',
      plural: 'CampanhaAdsTestes',
      path: 'CampanhaAdsTestes',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "prontaParaTeste": {
          name: 'prontaParaTeste',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "produtoAfiliadoHotmartId": {
          name: 'produtoAfiliadoHotmartId',
          type: 'number'
        },
        "modeloCampanhaAdsTesteId": {
          name: 'modeloCampanhaAdsTesteId',
          type: 'number'
        },
      },
      relations: {
        anuncioCampanhaTesteAds: {
          name: 'anuncioCampanhaTesteAds',
          type: 'AnuncioCampanhaTesteAds[]',
          model: 'AnuncioCampanhaTesteAds',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'campanhaAdsTesteId'
        },
        produtoAfiliadoHotmart: {
          name: 'produtoAfiliadoHotmart',
          type: 'ProdutoAfiliadoHotmart',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'belongsTo',
                  keyFrom: 'produtoAfiliadoHotmartId',
          keyTo: 'hotmartId'
        },
        modeloCampanhaAdsTeste: {
          name: 'modeloCampanhaAdsTeste',
          type: 'ModeloCampanhaAdsTeste',
          model: 'ModeloCampanhaAdsTeste',
          relationType: 'belongsTo',
                  keyFrom: 'modeloCampanhaAdsTesteId',
          keyTo: 'id'
        },
      }
    }
  }
}
