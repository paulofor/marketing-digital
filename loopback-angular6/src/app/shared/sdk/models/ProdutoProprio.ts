/* tslint:disable */
import {
  ContaGoogle,
  CampanhaAdsRedeDisplay,
  ImagemConjunto,
  PixelGoogle,
  ProdutoProprioVersao,
  VersaoPaginaVenda,
  DalleSolicitacaoImagem,
  ImagemPaginaVenda,
  PublicoAlvoAdsPalavra,
  AnuncioConceitoAdsRedeDisplay,
  VideoVsl,
  PaginaVendaVsl,
  WhatsappGrupo,
  AgendaCampanha,
  ConteudoProdutoKiwify,
  TentativaOferta,
  PaginaVendaAberta,
  EntregavelProduto,
  PromptItem,
  IdeiaUnica,
  CheckoutProdutoProprio,
  MetaAdsCampanha,
  MetaAdsAnuncio,
  CriativoAnuncio,
  MetaAdsPixelVenda,
  WhatsappGrupoPadraoMensagem,
  PaginaWhatsappGrupo
} from '../index';

declare var Object: any;
export interface ProdutoProprioInterface {
  "nome"?: string;
  "status"?: string;
  "urlKiwify"?: string;
  "urlIconePaginaVenda"?: string;
  "promptEspecialista"?: string;
  "contaGoogleId"?: number;
  "id"?: number;
  contaGoogle?: ContaGoogle;
  campanhaAdsRedeDisplays?: CampanhaAdsRedeDisplay[];
  imagemConjuntos?: ImagemConjunto[];
  pixelGoogles?: PixelGoogle[];
  produtoProprioVersaos?: ProdutoProprioVersao[];
  versaoPaginaVendas?: VersaoPaginaVenda[];
  dalleSolicitacaoImagems?: DalleSolicitacaoImagem[];
  imagemPaginaVendas?: ImagemPaginaVenda[];
  publicoAlvoAdsPalavras?: PublicoAlvoAdsPalavra[];
  anuncioConceitoAdsRedeDisplays?: AnuncioConceitoAdsRedeDisplay[];
  videoVsls?: VideoVsl[];
  paginaVendaVsls?: PaginaVendaVsl[];
  whatsappGrupos?: WhatsappGrupo[];
  agendaCampanhas?: AgendaCampanha[];
  conteudoProdutoKiwifys?: ConteudoProdutoKiwify[];
  tentativaOfertas?: TentativaOferta[];
  paginaVendaAbertas?: PaginaVendaAberta[];
  entregavelProdutos?: EntregavelProduto[];
  promptItems?: PromptItem[];
  ideiaUnicas?: IdeiaUnica[];
  checkoutProdutoProprios?: CheckoutProdutoProprio[];
  metaAdsCampanhas?: MetaAdsCampanha[];
  metaAdsAnuncios?: MetaAdsAnuncio[];
  criativoAnuncios?: CriativoAnuncio[];
  metaAdsPixelVendas?: MetaAdsPixelVenda[];
  whatsappGrupoPadraoMensagems?: WhatsappGrupoPadraoMensagem[];
  paginaWhatsappGrupos?: PaginaWhatsappGrupo[];
}

