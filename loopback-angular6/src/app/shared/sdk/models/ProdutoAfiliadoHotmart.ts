/* tslint:disable */
import {
  VisitaProdutoHotmart,
  IdeiaPalavraChave,
  CampanhaAdsTeste,
  AnuncioAds,
  PixelGoogle,
  ContaGoogle,
  CampanhaAdsMetrica,
  LoadPaginaVenda,
  SolicitacaoCheckout,
  PlanoProduto,
  LinkCheckout,
  PrecoProdutoAfiliado,
  AnuncioAdsDisplay,
  ProdutoAfiliadoHotlink,
  TagIdSecaoPaginaVenda,
  CampanhaAdsRedeDisplay,
  PublicoAlvoAds,
  PublicoAlvoAdsDiario,
  PaginaVenda,
  ImagemConjunto,
  VersaoPaginaVenda,
  DalleSolicitacaoImagem,
  PaginaVendaPropria,
  PublicoAlvoAdsPalavra,
  ProdutoPublicoAdsPalavra,
  PixelProdutoHotmartConta,
  PixelProdutoHotmartContaCheckout,
  ProdutoHotmartConta,
  AnuncioConceitoAdsRedeDisplay,
  MetaAdsCampanha,
  MetaAdsPixelVenda,
  MetaAdsPublico,
  FrameworkPublicoInteresse
} from '../index';

declare var Object: any;
export interface ProdutoAfiliadoHotmartInterface {
  "nome"?: string;
  "urlFinal"?: string;
  "urlTracking"?: string;
  "geraTesteCampanha"?: number;
  "hotmartId"?: number;
  "sigla"?: string;
  "pixelGoogleId"?: number;
  "criaPixelVenda"?: number;
  "pixelGooglePaginaVendaId"?: number;
  "precoReal"?: number;
  "vendaTotal"?: number;
  "qtdeVenda"?: number;
  "trabalho"?: number;
  "urlPropria"?: string;
  "complementoAnuncio"?: string;
  "rejeicaoUrlOriginal"?: number;
  "precoMedioProduto"?: number;
  "lucroMedioProduto"?: number;
  "comentario"?: string;
  "percentualComissaoAtual"?: number;
  "urlYouTube"?: string;
  "contaGoogleRemarketingId"?: number;
  "pixelGoogleCheckoutId"?: number;
  "hotmartUcode"?: string;
  "tagIdVideoVenda"?: string;
  "salesPage"?: string;
  "publicProfileLink"?: string;
  "temperaturaAtual"?: number;
  "possuiImagemRedeDisplay"?: number;
  "cpaInicial"?: number;
  "urlPresell"?: string;
  "urlRaizPaginaVendaPropria"?: string;
  "ativo"?: number;
  "afiliacaoValor"?: number;
  "afiliacaoPercentual"?: number;
  "cpaIdeal"?: number;
  "cpaMaximo"?: number;
  "contaGoogleId"?: number;
  visitaProdutoHotmarts?: VisitaProdutoHotmart[];
  ideiaPalavraChaves?: IdeiaPalavraChave[];
  campanhaAdsTestes?: CampanhaAdsTeste[];
  anuncioAds?: AnuncioAds[];
  pixelGoogle?: PixelGoogle;
  pixelGooglePaginaVenda?: PixelGoogle;
  pixelGoogleCheckout?: PixelGoogle;
  contaGoogle?: ContaGoogle;
  contaRemarketing?: ContaGoogle;
  campanhaAdsMetricas?: CampanhaAdsMetrica[];
  loadPaginaVendas?: LoadPaginaVenda[];
  solicitacaoCheckouts?: SolicitacaoCheckout[];
  planoProdutos?: PlanoProduto[];
  linkCheckouts?: LinkCheckout[];
  precoProdutoAfiliados?: PrecoProdutoAfiliado[];
  anuncioAdsDisplays?: AnuncioAdsDisplay[];
  produtoAfiliadoHotlinks?: ProdutoAfiliadoHotlink[];
  tagIdSecaoPaginaVendas?: TagIdSecaoPaginaVenda[];
  campanhaAdsRedeDisplays?: CampanhaAdsRedeDisplay[];
  publicoAlvoAds?: PublicoAlvoAds[];
  publicoAlvoAdsDiarios?: PublicoAlvoAdsDiario[];
  paginaVendas?: PaginaVenda[];
  imagemConjuntos?: ImagemConjunto[];
  versaoPaginaVendas?: VersaoPaginaVenda[];
  dalleSolicitacaoImagems?: DalleSolicitacaoImagem[];
  paginaVendaProprias?: PaginaVendaPropria[];
  publicoAlvoAdsPalavras?: PublicoAlvoAdsPalavra[];
  produtoPublicoAdsPalavras?: ProdutoPublicoAdsPalavra[];
  pixelProdutoHotmartContas?: PixelProdutoHotmartConta[];
  pixelProdutoHotmartContaCheckouts?: PixelProdutoHotmartContaCheckout[];
  produtoHotmartContas?: ProdutoHotmartConta[];
  anuncioConceitoAdsRedeDisplays?: AnuncioConceitoAdsRedeDisplay[];
  metaAdsCampanhas?: MetaAdsCampanha[];
  metaAdsPixelVendas?: MetaAdsPixelVenda[];
  metaAdsPublicos?: MetaAdsPublico[];
  frameworkPublicoInteresses?: FrameworkPublicoInteresse[];
}

