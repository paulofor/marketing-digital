/* tslint:disable */
import {
  ProdutoProprio,
  ProdutoAfiliadoHotmart
} from '../index';

declare var Object: any;
export interface MetaAdsPixelVendaInterface {
  "instalado"?: number;
  "nome"?: string;
  "identificador"?: string;
  "hotmartId"?: number;
  "produtoProprioId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
}

export class MetaAdsPixelVenda implements MetaAdsPixelVendaInterface {
  "instalado": number;
  "nome": string;
  "identificador": string;
  "hotmartId": number;
  "produtoProprioId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  constructor(data?: MetaAdsPixelVendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MetaAdsPixelVenda`.
   */
  public static getModelName() {
    return "MetaAdsPixelVenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MetaAdsPixelVenda for dynamic purposes.
  **/
  public static factory(data: MetaAdsPixelVendaInterface): MetaAdsPixelVenda{
    return new MetaAdsPixelVenda(data);
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
      name: 'MetaAdsPixelVenda',
      plural: 'MetaAdsPixelVendas',
      path: 'MetaAdsPixelVendas',
      idName: 'id',
      properties: {
        "instalado": {
          name: 'instalado',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "identificador": {
          name: 'identificador',
          type: 'string'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
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
        produtoAfiliadoHotmart: {
          name: 'produtoAfiliadoHotmart',
          type: 'ProdutoAfiliadoHotmart',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'belongsTo',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
      }
    }
  }
}
