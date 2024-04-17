/* tslint:disable */
import {
  ProdutoProprio,
  MetaAdsConjuntoAnuncio
} from '../index';

declare var Object: any;
export interface MetaAdsCampanhaInterface {
  "nome"?: string;
  "idMeta"?: string;
  "produtoProprioId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  metaAdsConjuntoAnuncios?: MetaAdsConjuntoAnuncio[];
}

export class MetaAdsCampanha implements MetaAdsCampanhaInterface {
  "nome": string;
  "idMeta": string;
  "produtoProprioId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  metaAdsConjuntoAnuncios: MetaAdsConjuntoAnuncio[];
  constructor(data?: MetaAdsCampanhaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MetaAdsCampanha`.
   */
  public static getModelName() {
    return "MetaAdsCampanha";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MetaAdsCampanha for dynamic purposes.
  **/
  public static factory(data: MetaAdsCampanhaInterface): MetaAdsCampanha{
    return new MetaAdsCampanha(data);
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
      name: 'MetaAdsCampanha',
      plural: 'MetaAdsCampanhas',
      path: 'MetaAdsCampanhas',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "idMeta": {
          name: 'idMeta',
          type: 'string'
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
        metaAdsConjuntoAnuncios: {
          name: 'metaAdsConjuntoAnuncios',
          type: 'MetaAdsConjuntoAnuncio[]',
          model: 'MetaAdsConjuntoAnuncio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'metaAdsCampanhaId'
        },
      }
    }
  }
}
