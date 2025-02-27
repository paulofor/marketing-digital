/* tslint:disable */
import {
  MetaAdsCampanha,
  MetaAdsAnuncio,
  MetaAdsPublico
} from '../index';

declare var Object: any;
export interface MetaAdsConjuntoAnuncioInterface {
  "idMeta"?: string;
  "nome"?: string;
  "custo"?: number;
  "metaAdsCampanhaId"?: number;
  "metaAdsPublicoId"?: number;
  "id"?: number;
  metaAdsCampanha?: MetaAdsCampanha;
  metaAdsAnuncios?: MetaAdsAnuncio[];
  metaAdsPublico?: MetaAdsPublico;
}

export class MetaAdsConjuntoAnuncio implements MetaAdsConjuntoAnuncioInterface {
  "idMeta": string;
  "nome": string;
  "custo": number;
  "metaAdsCampanhaId": number;
  "metaAdsPublicoId": number;
  "id": number;
  metaAdsCampanha: MetaAdsCampanha;
  metaAdsAnuncios: MetaAdsAnuncio[];
  metaAdsPublico: MetaAdsPublico;
  constructor(data?: MetaAdsConjuntoAnuncioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MetaAdsConjuntoAnuncio`.
   */
  public static getModelName() {
    return "MetaAdsConjuntoAnuncio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MetaAdsConjuntoAnuncio for dynamic purposes.
  **/
  public static factory(data: MetaAdsConjuntoAnuncioInterface): MetaAdsConjuntoAnuncio{
    return new MetaAdsConjuntoAnuncio(data);
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
      name: 'MetaAdsConjuntoAnuncio',
      plural: 'MetaAdsConjuntoAnuncios',
      path: 'MetaAdsConjuntoAnuncios',
      idName: 'id',
      properties: {
        "idMeta": {
          name: 'idMeta',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "custo": {
          name: 'custo',
          type: 'number'
        },
        "metaAdsCampanhaId": {
          name: 'metaAdsCampanhaId',
          type: 'number'
        },
        "metaAdsPublicoId": {
          name: 'metaAdsPublicoId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        metaAdsCampanha: {
          name: 'metaAdsCampanha',
          type: 'MetaAdsCampanha',
          model: 'MetaAdsCampanha',
          relationType: 'belongsTo',
                  keyFrom: 'metaAdsCampanhaId',
          keyTo: 'id'
        },
        metaAdsAnuncios: {
          name: 'metaAdsAnuncios',
          type: 'MetaAdsAnuncio[]',
          model: 'MetaAdsAnuncio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'metaAdsConjuntoAnuncioId'
        },
        metaAdsPublico: {
          name: 'metaAdsPublico',
          type: 'MetaAdsPublico',
          model: 'MetaAdsPublico',
          relationType: 'belongsTo',
                  keyFrom: 'metaAdsPublicoId',
          keyTo: 'id'
        },
      }
    }
  }
}
