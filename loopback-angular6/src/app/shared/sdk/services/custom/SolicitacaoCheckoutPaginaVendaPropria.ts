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
import { SolicitacaoCheckoutPaginaVendaPropria } from '../../models/SolicitacaoCheckoutPaginaVendaPropria';
import { SocketConnection } from '../../sockets/socket.connections';
import { PaginaVendaPropria } from '../../models/PaginaVendaPropria';


/**
 * Api services for the `SolicitacaoCheckoutPaginaVendaPropria` model.
 */
@Injectable()
export class SolicitacaoCheckoutPaginaVendaPropriaApi extends BaseLoopBackApi {

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
   * Busca relação paginaVendaPropria de belongsTo.
   *
   * @param {any} id SolicitacaoCheckoutPaginaVendaPropria id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `SolicitacaoCheckoutPaginaVendaPropria` object.)
   * </em>
   */
  public getPaginaVendaPropria(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/SolicitacaoCheckoutPaginaVendaPropria/:id/paginaVendaPropria";
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
   * This usually means the response is a `SolicitacaoCheckoutPaginaVendaPropria` object.)
   * </em>
   */
  public patchOrCreate(data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/SolicitacaoCheckoutPaginaVendaPropria";
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
   * @param {any} id SolicitacaoCheckoutPaginaVendaPropria id
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
   * This usually means the response is a `SolicitacaoCheckoutPaginaVendaPropria` object.)
   * </em>
   */
  public patchAttributes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/SolicitacaoCheckoutPaginaVendaPropria/:id";
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
   * @param {string} codigoPagina 
   *
   * @param {string} utmCampaign 
   *
   * @param {string} utmContent 
   *
   * @param {string} visitante 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `SolicitacaoCheckoutPaginaVendaPropria` object.)
   * </em>
   */
  public InsereItem(codigoPagina: any = {}, utmCampaign: any = {}, utmContent: any = {}, visitante: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/SolicitacaoCheckoutPaginaVendaPropria/insereItem";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof codigoPagina !== 'undefined' && codigoPagina !== null) _urlParams.codigoPagina = codigoPagina;
    if (typeof utmCampaign !== 'undefined' && utmCampaign !== null) _urlParams.utmCampaign = utmCampaign;
    if (typeof utmContent !== 'undefined' && utmContent !== null) _urlParams.utmContent = utmContent;
    if (typeof visitante !== 'undefined' && visitante !== null) _urlParams.visitante = visitante;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `SolicitacaoCheckoutPaginaVendaPropria`.
   */
  public getModelName() {
    return "SolicitacaoCheckoutPaginaVendaPropria";
  }
}
