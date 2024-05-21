/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { PlataformaVenda } from '../../models/PlataformaVenda';
import { ProdutoPlataforma } from '../../models/ProdutoPlataforma';
import { VisitaProdutoPlataforma } from '../../models/VisitaProdutoPlataforma';
import { ProdutoHotmart } from '../../models/ProdutoHotmart';
import { VisitaProdutoHotmart } from '../../models/VisitaProdutoHotmart';
import { TokenAcesso } from '../../models/TokenAcesso';
import { IdeiaPalavraChave } from '../../models/IdeiaPalavraChave';
import { CampanhaAds } from '../../models/CampanhaAds';
import { AnuncioCampanhaAds } from '../../models/AnuncioCampanhaAds';
import { PalavraCampanhaAds } from '../../models/PalavraCampanhaAds';
import { ProdutoAfiliadoHotmart } from '../../models/ProdutoAfiliadoHotmart';
import { AgendaVisitaHotmart } from '../../models/AgendaVisitaHotmart';
import { CampanhaAdsTeste } from '../../models/CampanhaAdsTeste';
import { AnuncioAds } from '../../models/AnuncioAds';
import { ModeloCampanhaAdsTeste } from '../../models/ModeloCampanhaAdsTeste';
import { PixelGoogle } from '../../models/PixelGoogle';
import { PalavraChaveCampanhaAdsTeste } from '../../models/PalavraChaveCampanhaAdsTeste';
import { AnuncioCampanhaAdsTeste } from '../../models/AnuncioCampanhaAdsTeste';
import { ProdutoAfiliadoMetrica } from '../../models/ProdutoAfiliadoMetrica';
import { ContaGoogle } from '../../models/ContaGoogle';
import { CampanhaAdsMetrica } from '../../models/CampanhaAdsMetrica';
import { LoadPaginaVenda } from '../../models/LoadPaginaVenda';
import { SolicitacaoCheckout } from '../../models/SolicitacaoCheckout';
import { PlanoProduto } from '../../models/PlanoProduto';
import { ContaGoogleMetricaMes } from '../../models/ContaGoogleMetricaMes';
import { LinkCheckout } from '../../models/LinkCheckout';
import { CampanhaAdsMetricaIntraday } from '../../models/CampanhaAdsMetricaIntraday';
import { PrecoProdutoAfiliado } from '../../models/PrecoProdutoAfiliado';
import { AnuncioAdsDisplay } from '../../models/AnuncioAdsDisplay';
import { Visitante } from '../../models/Visitante';
import { VideoExecucao } from '../../models/VideoExecucao';
import { ProdutoAfiliadoHotlink } from '../../models/ProdutoAfiliadoHotlink';
import { TagIdSecaoPaginaVenda } from '../../models/TagIdSecaoPaginaVenda';
import { CampanhaAdsRedeDisplay } from '../../models/CampanhaAdsRedeDisplay';
import { OtimizacaoCampanhaAdsRedeDisplay } from '../../models/OtimizacaoCampanhaAdsRedeDisplay';
import { ListaRemarketingAds } from '../../models/ListaRemarketingAds';
import { PublicoAlvoAds } from '../../models/PublicoAlvoAds';
import { PublicoAlvoAdsDiario } from '../../models/PublicoAlvoAdsDiario';
import { PaginaVenda } from '../../models/PaginaVenda';
import { AnuncioCampanhaAdsDisplay } from '../../models/AnuncioCampanhaAdsDisplay';
import { ImagemConjunto } from '../../models/ImagemConjunto';
import { ProdutoAfiliadoHotmartPendente } from '../../models/ProdutoAfiliadoHotmartPendente';
import { SegmentoMercadoAdsPersonalizado } from '../../models/SegmentoMercadoAdsPersonalizado';
import { PaginaVendaSecao } from '../../models/PaginaVendaSecao';
import { SecaoWeb } from '../../models/SecaoWeb';
import { ProdutoProprio } from '../../models/ProdutoProprio';
import { ProdutoProprioVersao } from '../../models/ProdutoProprioVersao';
import { ProdutoProprioItemNivel1 } from '../../models/ProdutoProprioItemNivel1';
import { PaginaVendaScroll } from '../../models/PaginaVendaScroll';
import { EvolucaoExperimento } from '../../models/EvolucaoExperimento';
import { CampanhaAdsExperimento } from '../../models/CampanhaAdsExperimento';
import { ExperimentoModelo } from '../../models/ExperimentoModelo';
import { ModeloPaginaVenda } from '../../models/ModeloPaginaVenda';
import { PosicaoElementoPaginaVenda } from '../../models/PosicaoElementoPaginaVenda';
import { ElementoModeloPaginaVenda } from '../../models/ElementoModeloPaginaVenda';
import { VersaoPaginaVenda } from '../../models/VersaoPaginaVenda';
import { ConteudoElemento } from '../../models/ConteudoElemento';
import { DalleSolicitacaoImagem } from '../../models/DalleSolicitacaoImagem';
import { ArquivoPaginaVenda } from '../../models/ArquivoPaginaVenda';
import { ImagemPaginaVenda } from '../../models/ImagemPaginaVenda';
import { ProdutoAfiliadoClickbank } from '../../models/ProdutoAfiliadoClickbank';
import { VersaoImagemPaginaVenda } from '../../models/VersaoImagemPaginaVenda';
import { PixelAdsSegmentoMercado } from '../../models/PixelAdsSegmentoMercado';
import { PaginaVendaPropria } from '../../models/PaginaVendaPropria';
import { LoadPaginaVendaPropria } from '../../models/LoadPaginaVendaPropria';
import { ScrollPaginaVendaPropria } from '../../models/ScrollPaginaVendaPropria';
import { AnuncioCampanhaAdsRedeDisplay } from '../../models/AnuncioCampanhaAdsRedeDisplay';
import { GrupoCampanhaAdsRedeDisplay } from '../../models/GrupoCampanhaAdsRedeDisplay';
import { SolicitacaoCheckoutPaginaVendaPropria } from '../../models/SolicitacaoCheckoutPaginaVendaPropria';
import { ContaPublicoAlvoAdsPalavra } from '../../models/ContaPublicoAlvoAdsPalavra';
import { PublicoAlvoAdsPalavra } from '../../models/PublicoAlvoAdsPalavra';
import { ProdutoPublicoAdsPalavra } from '../../models/ProdutoPublicoAdsPalavra';
import { PixelProdutoHotmartConta } from '../../models/PixelProdutoHotmartConta';
import { PixelProdutoHotmartContaCheckout } from '../../models/PixelProdutoHotmartContaCheckout';
import { PixelProdutoHotmartContaCompra } from '../../models/PixelProdutoHotmartContaCompra';
import { ArtigoParaProduto } from '../../models/ArtigoParaProduto';
import { ProdutoHotmartConta } from '../../models/ProdutoHotmartConta';
import { AnuncioConceitoAdsRedeDisplay } from '../../models/AnuncioConceitoAdsRedeDisplay';
import { MetricaCampanhaAdsRedeDisplay } from '../../models/MetricaCampanhaAdsRedeDisplay';
import { VideoVsl } from '../../models/VideoVsl';
import { PaginaVendaVsl } from '../../models/PaginaVendaVsl';
import { TrechoVsl } from '../../models/TrechoVsl';
import { ModeloPaginaVendaVsl } from '../../models/ModeloPaginaVendaVsl';
import { ScriptGeraVideo } from '../../models/ScriptGeraVideo';
import { WhatsappGrupo } from '../../models/WhatsappGrupo';
import { WhatsappMensagem } from '../../models/WhatsappMensagem';
import { AgendaCampanha } from '../../models/AgendaCampanha';
import { ConteudoProdutoKiwify } from '../../models/ConteudoProdutoKiwify';
import { TentativaOferta } from '../../models/TentativaOferta';
import { PaginaVendaAberta } from '../../models/PaginaVendaAberta';
import { PaginaVendaModelada } from '../../models/PaginaVendaModelada';
import { SecaoPaginaVendaModelada } from '../../models/SecaoPaginaVendaModelada';
import { TipoSecaoPaginaVenda } from '../../models/TipoSecaoPaginaVenda';
import { EntregavelProduto } from '../../models/EntregavelProduto';
import { RecursoIA } from '../../models/RecursoIA';
import { AnuncioFacebook } from '../../models/AnuncioFacebook';
import { ContaInstagram } from '../../models/ContaInstagram';
import { ContaFacebook } from '../../models/ContaFacebook';
import { PaginaFacebook } from '../../models/PaginaFacebook';
import { PromptItem } from '../../models/PromptItem';
import { PromptImagemConteudo } from '../../models/PromptImagemConteudo';
import { ImagemConteudo } from '../../models/ImagemConteudo';
import { ItemConteudoProduto } from '../../models/ItemConteudoProduto';
import { IdeiaUnica } from '../../models/IdeiaUnica';
import { EstruturaPaginaVendaAberta } from '../../models/EstruturaPaginaVendaAberta';
import { PaginaImplementacao } from '../../models/PaginaImplementacao';
import { ItemEstruturaPaginaVenda } from '../../models/ItemEstruturaPaginaVenda';
import { ImplementacaoItemEstrutura } from '../../models/ImplementacaoItemEstrutura';
import { CheckoutProdutoProprio } from '../../models/CheckoutProdutoProprio';
import { MetaAdsCampanha } from '../../models/MetaAdsCampanha';
import { MetaAdsConjuntoAnuncio } from '../../models/MetaAdsConjuntoAnuncio';
import { MetaAdsAnuncio } from '../../models/MetaAdsAnuncio';
import { CriativoAnuncio } from '../../models/CriativoAnuncio';
import { FonteLocal } from '../../models/FonteLocal';
import { MetaAdsPixelVenda } from '../../models/MetaAdsPixelVenda';
import { ConteudoEntregavel } from '../../models/ConteudoEntregavel';
import { ContaWhatsapp } from '../../models/ContaWhatsapp';
import { WhatsappGrupoPadraoMensagem } from '../../models/WhatsappGrupoPadraoMensagem';
import { WhatsappGrupoDiaAgenda } from '../../models/WhatsappGrupoDiaAgenda';
import { WhatsappModeloMensagem } from '../../models/WhatsappModeloMensagem';
import { WhatsappMensagemTexto } from '../../models/WhatsappMensagemTexto';
import { MetaAdsCampanhaMetrica } from '../../models/MetaAdsCampanhaMetrica';
import { MetaAdsConjuntoAnuncioMetrica } from '../../models/MetaAdsConjuntoAnuncioMetrica';
import { MetaAdsAnuncioMetrica } from '../../models/MetaAdsAnuncioMetrica';
import { WhatsappGrupoMetrica } from '../../models/WhatsappGrupoMetrica';
import { MembroWhatsappGrupo } from '../../models/MembroWhatsappGrupo';
import { PaginaWhatsappGrupo } from '../../models/PaginaWhatsappGrupo';
import { PaginaWhatsappExemplo } from '../../models/PaginaWhatsappExemplo';
import { WhatsappGrupoDiario } from '../../models/WhatsappGrupoDiario';
import { WhatsappGrupoDia } from '../../models/WhatsappGrupoDia';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    PlataformaVenda: PlataformaVenda,
    ProdutoPlataforma: ProdutoPlataforma,
    VisitaProdutoPlataforma: VisitaProdutoPlataforma,
    ProdutoHotmart: ProdutoHotmart,
    VisitaProdutoHotmart: VisitaProdutoHotmart,
    TokenAcesso: TokenAcesso,
    IdeiaPalavraChave: IdeiaPalavraChave,
    CampanhaAds: CampanhaAds,
    AnuncioCampanhaAds: AnuncioCampanhaAds,
    PalavraCampanhaAds: PalavraCampanhaAds,
    ProdutoAfiliadoHotmart: ProdutoAfiliadoHotmart,
    AgendaVisitaHotmart: AgendaVisitaHotmart,
    CampanhaAdsTeste: CampanhaAdsTeste,
    AnuncioAds: AnuncioAds,
    ModeloCampanhaAdsTeste: ModeloCampanhaAdsTeste,
    PixelGoogle: PixelGoogle,
    PalavraChaveCampanhaAdsTeste: PalavraChaveCampanhaAdsTeste,
    AnuncioCampanhaAdsTeste: AnuncioCampanhaAdsTeste,
    ProdutoAfiliadoMetrica: ProdutoAfiliadoMetrica,
    ContaGoogle: ContaGoogle,
    CampanhaAdsMetrica: CampanhaAdsMetrica,
    LoadPaginaVenda: LoadPaginaVenda,
    SolicitacaoCheckout: SolicitacaoCheckout,
    PlanoProduto: PlanoProduto,
    ContaGoogleMetricaMes: ContaGoogleMetricaMes,
    LinkCheckout: LinkCheckout,
    CampanhaAdsMetricaIntraday: CampanhaAdsMetricaIntraday,
    PrecoProdutoAfiliado: PrecoProdutoAfiliado,
    AnuncioAdsDisplay: AnuncioAdsDisplay,
    Visitante: Visitante,
    VideoExecucao: VideoExecucao,
    ProdutoAfiliadoHotlink: ProdutoAfiliadoHotlink,
    TagIdSecaoPaginaVenda: TagIdSecaoPaginaVenda,
    CampanhaAdsRedeDisplay: CampanhaAdsRedeDisplay,
    OtimizacaoCampanhaAdsRedeDisplay: OtimizacaoCampanhaAdsRedeDisplay,
    ListaRemarketingAds: ListaRemarketingAds,
    PublicoAlvoAds: PublicoAlvoAds,
    PublicoAlvoAdsDiario: PublicoAlvoAdsDiario,
    PaginaVenda: PaginaVenda,
    AnuncioCampanhaAdsDisplay: AnuncioCampanhaAdsDisplay,
    ImagemConjunto: ImagemConjunto,
    ProdutoAfiliadoHotmartPendente: ProdutoAfiliadoHotmartPendente,
    SegmentoMercadoAdsPersonalizado: SegmentoMercadoAdsPersonalizado,
    PaginaVendaSecao: PaginaVendaSecao,
    SecaoWeb: SecaoWeb,
    ProdutoProprio: ProdutoProprio,
    ProdutoProprioVersao: ProdutoProprioVersao,
    ProdutoProprioItemNivel1: ProdutoProprioItemNivel1,
    PaginaVendaScroll: PaginaVendaScroll,
    EvolucaoExperimento: EvolucaoExperimento,
    CampanhaAdsExperimento: CampanhaAdsExperimento,
    ExperimentoModelo: ExperimentoModelo,
    ModeloPaginaVenda: ModeloPaginaVenda,
    PosicaoElementoPaginaVenda: PosicaoElementoPaginaVenda,
    ElementoModeloPaginaVenda: ElementoModeloPaginaVenda,
    VersaoPaginaVenda: VersaoPaginaVenda,
    ConteudoElemento: ConteudoElemento,
    DalleSolicitacaoImagem: DalleSolicitacaoImagem,
    ArquivoPaginaVenda: ArquivoPaginaVenda,
    ImagemPaginaVenda: ImagemPaginaVenda,
    ProdutoAfiliadoClickbank: ProdutoAfiliadoClickbank,
    VersaoImagemPaginaVenda: VersaoImagemPaginaVenda,
    PixelAdsSegmentoMercado: PixelAdsSegmentoMercado,
    PaginaVendaPropria: PaginaVendaPropria,
    LoadPaginaVendaPropria: LoadPaginaVendaPropria,
    ScrollPaginaVendaPropria: ScrollPaginaVendaPropria,
    AnuncioCampanhaAdsRedeDisplay: AnuncioCampanhaAdsRedeDisplay,
    GrupoCampanhaAdsRedeDisplay: GrupoCampanhaAdsRedeDisplay,
    SolicitacaoCheckoutPaginaVendaPropria: SolicitacaoCheckoutPaginaVendaPropria,
    ContaPublicoAlvoAdsPalavra: ContaPublicoAlvoAdsPalavra,
    PublicoAlvoAdsPalavra: PublicoAlvoAdsPalavra,
    ProdutoPublicoAdsPalavra: ProdutoPublicoAdsPalavra,
    PixelProdutoHotmartConta: PixelProdutoHotmartConta,
    PixelProdutoHotmartContaCheckout: PixelProdutoHotmartContaCheckout,
    PixelProdutoHotmartContaCompra: PixelProdutoHotmartContaCompra,
    ArtigoParaProduto: ArtigoParaProduto,
    ProdutoHotmartConta: ProdutoHotmartConta,
    AnuncioConceitoAdsRedeDisplay: AnuncioConceitoAdsRedeDisplay,
    MetricaCampanhaAdsRedeDisplay: MetricaCampanhaAdsRedeDisplay,
    VideoVsl: VideoVsl,
    PaginaVendaVsl: PaginaVendaVsl,
    TrechoVsl: TrechoVsl,
    ModeloPaginaVendaVsl: ModeloPaginaVendaVsl,
    ScriptGeraVideo: ScriptGeraVideo,
    WhatsappGrupo: WhatsappGrupo,
    WhatsappMensagem: WhatsappMensagem,
    AgendaCampanha: AgendaCampanha,
    ConteudoProdutoKiwify: ConteudoProdutoKiwify,
    TentativaOferta: TentativaOferta,
    PaginaVendaAberta: PaginaVendaAberta,
    PaginaVendaModelada: PaginaVendaModelada,
    SecaoPaginaVendaModelada: SecaoPaginaVendaModelada,
    TipoSecaoPaginaVenda: TipoSecaoPaginaVenda,
    EntregavelProduto: EntregavelProduto,
    RecursoIA: RecursoIA,
    AnuncioFacebook: AnuncioFacebook,
    ContaInstagram: ContaInstagram,
    ContaFacebook: ContaFacebook,
    PaginaFacebook: PaginaFacebook,
    PromptItem: PromptItem,
    PromptImagemConteudo: PromptImagemConteudo,
    ImagemConteudo: ImagemConteudo,
    ItemConteudoProduto: ItemConteudoProduto,
    IdeiaUnica: IdeiaUnica,
    EstruturaPaginaVendaAberta: EstruturaPaginaVendaAberta,
    PaginaImplementacao: PaginaImplementacao,
    ItemEstruturaPaginaVenda: ItemEstruturaPaginaVenda,
    ImplementacaoItemEstrutura: ImplementacaoItemEstrutura,
    CheckoutProdutoProprio: CheckoutProdutoProprio,
    MetaAdsCampanha: MetaAdsCampanha,
    MetaAdsConjuntoAnuncio: MetaAdsConjuntoAnuncio,
    MetaAdsAnuncio: MetaAdsAnuncio,
    CriativoAnuncio: CriativoAnuncio,
    FonteLocal: FonteLocal,
    MetaAdsPixelVenda: MetaAdsPixelVenda,
    ConteudoEntregavel: ConteudoEntregavel,
    ContaWhatsapp: ContaWhatsapp,
    WhatsappGrupoPadraoMensagem: WhatsappGrupoPadraoMensagem,
    WhatsappGrupoDiaAgenda: WhatsappGrupoDiaAgenda,
    WhatsappModeloMensagem: WhatsappModeloMensagem,
    WhatsappMensagemTexto: WhatsappMensagemTexto,
    MetaAdsCampanhaMetrica: MetaAdsCampanhaMetrica,
    MetaAdsConjuntoAnuncioMetrica: MetaAdsConjuntoAnuncioMetrica,
    MetaAdsAnuncioMetrica: MetaAdsAnuncioMetrica,
    WhatsappGrupoMetrica: WhatsappGrupoMetrica,
    MembroWhatsappGrupo: MembroWhatsappGrupo,
    PaginaWhatsappGrupo: PaginaWhatsappGrupo,
    PaginaWhatsappExemplo: PaginaWhatsappExemplo,
    WhatsappGrupoDiario: WhatsappGrupoDiario,
    WhatsappGrupoDia: WhatsappGrupoDia,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
