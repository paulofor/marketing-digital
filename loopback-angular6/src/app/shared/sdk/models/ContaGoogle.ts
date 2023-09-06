/* tslint:disable */
import {
  CampanhaAdsTeste,
  PixelGoogle,
  ProdutoAfiliadoHotmart
} from '../index';

declare var Object: any;
export interface ContaGoogleInterface {
  "nome"?: string;
  "gmail"?: string;
  "dataCriacao"?: Date;
  "ativo"?: number;
  "senha"?: string;
  "urlAds"?: string;
  "idAds"?: string;
  "id"?: number;
  campanhaAdsTestes?: CampanhaAdsTeste[];
  pixelGoogles?: PixelGoogle[];
  produtoAfiliadoHotmarts?: ProdutoAfiliadoHotmart[];
}

export class ContaGoogle implements ContaGoogleInterface {
  "nome": string;
  "gmail": string;
  "dataCriacao": Date;
  "ativo": number;
  "senha": string;
  "urlAds": string;
  "idAds": string;
  "id": number;
  campanhaAdsTestes: CampanhaAdsTeste[];
  pixelGoogles: PixelGoogle[];
  produtoAfiliadoHotmarts: ProdutoAfiliadoHotmart[];
  constructor(data?: ContaGoogleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContaGoogle`.
   */
  public static getModelName() {
    return "ContaGoogle";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContaGoogle for dynamic purposes.
  **/
  public static factory(data: ContaGoogleInterface): ContaGoogle{
    return new ContaGoogle(data);
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
      name: 'ContaGoogle',
      plural: 'ContaGoogles',
      path: 'ContaGoogles',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "gmail": {
          name: 'gmail',
          type: 'string'
        },
        "dataCriacao": {
          name: 'dataCriacao',
          type: 'Date'
        },
        "ativo": {
          name: 'ativo',
          type: 'number'
        },
        "senha": {
          name: 'senha',
          type: 'string'
        },
        "urlAds": {
          name: 'urlAds',
          type: 'string'
        },
        "idAds": {
          name: 'idAds',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        campanhaAdsTestes: {
          name: 'campanhaAdsTestes',
          type: 'CampanhaAdsTeste[]',
          model: 'CampanhaAdsTeste',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        pixelGoogles: {
          name: 'pixelGoogles',
          type: 'PixelGoogle[]',
          model: 'PixelGoogle',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        produtoAfiliadoHotmarts: {
          name: 'produtoAfiliadoHotmarts',
          type: 'ProdutoAfiliadoHotmart[]',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
      }
    }
  }
}
