/* tslint:disable */
import {
  CampanhaAdsTeste,
  PixelGoogle,
  ProdutoAfiliadoHotmart,
  CampanhaAdsMetrica,
  ContaGoogleMetricaMes,
  CampanhaAdsMetricaIntraday,
  CampanhaAdsRedeDisplay,
  PublicoAlvoAdsDiario,
  SegmentoMercadoAdsPersonalizado,
  ProdutoProprio,
  VersaoPaginaVenda,
  PixelAdsSegmentoMercado,
  ContaPublicoAlvoAdsPalavra,
  PublicoAlvoAdsPalavra,
  PixelProdutoHotmartConta,
  PixelProdutoHotmartContaCheckout,
  ProdutoHotmartConta,
  ProdutoAfiliadoGenerico
} from '../index';

declare var Object: any;
export interface ContaGoogleInterface {
  "nome"?: string;
  "gmail"?: string;
  "dataCriacao"?: Date;
  "ativo"?: number;
  "senha"?: string;
  "urlAds"?: string;
  "idAds"?: string;
  "suspensa"?: number;
  "tipo"?: string;
  "codigoTagRemarketing"?: string;
  "snippetTagRemarketing"?: string;
  "hitsTag"?: number;
  "dataAcessoIntraday"?: Date;
  "id"?: number;
  campanhaAdsTestes?: CampanhaAdsTeste[];
  pixelGoogles?: PixelGoogle[];
  produtoAfiliadoHotmarts?: ProdutoAfiliadoHotmart[];
  produtoAfiliadoRemarketing?: ProdutoAfiliadoHotmart[];
  campanhaAdsMetricas?: CampanhaAdsMetrica[];
  contaGoogleMetricaMes?: ContaGoogleMetricaMes[];
  campanhaAdsMetricaIntradays?: CampanhaAdsMetricaIntraday[];
  campanhaAdsRedeDisplays?: CampanhaAdsRedeDisplay[];
  publicoAlvoAdsDiarios?: PublicoAlvoAdsDiario[];
  segmentoMercadoAdsPersonalizados?: SegmentoMercadoAdsPersonalizado[];
  produtoProprios?: ProdutoProprio[];
  versaoPaginaVendas?: VersaoPaginaVenda[];
  pixelAdsSegmentoMercados?: PixelAdsSegmentoMercado[];
  contaPublicoAlvoAdsPalavras?: ContaPublicoAlvoAdsPalavra[];
  publicoAlvoAdsPalavras?: PublicoAlvoAdsPalavra[];
  pixelProdutoHotmartContas?: PixelProdutoHotmartConta[];
  pixelProdutoHotmartContaCheckouts?: PixelProdutoHotmartContaCheckout[];
  produtoHotmartContas?: ProdutoHotmartConta[];
  produtoAfiliadoGenericos?: ProdutoAfiliadoGenerico[];
}

