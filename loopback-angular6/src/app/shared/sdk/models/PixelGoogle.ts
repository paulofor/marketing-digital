/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  ContaGoogle
} from '../index';

declare var Object: any;
export interface PixelGoogleInterface {
  "identificador"?: string;
  "script"?: string;
  "dataCriacao"?: Date;
  "nome"?: string;
  "codigo1"?: string;
  "codigo2"?: string;
  "instalado"?: number;
  "contaGoogleId"?: number;
  "id"?: number;
  produtoAfiliadoHotmarts?: ProdutoAfiliadoHotmart[];
  pixelGooglePaginaVenda?: ProdutoAfiliadoHotmart[];
  contaGoogle?: ContaGoogle;
}

export class PixelGoogle implements PixelGoogleInterface {
  "identificador": string;
  "script": string;
  "dataCriacao": Date;
  "nome": string;
  "codigo1": string;
  "codigo2": string;
  "instalado": number;
  "contaGoogleId": number;
  "id": number;
  produtoAfiliadoHotmarts: ProdutoAfiliadoHotmart[];
  pixelGooglePaginaVenda: ProdutoAfiliadoHotmart[];
  contaGoogle: ContaGoogle;
  constructor(data?: PixelGoogleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PixelGoogle`.
   */
  public static getModelName() {
    return "PixelGoogle";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PixelGoogle for dynamic purposes.
  **/
  public static factory(data: PixelGoogleInterface): PixelGoogle{
    return new PixelGoogle(data);
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
      name: 'PixelGoogle',
      plural: 'PixelGoogles',
      path: 'PixelGoogles',
      idName: 'id',
      properties: {
        "identificador": {
          name: 'identificador',
          type: 'string'
        },
        "script": {
          name: 'script',
          type: 'string'
        },
        "dataCriacao": {
          name: 'dataCriacao',
          type: 'Date'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "codigo1": {
          name: 'codigo1',
          type: 'string'
        },
        "codigo2": {
          name: 'codigo2',
          type: 'string'
        },
        "instalado": {
          name: 'instalado',
          type: 'number'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        produtoAfiliadoHotmarts: {
          name: 'produtoAfiliadoHotmarts',
          type: 'ProdutoAfiliadoHotmart[]',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'pixelGoogleId'
        },
        pixelGooglePaginaVenda: {
          name: 'pixelGooglePaginaVenda',
          type: 'ProdutoAfiliadoHotmart[]',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'pixelGooglePaginaVendaId'
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
