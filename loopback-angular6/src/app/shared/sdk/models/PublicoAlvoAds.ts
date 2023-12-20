/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  CampanhaAdsRedeDisplay,
  PaginaVenda
} from '../index';

declare var Object: any;
export interface PublicoAlvoAdsInterface {
  "nome"?: string;
  "tamanhoAtualRedePesquisa"?: number;
  "tamanhoAtualRedeDisplay"?: number;
  "tipo"?: string;
  "contemUrl"?: string;
  "custoFormacaoAtual"?: number;
  "custoPorPessoaAtual"?: number;
  "resourceName"?: string;
  "contaGoogleId"?: number;
  "paginaVendaId"?: number;
  "id"?: number;
  "hotmartId"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  campanhaAdsRedeDisplays?: CampanhaAdsRedeDisplay[];
  paginaVenda?: PaginaVenda;
}

export class PublicoAlvoAds implements PublicoAlvoAdsInterface {
  "nome": string;
  "tamanhoAtualRedePesquisa": number;
  "tamanhoAtualRedeDisplay": number;
  "tipo": string;
  "contemUrl": string;
  "custoFormacaoAtual": number;
  "custoPorPessoaAtual": number;
  "resourceName": string;
  "contaGoogleId": number;
  "paginaVendaId": number;
  "id": number;
  "hotmartId": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  campanhaAdsRedeDisplays: CampanhaAdsRedeDisplay[];
  paginaVenda: PaginaVenda;
  constructor(data?: PublicoAlvoAdsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PublicoAlvoAds`.
   */
  public static getModelName() {
    return "PublicoAlvoAds";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PublicoAlvoAds for dynamic purposes.
  **/
  public static factory(data: PublicoAlvoAdsInterface): PublicoAlvoAds{
    return new PublicoAlvoAds(data);
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
      name: 'PublicoAlvoAds',
      plural: 'PublicoAlvoAds',
      path: 'PublicoAlvoAds',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "tamanhoAtualRedePesquisa": {
          name: 'tamanhoAtualRedePesquisa',
          type: 'number'
        },
        "tamanhoAtualRedeDisplay": {
          name: 'tamanhoAtualRedeDisplay',
          type: 'number'
        },
        "tipo": {
          name: 'tipo',
          type: 'string'
        },
        "contemUrl": {
          name: 'contemUrl',
          type: 'string'
        },
        "custoFormacaoAtual": {
          name: 'custoFormacaoAtual',
          type: 'number'
        },
        "custoPorPessoaAtual": {
          name: 'custoPorPessoaAtual',
          type: 'number'
        },
        "resourceName": {
          name: 'resourceName',
          type: 'string'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
          type: 'number'
        },
        "paginaVendaId": {
          name: 'paginaVendaId',
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
        produtoAfiliadoHotmart: {
          name: 'produtoAfiliadoHotmart',
          type: 'ProdutoAfiliadoHotmart',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'belongsTo',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        campanhaAdsRedeDisplays: {
          name: 'campanhaAdsRedeDisplays',
          type: 'CampanhaAdsRedeDisplay[]',
          model: 'CampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'publicoAlvoAdsId'
        },
        paginaVenda: {
          name: 'paginaVenda',
          type: 'PaginaVenda',
          model: 'PaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'paginaVendaId',
          keyTo: 'id'
        },
      }
    }
  }
}
