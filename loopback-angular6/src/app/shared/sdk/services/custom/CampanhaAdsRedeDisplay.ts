/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SDKModels } from './SDKModels';
import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackAuth } from '../core/auth.service';
import { LoopBackFilter,  } from '../../models/BaseModels';
import { ErrorHandler } from '../core/error.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CampanhaAdsRedeDisplay } from '../../models/CampanhaAdsRedeDisplay';
import { SocketConnection } from '../../sockets/socket.connections';
import { ContaGoogle } from '../../models/ContaGoogle';
import { ProdutoAfiliadoHotmart } from '../../models/ProdutoAfiliadoHotmart';
import { ImagemConjunto } from '../../models/ImagemConjunto';
import { PaginaVendaPropria } from '../../models/PaginaVendaPropria';
import { AnuncioCampanhaAdsRedeDisplay } from '../../models/AnuncioCampanhaAdsRedeDisplay';
import { GrupoCampanhaAdsRedeDisplay } from '../../models/GrupoCampanhaAdsRedeDisplay';
import { PublicoAlvoAdsPalavra } from '../../models/PublicoAlvoAdsPalavra';
import { AnuncioConceitoAdsRedeDisplay } from '../../models/AnuncioConceitoAdsRedeDisplay';
import { MetricaCampanhaAdsRedeDisplay } from '../../models/MetricaCampanhaAdsRedeDisplay';


/**
 * Api services for the `CampanhaAdsRedeDisplay` model.
 */
@Injectable()
export class CampanhaAdsRedeDisplayApi extends BaseLoopBackApi {

