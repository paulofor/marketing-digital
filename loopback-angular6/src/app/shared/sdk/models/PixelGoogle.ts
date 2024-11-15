/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  ContaGoogle,
  PublicoAlvoAdsDiario,
  ProdutoProprio
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
  "nomeMeta"?: string;
  "idAds"?: string;
  "snippet"?: string;
  "contaGoogleId"?: number;
  "produtoProprioId"?: number;
  "tipo"?: string;
  "id"?: number;
  produtoAfiliadoHotmarts?: ProdutoAfiliadoHotmart[];
  produtoAfiliadoPaginaVenda?: ProdutoAfiliadoHotmart[];
  pixelGoogleCheckout?: ProdutoAfiliadoHotmart[];
  contaGoogle?: ContaGoogle;
  publicoAlvoAdsDiarios?: PublicoAlvoAdsDiario[];
  produtoProprio?: ProdutoProprio;
}

export class PixelGoogle implements PixelGoogleInterface {
  "identificador": string;
  "script": string;
  "dataCriacao": Date;
  "nome": string;
  "codigo1": string;
  "codigo2": string;
  "instalado": number;
  "nomeMeta": string;
  "idAds": string;
  "snippet": string;
  "contaGoogleId": number;
  "produtoProprioId": number;
  "tipo": string;
  "id": number;
  produtoAfiliadoHotmarts: ProdutoAfiliadoHotmart[];
  produtoAfiliadoPaginaVenda: ProdutoAfiliadoHotmart[];
  pixelGoogleCheckout: ProdutoAfiliadoHotmart[];
  contaGoogle: ContaGoogle;
  publicoAlvoAdsDiarios: PublicoAlvoAdsDiario[];
  produtoProprio: ProdutoProprio;
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
        "nomeMeta": {
          name: 'nomeMeta',
          type: 'string'
        },
        "idAds": {
          name: 'idAds',
          type: 'string'
        },
        "snippet": {
          name: 'snippet',
          type: 'string'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
          type: 'number'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
          type: 'number'
        },
        "tipo": {
          name: 'tipo',
          type: 'string'
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
        produtoAfiliadoPaginaVenda: {
          name: 'produtoAfiliadoPaginaVenda',
          type: 'ProdutoAfiliadoHotmart[]',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'pixelGooglePaginaVendaId'
        },
        pixelGoogleCheckout: {
          name: 'pixelGoogleCheckout',
          type: 'ProdutoAfiliadoHotmart[]',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'pixelGoogleCheckoutId'
        },
        contaGoogle: {
          name: 'contaGoogle',
          type: 'ContaGoogle',
          model: 'ContaGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'contaGoogleId',
          keyTo: 'id'
        },
        publicoAlvoAdsDiarios: {
          name: 'publicoAlvoAdsDiarios',
          type: 'PublicoAlvoAdsDiario[]',
          model: 'PublicoAlvoAdsDiario',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'pixelGoogleId'
        },
        produtoProprio: {
          name: 'produtoProprio',
          type: 'ProdutoProprio',
          model: 'ProdutoProprio',
          relationType: 'belongsTo',
                  keyFrom: 'produtoProprioId',
          keyTo: 'id'
        },
      }
    }
  }
}
