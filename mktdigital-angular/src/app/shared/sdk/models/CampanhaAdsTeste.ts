/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  IdeiaPalavraChave,
  ModeloCampanhaAdsTeste,
  PalavraChaveCampanhaAdsTeste,
  AnuncioCampanhaAdsTeste
} from '../index';

declare var Object: any;
export interface CampanhaAdsTesteInterface {
  "nome"?: string;
  "prontaParaTeste"?: number;
  "produtoAfiliadoHotmartId"?: number;
  "id"?: number;
  "modeloCampanhaAdsTesteId"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  ideiaPalavraChaves?: IdeiaPalavraChave[];
  modeloCampanhaAdsTeste?: ModeloCampanhaAdsTeste;
  palavraChaveCampanhaAdsTestes?: PalavraChaveCampanhaAdsTeste[];
  anuncioCampanhaAdsTestes?: AnuncioCampanhaAdsTeste[];
}

export class CampanhaAdsTeste implements CampanhaAdsTesteInterface {
  "nome": string;
  "prontaParaTeste": number;
  "produtoAfiliadoHotmartId": number;
  "id": number;
  "modeloCampanhaAdsTesteId": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  ideiaPalavraChaves: IdeiaPalavraChave[];
  modeloCampanhaAdsTeste: ModeloCampanhaAdsTeste;
  palavraChaveCampanhaAdsTestes: PalavraChaveCampanhaAdsTeste[];
  anuncioCampanhaAdsTestes: AnuncioCampanhaAdsTeste[];
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
        "produtoAfiliadoHotmartId": {
          name: 'produtoAfiliadoHotmartId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "modeloCampanhaAdsTesteId": {
          name: 'modeloCampanhaAdsTesteId',
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
        ideiaPalavraChaves: {
          name: 'ideiaPalavraChaves',
          type: 'IdeiaPalavraChave[]',
          model: 'IdeiaPalavraChave',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'campanhaAdsTesteId'
        },
        modeloCampanhaAdsTeste: {
          name: 'modeloCampanhaAdsTeste',
          type: 'ModeloCampanhaAdsTeste',
          model: 'ModeloCampanhaAdsTeste',
          relationType: 'belongsTo',
                  keyFrom: 'modeloCampanhaAdsTesteId',
          keyTo: 'id'
        },
        palavraChaveCampanhaAdsTestes: {
          name: 'palavraChaveCampanhaAdsTestes',
          type: 'PalavraChaveCampanhaAdsTeste[]',
          model: 'PalavraChaveCampanhaAdsTeste',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'campanhaAdsTesteId'
        },
        anuncioCampanhaAdsTestes: {
          name: 'anuncioCampanhaAdsTestes',
          type: 'AnuncioCampanhaAdsTeste[]',
          model: 'AnuncioCampanhaAdsTeste',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'campanhaAdsTesteId'
        },
      }
    }
  }
}
