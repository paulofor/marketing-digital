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
import { FacebookConta } from '../../models/FacebookConta';
import { ProdutoAfiliadoMetrica } from '../../models/ProdutoAfiliadoMetrica';
import { ContaGoogle } from '../../models/ContaGoogle';
import { CampanhaAdsMetrica } from '../../models/CampanhaAdsMetrica';
import { LoadPaginaVenda } from '../../models/LoadPaginaVenda';
import { SolicitacaoCheckout } from '../../models/SolicitacaoCheckout';
import { PlanoProduto } from '../../models/PlanoProduto';

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
    FacebookConta: FacebookConta,
    ProdutoAfiliadoMetrica: ProdutoAfiliadoMetrica,
    ContaGoogle: ContaGoogle,
    CampanhaAdsMetrica: CampanhaAdsMetrica,
    LoadPaginaVenda: LoadPaginaVenda,
    SolicitacaoCheckout: SolicitacaoCheckout,
    PlanoProduto: PlanoProduto,
    
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