export class ProdutoAfiliadoHotmart implements ProdutoAfiliadoHotmartInterface {
  "nome": string;
  "urlFinal": string;
  "urlTracking": string;
  "geraTesteCampanha": number;
  "hotmartId": number;
  "sigla": string;
  "pixelGoogleId": number;
  "criaPixelVenda": number;
  "pixelGooglePaginaVendaId": number;
  "precoReal": number;
  "vendaTotal": number;
  "qtdeVenda": number;
  "trabalho": number;
  "urlPropria": string;
  "complementoAnuncio": string;
  "rejeicaoUrlOriginal": number;
  "precoMedioProduto": number;
  "lucroMedioProduto": number;
  "comentario": string;
  "percentualComissaoAtual": number;
  "urlYouTube": string;
  "contaGoogleRemarketingId": number;
  "pixelGoogleCheckoutId": number;
  "hotmartUcode": string;
  "tagIdVideoVenda": string;
  "salesPage": string;
  "publicProfileLink": string;
  "temperaturaAtual": number;
  "possuiImagemRedeDisplay": number;
  "cpaInicial": number;
  "urlPresell": string;
  "urlRaizPaginaVendaPropria": string;
  "ativo": number;
  "afiliacaoValor": number;
  "afiliacaoPercentual": number;
  "cpaIdeal": number;
  "cpaMaximo": number;
  "contaGoogleId": number;
  visitaProdutoHotmarts: VisitaProdutoHotmart[];
  ideiaPalavraChaves: IdeiaPalavraChave[];
  campanhaAdsTestes: CampanhaAdsTeste[];
  anuncioAds: AnuncioAds[];
  pixelGoogle: PixelGoogle;
  pixelGooglePaginaVenda: PixelGoogle;
  pixelGoogleCheckout: PixelGoogle;
  contaGoogle: ContaGoogle;
  contaRemarketing: ContaGoogle;
  campanhaAdsMetricas: CampanhaAdsMetrica[];
  loadPaginaVendas: LoadPaginaVenda[];
  solicitacaoCheckouts: SolicitacaoCheckout[];
  planoProdutos: PlanoProduto[];
  linkCheckouts: LinkCheckout[];
  precoProdutoAfiliados: PrecoProdutoAfiliado[];
  anuncioAdsDisplays: AnuncioAdsDisplay[];
  produtoAfiliadoHotlinks: ProdutoAfiliadoHotlink[];
  tagIdSecaoPaginaVendas: TagIdSecaoPaginaVenda[];
  campanhaAdsRedeDisplays: CampanhaAdsRedeDisplay[];
  publicoAlvoAds: PublicoAlvoAds[];
  publicoAlvoAdsDiarios: PublicoAlvoAdsDiario[];
  paginaVendas: PaginaVenda[];
  imagemConjuntos: ImagemConjunto[];
  versaoPaginaVendas: VersaoPaginaVenda[];
  dalleSolicitacaoImagems: DalleSolicitacaoImagem[];
  paginaVendaProprias: PaginaVendaPropria[];
  publicoAlvoAdsPalavras: PublicoAlvoAdsPalavra[];
  produtoPublicoAdsPalavras: ProdutoPublicoAdsPalavra[];
  pixelProdutoHotmartContas: PixelProdutoHotmartConta[];
  pixelProdutoHotmartContaCheckouts: PixelProdutoHotmartContaCheckout[];
  produtoHotmartContas: ProdutoHotmartConta[];
  anuncioConceitoAdsRedeDisplays: AnuncioConceitoAdsRedeDisplay[];
  metaAdsCampanhas: MetaAdsCampanha[];
  metaAdsPixelVendas: MetaAdsPixelVenda[];
  metaAdsPublicos: MetaAdsPublico[];
  frameworkPublicoInteresses: FrameworkPublicoInteresse[];
  constructor(data?: ProdutoAfiliadoHotmartInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProdutoAfiliadoHotmart`.
   */
  public static getModelName() {
    return "ProdutoAfiliadoHotmart";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProdutoAfiliadoHotmart for dynamic purposes.
  **/
  public static factory(data: ProdutoAfiliadoHotmartInterface): ProdutoAfiliadoHotmart{
    return new ProdutoAfiliadoHotmart(data);
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
      name: 'ProdutoAfiliadoHotmart',
      plural: 'ProdutoAfiliadoHotmarts',
      path: 'ProdutoAfiliadoHotmarts',
      idName: 'hotmartId',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "urlFinal": {
          name: 'urlFinal',
          type: 'string'
        },
        "urlTracking": {
          name: 'urlTracking',
          type: 'string'
        },
        "geraTesteCampanha": {
          name: 'geraTesteCampanha',
          type: 'number'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "sigla": {
          name: 'sigla',
          type: 'string'
        },
        "pixelGoogleId": {
          name: 'pixelGoogleId',
          type: 'number'
        },
        "criaPixelVenda": {
          name: 'criaPixelVenda',
          type: 'number'
        },
        "pixelGooglePaginaVendaId": {
          name: 'pixelGooglePaginaVendaId',
          type: 'number'
        },
        "precoReal": {
          name: 'precoReal',
          type: 'number'
        },
        "vendaTotal": {
          name: 'vendaTotal',
          type: 'number'
        },
        "qtdeVenda": {
          name: 'qtdeVenda',
          type: 'number'
        },
        "trabalho": {
          name: 'trabalho',
          type: 'number'
        },
        "urlPropria": {
          name: 'urlPropria',
          type: 'string'
        },
        "complementoAnuncio": {
          name: 'complementoAnuncio',
          type: 'string'
        },
        "rejeicaoUrlOriginal": {
          name: 'rejeicaoUrlOriginal',
          type: 'number'
        },
        "precoMedioProduto": {
          name: 'precoMedioProduto',
          type: 'number'
        },
        "lucroMedioProduto": {
          name: 'lucroMedioProduto',
          type: 'number'
        },
        "comentario": {
          name: 'comentario',
          type: 'string'
        },
        "percentualComissaoAtual": {
          name: 'percentualComissaoAtual',
          type: 'number'
        },
        "urlYouTube": {
          name: 'urlYouTube',
          type: 'string'
        },
        "contaGoogleRemarketingId": {
          name: 'contaGoogleRemarketingId',
          type: 'number'
        },
        "pixelGoogleCheckoutId": {
          name: 'pixelGoogleCheckoutId',
          type: 'number'
        },
        "hotmartUcode": {
          name: 'hotmartUcode',
          type: 'string'
        },
        "tagIdVideoVenda": {
          name: 'tagIdVideoVenda',
          type: 'string'
        },
        "salesPage": {
          name: 'salesPage',
          type: 'string'
        },
        "publicProfileLink": {
          name: 'publicProfileLink',
          type: 'string'
        },
        "temperaturaAtual": {
          name: 'temperaturaAtual',
          type: 'number'
        },
        "possuiImagemRedeDisplay": {
          name: 'possuiImagemRedeDisplay',
          type: 'number'
        },
        "cpaInicial": {
          name: 'cpaInicial',
          type: 'number'
        },
        "urlPresell": {
          name: 'urlPresell',
          type: 'string'
        },
        "urlRaizPaginaVendaPropria": {
          name: 'urlRaizPaginaVendaPropria',
          type: 'string'
        },
        "ativo": {
          name: 'ativo',
          type: 'number'
        },
        "afiliacaoValor": {
          name: 'afiliacaoValor',
          type: 'number'
        },
        "afiliacaoPercentual": {
          name: 'afiliacaoPercentual',
          type: 'number'
        },
        "cpaIdeal": {
          name: 'cpaIdeal',
          type: 'number'
        },
        "cpaMaximo": {
          name: 'cpaMaximo',
          type: 'number'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
          type: 'number'
        },
      },
      relations: {
        visitaProdutoHotmarts: {
          name: 'visitaProdutoHotmarts',
          type: 'VisitaProdutoHotmart[]',
          model: 'VisitaProdutoHotmart',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        ideiaPalavraChaves: {
          name: 'ideiaPalavraChaves',
          type: 'IdeiaPalavraChave[]',
          model: 'IdeiaPalavraChave',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        campanhaAdsTestes: {
          name: 'campanhaAdsTestes',
          type: 'CampanhaAdsTeste[]',
          model: 'CampanhaAdsTeste',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'produtoAfiliadoHotmartId'
        },
        anuncioAds: {
          name: 'anuncioAds',
          type: 'AnuncioAds[]',
          model: 'AnuncioAds',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'produtoAfiliadoHotmartId'
        },
        pixelGoogle: {
          name: 'pixelGoogle',
          type: 'PixelGoogle',
          model: 'PixelGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'pixelGoogleId',
          keyTo: 'id'
        },
        pixelGooglePaginaVenda: {
          name: 'pixelGooglePaginaVenda',
          type: 'PixelGoogle',
          model: 'PixelGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'pixelGooglePaginaVendaId',
          keyTo: 'id'
        },
        pixelGoogleCheckout: {
          name: 'pixelGoogleCheckout',
          type: 'PixelGoogle',
          model: 'PixelGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'pixelGoogleCheckoutId',
          keyTo: 'id'
        },
        contaGoogle: {
          name: 'contaGoogle',
          type: 'ContaGoogle',
          model: 'ContaGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'contaGoogleId',
          keyTo: 'id'
        },
        contaRemarketing: {
          name: 'contaRemarketing',
          type: 'ContaGoogle',
          model: 'ContaGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'contaGoogleRemarketingId',
          keyTo: 'id'
        },
        campanhaAdsMetricas: {
          name: 'campanhaAdsMetricas',
          type: 'CampanhaAdsMetrica[]',
          model: 'CampanhaAdsMetrica',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        loadPaginaVendas: {
          name: 'loadPaginaVendas',
          type: 'LoadPaginaVenda[]',
          model: 'LoadPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        solicitacaoCheckouts: {
          name: 'solicitacaoCheckouts',
          type: 'SolicitacaoCheckout[]',
          model: 'SolicitacaoCheckout',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        planoProdutos: {
          name: 'planoProdutos',
          type: 'PlanoProduto[]',
          model: 'PlanoProduto',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        linkCheckouts: {
          name: 'linkCheckouts',
          type: 'LinkCheckout[]',
          model: 'LinkCheckout',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        precoProdutoAfiliados: {
          name: 'precoProdutoAfiliados',
          type: 'PrecoProdutoAfiliado[]',
          model: 'PrecoProdutoAfiliado',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        anuncioAdsDisplays: {
          name: 'anuncioAdsDisplays',
          type: 'AnuncioAdsDisplay[]',
          model: 'AnuncioAdsDisplay',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        produtoAfiliadoHotlinks: {
          name: 'produtoAfiliadoHotlinks',
          type: 'ProdutoAfiliadoHotlink[]',
          model: 'ProdutoAfiliadoHotlink',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        tagIdSecaoPaginaVendas: {
          name: 'tagIdSecaoPaginaVendas',
          type: 'TagIdSecaoPaginaVenda[]',
          model: 'TagIdSecaoPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'produtoAfiliadoHotmartId'
        },
        campanhaAdsRedeDisplays: {
          name: 'campanhaAdsRedeDisplays',
          type: 'CampanhaAdsRedeDisplay[]',
          model: 'CampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        publicoAlvoAds: {
          name: 'publicoAlvoAds',
          type: 'PublicoAlvoAds[]',
          model: 'PublicoAlvoAds',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        publicoAlvoAdsDiarios: {
          name: 'publicoAlvoAdsDiarios',
          type: 'PublicoAlvoAdsDiario[]',
          model: 'PublicoAlvoAdsDiario',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        paginaVendas: {
          name: 'paginaVendas',
          type: 'PaginaVenda[]',
          model: 'PaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        imagemConjuntos: {
          name: 'imagemConjuntos',
          type: 'ImagemConjunto[]',
          model: 'ImagemConjunto',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        versaoPaginaVendas: {
          name: 'versaoPaginaVendas',
          type: 'VersaoPaginaVenda[]',
          model: 'VersaoPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        dalleSolicitacaoImagems: {
          name: 'dalleSolicitacaoImagems',
          type: 'DalleSolicitacaoImagem[]',
          model: 'DalleSolicitacaoImagem',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        paginaVendaProprias: {
          name: 'paginaVendaProprias',
          type: 'PaginaVendaPropria[]',
          model: 'PaginaVendaPropria',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        publicoAlvoAdsPalavras: {
          name: 'publicoAlvoAdsPalavras',
          type: 'PublicoAlvoAdsPalavra[]',
          model: 'PublicoAlvoAdsPalavra',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        produtoPublicoAdsPalavras: {
          name: 'produtoPublicoAdsPalavras',
          type: 'ProdutoPublicoAdsPalavra[]',
          model: 'ProdutoPublicoAdsPalavra',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        pixelProdutoHotmartContas: {
          name: 'pixelProdutoHotmartContas',
          type: 'PixelProdutoHotmartConta[]',
          model: 'PixelProdutoHotmartConta',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        pixelProdutoHotmartContaCheckouts: {
          name: 'pixelProdutoHotmartContaCheckouts',
          type: 'PixelProdutoHotmartContaCheckout[]',
          model: 'PixelProdutoHotmartContaCheckout',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        produtoHotmartContas: {
          name: 'produtoHotmartContas',
          type: 'ProdutoHotmartConta[]',
          model: 'ProdutoHotmartConta',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        anuncioConceitoAdsRedeDisplays: {
          name: 'anuncioConceitoAdsRedeDisplays',
          type: 'AnuncioConceitoAdsRedeDisplay[]',
          model: 'AnuncioConceitoAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        metaAdsCampanhas: {
          name: 'metaAdsCampanhas',
          type: 'MetaAdsCampanha[]',
          model: 'MetaAdsCampanha',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        metaAdsPixelVendas: {
          name: 'metaAdsPixelVendas',
          type: 'MetaAdsPixelVenda[]',
          model: 'MetaAdsPixelVenda',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        metaAdsPublicos: {
          name: 'metaAdsPublicos',
          type: 'MetaAdsPublico[]',
          model: 'MetaAdsPublico',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        frameworkPublicoInteresses: {
          name: 'frameworkPublicoInteresses',
          type: 'FrameworkPublicoInteresse[]',
          model: 'FrameworkPublicoInteresse',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
      }
    }
  }
}
