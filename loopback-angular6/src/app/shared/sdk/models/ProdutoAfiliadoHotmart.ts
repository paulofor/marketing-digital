/* tslint:disable */
import {
  VisitaProdutoHotmart,
  CampanhaAdsTeste,
  AnuncioAds,
  PixelGoogle,
  ContaGoogle
} from '../index';

declare var Object: any;
export interface ProdutoAfiliadoHotmartInterface {
  "nome"?: string;
  "urlFinal"?: string;
  "urlTracking"?: string;
  "geraTesteCampanha"?: number;
  "hotmartId"?: number;
  "sigla"?: string;
  "pixelGoogleId"?: number;
  "criaPixelVenda"?: number;
  "contaGoogleId"?: number;
  visitaProdutoHotmarts?: VisitaProdutoHotmart[];
  campanhaAdsTestes?: CampanhaAdsTeste[];
  anuncioAds?: AnuncioAds[];
  pixelGoogles?: PixelGoogle[];
  contaGoogle?: ContaGoogle;
}

export class ProdutoAfiliadoHotmart implements ProdutoAfiliadoHotmartInterface {
  "nome": string;
  "urlFinal": string;
  "urlTracking": string;
  "geraTesteCampanha": number;
  "hotmartId": number;
  "sigla": string;
  "pixelGoogleId": number;
  "criaPixelVenda": number;
  "contaGoogleId": number;
  visitaProdutoHotmarts: VisitaProdutoHotmart[];
  campanhaAdsTestes: CampanhaAdsTeste[];
  anuncioAds: AnuncioAds[];
  pixelGoogles: PixelGoogle[];
  contaGoogle: ContaGoogle;
  constructor(data?: ProdutoAfiliadoHotmartInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProdutoAfiliadoHotmart`.
   */
  public static getModelName() {
    return "ProdutoAfiliadoHotmart";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProdutoAfiliadoHotmart for dynamic purposes.
  **/
  public static factory(data: ProdutoAfiliadoHotmartInterface): ProdutoAfiliadoHotmart{
    return new ProdutoAfiliadoHotmart(data);
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
      name: 'ProdutoAfiliadoHotmart',
      plural: 'ProdutoAfiliadoHotmarts',
      path: 'ProdutoAfiliadoHotmarts',
      idName: 'hotmartId',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "urlFinal": {
          name: 'urlFinal',
          type: 'string'
        },
        "urlTracking": {
          name: 'urlTracking',
          type: 'string'
        },
        "geraTesteCampanha": {
          name: 'geraTesteCampanha',
          type: 'number'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "sigla": {
          name: 'sigla',
          type: 'string'
        },
        "pixelGoogleId": {
          name: 'pixelGoogleId',
          type: 'number'
        },
        "criaPixelVenda": {
          name: 'criaPixelVenda',
          type: 'number'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
          type: 'number'
        },
      },
      relations: {
        visitaProdutoHotmarts: {
          name: 'visitaProdutoHotmarts',
          type: 'VisitaProdutoHotmart[]',
          model: 'VisitaProdutoHotmart',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        campanhaAdsTestes: {
          name: 'campanhaAdsTestes',
          type: 'CampanhaAdsTeste[]',
          model: 'CampanhaAdsTeste',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'produtoAfiliadoHotmartId'
        },
        anuncioAds: {
          name: 'anuncioAds',
          type: 'AnuncioAds[]',
          model: 'AnuncioAds',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'produtoAfiliadoHotmartId'
        },
        pixelGoogles: {
          name: 'pixelGoogles',
          type: 'PixelGoogle[]',
          model: 'PixelGoogle',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'produtoAfiliadoHotmartId'
        },
        contaGoogle: {
          name: 'contaGoogle',
          type: 'ContaGoogle',
          model: 'ContaGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'contaGoogleId',
          keyTo: 'id'
        },
      }
    }
  }
}
