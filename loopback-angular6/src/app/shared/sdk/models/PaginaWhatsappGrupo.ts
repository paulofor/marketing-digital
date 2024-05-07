/* tslint:disable */
import {
  WhatsappGrupo,
  ProdutoProprio,
  MetaAdsAnuncio
} from '../index';

declare var Object: any;
export interface PaginaWhatsappGrupoInterface {
  "url"?: string;
  "urlImagem"?: string;
  "whatsappGrupoId"?: number;
  "produtoProprioId"?: number;
  "id"?: number;
  whatsappGrupo?: WhatsappGrupo;
  produtoProprio?: ProdutoProprio;
  metaAdsAnuncios?: MetaAdsAnuncio[];
}

export class PaginaWhatsappGrupo implements PaginaWhatsappGrupoInterface {
  "url": string;
  "urlImagem": string;
  "whatsappGrupoId": number;
  "produtoProprioId": number;
  "id": number;
  whatsappGrupo: WhatsappGrupo;
  produtoProprio: ProdutoProprio;
  metaAdsAnuncios: MetaAdsAnuncio[];
  constructor(data?: PaginaWhatsappGrupoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaginaWhatsappGrupo`.
   */
  public static getModelName() {
    return "PaginaWhatsappGrupo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaginaWhatsappGrupo for dynamic purposes.
  **/
  public static factory(data: PaginaWhatsappGrupoInterface): PaginaWhatsappGrupo{
    return new PaginaWhatsappGrupo(data);
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
      name: 'PaginaWhatsappGrupo',
      plural: 'PaginaWhatsappGrupos',
      path: 'PaginaWhatsappGrupos',
      idName: 'id',
      properties: {
        "url": {
          name: 'url',
          type: 'string'
        },
        "urlImagem": {
          name: 'urlImagem',
          type: 'string'
        },
        "whatsappGrupoId": {
          name: 'whatsappGrupoId',
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
        whatsappGrupo: {
          name: 'whatsappGrupo',
          type: 'WhatsappGrupo',
          model: 'WhatsappGrupo',
          relationType: 'belongsTo',
                  keyFrom: 'whatsappGrupoId',
          keyTo: 'id'
        },
        produtoProprio: {
          name: 'produtoProprio',
          type: 'ProdutoProprio',
          model: 'ProdutoProprio',
          relationType: 'belongsTo',
                  keyFrom: 'produtoProprioId',
          keyTo: 'id'
        },
        metaAdsAnuncios: {
          name: 'metaAdsAnuncios',
          type: 'MetaAdsAnuncio[]',
          model: 'MetaAdsAnuncio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaWhatsappGrupoId'
        },
      }
    }
  }
}
