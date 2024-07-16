/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  ProdutoAfiliadoGenerico,
  MetaAdsConjuntoAnuncio,
  PublicoInteresse
} from '../index';

declare var Object: any;
export interface MetaAdsPublicoInterface {
  "nome"?: string;
  "hotmartId"?: number;
  "produtoAfiliadoGenericoId"?: number;
  "id"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  produtoAfiliadoGenerico?: ProdutoAfiliadoGenerico;
  metaAdsConjuntoAnuncios?: MetaAdsConjuntoAnuncio[];
  publicoInteresses?: PublicoInteresse[];
}

export class MetaAdsPublico implements MetaAdsPublicoInterface {
  "nome": string;
  "hotmartId": number;
  "produtoAfiliadoGenericoId": number;
  "id": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  produtoAfiliadoGenerico: ProdutoAfiliadoGenerico;
  metaAdsConjuntoAnuncios: MetaAdsConjuntoAnuncio[];
  publicoInteresses: PublicoInteresse[];
  constructor(data?: MetaAdsPublicoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MetaAdsPublico`.
   */
  public static getModelName() {
    return "MetaAdsPublico";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MetaAdsPublico for dynamic purposes.
  **/
  public static factory(data: MetaAdsPublicoInterface): MetaAdsPublico{
    return new MetaAdsPublico(data);
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
      name: 'MetaAdsPublico',
      plural: 'MetaAdsPublicos',
      path: 'MetaAdsPublicos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "produtoAfiliadoGenericoId": {
          name: 'produtoAfiliadoGenericoId',
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
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        produtoAfiliadoGenerico: {
          name: 'produtoAfiliadoGenerico',
          type: 'ProdutoAfiliadoGenerico',
          model: 'ProdutoAfiliadoGenerico',
          relationType: 'belongsTo',
                  keyFrom: 'produtoAfiliadoGenericoId',
          keyTo: 'id'
        },
        metaAdsConjuntoAnuncios: {
          name: 'metaAdsConjuntoAnuncios',
          type: 'MetaAdsConjuntoAnuncio[]',
          model: 'MetaAdsConjuntoAnuncio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'metaAdsPublicoId'
        },
        publicoInteresses: {
          name: 'publicoInteresses',
          type: 'PublicoInteresse[]',
          model: 'PublicoInteresse',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'metaAdsPublicoId'
        },
      }
    }
  }
}