  constructor(
    @Inject(HttpClient) protected http: HttpClient,
    @Inject(SocketConnection) protected connection: SocketConnection,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {
    super(http,  connection,  models, auth, errorHandler);
  }

  /**
   * Busca relação contaGoogle de belongsTo.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public getContaGoogle(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/contaGoogle";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Busca relação produtoAfiliadoHotmart de belongsTo.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public getProdutoAfiliadoHotmart(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/produtoAfiliadoHotmart";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Busca relação imagemConjunto de belongsTo.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public getImagemConjunto(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/imagemConjunto";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Busca relação paginaVendaPropria de belongsTo.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public getPaginaVendaPropria(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/paginaVendaPropria";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Localize um item relacionado por ID para anuncioCampanhaAdsRedeDisplays.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {any} fk Chave estrangeira para anuncioCampanhaAdsRedeDisplays
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public findByIdAnuncioCampanhaAdsRedeDisplays(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/anuncioCampanhaAdsRedeDisplays/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Excluir um item relacionado por ID para anuncioCampanhaAdsRedeDisplays.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {any} fk Chave estrangeira para anuncioCampanhaAdsRedeDisplays
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdAnuncioCampanhaAdsRedeDisplays(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/anuncioCampanhaAdsRedeDisplays/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Atualizar um item relacionado por ID para anuncioCampanhaAdsRedeDisplays.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {any} fk Chave estrangeira para anuncioCampanhaAdsRedeDisplays
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public updateByIdAnuncioCampanhaAdsRedeDisplays(id: any, fk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/anuncioCampanhaAdsRedeDisplays/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Localize um item relacionado por ID para grupoCampanhaAdsRedeDisplays.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {any} fk Chave estrangeira para grupoCampanhaAdsRedeDisplays
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public findByIdGrupoCampanhaAdsRedeDisplays(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/grupoCampanhaAdsRedeDisplays/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Excluir um item relacionado por ID para grupoCampanhaAdsRedeDisplays.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {any} fk Chave estrangeira para grupoCampanhaAdsRedeDisplays
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdGrupoCampanhaAdsRedeDisplays(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/grupoCampanhaAdsRedeDisplays/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Atualizar um item relacionado por ID para grupoCampanhaAdsRedeDisplays.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {any} fk Chave estrangeira para grupoCampanhaAdsRedeDisplays
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public updateByIdGrupoCampanhaAdsRedeDisplays(id: any, fk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/grupoCampanhaAdsRedeDisplays/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Busca relação publicoAlvoAdsPalavra de belongsTo.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public getPublicoAlvoAdsPalavra(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/publicoAlvoAdsPalavra";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Busca relação anuncioConceitoAdsRedeDisplay de belongsTo.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public getAnuncioConceitoAdsRedeDisplay(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/anuncioConceitoAdsRedeDisplay";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Localize um item relacionado por ID para metricaCampanhaAdsRedeDisplays.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {any} fk Chave estrangeira para metricaCampanhaAdsRedeDisplays
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public findByIdMetricaCampanhaAdsRedeDisplays(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/metricaCampanhaAdsRedeDisplays/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Excluir um item relacionado por ID para metricaCampanhaAdsRedeDisplays.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {any} fk Chave estrangeira para metricaCampanhaAdsRedeDisplays
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdMetricaCampanhaAdsRedeDisplays(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/metricaCampanhaAdsRedeDisplays/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Atualizar um item relacionado por ID para metricaCampanhaAdsRedeDisplays.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {any} fk Chave estrangeira para metricaCampanhaAdsRedeDisplays
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public updateByIdMetricaCampanhaAdsRedeDisplays(id: any, fk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/metricaCampanhaAdsRedeDisplays/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * anuncioCampanhaAdsRedeDisplays consultas de CampanhaAdsRedeDisplay.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {object} filter 
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public getAnuncioCampanhaAdsRedeDisplays(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/anuncioCampanhaAdsRedeDisplays";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof filter !== 'undefined' && filter !== null) _urlParams.filter = filter;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Cria uma nova instância no anuncioCampanhaAdsRedeDisplays deste modelo.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public createAnuncioCampanhaAdsRedeDisplays(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/anuncioCampanhaAdsRedeDisplays";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Exclui todos os anuncioCampanhaAdsRedeDisplays deste modelo.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteAnuncioCampanhaAdsRedeDisplays(id: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/anuncioCampanhaAdsRedeDisplays";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * anuncioCampanhaAdsRedeDisplays contagens de CampanhaAdsRedeDisplay.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {object} where Criteria to match model instances
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countAnuncioCampanhaAdsRedeDisplays(id: any, where: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/anuncioCampanhaAdsRedeDisplays/count";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof where !== 'undefined' && where !== null) _urlParams.where = where;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * grupoCampanhaAdsRedeDisplays consultas de CampanhaAdsRedeDisplay.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {object} filter 
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public getGrupoCampanhaAdsRedeDisplays(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/grupoCampanhaAdsRedeDisplays";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof filter !== 'undefined' && filter !== null) _urlParams.filter = filter;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Cria uma nova instância no grupoCampanhaAdsRedeDisplays deste modelo.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public createGrupoCampanhaAdsRedeDisplays(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/grupoCampanhaAdsRedeDisplays";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Exclui todos os grupoCampanhaAdsRedeDisplays deste modelo.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteGrupoCampanhaAdsRedeDisplays(id: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/grupoCampanhaAdsRedeDisplays";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * grupoCampanhaAdsRedeDisplays contagens de CampanhaAdsRedeDisplay.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {object} where Criteria to match model instances
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countGrupoCampanhaAdsRedeDisplays(id: any, where: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/grupoCampanhaAdsRedeDisplays/count";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof where !== 'undefined' && where !== null) _urlParams.where = where;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * metricaCampanhaAdsRedeDisplays consultas de CampanhaAdsRedeDisplay.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {object} filter 
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public getMetricaCampanhaAdsRedeDisplays(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/metricaCampanhaAdsRedeDisplays";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof filter !== 'undefined' && filter !== null) _urlParams.filter = filter;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Cria uma nova instância no metricaCampanhaAdsRedeDisplays deste modelo.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public createMetricaCampanhaAdsRedeDisplays(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/metricaCampanhaAdsRedeDisplays";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Exclui todos os metricaCampanhaAdsRedeDisplays deste modelo.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteMetricaCampanhaAdsRedeDisplays(id: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/metricaCampanhaAdsRedeDisplays";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * metricaCampanhaAdsRedeDisplays contagens de CampanhaAdsRedeDisplay.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {object} where Criteria to match model instances
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countMetricaCampanhaAdsRedeDisplays(id: any, where: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/metricaCampanhaAdsRedeDisplays/count";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof where !== 'undefined' && where !== null) _urlParams.where = where;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Patch an existing model instance or insert a new one into the data source.
   *
   * @param {object} data Request data.
   *
   *  - `data` – `{object}` - Model instance data
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public patchOrCreate(data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays";
    let _routeParams: any = {};
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Patch attributes for a model instance and persist it into the data source.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {object} data Request data.
   *
   *  - `data` – `{object}` - An object of model property name/value pairs
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public patchAttributes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public ObtemListaParaCriacao(customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/obtemListaParaCriacao";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param {object} data Request data.
   *
   *  - `resourceName` – `{string}` - 
   *
   *  - `resourceNameGrupo` – `{string}` - 
   *
   *  - `nomeAds` – `{string}` - 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public AtualizaCampanhaCriada(resourceName: any = {}, resourceNameGrupo: any = {}, nomeAds: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/atualizaCampanhaCriada";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof resourceName !== 'undefined' && resourceName !== null) _urlParams.resourceName = resourceName;
    if (typeof resourceNameGrupo !== 'undefined' && resourceNameGrupo !== null) _urlParams.resourceNameGrupo = resourceNameGrupo;
    if (typeof nomeAds !== 'undefined' && nomeAds !== null) _urlParams.nomeAds = nomeAds;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public AtualizaIndicadorPessoal(customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/atualizaIndicadorPessoal";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public ListaParaResultadoComConta(customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/listaParaResultadoComConta";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param {object} data Request data.
   *
   *  - `campanha` – `{object}` - 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public AtualizaIndicadorAds(campanha: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/atualizaIndicadorAds";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof campanha !== 'undefined' && campanha !== null) _urlParams.campanha = campanha;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Cria uma nova instância no anuncioCampanhaAdsRedeDisplays deste modelo.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public createManyAnuncioCampanhaAdsRedeDisplays(id: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/anuncioCampanhaAdsRedeDisplays";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Cria uma nova instância no grupoCampanhaAdsRedeDisplays deste modelo.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public createManyGrupoCampanhaAdsRedeDisplays(id: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/grupoCampanhaAdsRedeDisplays";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Cria uma nova instância no metricaCampanhaAdsRedeDisplays deste modelo.
   *
   * @param {any} id CampanhaAdsRedeDisplay id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `CampanhaAdsRedeDisplay` object.)
   * </em>
   */
  public createManyMetricaCampanhaAdsRedeDisplays(id: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/CampanhaAdsRedeDisplays/:id/metricaCampanhaAdsRedeDisplays";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `CampanhaAdsRedeDisplay`.
   */
  public getModelName() {
    return "CampanhaAdsRedeDisplay";
  }
}