export class ContaGoogle implements ContaGoogleInterface {
  "nome": string;
  "gmail": string;
  "dataCriacao": Date;
  "ativo": number;
  "senha": string;
  "urlAds": string;
  "idAds": string;
  "suspensa": number;
  "tipo": string;
  "codigoTagRemarketing": string;
  "snippetTagRemarketing": string;
  "hitsTag": number;
  "dataAcessoIntraday": Date;
  "id": number;
  campanhaAdsTestes: CampanhaAdsTeste[];
  pixelGoogles: PixelGoogle[];
  produtoAfiliadoHotmarts: ProdutoAfiliadoHotmart[];
  produtoAfiliadoRemarketing: ProdutoAfiliadoHotmart[];
  campanhaAdsMetricas: CampanhaAdsMetrica[];
  contaGoogleMetricaMes: ContaGoogleMetricaMes[];
  campanhaAdsMetricaIntradays: CampanhaAdsMetricaIntraday[];
  campanhaAdsRedeDisplays: CampanhaAdsRedeDisplay[];
  publicoAlvoAdsDiarios: PublicoAlvoAdsDiario[];
  segmentoMercadoAdsPersonalizados: SegmentoMercadoAdsPersonalizado[];
  produtoProprios: ProdutoProprio[];
  versaoPaginaVendas: VersaoPaginaVenda[];
  pixelAdsSegmentoMercados: PixelAdsSegmentoMercado[];
  contaPublicoAlvoAdsPalavras: ContaPublicoAlvoAdsPalavra[];
  publicoAlvoAdsPalavras: PublicoAlvoAdsPalavra[];
  pixelProdutoHotmartContas: PixelProdutoHotmartConta[];
  pixelProdutoHotmartContaCheckouts: PixelProdutoHotmartContaCheckout[];
  produtoHotmartContas: ProdutoHotmartConta[];
  produtoAfiliadoGenericos: ProdutoAfiliadoGenerico[];
  constructor(data?: ContaGoogleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContaGoogle`.
   */
  public static getModelName() {
    return "ContaGoogle";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContaGoogle for dynamic purposes.
  **/
  public static factory(data: ContaGoogleInterface): ContaGoogle{
    return new ContaGoogle(data);
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
      name: 'ContaGoogle',
      plural: 'ContaGoogles',
      path: 'ContaGoogles',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "gmail": {
          name: 'gmail',
          type: 'string'
        },
        "dataCriacao": {
          name: 'dataCriacao',
          type: 'Date'
        },
        "ativo": {
          name: 'ativo',
          type: 'number'
        },
        "senha": {
          name: 'senha',
          type: 'string'
        },
        "urlAds": {
          name: 'urlAds',
          type: 'string'
        },
        "idAds": {
          name: 'idAds',
          type: 'string'
        },
        "suspensa": {
          name: 'suspensa',
          type: 'number'
        },
        "tipo": {
          name: 'tipo',
          type: 'string'
        },
        "codigoTagRemarketing": {
          name: 'codigoTagRemarketing',
          type: 'string'
        },
        "snippetTagRemarketing": {
          name: 'snippetTagRemarketing',
          type: 'string'
        },
        "hitsTag": {
          name: 'hitsTag',
          type: 'number'
        },
        "dataAcessoIntraday": {
          name: 'dataAcessoIntraday',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        campanhaAdsTestes: {
          name: 'campanhaAdsTestes',
          type: 'CampanhaAdsTeste[]',
          model: 'CampanhaAdsTeste',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        pixelGoogles: {
          name: 'pixelGoogles',
          type: 'PixelGoogle[]',
          model: 'PixelGoogle',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        produtoAfiliadoHotmarts: {
          name: 'produtoAfiliadoHotmarts',
          type: 'ProdutoAfiliadoHotmart[]',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        produtoAfiliadoRemarketing: {
          name: 'produtoAfiliadoRemarketing',
          type: 'ProdutoAfiliadoHotmart[]',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleRemarketingId'
        },
        campanhaAdsMetricas: {
          name: 'campanhaAdsMetricas',
          type: 'CampanhaAdsMetrica[]',
          model: 'CampanhaAdsMetrica',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        contaGoogleMetricaMes: {
          name: 'contaGoogleMetricaMes',
          type: 'ContaGoogleMetricaMes[]',
          model: 'ContaGoogleMetricaMes',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        campanhaAdsMetricaIntradays: {
          name: 'campanhaAdsMetricaIntradays',
          type: 'CampanhaAdsMetricaIntraday[]',
          model: 'CampanhaAdsMetricaIntraday',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        campanhaAdsRedeDisplays: {
          name: 'campanhaAdsRedeDisplays',
          type: 'CampanhaAdsRedeDisplay[]',
          model: 'CampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        publicoAlvoAdsDiarios: {
          name: 'publicoAlvoAdsDiarios',
          type: 'PublicoAlvoAdsDiario[]',
          model: 'PublicoAlvoAdsDiario',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        segmentoMercadoAdsPersonalizados: {
          name: 'segmentoMercadoAdsPersonalizados',
          type: 'SegmentoMercadoAdsPersonalizado[]',
          model: 'SegmentoMercadoAdsPersonalizado',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        produtoProprios: {
          name: 'produtoProprios',
          type: 'ProdutoProprio[]',
          model: 'ProdutoProprio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        versaoPaginaVendas: {
          name: 'versaoPaginaVendas',
          type: 'VersaoPaginaVenda[]',
          model: 'VersaoPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        pixelAdsSegmentoMercados: {
          name: 'pixelAdsSegmentoMercados',
          type: 'PixelAdsSegmentoMercado[]',
          model: 'PixelAdsSegmentoMercado',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        contaPublicoAlvoAdsPalavras: {
          name: 'contaPublicoAlvoAdsPalavras',
          type: 'ContaPublicoAlvoAdsPalavra[]',
          model: 'ContaPublicoAlvoAdsPalavra',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        publicoAlvoAdsPalavras: {
          name: 'publicoAlvoAdsPalavras',
          type: 'PublicoAlvoAdsPalavra[]',
          model: 'PublicoAlvoAdsPalavra',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        pixelProdutoHotmartContas: {
          name: 'pixelProdutoHotmartContas',
          type: 'PixelProdutoHotmartConta[]',
          model: 'PixelProdutoHotmartConta',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        pixelProdutoHotmartContaCheckouts: {
          name: 'pixelProdutoHotmartContaCheckouts',
          type: 'PixelProdutoHotmartContaCheckout[]',
          model: 'PixelProdutoHotmartContaCheckout',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        produtoHotmartContas: {
          name: 'produtoHotmartContas',
          type: 'ProdutoHotmartConta[]',
          model: 'ProdutoHotmartConta',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
        produtoAfiliadoGenericos: {
          name: 'produtoAfiliadoGenericos',
          type: 'ProdutoAfiliadoGenerico[]',
          model: 'ProdutoAfiliadoGenerico',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaGoogleId'
        },
      }
    }
  }
}
