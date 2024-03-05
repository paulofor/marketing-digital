/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  ProdutoProprio,
  ContaGoogle,
  CampanhaAdsRedeDisplay,
  ContaPublicoAlvoAdsPalavra,
  ProdutoPublicoAdsPalavra
} from '../index';

declare var Object: any;
export interface PublicoAlvoAdsPalavraInterface {
  "listaPalavra"?: string;
  "nome"?: string;
  "produtoProprioId"?: number;
  "pronta"?: number;
  "resourceName"?: string;
  "dataCriacaoAds"?: Date;
  "contaGoogleId"?: number;
  "id"?: number;
  "hotmartId"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  produtoProprio?: ProdutoProprio;
  contaGoogle?: ContaGoogle;
  campanhaAdsRedeDisplays?: CampanhaAdsRedeDisplay[];
  contaPublicoAlvoAdsPalavras?: ContaPublicoAlvoAdsPalavra[];
  produtoPublicoAdsPalavras?: ProdutoPublicoAdsPalavra[];
}

export class PublicoAlvoAdsPalavra implements PublicoAlvoAdsPalavraInterface {
  "listaPalavra": string;
  "nome": string;
  "produtoProprioId": number;
  "pronta": number;
  "resourceName": string;
  "dataCriacaoAds": Date;
  "contaGoogleId": number;
  "id": number;
  "hotmartId": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  produtoProprio: ProdutoProprio;
  contaGoogle: ContaGoogle;
  campanhaAdsRedeDisplays: CampanhaAdsRedeDisplay[];
  contaPublicoAlvoAdsPalavras: ContaPublicoAlvoAdsPalavra[];
  produtoPublicoAdsPalavras: ProdutoPublicoAdsPalavra[];
  constructor(data?: PublicoAlvoAdsPalavraInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PublicoAlvoAdsPalavra`.
   */
  public static getModelName() {
    return "PublicoAlvoAdsPalavra";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PublicoAlvoAdsPalavra for dynamic purposes.
  **/
  public static factory(data: PublicoAlvoAdsPalavraInterface): PublicoAlvoAdsPalavra{
    return new PublicoAlvoAdsPalavra(data);
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
      name: 'PublicoAlvoAdsPalavra',
      plural: 'PublicoAlvoAdsPalavras',
      path: 'PublicoAlvoAdsPalavras',
      idName: 'id',
      properties: {
        "listaPalavra": {
          name: 'listaPalavra',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
          type: 'number'
        },
        "pronta": {
          name: 'pronta',
          type: 'number'
        },
        "resourceName": {
          name: 'resourceName',
          type: 'string'
        },
        "dataCriacaoAds": {
          name: 'dataCriacaoAds',
          type: 'Date'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
      },
      relations: {
        produtoAfiliadoHotmart: {
          name: 'produtoAfiliadoHotmart',
          type: 'ProdutoAfiliadoHotmart',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'belongsTo',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        produtoProprio: {
          name: 'produtoProprio',
          type: 'ProdutoProprio',
          model: 'ProdutoProprio',
          relationType: 'belongsTo',
                  keyFrom: 'produtoProprioId',
          keyTo: 'id'
        },
        contaGoogle: {
          name: 'contaGoogle',
          type: 'ContaGoogle',
          model: 'ContaGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'contaGoogleId',
          keyTo: 'id'
        },
        campanhaAdsRedeDisplays: {
          name: 'campanhaAdsRedeDisplays',
          type: 'CampanhaAdsRedeDisplay[]',
          model: 'CampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'publicoAlvoAdsPalavraId'
        },
        contaPublicoAlvoAdsPalavras: {
          name: 'contaPublicoAlvoAdsPalavras',
          type: 'ContaPublicoAlvoAdsPalavra[]',
          model: 'ContaPublicoAlvoAdsPalavra',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'publicoAlvoAdsPalavraId'
        },
        produtoPublicoAdsPalavras: {
          name: 'produtoPublicoAdsPalavras',
          type: 'ProdutoPublicoAdsPalavra[]',
          model: 'ProdutoPublicoAdsPalavra',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'publicoAlvoAdsPalavraId'
        },
      }
    }
  }
}
