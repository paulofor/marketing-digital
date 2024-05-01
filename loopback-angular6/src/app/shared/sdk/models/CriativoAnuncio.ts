/* tslint:disable */
import {
  ImagemPaginaVenda,
  ProdutoProprio,
  MetaAdsAnuncio,
  FonteLocal
} from '../index';

declare var Object: any;
export interface CriativoAnuncioInterface {
  "textoCopyLinha1"?: string;
  "urlImagemEditada"?: string;
  "fontFamily"?: string;
  "fontSize"?: string;
  "fontColor"?: string;
  "textoCopyLinha2"?: string;
  "fontWeight"?: string;
  "annotate"?: string;
  "gravity"?: string;
  "geraImagem"?: number;
  "nome"?: string;
  "fundoColor"?: string;
  "imagemPaginaVendaId"?: number;
  "produtoProprioId"?: number;
  "fonteLocalId"?: number;
  "id"?: number;
  imagemPaginaVenda?: ImagemPaginaVenda;
  produtoProprio?: ProdutoProprio;
  metaAdsAnuncios?: MetaAdsAnuncio[];
  fonteLocal?: FonteLocal;
}

export class CriativoAnuncio implements CriativoAnuncioInterface {
  "textoCopyLinha1": string;
  "urlImagemEditada": string;
  "fontFamily": string;
  "fontSize": string;
  "fontColor": string;
  "textoCopyLinha2": string;
  "fontWeight": string;
  "annotate": string;
  "gravity": string;
  "geraImagem": number;
  "nome": string;
  "fundoColor": string;
  "imagemPaginaVendaId": number;
  "produtoProprioId": number;
  "fonteLocalId": number;
  "id": number;
  imagemPaginaVenda: ImagemPaginaVenda;
  produtoProprio: ProdutoProprio;
  metaAdsAnuncios: MetaAdsAnuncio[];
  fonteLocal: FonteLocal;
  constructor(data?: CriativoAnuncioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CriativoAnuncio`.
   */
  public static getModelName() {
    return "CriativoAnuncio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CriativoAnuncio for dynamic purposes.
  **/
  public static factory(data: CriativoAnuncioInterface): CriativoAnuncio{
    return new CriativoAnuncio(data);
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
      name: 'CriativoAnuncio',
      plural: 'CriativoAnuncios',
      path: 'CriativoAnuncios',
      idName: 'id',
      properties: {
        "textoCopyLinha1": {
          name: 'textoCopyLinha1',
          type: 'string'
        },
        "urlImagemEditada": {
          name: 'urlImagemEditada',
          type: 'string'
        },
        "fontFamily": {
          name: 'fontFamily',
          type: 'string'
        },
        "fontSize": {
          name: 'fontSize',
          type: 'string'
        },
        "fontColor": {
          name: 'fontColor',
          type: 'string'
        },
        "textoCopyLinha2": {
          name: 'textoCopyLinha2',
          type: 'string'
        },
        "fontWeight": {
          name: 'fontWeight',
          type: 'string'
        },
        "annotate": {
          name: 'annotate',
          type: 'string'
        },
        "gravity": {
          name: 'gravity',
          type: 'string'
        },
        "geraImagem": {
          name: 'geraImagem',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "fundoColor": {
          name: 'fundoColor',
          type: 'string'
        },
        "imagemPaginaVendaId": {
          name: 'imagemPaginaVendaId',
          type: 'number'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
          type: 'number'
        },
        "fonteLocalId": {
          name: 'fonteLocalId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        imagemPaginaVenda: {
          name: 'imagemPaginaVenda',
          type: 'ImagemPaginaVenda',
          model: 'ImagemPaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'imagemPaginaVendaId',
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
          keyTo: 'criativoAnuncioId'
        },
        fonteLocal: {
          name: 'fonteLocal',
          type: 'FonteLocal',
          model: 'FonteLocal',
          relationType: 'belongsTo',
                  keyFrom: 'fonteLocalId',
          keyTo: 'id'
        },
      }
    }
  }
}
