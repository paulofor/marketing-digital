/* tslint:disable */
import {
  ContaGoogle,
  ProdutoAfiliadoHotmart,
  PublicoAlvoAds,
  PaginaVenda,
  AnuncioCampanhaAdsRedeDisplay
} from '../index';

declare var Object: any;
export interface CampanhaAdsRedeDisplayInterface {
  "nome"?: string;
  "codigoAds"?: string;
  "dataEnvioGoogle"?: Date;
  "custoAtual"?: number;
  "nomeAds"?: string;
  "codigoAdsGrupoAnuncio"?: string;
  "prontaParaEnvio"?: number;
  "codigoAdsCampanha"?: string;
  "tipoCampanha"?: string;
  "contaGoogleId"?: number;
  "produtoAfiliadoHotmartId"?: number;
  "paginaVendaId"?: number;
  "faixaHorarioCampanhaAdsId"?: number;
  "publicoAlvoAdsId"?: number;
  "id"?: number;
  contaGoogle?: ContaGoogle;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  publicoAlvoAds?: PublicoAlvoAds;
  paginaVenda?: PaginaVenda;
  anuncioCampanhaAdsRedeDisplays?: AnuncioCampanhaAdsRedeDisplay[];
}

export class CampanhaAdsRedeDisplay implements CampanhaAdsRedeDisplayInterface {
  "nome": string;
  "codigoAds": string;
  "dataEnvioGoogle": Date;
  "custoAtual": number;
  "nomeAds": string;
  "codigoAdsGrupoAnuncio": string;
  "prontaParaEnvio": number;
  "codigoAdsCampanha": string;
  "tipoCampanha": string;
  "contaGoogleId": number;
  "produtoAfiliadoHotmartId": number;
  "paginaVendaId": number;
  "faixaHorarioCampanhaAdsId": number;
  "publicoAlvoAdsId": number;
  "id": number;
  contaGoogle: ContaGoogle;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  publicoAlvoAds: PublicoAlvoAds;
  paginaVenda: PaginaVenda;
  anuncioCampanhaAdsRedeDisplays: AnuncioCampanhaAdsRedeDisplay[];
  constructor(data?: CampanhaAdsRedeDisplayInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CampanhaAdsRedeDisplay`.
   */
  public static getModelName() {
    return "CampanhaAdsRedeDisplay";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CampanhaAdsRedeDisplay for dynamic purposes.
  **/
  public static factory(data: CampanhaAdsRedeDisplayInterface): CampanhaAdsRedeDisplay{
    return new CampanhaAdsRedeDisplay(data);
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
      name: 'CampanhaAdsRedeDisplay',
      plural: 'CampanhaAdsRedeDisplays',
      path: 'CampanhaAdsRedeDisplays',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "codigoAds": {
          name: 'codigoAds',
          type: 'string'
        },
        "dataEnvioGoogle": {
          name: 'dataEnvioGoogle',
          type: 'Date'
        },
        "custoAtual": {
          name: 'custoAtual',
          type: 'number'
        },
        "nomeAds": {
          name: 'nomeAds',
          type: 'string'
        },
        "codigoAdsGrupoAnuncio": {
          name: 'codigoAdsGrupoAnuncio',
          type: 'string'
        },
        "prontaParaEnvio": {
          name: 'prontaParaEnvio',
          type: 'number'
        },
        "codigoAdsCampanha": {
          name: 'codigoAdsCampanha',
          type: 'string'
        },
        "tipoCampanha": {
          name: 'tipoCampanha',
          type: 'string'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
          type: 'number'
        },
        "produtoAfiliadoHotmartId": {
          name: 'produtoAfiliadoHotmartId',
          type: 'number'
        },
        "paginaVendaId": {
          name: 'paginaVendaId',
          type: 'number'
        },
        "faixaHorarioCampanhaAdsId": {
          name: 'faixaHorarioCampanhaAdsId',
          type: 'number'
        },
        "publicoAlvoAdsId": {
          name: 'publicoAlvoAdsId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        contaGoogle: {
          name: 'contaGoogle',
          type: 'ContaGoogle',
          model: 'ContaGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'contaGoogleId',
          keyTo: 'id'
        },
        produtoAfiliadoHotmart: {
          name: 'produtoAfiliadoHotmart',
          type: 'ProdutoAfiliadoHotmart',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'belongsTo',
                  keyFrom: 'produtoAfiliadoHotmartId',
          keyTo: 'hotmartId'
        },
        publicoAlvoAds: {
          name: 'publicoAlvoAds',
          type: 'PublicoAlvoAds',
          model: 'PublicoAlvoAds',
          relationType: 'belongsTo',
                  keyFrom: 'publicoAlvoAdsId',
          keyTo: 'id'
        },
        paginaVenda: {
          name: 'paginaVenda',
          type: 'PaginaVenda',
          model: 'PaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'paginaVendaId',
          keyTo: 'id'
        },
        anuncioCampanhaAdsRedeDisplays: {
          name: 'anuncioCampanhaAdsRedeDisplays',
          type: 'AnuncioCampanhaAdsRedeDisplay[]',
          model: 'AnuncioCampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'campanhaAdsRedeDisplayId'
        },
      }
    }
  }
}
