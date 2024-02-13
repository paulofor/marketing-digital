/* tslint:disable */
import {
  ImagemConjunto,
  ProdutoAfiliadoHotmart,
  ProdutoProprio,
  AnuncioCampanhaAdsRedeDisplay,
  CampanhaAdsRedeDisplay
} from '../index';

declare var Object: any;
export interface AnuncioConceitoAdsRedeDisplayInterface {
  "nomeEmpresa"?: string;
  "titulo"?: string;
  "tituloLongo"?: string;
  "descricao"?: string;
  "imagemConjuntoId"?: number;
  "produtoProprioId"?: number;
  "id"?: number;
  "hotmartId"?: number;
  imagemConjunto?: ImagemConjunto;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  produtoProprio?: ProdutoProprio;
  anuncioCampanhaAdsRedeDisplays?: AnuncioCampanhaAdsRedeDisplay[];
  campanhaAdsRedeDisplays?: CampanhaAdsRedeDisplay[];
}

export class AnuncioConceitoAdsRedeDisplay implements AnuncioConceitoAdsRedeDisplayInterface {
  "nomeEmpresa": string;
  "titulo": string;
  "tituloLongo": string;
  "descricao": string;
  "imagemConjuntoId": number;
  "produtoProprioId": number;
  "id": number;
  "hotmartId": number;
  imagemConjunto: ImagemConjunto;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  produtoProprio: ProdutoProprio;
  anuncioCampanhaAdsRedeDisplays: AnuncioCampanhaAdsRedeDisplay[];
  campanhaAdsRedeDisplays: CampanhaAdsRedeDisplay[];
  constructor(data?: AnuncioConceitoAdsRedeDisplayInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnuncioConceitoAdsRedeDisplay`.
   */
  public static getModelName() {
    return "AnuncioConceitoAdsRedeDisplay";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnuncioConceitoAdsRedeDisplay for dynamic purposes.
  **/
  public static factory(data: AnuncioConceitoAdsRedeDisplayInterface): AnuncioConceitoAdsRedeDisplay{
    return new AnuncioConceitoAdsRedeDisplay(data);
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
      name: 'AnuncioConceitoAdsRedeDisplay',
      plural: 'AnuncioConceitoAdsRedeDisplays',
      path: 'AnuncioConceitoAdsRedeDisplays',
      idName: 'id',
      properties: {
        "nomeEmpresa": {
          name: 'nomeEmpresa',
          type: 'string'
        },
        "titulo": {
          name: 'titulo',
          type: 'string'
        },
        "tituloLongo": {
          name: 'tituloLongo',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "imagemConjuntoId": {
          name: 'imagemConjuntoId',
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
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
      },
      relations: {
        imagemConjunto: {
          name: 'imagemConjunto',
          type: 'ImagemConjunto',
          model: 'ImagemConjunto',
          relationType: 'belongsTo',
                  keyFrom: 'imagemConjuntoId',
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
        produtoProprio: {
          name: 'produtoProprio',
          type: 'ProdutoProprio',
          model: 'ProdutoProprio',
          relationType: 'belongsTo',
                  keyFrom: 'produtoProprioId',
          keyTo: 'id'
        },
        anuncioCampanhaAdsRedeDisplays: {
          name: 'anuncioCampanhaAdsRedeDisplays',
          type: 'AnuncioCampanhaAdsRedeDisplay[]',
          model: 'AnuncioCampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'anuncioConceitoAdsRedeDisplayId'
        },
        campanhaAdsRedeDisplays: {
          name: 'campanhaAdsRedeDisplays',
          type: 'CampanhaAdsRedeDisplay[]',
          model: 'CampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'anuncioConceitoAdsRedeDisplayId'
        },
      }
    }
  }
}