export class ProdutoProprio implements ProdutoProprioInterface {
  "nome": string;
  "status": string;
  "urlKiwify": string;
  "urlIconePaginaVenda": string;
  "promptEspecialista": string;
  "contaGoogleId": number;
  "id": number;
  contaGoogle: ContaGoogle;
  campanhaAdsRedeDisplays: CampanhaAdsRedeDisplay[];
  imagemConjuntos: ImagemConjunto[];
  pixelGoogles: PixelGoogle[];
  produtoProprioVersaos: ProdutoProprioVersao[];
  versaoPaginaVendas: VersaoPaginaVenda[];
  dalleSolicitacaoImagems: DalleSolicitacaoImagem[];
  imagemPaginaVendas: ImagemPaginaVenda[];
  publicoAlvoAdsPalavras: PublicoAlvoAdsPalavra[];
  anuncioConceitoAdsRedeDisplays: AnuncioConceitoAdsRedeDisplay[];
  videoVsls: VideoVsl[];
  paginaVendaVsls: PaginaVendaVsl[];
  whatsappGrupos: WhatsappGrupo[];
  agendaCampanhas: AgendaCampanha[];
  conteudoProdutoKiwifys: ConteudoProdutoKiwify[];
  tentativaOfertas: TentativaOferta[];
  paginaVendaAbertas: PaginaVendaAberta[];
  entregavelProdutos: EntregavelProduto[];
  promptItems: PromptItem[];
  ideiaUnicas: IdeiaUnica[];
  checkoutProdutoProprios: CheckoutProdutoProprio[];
  metaAdsCampanhas: MetaAdsCampanha[];
  metaAdsAnuncios: MetaAdsAnuncio[];
  criativoAnuncios: CriativoAnuncio[];
  metaAdsPixelVendas: MetaAdsPixelVenda[];
  whatsappGrupoPadraoMensagems: WhatsappGrupoPadraoMensagem[];
  paginaWhatsappGrupos: PaginaWhatsappGrupo[];
  constructor(data?: ProdutoProprioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProdutoProprio`.
   */
  public static getModelName() {
    return "ProdutoProprio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProdutoProprio for dynamic purposes.
  **/
  public static factory(data: ProdutoProprioInterface): ProdutoProprio{
    return new ProdutoProprio(data);
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
      name: 'ProdutoProprio',
      plural: 'ProdutoProprios',
      path: 'ProdutoProprios',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "urlKiwify": {
          name: 'urlKiwify',
          type: 'string'
        },
        "urlIconePaginaVenda": {
          name: 'urlIconePaginaVenda',
          type: 'string'
        },
        "promptEspecialista": {
          name: 'promptEspecialista',
          type: 'string'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
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
        campanhaAdsRedeDisplays: {
          name: 'campanhaAdsRedeDisplays',
          type: 'CampanhaAdsRedeDisplay[]',
          model: 'CampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        imagemConjuntos: {
          name: 'imagemConjuntos',
          type: 'ImagemConjunto[]',
          model: 'ImagemConjunto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        pixelGoogles: {
          name: 'pixelGoogles',
          type: 'PixelGoogle[]',
          model: 'PixelGoogle',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        produtoProprioVersaos: {
          name: 'produtoProprioVersaos',
          type: 'ProdutoProprioVersao[]',
          model: 'ProdutoProprioVersao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        versaoPaginaVendas: {
          name: 'versaoPaginaVendas',
          type: 'VersaoPaginaVenda[]',
          model: 'VersaoPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        dalleSolicitacaoImagems: {
          name: 'dalleSolicitacaoImagems',
          type: 'DalleSolicitacaoImagem[]',
          model: 'DalleSolicitacaoImagem',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        imagemPaginaVendas: {
          name: 'imagemPaginaVendas',
          type: 'ImagemPaginaVenda[]',
          model: 'ImagemPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        publicoAlvoAdsPalavras: {
          name: 'publicoAlvoAdsPalavras',
          type: 'PublicoAlvoAdsPalavra[]',
          model: 'PublicoAlvoAdsPalavra',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        anuncioConceitoAdsRedeDisplays: {
          name: 'anuncioConceitoAdsRedeDisplays',
          type: 'AnuncioConceitoAdsRedeDisplay[]',
          model: 'AnuncioConceitoAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        videoVsls: {
          name: 'videoVsls',
          type: 'VideoVsl[]',
          model: 'VideoVsl',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        paginaVendaVsls: {
          name: 'paginaVendaVsls',
          type: 'PaginaVendaVsl[]',
          model: 'PaginaVendaVsl',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        whatsappGrupos: {
          name: 'whatsappGrupos',
          type: 'WhatsappGrupo[]',
          model: 'WhatsappGrupo',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        agendaCampanhas: {
          name: 'agendaCampanhas',
          type: 'AgendaCampanha[]',
          model: 'AgendaCampanha',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        conteudoProdutoKiwifys: {
          name: 'conteudoProdutoKiwifys',
          type: 'ConteudoProdutoKiwify[]',
          model: 'ConteudoProdutoKiwify',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        tentativaOfertas: {
          name: 'tentativaOfertas',
          type: 'TentativaOferta[]',
          model: 'TentativaOferta',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        paginaVendaAbertas: {
          name: 'paginaVendaAbertas',
          type: 'PaginaVendaAberta[]',
          model: 'PaginaVendaAberta',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        entregavelProdutos: {
          name: 'entregavelProdutos',
          type: 'EntregavelProduto[]',
          model: 'EntregavelProduto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        promptItems: {
          name: 'promptItems',
          type: 'PromptItem[]',
          model: 'PromptItem',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        ideiaUnicas: {
          name: 'ideiaUnicas',
          type: 'IdeiaUnica[]',
          model: 'IdeiaUnica',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        checkoutProdutoProprios: {
          name: 'checkoutProdutoProprios',
          type: 'CheckoutProdutoProprio[]',
          model: 'CheckoutProdutoProprio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        metaAdsCampanhas: {
          name: 'metaAdsCampanhas',
          type: 'MetaAdsCampanha[]',
          model: 'MetaAdsCampanha',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        metaAdsAnuncios: {
          name: 'metaAdsAnuncios',
          type: 'MetaAdsAnuncio[]',
          model: 'MetaAdsAnuncio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        criativoAnuncios: {
          name: 'criativoAnuncios',
          type: 'CriativoAnuncio[]',
          model: 'CriativoAnuncio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        metaAdsPixelVendas: {
          name: 'metaAdsPixelVendas',
          type: 'MetaAdsPixelVenda[]',
          model: 'MetaAdsPixelVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        whatsappGrupoPadraoMensagems: {
          name: 'whatsappGrupoPadraoMensagems',
          type: 'WhatsappGrupoPadraoMensagem[]',
          model: 'WhatsappGrupoPadraoMensagem',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
        paginaWhatsappGrupos: {
          name: 'paginaWhatsappGrupos',
          type: 'PaginaWhatsappGrupo[]',
          model: 'PaginaWhatsappGrupo',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
      }
    }
  }
}
