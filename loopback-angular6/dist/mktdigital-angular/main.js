(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/anuncio-ads-edita/anuncio-ads-edita.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/anuncio-ads-edita/anuncio-ads-edita.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/anuncio-ads-edita/anuncio-ads-edita.component.html":
/*!********************************************************************!*\
  !*** ./src/app/anuncio-ads-edita/anuncio-ads-edita.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"item\" mat-dialog-title>Anúncio Google Ads</h2>\n\n<form *ngIf=\"item\" class=\"example-full-width\" (ngSubmit)=\"onSubmit()\">\n\n  <mat-dialog-content>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput maxlength=\"30\" #titulo1 [(ngModel)]=\"item.titulo1\" name=\"titulo1\" placeholder=\"Titulo1\" />\n      <mat-hint align=\"end\">{{ (titulo1.value?titulo1.value.length:0) }}/30</mat-hint>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput maxlength=\"30\" [(ngModel)]=\"item.titulo2\" #titulo2 name=\"titulo2\" placeholder=\"Titulo2\" />\n      <mat-hint align=\"end\">{{ (titulo2.value?titulo2.value.length:0) }}/30</mat-hint>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput maxlength=\"30\" [(ngModel)]=\"item.titulo3\" #titulo3 name=\"titulo3\" placeholder=\"Titulo3\" />\n      <mat-hint align=\"end\">{{ (titulo3.value?titulo3.value.length:0) }}/30</mat-hint>\n    </mat-form-field>\n\n\n    <mat-form-field class=\"example-full-width\">\n      <textarea rows=\"2\" matInput #descricao1 [(ngModel)]=\"item.descricao1\" name=\"descricao1\" placeholder=\"Descrição 1\" >\n      </textarea>\n      <mat-hint align=\"end\">{{ (descricao1.value?descricao1.value.length:0) }}/90</mat-hint>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea rows=\"2\" matInput #descricao2 [(ngModel)]=\"item.descricao2\" name=\"descricao2\" placeholder=\"Descrição 2\" >\n      </textarea>\n      <mat-hint align=\"end\">{{ (descricao2.value?descricao2.value.length:0) }}/90</mat-hint>\n    </mat-form-field>\n\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <button mat-raised-button>Salvar</button>\n    <button mat-raised-button mat-dialog-close>Fechar</button>\n  </mat-dialog-actions>\n\n</form>\n"

/***/ }),

/***/ "./src/app/anuncio-ads-edita/anuncio-ads-edita.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/anuncio-ads-edita/anuncio-ads-edita.component.ts ***!
  \******************************************************************/
/*! exports provided: AnuncioAdsEditaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioAdsEditaComponent", function() { return AnuncioAdsEditaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_component_base_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-component/base-edit-component */ "./src/app/base-component/base-edit-component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AnuncioAdsEditaComponent = /** @class */ (function (_super) {
    __extends(AnuncioAdsEditaComponent, _super);
    function AnuncioAdsEditaComponent(dialogRef, data, servico) {
        var _this = _super.call(this, dialogRef, data, servico) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.servico = servico;
        return _this;
    }
    AnuncioAdsEditaComponent.prototype.criaItem = function () {
        var novo = new _shared_sdk__WEBPACK_IMPORTED_MODULE_1__["AnuncioAds"]();
        novo.produtoAfiliadoHotmartId = this.origem.hotmartId;
        return novo;
    };
    AnuncioAdsEditaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-anuncio-ads-edita',
            template: __webpack_require__(/*! ./anuncio-ads-edita.component.html */ "./src/app/anuncio-ads-edita/anuncio-ads-edita.component.html"),
            styles: [__webpack_require__(/*! ./anuncio-ads-edita.component.css */ "./src/app/anuncio-ads-edita/anuncio-ads-edita.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _shared_sdk__WEBPACK_IMPORTED_MODULE_1__["AnuncioAdsApi"]])
    ], AnuncioAdsEditaComponent);
    return AnuncioAdsEditaComponent;
}(_base_component_base_edit_component__WEBPACK_IMPORTED_MODULE_3__["BaseEditComponent"]));



/***/ }),

/***/ "./src/app/anuncio-ads-lista/anuncio-ads-lista.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/anuncio-ads-lista/anuncio-ads-lista.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dgc-card {\n    width: 240px;\n}"

/***/ }),

/***/ "./src/app/anuncio-ads-lista/anuncio-ads-lista.component.html":
/*!********************************************************************!*\
  !*** ./src/app/anuncio-ads-lista/anuncio-ads-lista.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\" *ngIf=\"principal\">\n  <div class=\"dgc-painel-header\">\n      <span>Anúncios - {{principal.nome}}</span>\n      <a href=\"{{principal.urlFinal}}\" target=\"_blank\">link</a>\n      <button class=\"btn btn-primary btn-sm dgc-botao-comando dgc-direita\" (click)=\"edita()\">novo</button>\n  </div>\n  <div class=\"dgc-painel-principal\">\n      <div class=\"dgc-card\" *ngFor=\"let item of principal.anuncioAds\">\n        <div class=\"dgc-card-detalhe\">\n          Titulo1 : {{item.titulo1}}\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          Titulo2 : {{item.titulo2}}\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          Titulo3 : {{item.titulo3}}\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          Descrição 1 : {{item.descricao1}}\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          Descrição 2 : {{item.descricao2}}\n        </div>\n        <div class=\"dgc-card-comandos\">\n          <button class=\"btn-primary btn-sm btn\" (click)=\"edita(item)\">Editar</button>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/anuncio-ads-lista/anuncio-ads-lista.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/anuncio-ads-lista/anuncio-ads-lista.component.ts ***!
  \******************************************************************/
/*! exports provided: AnuncioAdsListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioAdsListaComponent", function() { return AnuncioAdsListaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component_base_item_id_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-component/base-item-id-component */ "./src/app/base-component/base-item-id-component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _anuncio_ads_edita_anuncio_ads_edita_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../anuncio-ads-edita/anuncio-ads-edita.component */ "./src/app/anuncio-ads-edita/anuncio-ads-edita.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AnuncioAdsListaComponent = /** @class */ (function (_super) {
    __extends(AnuncioAdsListaComponent, _super);
    function AnuncioAdsListaComponent(dialog, srv, router) {
        var _this = _super.call(this, dialog, srv, router) || this;
        _this.dialog = dialog;
        _this.srv = srv;
        _this.router = router;
        return _this;
    }
    AnuncioAdsListaComponent.prototype.getFiltro = function () {
        return {
            'include': 'anuncioAds'
        };
    };
    AnuncioAdsListaComponent.prototype.edita = function (edicao) {
        var _this = this;
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getComponente(), {
            width: '800px',
            data: {
                item: edicao,
                origem: this.principal
            }
        });
    };
    AnuncioAdsListaComponent.prototype.getComponente = function () {
        return _anuncio_ads_edita_anuncio_ads_edita_component__WEBPACK_IMPORTED_MODULE_5__["AnuncioAdsEditaComponent"];
    };
    AnuncioAdsListaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-anuncio-ads-lista',
            template: __webpack_require__(/*! ./anuncio-ads-lista.component.html */ "./src/app/anuncio-ads-lista/anuncio-ads-lista.component.html"),
            styles: [__webpack_require__(/*! ./anuncio-ads-lista.component.css */ "./src/app/anuncio-ads-lista/anuncio-ads-lista.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _shared_sdk__WEBPACK_IMPORTED_MODULE_4__["ProdutoAfiliadoHotmartApi"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AnuncioAdsListaComponent);
    return AnuncioAdsListaComponent;
}(_base_component_base_item_id_component__WEBPACK_IMPORTED_MODULE_1__["BaseItemIdComponent"]));



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/* coloquei manualmente */


var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _plataforma_list_plataforma_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plataforma-list/plataforma-list.component */ "./src/app/plataforma-list/plataforma-list.component.ts");
/* harmony import */ var _produto_hotmart_list_produto_hotmart_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../produto-hotmart-list/produto-hotmart-list.component */ "./src/app/produto-hotmart-list/produto-hotmart-list.component.ts");
/* harmony import */ var _token_acesso_list_token_acesso_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../token-acesso-list/token-acesso-list.component */ "./src/app/token-acesso-list/token-acesso-list.component.ts");
/* harmony import */ var _ideia_palavra_chave_list_ideia_palavra_chave_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ideia-palavra-chave-list/ideia-palavra-chave-list.component */ "./src/app/ideia-palavra-chave-list/ideia-palavra-chave-list.component.ts");
/* harmony import */ var _produto_afiliado_hotmart_list_produto_afiliado_hotmart_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../produto-afiliado-hotmart-list/produto-afiliado-hotmart-list.component */ "./src/app/produto-afiliado-hotmart-list/produto-afiliado-hotmart-list.component.ts");
/* harmony import */ var _produto_afiliado_hotmart_detalhe_produto_afiliado_hotmart_detalhe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe.component */ "./src/app/produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe.component.ts");
/* harmony import */ var _modelo_campanha_ads_teste_list_modelo_campanha_ads_teste_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modelo-campanha-ads-teste-list/modelo-campanha-ads-teste-list.component */ "./src/app/modelo-campanha-ads-teste-list/modelo-campanha-ads-teste-list.component.ts");
/* harmony import */ var _campanha_ads_teste_lista_campanha_ads_teste_lista_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../campanha-ads-teste-lista/campanha-ads-teste-lista.component */ "./src/app/campanha-ads-teste-lista/campanha-ads-teste-lista.component.ts");
/* harmony import */ var _anuncio_ads_lista_anuncio_ads_lista_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../anuncio-ads-lista/anuncio-ads-lista.component */ "./src/app/anuncio-ads-lista/anuncio-ads-lista.component.ts");
/* harmony import */ var _pixel_google_list_pixel_google_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pixel-google-list/pixel-google-list.component */ "./src/app/pixel-google-list/pixel-google-list.component.ts");
/* harmony import */ var _campanha_ads_teste_detalhe_campanha_ads_teste_detalhe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../campanha-ads-teste-detalhe/campanha-ads-teste-detalhe.component */ "./src/app/campanha-ads-teste-detalhe/campanha-ads-teste-detalhe.component.ts");
/* harmony import */ var _conta_google_list_conta_google_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../conta-google-list/conta-google-list.component */ "./src/app/conta-google-list/conta-google-list.component.ts");
/* harmony import */ var _ideia_palavra_chave_list_simples_melhores_cpc_ideia_palavra_chave_list_simples_melhores_cpc_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc.component */ "./src/app/ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc.component.ts");
/* harmony import */ var _ideia_palavra_chave_list_simples_top_ideia_palavra_chave_list_simples_top_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top.component */ "./src/app/ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top.component.ts");
/* harmony import */ var _ideia_palavra_chave_list_simples_top_pesquisa_ideia_palavra_chave_list_simples_top_pesquisa_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa.component */ "./src/app/ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa.component.ts");
/* harmony import */ var _campanha_ads_teste_list_ativa_metrica_campanha_ads_teste_list_ativa_metrica_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica.component */ "./src/app/campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica.component.ts");
/* harmony import */ var _visita_produto_hotmart_resumo_visita_produto_hotmart_resumo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../visita-produto-hotmart-resumo/visita-produto-hotmart-resumo.component */ "./src/app/visita-produto-hotmart-resumo/visita-produto-hotmart-resumo.component.ts");


















var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'plataforma', component: _plataforma_list_plataforma_list_component__WEBPACK_IMPORTED_MODULE_1__["PlataformaListComponent"] },
    { path: 'produtoHotmart', component: _produto_hotmart_list_produto_hotmart_list_component__WEBPACK_IMPORTED_MODULE_2__["ProdutoHotmartListComponent"] },
    { path: 'tokenAcesso', component: _token_acesso_list_token_acesso_list_component__WEBPACK_IMPORTED_MODULE_3__["TokenAcessoListComponent"] },
    { path: 'ideiaPalavraChave', component: _ideia_palavra_chave_list_ideia_palavra_chave_list_component__WEBPACK_IMPORTED_MODULE_4__["IdeiaPalavraChaveListComponent"] },
    { path: 'produtoAfiliadoHotmart', component: _produto_afiliado_hotmart_list_produto_afiliado_hotmart_list_component__WEBPACK_IMPORTED_MODULE_5__["ProdutoAfiliadoHotmartListComponent"] },
    { path: 'produtoAfiliadoHotmartDetalhe/:id', component: _produto_afiliado_hotmart_detalhe_produto_afiliado_hotmart_detalhe_component__WEBPACK_IMPORTED_MODULE_6__["ProdutoAfiliadoHotmartDetalheComponent"] },
    { path: 'modeloCampanhaAdsTeste', component: _modelo_campanha_ads_teste_list_modelo_campanha_ads_teste_list_component__WEBPACK_IMPORTED_MODULE_7__["ModeloCampanhaAdsTesteListComponent"] },
    { path: 'pixelGoogle', component: _pixel_google_list_pixel_google_list_component__WEBPACK_IMPORTED_MODULE_10__["PixelGoogleListComponent"] },
    { path: 'contaGoogle', component: _conta_google_list_conta_google_list_component__WEBPACK_IMPORTED_MODULE_12__["ContaGoogleListComponent"] },
    { path: 'resumoVisitaHotmart', component: _visita_produto_hotmart_resumo_visita_produto_hotmart_resumo_component__WEBPACK_IMPORTED_MODULE_17__["VisitaProdutoHotmartResumoComponent"] },
    { path: 'anuncioAds/:id', component: _anuncio_ads_lista_anuncio_ads_lista_component__WEBPACK_IMPORTED_MODULE_9__["AnuncioAdsListaComponent"] },
    { path: 'campanhaAdsTeste/:id', component: _campanha_ads_teste_lista_campanha_ads_teste_lista_component__WEBPACK_IMPORTED_MODULE_8__["CampanhaAdsTesteListaComponent"] },
    { path: 'campanhaAdsTesteDetalhe/:id', component: _campanha_ads_teste_detalhe_campanha_ads_teste_detalhe_component__WEBPACK_IMPORTED_MODULE_11__["CampanhaAdsTesteDetalheComponent"] },
    { path: 'melhoresCpc', component: _ideia_palavra_chave_list_simples_melhores_cpc_ideia_palavra_chave_list_simples_melhores_cpc_component__WEBPACK_IMPORTED_MODULE_13__["IdeiaPalavraChaveListSimplesMelhoresCpcComponent"] },
    { path: 'melhoresTop', component: _ideia_palavra_chave_list_simples_top_ideia_palavra_chave_list_simples_top_component__WEBPACK_IMPORTED_MODULE_14__["IdeiaPalavraChaveListSimplesTopComponent"] },
    { path: 'melhoresTopPesquisa', component: _ideia_palavra_chave_list_simples_top_pesquisa_ideia_palavra_chave_list_simples_top_pesquisa_component__WEBPACK_IMPORTED_MODULE_15__["IdeiaPalavraChaveListSimplesTopPesquisaComponent"] },
    { path: 'campanhaAdsTesteAtivaMetrica', component: _campanha_ads_teste_list_ativa_metrica_campanha_ads_teste_list_ativa_metrica_component__WEBPACK_IMPORTED_MODULE_16__["CampanhaAdsTesteListAtivaMetricaComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] }
    //{ path: '',          redirectTo: 'home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n\n.example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n\n.example-full-width {\n    width: 100%;\n  }\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar\" data-color=\"blue\" data-image=\"\">\n      <app-sidebar></app-sidebar>\n      <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-4.jpg)\"></div>\n  </div>\n\n  <div class=\"main-panel dgc-principal\">\n      <router-outlet></router-outlet>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_sdk_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/sdk/sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
/* harmony import */ var _shared_sdk_sockets_socket_driver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/sdk/sockets/socket.driver */ "./src/app/shared/sdk/sockets/socket.driver.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/esm5/ngx-file-drop.js");
/* harmony import */ var angular2_image_upload__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular2-image-upload */ "./node_modules/angular2-image-upload/fesm5/angular2-image-upload.js");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-drag-drop */ "./node_modules/ng-drag-drop/index.js");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");
/* harmony import */ var _plataforma_list_plataforma_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./plataforma-list/plataforma-list.component */ "./src/app/plataforma-list/plataforma-list.component.ts");
/* harmony import */ var _plataforma_edit_plataforma_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./plataforma-edit/plataforma-edit.component */ "./src/app/plataforma-edit/plataforma-edit.component.ts");
/* harmony import */ var _produto_hotmart_list_produto_hotmart_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./produto-hotmart-list/produto-hotmart-list.component */ "./src/app/produto-hotmart-list/produto-hotmart-list.component.ts");
/* harmony import */ var _token_acesso_list_token_acesso_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./token-acesso-list/token-acesso-list.component */ "./src/app/token-acesso-list/token-acesso-list.component.ts");
/* harmony import */ var _token_acesso_edit_token_acesso_edit_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./token-acesso-edit/token-acesso-edit.component */ "./src/app/token-acesso-edit/token-acesso-edit.component.ts");
/* harmony import */ var _ideia_palavra_chave_list_ideia_palavra_chave_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ideia-palavra-chave-list/ideia-palavra-chave-list.component */ "./src/app/ideia-palavra-chave-list/ideia-palavra-chave-list.component.ts");
/* harmony import */ var _produto_afiliado_hotmart_list_produto_afiliado_hotmart_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./produto-afiliado-hotmart-list/produto-afiliado-hotmart-list.component */ "./src/app/produto-afiliado-hotmart-list/produto-afiliado-hotmart-list.component.ts");
/* harmony import */ var _produto_afiliado_hotmart_edit_produto_afiliado_hotmart_edit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component */ "./src/app/produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component.ts");
/* harmony import */ var _produto_afiliado_hotmart_detalhe_produto_afiliado_hotmart_detalhe_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe.component */ "./src/app/produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe.component.ts");
/* harmony import */ var _modelo_campanha_ads_teste_list_modelo_campanha_ads_teste_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./modelo-campanha-ads-teste-list/modelo-campanha-ads-teste-list.component */ "./src/app/modelo-campanha-ads-teste-list/modelo-campanha-ads-teste-list.component.ts");
/* harmony import */ var _modelo_campanha_ads_teste_edit_modelo_campanha_ads_teste_edit_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modelo-campanha-ads-teste-edit/modelo-campanha-ads-teste-edit.component */ "./src/app/modelo-campanha-ads-teste-edit/modelo-campanha-ads-teste-edit.component.ts");
/* harmony import */ var _campanha_ads_teste_edit_campanha_ads_teste_edit_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./campanha-ads-teste-edit/campanha-ads-teste-edit.component */ "./src/app/campanha-ads-teste-edit/campanha-ads-teste-edit.component.ts");
/* harmony import */ var _anuncio_ads_lista_anuncio_ads_lista_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./anuncio-ads-lista/anuncio-ads-lista.component */ "./src/app/anuncio-ads-lista/anuncio-ads-lista.component.ts");
/* harmony import */ var _anuncio_ads_edita_anuncio_ads_edita_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./anuncio-ads-edita/anuncio-ads-edita.component */ "./src/app/anuncio-ads-edita/anuncio-ads-edita.component.ts");
/* harmony import */ var _campanha_ads_teste_lista_campanha_ads_teste_lista_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./campanha-ads-teste-lista/campanha-ads-teste-lista.component */ "./src/app/campanha-ads-teste-lista/campanha-ads-teste-lista.component.ts");
/* harmony import */ var _pixel_google_list_pixel_google_list_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pixel-google-list/pixel-google-list.component */ "./src/app/pixel-google-list/pixel-google-list.component.ts");
/* harmony import */ var _pixel_google_edit_pixel_google_edit_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pixel-google-edit/pixel-google-edit.component */ "./src/app/pixel-google-edit/pixel-google-edit.component.ts");
/* harmony import */ var _campanha_ads_teste_detalhe_campanha_ads_teste_detalhe_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./campanha-ads-teste-detalhe/campanha-ads-teste-detalhe.component */ "./src/app/campanha-ads-teste-detalhe/campanha-ads-teste-detalhe.component.ts");
/* harmony import */ var _escolhe_anuncio_para_campanha_teste_escolhe_anuncio_para_campanha_teste_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./escolhe-anuncio-para-campanha-teste/escolhe-anuncio-para-campanha-teste.component */ "./src/app/escolhe-anuncio-para-campanha-teste/escolhe-anuncio-para-campanha-teste.component.ts");
/* harmony import */ var _escolhe_palavra_chave_para_campanha_teste_escolhe_palavra_chave_para_campanha_teste_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./escolhe-palavra-chave-para-campanha-teste/escolhe-palavra-chave-para-campanha-teste.component */ "./src/app/escolhe-palavra-chave-para-campanha-teste/escolhe-palavra-chave-para-campanha-teste.component.ts");
/* harmony import */ var _conta_google_list_conta_google_list_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./conta-google-list/conta-google-list.component */ "./src/app/conta-google-list/conta-google-list.component.ts");
/* harmony import */ var _conta_google_edit_conta_google_edit_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./conta-google-edit/conta-google-edit.component */ "./src/app/conta-google-edit/conta-google-edit.component.ts");
/* harmony import */ var _ideia_palavra_chave_list_simples_melhores_cpc_ideia_palavra_chave_list_simples_melhores_cpc_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc.component */ "./src/app/ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc.component.ts");
/* harmony import */ var _ideia_palavra_chave_list_simples_top_ideia_palavra_chave_list_simples_top_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top.component */ "./src/app/ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top.component.ts");
/* harmony import */ var _ideia_palavra_chave_list_simples_top_pesquisa_ideia_palavra_chave_list_simples_top_pesquisa_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa.component */ "./src/app/ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa.component.ts");
/* harmony import */ var _campanha_ads_teste_list_ativa_metrica_campanha_ads_teste_list_ativa_metrica_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica.component */ "./src/app/campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica.component.ts");
/* harmony import */ var _visita_produto_hotmart_resumo_visita_produto_hotmart_resumo_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./visita-produto-hotmart-resumo/visita-produto-hotmart-resumo.component */ "./src/app/visita-produto-hotmart-resumo/visita-produto-hotmart-resumo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























//import { MatMomentDateModule } from "@angular/material-moment-adapter";
//import { NgxImgModule } from 'ngx-img';

//import { UploadModule } from './upload/upload.module';































//import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10___default.a, 'pt-BR');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _plataforma_list_plataforma_list_component__WEBPACK_IMPORTED_MODULE_28__["PlataformaListComponent"],
                _plataforma_edit_plataforma_edit_component__WEBPACK_IMPORTED_MODULE_29__["PlataformaEditComponent"],
                _produto_hotmart_list_produto_hotmart_list_component__WEBPACK_IMPORTED_MODULE_30__["ProdutoHotmartListComponent"],
                _token_acesso_list_token_acesso_list_component__WEBPACK_IMPORTED_MODULE_31__["TokenAcessoListComponent"],
                _token_acesso_edit_token_acesso_edit_component__WEBPACK_IMPORTED_MODULE_32__["TokenAcessoEditComponent"],
                _ideia_palavra_chave_list_ideia_palavra_chave_list_component__WEBPACK_IMPORTED_MODULE_33__["IdeiaPalavraChaveListComponent"],
                _produto_afiliado_hotmart_list_produto_afiliado_hotmart_list_component__WEBPACK_IMPORTED_MODULE_34__["ProdutoAfiliadoHotmartListComponent"],
                _produto_afiliado_hotmart_edit_produto_afiliado_hotmart_edit_component__WEBPACK_IMPORTED_MODULE_35__["ProdutoAfiliadoHotmartEditComponent"],
                _produto_afiliado_hotmart_detalhe_produto_afiliado_hotmart_detalhe_component__WEBPACK_IMPORTED_MODULE_36__["ProdutoAfiliadoHotmartDetalheComponent"],
                _modelo_campanha_ads_teste_list_modelo_campanha_ads_teste_list_component__WEBPACK_IMPORTED_MODULE_37__["ModeloCampanhaAdsTesteListComponent"],
                _modelo_campanha_ads_teste_edit_modelo_campanha_ads_teste_edit_component__WEBPACK_IMPORTED_MODULE_38__["ModeloCampanhaAdsTesteEditComponent"],
                _campanha_ads_teste_edit_campanha_ads_teste_edit_component__WEBPACK_IMPORTED_MODULE_39__["CampanhaAdsTesteEditComponent"],
                _anuncio_ads_lista_anuncio_ads_lista_component__WEBPACK_IMPORTED_MODULE_40__["AnuncioAdsListaComponent"],
                _anuncio_ads_edita_anuncio_ads_edita_component__WEBPACK_IMPORTED_MODULE_41__["AnuncioAdsEditaComponent"],
                _campanha_ads_teste_lista_campanha_ads_teste_lista_component__WEBPACK_IMPORTED_MODULE_42__["CampanhaAdsTesteListaComponent"],
                _pixel_google_list_pixel_google_list_component__WEBPACK_IMPORTED_MODULE_43__["PixelGoogleListComponent"],
                _pixel_google_edit_pixel_google_edit_component__WEBPACK_IMPORTED_MODULE_44__["PixelGoogleEditComponent"],
                _campanha_ads_teste_detalhe_campanha_ads_teste_detalhe_component__WEBPACK_IMPORTED_MODULE_45__["CampanhaAdsTesteDetalheComponent"],
                _escolhe_anuncio_para_campanha_teste_escolhe_anuncio_para_campanha_teste_component__WEBPACK_IMPORTED_MODULE_46__["EscolheAnuncioParaCampanhaTesteComponent"],
                _escolhe_palavra_chave_para_campanha_teste_escolhe_palavra_chave_para_campanha_teste_component__WEBPACK_IMPORTED_MODULE_47__["EscolhePalavraChaveParaCampanhaTesteComponent"],
                _conta_google_list_conta_google_list_component__WEBPACK_IMPORTED_MODULE_48__["ContaGoogleListComponent"],
                _conta_google_edit_conta_google_edit_component__WEBPACK_IMPORTED_MODULE_49__["ContaGoogleEditComponent"],
                _ideia_palavra_chave_list_simples_melhores_cpc_ideia_palavra_chave_list_simples_melhores_cpc_component__WEBPACK_IMPORTED_MODULE_50__["IdeiaPalavraChaveListSimplesMelhoresCpcComponent"],
                _ideia_palavra_chave_list_simples_top_ideia_palavra_chave_list_simples_top_component__WEBPACK_IMPORTED_MODULE_51__["IdeiaPalavraChaveListSimplesTopComponent"],
                _ideia_palavra_chave_list_simples_top_pesquisa_ideia_palavra_chave_list_simples_top_pesquisa_component__WEBPACK_IMPORTED_MODULE_52__["IdeiaPalavraChaveListSimplesTopPesquisaComponent"],
                _campanha_ads_teste_list_ativa_metrica_campanha_ads_teste_list_ativa_metrica_component__WEBPACK_IMPORTED_MODULE_53__["CampanhaAdsTesteListAtivaMetricaComponent"],
                _visita_produto_hotmart_resumo_visita_produto_hotmart_resumo_component__WEBPACK_IMPORTED_MODULE_54__["VisitaProdutoHotmartResumoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                //NgxImgModule.forRoot(),
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_24__["FileDropModule"],
                //UploadModule,
                angular2_image_upload__WEBPACK_IMPORTED_MODULE_25__["ImageUploadModule"].forRoot(),
                ng_drag_drop__WEBPACK_IMPORTED_MODULE_26__["NgDragDropModule"].forRoot(),
                _shared_sdk__WEBPACK_IMPORTED_MODULE_11__["SDKBrowserModule"].forRoot(),
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
                ng_apexcharts__WEBPACK_IMPORTED_MODULE_27__["NgApexchartsModule"]
                //MatMomentDateModule
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
                _shared_sdk_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
                _shared_sdk_sockets_socket_driver__WEBPACK_IMPORTED_MODULE_8__["SocketDriver"],
                _shared_sdk__WEBPACK_IMPORTED_MODULE_11__["SDKModels"],
                _shared_sdk__WEBPACK_IMPORTED_MODULE_11__["LoopBackAuth"],
                _shared_sdk__WEBPACK_IMPORTED_MODULE_11__["InternalStorage"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
                //MatMomentDateModule,
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-BR' },
            ],
            entryComponents: [
                _token_acesso_edit_token_acesso_edit_component__WEBPACK_IMPORTED_MODULE_32__["TokenAcessoEditComponent"],
                _produto_afiliado_hotmart_edit_produto_afiliado_hotmart_edit_component__WEBPACK_IMPORTED_MODULE_35__["ProdutoAfiliadoHotmartEditComponent"],
                _modelo_campanha_ads_teste_edit_modelo_campanha_ads_teste_edit_component__WEBPACK_IMPORTED_MODULE_38__["ModeloCampanhaAdsTesteEditComponent"],
                _anuncio_ads_edita_anuncio_ads_edita_component__WEBPACK_IMPORTED_MODULE_41__["AnuncioAdsEditaComponent"],
                _campanha_ads_teste_edit_campanha_ads_teste_edit_component__WEBPACK_IMPORTED_MODULE_39__["CampanhaAdsTesteEditComponent"],
                _pixel_google_edit_pixel_google_edit_component__WEBPACK_IMPORTED_MODULE_44__["PixelGoogleEditComponent"],
                _escolhe_anuncio_para_campanha_teste_escolhe_anuncio_para_campanha_teste_component__WEBPACK_IMPORTED_MODULE_46__["EscolheAnuncioParaCampanhaTesteComponent"],
                _escolhe_palavra_chave_para_campanha_teste_escolhe_palavra_chave_para_campanha_teste_component__WEBPACK_IMPORTED_MODULE_47__["EscolhePalavraChaveParaCampanhaTesteComponent"],
                _conta_google_edit_conta_google_edit_component__WEBPACK_IMPORTED_MODULE_49__["ContaGoogleEditComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base-component/base-edit-component.ts":
/*!*******************************************************!*\
  !*** ./src/app/base-component/base-edit-component.ts ***!
  \*******************************************************/
/*! exports provided: BaseEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseEditComponent", function() { return BaseEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BaseEditComponent = /** @class */ (function () {
    function BaseEditComponent(dialogRef, data, servico) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.servico = servico;
    }
    BaseEditComponent.prototype.ngOnInit = function () {
        console.log("Data(BaseEdit):", this.data);
        if (this.data.origem) {
            this.origem = this.data.origem;
        }
        if (!this.data.item) {
            console.log("fluxo nova");
            this.item = this.criaItem();
        }
        else {
            console.log('fluxo altera');
            this.item = this.data.item;
            console.log('Item(BaseEdit):', this.item);
        }
        this.montaCombos();
        this.posItem();
    };
    BaseEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.preSubmit();
        console.log('Submit(BaseEdit):', this.item);
        this.servico.upsert(this.item, function (err, obj) {
            if (err) {
                console.log("ErroUpsert:" + JSON.stringify(err));
            }
            else {
            }
            _this.posSubmit();
        }).subscribe(function (e) {
            console.log(JSON.stringify(e));
            _this.closeDialog();
        });
    };
    BaseEditComponent.prototype.preSubmit = function () {
    };
    BaseEditComponent.prototype.closeDialog = function () {
        this.dialogRef.close('Pizza!');
    };
    BaseEditComponent.prototype.criaItem = function () {
        return null;
    };
    BaseEditComponent.prototype.montaCombos = function () {
    };
    BaseEditComponent.prototype.posItem = function () {
    };
    BaseEditComponent.prototype.posSubmit = function () {
    };
    BaseEditComponent = __decorate([
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, Object])
    ], BaseEditComponent);
    return BaseEditComponent;
}());



/***/ }),

/***/ "./src/app/base-component/base-item-id-component.ts":
/*!**********************************************************!*\
  !*** ./src/app/base-component/base-item-id-component.ts ***!
  \**********************************************************/
/*! exports provided: BaseItemIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseItemIdComponent", function() { return BaseItemIdComponent; });
var BaseItemIdComponent = /** @class */ (function () {
    function BaseItemIdComponent(dialog, srv, router) {
        this.dialog = dialog;
        this.srv = srv;
        this.router = router;
    }
    BaseItemIdComponent.prototype.ngOnInit = function () {
        this.preCarregaTela();
        this.carregaTela();
    };
    BaseItemIdComponent.prototype.preCarregaTela = function () { };
    BaseItemIdComponent.prototype.posCarregaLista = function () { };
    BaseItemIdComponent.prototype.carregaTela = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = params['id'];
            console.log('ID:', id);
            _this.srv.findById(id, _this.getFiltro())
                .subscribe(function (result) {
                console.log('Principal:', result);
                _this.principal = result;
                _this.posCarregaLista();
            });
        });
    };
    BaseItemIdComponent.prototype.getFiltro = function () {
        return {};
    };
    return BaseItemIdComponent;
}());



/***/ }),

/***/ "./src/app/base-component/base-list-component.ts":
/*!*******************************************************!*\
  !*** ./src/app/base-component/base-list-component.ts ***!
  \*******************************************************/
/*! exports provided: BaseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseListComponent", function() { return BaseListComponent; });
/* harmony import */ var _constantes_base_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constantes/base.url */ "./src/app/constantes/base.url.ts");

var BaseListComponent = /** @class */ (function () {
    function BaseListComponent(dialog, srv) {
        this.dialog = dialog;
        this.srv = srv;
    }
    BaseListComponent.prototype.ngOnInit = function () {
        this.preCarregaTela();
        this.carregaTela();
    };
    BaseListComponent.prototype.preCarregaTela = function () { };
    BaseListComponent.prototype.posCarregaLista = function () { };
    BaseListComponent.prototype.carregaTela = function () {
        var _this = this;
        this.srv.find(this.getFiltro())
            .subscribe(function (result) {
            console.log('result: ', result);
            _this.listaBase = result;
            _this.posCarregaLista();
        });
    };
    BaseListComponent.prototype.edita = function (edicao) {
        var _this = this;
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getComponente(), {
            width: '800px',
            data: {
                item: edicao
            }
        });
    };
    BaseListComponent.prototype.dialogo1 = function (dados) {
        var _this = this;
        console.log('dialogo1.dados:', dados);
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getDialogo1(), {
            width: '800px',
            data: dados
        });
    };
    BaseListComponent.prototype.getDialogo1 = function () {
    };
    BaseListComponent.prototype.dialogo2 = function (dados) {
        var _this = this;
        console.log('dialogo2.dados:', dados);
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getDialogo2(), {
            width: '800px',
            data: dados
        });
    };
    BaseListComponent.prototype.getDialogo2 = function () {
    };
    BaseListComponent.prototype.getComponente = function () { };
    BaseListComponent.prototype.getFiltro = function () {
        return {};
    };
    BaseListComponent.prototype.percentual = function (valorPerc, valor) {
        var result = ((valorPerc - valor) / valor) * 100;
        return result.toFixed(1);
    };
    BaseListComponent.prototype.verificaMarcaTexto = function (valorPerc, valor) {
        var perc = ((valorPerc - valor) / valor) * 100;
        if (perc <= _constantes_base_url__WEBPACK_IMPORTED_MODULE_0__["PERCENTUAL_AVISO"] && perc >= (_constantes_base_url__WEBPACK_IMPORTED_MODULE_0__["PERCENTUAL_AVISO"] * -1)) {
            return "dgc-marcatexto";
        }
        else {
            return "";
        }
    };
    return BaseListComponent;
}());



/***/ }),

/***/ "./src/app/base-component/base-seleciona-component.ts":
/*!************************************************************!*\
  !*** ./src/app/base-component/base-seleciona-component.ts ***!
  \************************************************************/
/*! exports provided: BaseSelecionaEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseSelecionaEditComponent", function() { return BaseSelecionaEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BaseSelecionaEditComponent = /** @class */ (function () {
    function BaseSelecionaEditComponent(dialogRef, data, srvItem, srvRel) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.srvItem = srvItem;
        this.srvRel = srvRel;
    }
    BaseSelecionaEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log("Parametro entrada", this.data);
        if (this.data.origem) {
            this.origem = this.data.origem;
        }
        this.srvItem.find(this.getFiltro())
            .subscribe(function (result) {
            _this.listaItem = result;
            console.log('ListaItem(seleciona):', _this.listaItem);
        });
    };
    BaseSelecionaEditComponent.prototype.onChange = function (event, index, item) {
        if (event.checked) {
            var relNovo = this.criaRelacionamento();
            relNovo[this.getNomeChaveOrigemNoRelacionamento()] = this.origem.id;
            relNovo[this.getNomeChaveItemNoRelacionamento()] = item[this.getNomeChaveItem()];
            item[this.getNomePropriedadeRel()].push(relNovo);
        }
        else {
            item[this.getNomePropriedadeRel()] = [];
        }
    };
    BaseSelecionaEditComponent.prototype.onSubmit = function () {
        var _this = this;
        var listaEnvio = [];
        for (var i = 0; i < this.listaItem.length; i++) {
            if (this.listaItem[i][this.getNomePropriedadeRel()].length > 0) {
                listaEnvio.push(this.listaItem[i][this.getNomePropriedadeRel()][0]);
            }
        }
        ;
        //console.log('Procurando ' , this.getNomeFuncaoAtualizacaoRelacionamento , ' em ' , this.srvRel);
        console.log('Envio Lista: ', listaEnvio);
        console.log('Envio Id', this.origem.id);
        this.srvRel[this.getNomeFuncaoAtualizacaoRelacionamento()](this.origem.id, listaEnvio)
            .subscribe(function (resultado) {
            _this.dialogRef.close('Pizza!');
        });
    };
    BaseSelecionaEditComponent.prototype.getCheck = function (item) {
        //console.log('Procurando:' , this.getNomePropriedadeRel() , " em " , item);
        return (item[this.getNomePropriedadeRel()].length > 0);
    };
    BaseSelecionaEditComponent.prototype.getFiltro = function () {
        return {};
    };
    BaseSelecionaEditComponent = __decorate([
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, Object, Object])
    ], BaseSelecionaEditComponent);
    return BaseSelecionaEditComponent;
}());



/***/ }),

/***/ "./src/app/campanha-ads-teste-detalhe/campanha-ads-teste-detalhe.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/campanha-ads-teste-detalhe/campanha-ads-teste-detalhe.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/campanha-ads-teste-detalhe/campanha-ads-teste-detalhe.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/campanha-ads-teste-detalhe/campanha-ads-teste-detalhe.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\" *ngIf=\"principal\">\n  <div class=\"dgc-painel-header\" *ngIf=\"principal\">\n      <span>{{principal.nome}}</span>\n  </div>\n\n  <div class=\"dgc-card\">\n    <div class=\"dgc-card-header\">\n      Anúncios\n    </div>\n    <div class=\"dgc-card-detalhe\" *ngFor=\"let rel of principal.anuncioCampanhaAdsTestes\">\n      <span>{{rel.anuncioAds.titulo1}} / {{rel.anuncioAds.titulo2}} / {{rel.anuncioAds.titulo3}}</span>\n    </div>\n    <div class=\"dgc-card-comandos\">\n      <button class=\"btn-primary btn-sm btn\" (click)=\"editaAnuncio(principal)\">Novo</button>\n    </div>\n  </div>\n\n  <div class=\"dgc-card\">\n    <div class=\"dgc-card-header\">\n      Palavras-Chave\n    </div>\n    <div class=\"dgc-card-detalhe\" *ngFor=\"let rel of principal.palavraChaveCampanhaAdsTestes\">\n      <span>\n        {{rel.ideiaPalavraChave.texto}} - {{rel.ideiaPalavraChave.mediaPesquisa}} - cpc: {{rel.ideiaPalavraChave.cpcMinimoTopPage | currency : 'BRL'}} até {{rel.ideiaPalavraChave.cpcMaximoTopPage | currency : 'BRL'}} [{{rel.ideiaPalavraChave.concorrencia}}]\n      </span>\n    </div>\n    <div class=\"dgc-card-comandos\">\n      <button class=\"btn-primary btn-sm btn\" (click)=\"editaPalavraChave(principal)\">Novo</button>\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/campanha-ads-teste-detalhe/campanha-ads-teste-detalhe.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/campanha-ads-teste-detalhe/campanha-ads-teste-detalhe.component.ts ***!
  \************************************************************************************/
/*! exports provided: CampanhaAdsTesteDetalheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsTesteDetalheComponent", function() { return CampanhaAdsTesteDetalheComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component_base_item_id_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-component/base-item-id-component */ "./src/app/base-component/base-item-id-component.ts");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _escolhe_anuncio_para_campanha_teste_escolhe_anuncio_para_campanha_teste_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../escolhe-anuncio-para-campanha-teste/escolhe-anuncio-para-campanha-teste.component */ "./src/app/escolhe-anuncio-para-campanha-teste/escolhe-anuncio-para-campanha-teste.component.ts");
/* harmony import */ var _escolhe_palavra_chave_para_campanha_teste_escolhe_palavra_chave_para_campanha_teste_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../escolhe-palavra-chave-para-campanha-teste/escolhe-palavra-chave-para-campanha-teste.component */ "./src/app/escolhe-palavra-chave-para-campanha-teste/escolhe-palavra-chave-para-campanha-teste.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CampanhaAdsTesteDetalheComponent = /** @class */ (function (_super) {
    __extends(CampanhaAdsTesteDetalheComponent, _super);
    function CampanhaAdsTesteDetalheComponent(dialog, srv, router) {
        var _this = _super.call(this, dialog, srv, router) || this;
        _this.dialog = dialog;
        _this.srv = srv;
        _this.router = router;
        return _this;
    }
    CampanhaAdsTesteDetalheComponent.prototype.getFiltro = function () {
        return {
            'include': [
                { 'relation': 'anuncioCampanhaAdsTestes', 'scope': { 'include': 'anuncioAds' } },
                { 'relation': 'palavraChaveCampanhaAdsTestes', 'scope': { 'include': 'ideiaPalavraChave' } },
                { 'relation': 'produtoAfiliadoHotmart' },
                { 'relation': 'modeloCampanhaAdsTeste' }
            ]
        };
    };
    CampanhaAdsTesteDetalheComponent.prototype.editaAnuncio = function (origem, edicao) {
        var _this = this;
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(_escolhe_anuncio_para_campanha_teste_escolhe_anuncio_para_campanha_teste_component__WEBPACK_IMPORTED_MODULE_5__["EscolheAnuncioParaCampanhaTesteComponent"], {
            width: '800px',
            data: {
                item: edicao,
                origem: origem
            }
        });
    };
    CampanhaAdsTesteDetalheComponent.prototype.editaPalavraChave = function (origem, edicao) {
        var _this = this;
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(_escolhe_palavra_chave_para_campanha_teste_escolhe_palavra_chave_para_campanha_teste_component__WEBPACK_IMPORTED_MODULE_6__["EscolhePalavraChaveParaCampanhaTesteComponent"], {
            width: '800px',
            data: {
                item: edicao,
                origem: origem
            }
        });
    };
    CampanhaAdsTesteDetalheComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-campanha-ads-teste-detalhe',
            template: __webpack_require__(/*! ./campanha-ads-teste-detalhe.component.html */ "./src/app/campanha-ads-teste-detalhe/campanha-ads-teste-detalhe.component.html"),
            styles: [__webpack_require__(/*! ./campanha-ads-teste-detalhe.component.css */ "./src/app/campanha-ads-teste-detalhe/campanha-ads-teste-detalhe.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _shared_sdk__WEBPACK_IMPORTED_MODULE_4__["CampanhaAdsTesteApi"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CampanhaAdsTesteDetalheComponent);
    return CampanhaAdsTesteDetalheComponent;
}(_base_component_base_item_id_component__WEBPACK_IMPORTED_MODULE_3__["BaseItemIdComponent"]));



/***/ }),

/***/ "./src/app/campanha-ads-teste-edit/campanha-ads-teste-edit.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/campanha-ads-teste-edit/campanha-ads-teste-edit.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/campanha-ads-teste-edit/campanha-ads-teste-edit.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/campanha-ads-teste-edit/campanha-ads-teste-edit.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"item\" mat-dialog-title>Campanha Ads</h2>\n\n<form *ngIf=\"item\" class=\"example-full-width\" (ngSubmit)=\"onSubmit()\">\n\n  <mat-dialog-content>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #nome [(ngModel)]=\"item.nome\" name=\"nome\" placeholder=\"Nome\" />\n    </mat-form-field>\n\n    <mat-form-field class=\"example-half-width\" *ngIf=\"listaModelo\">\n      <mat-select placeholder=\"Modelo Campanha\"  #modeloCampanhaAdsTesteId [(ngModel)]=\"item.modeloCampanhaAdsTesteId\" name=\"modeloCampanhaAdsTesteId\">\n        <mat-option *ngFor=\"let modelo of listaModelo\" [value]=\"modelo.id\">\n          Orçamento: {{ modelo.orcamentoDiario | currency : 'BRL'}} * {{modelo.qtdeDia}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"!item.codigoAds\" class=\"example-half-width\">\n      <mat-select #prontaParaTeste [(ngModel)]=\"item.prontaParaTeste\" name=\"prontaParaTeste\" placeholder=\"Pronta\">\n        <mat-option value=\"0\">Não</mat-option>\n        <mat-option value=\"1\">Sim</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"item.codigoAds\" class=\"example-half-width\">\n      <mat-select #ativa [(ngModel)]=\"item.ativa\" name=\"ativa\" placeholder=\"Ativa\">\n        <mat-option value='0'>Não</mat-option>\n        <mat-option value='1'>Sim</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\" *ngIf=\"listaConta\">\n      <mat-select placeholder=\"Conta Google\"  #contaGoogleId [(ngModel)]=\"item.contaGoogleId\" name=\"contaGoogleId\">\n        <mat-option *ngFor=\"let conta of listaConta\" [value]=\"conta.id\">\n          {{ conta.gmail}} ({{conta.nome}})\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n  </mat-dialog-content>\n  <p>O valor de item.ativa é: {{ item.ativa }}</p>\n\n  <mat-dialog-actions>\n    <button mat-raised-button>Salvar</button>\n    <button mat-raised-button mat-dialog-close>Fechar</button>\n  </mat-dialog-actions>\n\n</form>\n\n"

/***/ }),

/***/ "./src/app/campanha-ads-teste-edit/campanha-ads-teste-edit.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/campanha-ads-teste-edit/campanha-ads-teste-edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: CampanhaAdsTesteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsTesteEditComponent", function() { return CampanhaAdsTesteEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _base_component_base_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-component/base-edit-component */ "./src/app/base-component/base-edit-component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CampanhaAdsTesteEditComponent = /** @class */ (function (_super) {
    __extends(CampanhaAdsTesteEditComponent, _super);
    function CampanhaAdsTesteEditComponent(dialogRef, data, servico, srvModelo, srvConta) {
        var _this = _super.call(this, dialogRef, data, servico) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.servico = servico;
        _this.srvModelo = srvModelo;
        _this.srvConta = srvConta;
        return _this;
    }
    CampanhaAdsTesteEditComponent.prototype.criaItem = function () {
        var novo = new _shared_sdk__WEBPACK_IMPORTED_MODULE_2__["CampanhaAdsTeste"]();
        novo.produtoAfiliadoHotmartId = this.origem.hotmartId;
        return novo;
    };
    CampanhaAdsTesteEditComponent.prototype.montaCombos = function () {
        var _this = this;
        this.srvModelo.find()
            .subscribe(function (result) {
            _this.listaModelo = result;
        });
        this.srvConta.find()
            .subscribe(function (result) {
            _this.listaConta = result;
        });
    };
    CampanhaAdsTesteEditComponent.prototype.preSubmit = function () {
        delete this.item['contaGoogle'];
    };
    CampanhaAdsTesteEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-campanha-ads-teste-edit',
            template: __webpack_require__(/*! ./campanha-ads-teste-edit.component.html */ "./src/app/campanha-ads-teste-edit/campanha-ads-teste-edit.component.html"),
            styles: [__webpack_require__(/*! ./campanha-ads-teste-edit.component.css */ "./src/app/campanha-ads-teste-edit/campanha-ads-teste-edit.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _shared_sdk__WEBPACK_IMPORTED_MODULE_2__["CampanhaAdsTesteApi"],
            _shared_sdk__WEBPACK_IMPORTED_MODULE_2__["ModeloCampanhaAdsTesteApi"], _shared_sdk__WEBPACK_IMPORTED_MODULE_2__["ContaGoogleApi"]])
    ], CampanhaAdsTesteEditComponent);
    return CampanhaAdsTesteEditComponent;
}(_base_component_base_edit_component__WEBPACK_IMPORTED_MODULE_3__["BaseEditComponent"]));



/***/ }),

/***/ "./src/app/campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica-base.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica-base.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: CampanhaAdsTesteListAtivaMetricaBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsTesteListAtivaMetricaBaseComponent", function() { return CampanhaAdsTesteListAtivaMetricaBaseComponent; });
var CampanhaAdsTesteListAtivaMetricaBaseComponent = /** @class */ (function () {
    function CampanhaAdsTesteListAtivaMetricaBaseComponent(srv, router, dialog) {
        this.srv = srv;
        this.router = router;
        this.dialog = dialog;
    }
    CampanhaAdsTesteListAtivaMetricaBaseComponent.prototype.ngOnInit = function () {
        this.preCarregaTela();
        this.carregaTela();
    };
    CampanhaAdsTesteListAtivaMetricaBaseComponent.prototype.preCarregaTela = function () { };
    CampanhaAdsTesteListAtivaMetricaBaseComponent.prototype.posCarregaLista = function () { };
    CampanhaAdsTesteListAtivaMetricaBaseComponent.prototype.carregaTela = function () {
        var _this = this;
        this.srv.find(this.getFiltro())
            .subscribe(function (result) {
            console.log('result: ', result);
            _this.listaBase = result;
            _this.posCarregaLista();
        });
    };
    CampanhaAdsTesteListAtivaMetricaBaseComponent.prototype.dialogo1 = function (dados) {
        var _this = this;
        console.log('dialogo1.dados:', dados);
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getDialogo1(), {
            width: '800px',
            data: dados
        });
    };
    CampanhaAdsTesteListAtivaMetricaBaseComponent.prototype.getDialogo1 = function () {
    };
    CampanhaAdsTesteListAtivaMetricaBaseComponent.prototype.dialogo2 = function (dados) {
        var _this = this;
        console.log('dialogo2.dados:', dados);
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getDialogo2(), {
            width: '800px',
            data: dados
        });
    };
    CampanhaAdsTesteListAtivaMetricaBaseComponent.prototype.getDialogo2 = function () {
    };
    CampanhaAdsTesteListAtivaMetricaBaseComponent.prototype.getFiltro = function () {
        return {};
    };
    return CampanhaAdsTesteListAtivaMetricaBaseComponent;
}());



/***/ }),

/***/ "./src/app/campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dgc-card {\n    width: 48%;\n}"

/***/ }),

/***/ "./src/app/campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\" *ngIf=\"listaBase\">\n\t<div class=\"dgc-painel-header\">\n\t\t<span>Campanhas Ativas ({{listaBase.length}})</span>\n  \t\t<button class=\"btn btn-primary btn-sm dgc-botao-comando dgc-direita\" (click)=\"edita()\">novo</button>\n\t</div>\n\t<div class=\"dgc-painel-principal\">\n\t\t<div class=\"dgc-card\" *ngFor=\"let item of listaBase\">\n \t\t\t<div class=\"dgc-card-header\">\n \t\t\t\t<span>{{item.produtoAfiliadoHotmart.nome}} ({{item.produtoAfiliadoHotmart.sigla}})</span>\n \t\t\t</div>\n\t\t\t <div class=\"dgc-card-header\" >\n\t\t\t\t<span>{{item.nome}}</span>\n\t\t\t</div>\n\t\t\t <div class=\"dgc-card-header\" *ngIf=\"(item.produtoAfiliadoHotmart.visitaProdutoHotmarts.length == 0)\">\n\t\t\t\t<span style=\"color: red;\">Não Encontrado</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Comissão real: {{item.produtoAfiliadoHotmart.precoReal | currency : 'BRL'}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\" *ngIf=\"(item.produtoAfiliadoHotmart.visitaProdutoHotmarts.length > 0)\">\n\t\t\t\t<span style=\"margin-right: 4px;\">Temperatura: {{item.produtoAfiliadoHotmart.visitaProdutoHotmarts[0].temperatura}}</span>\n\t\t\t\t<span>({{item.produtoAfiliadoHotmart.visitaProdutoHotmarts[0].dataInsercao | date: 'dd-MM-yyy'}})</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\" *ngFor=\"let metrica of item.campanhaAdsMetricas\">\n\t\t\t\t<div >{{metrica.dataHora | date: 'dd-MM-yyy HH:mm'}}</div>\n\t\t\t\t<span style=\"margin-right: 8px;\">cliques: {{metrica.clique}}</span>\n\t\t\t\t<span style=\"margin-right: 8px;\">impresssao: {{metrica.impressao}}</span>\n\t\t\t\t<span style=\"margin-right: 8px;\">cpc: {{metrica.cpcMedio}}</span>\n\t\t\t\t<span style=\"margin-right: 8px;\">custo: {{metrica.custoCampanha}}</span>\n\t\t\t</div>\n \t\t</div>\n  \t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CampanhaAdsTesteListAtivaMetricaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsTesteListAtivaMetricaComponent", function() { return CampanhaAdsTesteListAtivaMetricaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _campanha_ads_teste_list_ativa_metrica_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./campanha-ads-teste-list-ativa-metrica-base.component */ "./src/app/campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica-base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CampanhaAdsTesteListAtivaMetricaComponent = /** @class */ (function (_super) {
    __extends(CampanhaAdsTesteListAtivaMetricaComponent, _super);
    function CampanhaAdsTesteListAtivaMetricaComponent(srv, router, dialog) {
        var _this = _super.call(this, srv, router, dialog) || this;
        _this.srv = srv;
        _this.router = router;
        _this.dialog = dialog;
        return _this;
    }
    CampanhaAdsTesteListAtivaMetricaComponent.prototype.getFiltro = function () {
        return {
            'where': { 'ativa': 1 },
            'include': [
                'contaGoogle',
                { 'relation': 'campanhaAdsMetricas', 'scope': { 'order': 'dataHora desc', 'limit': 5 } },
                { 'relation': 'produtoAfiliadoHotmart', 'scope': { 'include': { 'relation': 'visitaProdutoHotmarts', 'scope': {
                                'where': { 'maisRecente': 1 },
                                'include': 'ideiaPalavraChave'
                            } } } }
            ]
        };
    };
    CampanhaAdsTesteListAtivaMetricaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-campanha-ads-teste-list-ativa-metrica',
            template: __webpack_require__(/*! ./campanha-ads-teste-list-ativa-metrica.component.html */ "./src/app/campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica.component.html"),
            styles: [__webpack_require__(/*! ./campanha-ads-teste-list-ativa-metrica.component.css */ "./src/app/campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_sdk__WEBPACK_IMPORTED_MODULE_3__["CampanhaAdsTesteApi"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], CampanhaAdsTesteListAtivaMetricaComponent);
    return CampanhaAdsTesteListAtivaMetricaComponent;
}(_campanha_ads_teste_list_ativa_metrica_base_component__WEBPACK_IMPORTED_MODULE_4__["CampanhaAdsTesteListAtivaMetricaBaseComponent"]));



/***/ }),

/***/ "./src/app/campanha-ads-teste-lista/campanha-ads-teste-lista.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/campanha-ads-teste-lista/campanha-ads-teste-lista.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dgc-card {\n    width: 280px;\n}"

/***/ }),

/***/ "./src/app/campanha-ads-teste-lista/campanha-ads-teste-lista.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/campanha-ads-teste-lista/campanha-ads-teste-lista.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\" *ngIf=\"principal\">\n  <div class=\"dgc-painel-header\">\n      <span>Campanhas Teste - {{principal.nome}}</span>\n      <button class=\"btn btn-primary btn-sm dgc-botao-comando dgc-direita\" (click)=\"edita()\">novo</button>\n  </div>\n  <div class=\"dgc-painel-principal\">\n      <div class=\"dgc-card\" *ngFor=\"let item of principal.campanhaAdsTestes\">\n        <div class=\"dgc-card-header\">\n          <span class=\"dgc-link\" routerLink=\"/campanhaAdsTesteDetalhe/{{item.id}}\">{{item.nome}}</span>\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          Orçamento: {{ item.modeloCampanhaAdsTeste.orcamentoDiario | currency : 'BRL'}} * {{item.modeloCampanhaAdsTeste.qtdeDia}}\n          = {{ (item.modeloCampanhaAdsTeste.orcamentoDiario*item.modeloCampanhaAdsTeste.qtdeDia) | currency : 'BRL' }}\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          Código Ads: {{item.codigoAds}}\n        </div>\n        <div *ngIf=\"item.contaGoogle\" class=\"dgc-card-detalhe\">\n          Conta Google: {{item.contaGoogle.nome}}\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          Pronta: {{item.prontaParaTeste}}\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          Ativa: {{item.ativa}}\n        </div>\n        <div class=\"dgc-card-header\">\n          Resultados\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          Custo: {{item.custoTotal | currency : 'BRL'}}\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          Receita: {{item.receitaTotal}}\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          Impressões: {{item.qtdeImpressao}} ({{(item.custoTotal / item.qtdeImpressao) | currency : 'BRL'}})\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          Cliques: {{item.qtdeClique}} ({{(item.custoTotal / item.qtdeClique) | currency : 'BRL'}})\n        </div>\n        <div class=\"dgc-card-comandos\">\n          <button class=\"btn-primary btn-sm btn\" (click)=\"edita(item)\">Editar</button>\n        </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/campanha-ads-teste-lista/campanha-ads-teste-lista.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/campanha-ads-teste-lista/campanha-ads-teste-lista.component.ts ***!
  \********************************************************************************/
/*! exports provided: CampanhaAdsTesteListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsTesteListaComponent", function() { return CampanhaAdsTesteListaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component_base_item_id_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-component/base-item-id-component */ "./src/app/base-component/base-item-id-component.ts");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _campanha_ads_teste_edit_campanha_ads_teste_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../campanha-ads-teste-edit/campanha-ads-teste-edit.component */ "./src/app/campanha-ads-teste-edit/campanha-ads-teste-edit.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CampanhaAdsTesteListaComponent = /** @class */ (function (_super) {
    __extends(CampanhaAdsTesteListaComponent, _super);
    function CampanhaAdsTesteListaComponent(dialog, srv, router) {
        var _this = _super.call(this, dialog, srv, router) || this;
        _this.dialog = dialog;
        _this.srv = srv;
        _this.router = router;
        return _this;
    }
    CampanhaAdsTesteListaComponent.prototype.getFiltro = function () {
        return {
            'include': [{ 'relation': 'campanhaAdsTestes', 'scope': {
                        'include': ['modeloCampanhaAdsTeste', 'contaGoogle']
                    }
                }]
        };
    };
    CampanhaAdsTesteListaComponent.prototype.edita = function (edicao) {
        var _this = this;
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getComponente(), {
            width: '800px',
            data: {
                item: edicao,
                origem: this.principal
            }
        });
    };
    CampanhaAdsTesteListaComponent.prototype.getComponente = function () {
        return _campanha_ads_teste_edit_campanha_ads_teste_edit_component__WEBPACK_IMPORTED_MODULE_5__["CampanhaAdsTesteEditComponent"];
    };
    CampanhaAdsTesteListaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-campanha-ads-teste-lista',
            template: __webpack_require__(/*! ./campanha-ads-teste-lista.component.html */ "./src/app/campanha-ads-teste-lista/campanha-ads-teste-lista.component.html"),
            styles: [__webpack_require__(/*! ./campanha-ads-teste-lista.component.css */ "./src/app/campanha-ads-teste-lista/campanha-ads-teste-lista.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _shared_sdk__WEBPACK_IMPORTED_MODULE_4__["ProdutoAfiliadoHotmartApi"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CampanhaAdsTesteListaComponent);
    return CampanhaAdsTesteListaComponent;
}(_base_component_base_item_id_component__WEBPACK_IMPORTED_MODULE_3__["BaseItemIdComponent"]));



/***/ }),

/***/ "./src/app/constantes/base.url.ts":
/*!****************************************!*\
  !*** ./src/app/constantes/base.url.ts ***!
  \****************************************/
/*! exports provided: BASE_URL, API_VERSION, URL_UPLOAD, URL_IMAGEM, DS_MES, DS_DIA_SEMANA, LIMITE_PONTOS_MONITORIA, CUSTO_TRADE, PERCENTUAL_AVISO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return API_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_UPLOAD", function() { return URL_UPLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_IMAGEM", function() { return URL_IMAGEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DS_MES", function() { return DS_MES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DS_DIA_SEMANA", function() { return DS_DIA_SEMANA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMITE_PONTOS_MONITORIA", function() { return LIMITE_PONTOS_MONITORIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTO_TRADE", function() { return CUSTO_TRADE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERCENTUAL_AVISO", function() { return PERCENTUAL_AVISO; });
//
var BASE_URL = 'http://vps-40d69db1.vps.ovh.ca:23101';
//export const BASE_URL = 'http://localhost:23101'; 
//export const BASE_URL = 'https://tyche.ovh:23101'; 
var API_VERSION = 'api';
var URL_UPLOAD = BASE_URL + '/api/containers/container1/upload';
var URL_IMAGEM = BASE_URL + '/api/containers/container1/download';
var DS_MES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var DS_DIA_SEMANA = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
var LIMITE_PONTOS_MONITORIA = 15;
var CUSTO_TRADE = 11;
var PERCENTUAL_AVISO = 1.5;


/***/ }),

/***/ "./src/app/conta-google-edit/conta-google-edit-base.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/conta-google-edit/conta-google-edit-base.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContaGoogleEditBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaGoogleEditBaseComponent", function() { return ContaGoogleEditBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ContaGoogleEditBaseComponent = /** @class */ (function () {
    function ContaGoogleEditBaseComponent(dialogRef, data, servico) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.servico = servico;
    }
    ContaGoogleEditBaseComponent.prototype.ngOnInit = function () {
        console.log("Data(BaseEdit):", this.data);
        if (this.data.origem) {
            this.origem = this.data.origem;
        }
        if (!this.data.item) {
            console.log("fluxo nova");
            this.item = this.criaItem();
        }
        else {
            console.log('fluxo altera');
            this.item = this.data.item;
            console.log('Item(BaseEdit):', this.item);
        }
        this.montaCombos();
        this.posItem();
    };
    ContaGoogleEditBaseComponent.prototype.onSubmit = function () {
        var _this = this;
        this.preSubmit();
        console.log('Submit(BaseEdit):', this.item);
        this.servico.upsert(this.item, function (err, obj) {
            if (err) {
                console.log("ErroUpsert:" + JSON.stringify(err));
            }
            else {
            }
            _this.posSubmit();
        }).subscribe(function (e) {
            console.log(JSON.stringify(e));
            _this.closeDialog();
        });
    };
    ContaGoogleEditBaseComponent.prototype.preSubmit = function () {
    };
    ContaGoogleEditBaseComponent.prototype.closeDialog = function () {
        this.dialogRef.close('Pizza!');
    };
    ContaGoogleEditBaseComponent.prototype.criaItem = function () {
        return new _shared_sdk__WEBPACK_IMPORTED_MODULE_2__["ContaGoogle"]();
    };
    ContaGoogleEditBaseComponent.prototype.montaCombos = function () {
    };
    ContaGoogleEditBaseComponent.prototype.posItem = function () {
    };
    ContaGoogleEditBaseComponent.prototype.posSubmit = function () {
    };
    ContaGoogleEditBaseComponent = __decorate([
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _shared_sdk__WEBPACK_IMPORTED_MODULE_2__["ContaGoogleApi"]])
    ], ContaGoogleEditBaseComponent);
    return ContaGoogleEditBaseComponent;
}());



/***/ }),

/***/ "./src/app/conta-google-edit/conta-google-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/conta-google-edit/conta-google-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/conta-google-edit/conta-google-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/conta-google-edit/conta-google-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"item\" mat-dialog-title>ContaGoogle</h2>\n\n<form *ngIf=\"item\" class=\"example-full-width\" (ngSubmit)=\"onSubmit()\">\n\n\t<mat-dialog-content>\n\n\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t<input matInput #nome [(ngModel)]=\"item.nome\" name=\"nome\" placeholder=\"Nome\" />\n\t\t</mat-form-field>\n\n\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t<input matInput #gmail [(ngModel)]=\"item.gmail\" name=\"gmail\" placeholder=\"Gmail\" />\n\t\t</mat-form-field>\n\n\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t<input matInput #idAds [(ngModel)]=\"item.idAds\" name=\"idAds\" placeholder=\"Id Ads\" />\n\t\t</mat-form-field>\n\n\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t<input matInput #senha [(ngModel)]=\"item.senha\" name=\"senha\" placeholder=\"Senha\" />\n\t\t</mat-form-field>\n\n\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t<input matInput #urlAds [(ngModel)]=\"item.urlAds\" name=\"urlAds\" placeholder=\"Url Ads\" />\n\t\t</mat-form-field>\n\n\t</mat-dialog-content>\n\n\t<mat-dialog-actions>\n\t\t<button mat-raised-button>Salvar</button>\n\t\t<button mat-raised-button mat-dialog-close>Fechar</button>\n\t</mat-dialog-actions>\n\n</form>\n"

/***/ }),

/***/ "./src/app/conta-google-edit/conta-google-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/conta-google-edit/conta-google-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: ContaGoogleEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaGoogleEditComponent", function() { return ContaGoogleEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _conta_google_edit_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conta-google-edit-base.component */ "./src/app/conta-google-edit/conta-google-edit-base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ContaGoogleEditComponent = /** @class */ (function (_super) {
    __extends(ContaGoogleEditComponent, _super);
    function ContaGoogleEditComponent(dialogRef, data, servico) {
        var _this = _super.call(this, dialogRef, data, servico) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.servico = servico;
        return _this;
    }
    ContaGoogleEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conta-google-edit',
            template: __webpack_require__(/*! ./conta-google-edit.component.html */ "./src/app/conta-google-edit/conta-google-edit.component.html"),
            styles: [__webpack_require__(/*! ./conta-google-edit.component.css */ "./src/app/conta-google-edit/conta-google-edit.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _shared_sdk__WEBPACK_IMPORTED_MODULE_2__["ContaGoogleApi"]])
    ], ContaGoogleEditComponent);
    return ContaGoogleEditComponent;
}(_conta_google_edit_base_component__WEBPACK_IMPORTED_MODULE_3__["ContaGoogleEditBaseComponent"]));



/***/ }),

/***/ "./src/app/conta-google-list/conta-google-list-base.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/conta-google-list/conta-google-list-base.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContaGoogleListBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaGoogleListBaseComponent", function() { return ContaGoogleListBaseComponent; });
/* harmony import */ var _conta_google_edit_conta_google_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../conta-google-edit/conta-google-edit.component */ "./src/app/conta-google-edit/conta-google-edit.component.ts");

var ContaGoogleListBaseComponent = /** @class */ (function () {
    function ContaGoogleListBaseComponent(srv, router, dialog) {
        this.srv = srv;
        this.router = router;
        this.dialog = dialog;
    }
    ContaGoogleListBaseComponent.prototype.ngOnInit = function () {
        this.preCarregaTela();
        this.carregaTela();
    };
    ContaGoogleListBaseComponent.prototype.preCarregaTela = function () { };
    ContaGoogleListBaseComponent.prototype.posCarregaLista = function () { };
    ContaGoogleListBaseComponent.prototype.carregaTela = function () {
        var _this = this;
        this.srv.find(this.getFiltro())
            .subscribe(function (result) {
            console.log('result: ', result);
            _this.listaBase = result;
            _this.posCarregaLista();
        });
    };
    ContaGoogleListBaseComponent.prototype.edita = function (edicao) {
        var _this = this;
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getComponente(), {
            width: '800px',
            data: {
                item: edicao
            }
        });
    };
    ContaGoogleListBaseComponent.prototype.getComponente = function () {
        return _conta_google_edit_conta_google_edit_component__WEBPACK_IMPORTED_MODULE_0__["ContaGoogleEditComponent"];
    };
    ContaGoogleListBaseComponent.prototype.dialogo1 = function (dados) {
        var _this = this;
        console.log('dialogo1.dados:', dados);
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getDialogo1(), {
            width: '800px',
            data: dados
        });
    };
    ContaGoogleListBaseComponent.prototype.getDialogo1 = function () {
    };
    ContaGoogleListBaseComponent.prototype.dialogo2 = function (dados) {
        var _this = this;
        console.log('dialogo2.dados:', dados);
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getDialogo2(), {
            width: '800px',
            data: dados
        });
    };
    ContaGoogleListBaseComponent.prototype.getDialogo2 = function () {
    };
    ContaGoogleListBaseComponent.prototype.getFiltro = function () {
        return {};
    };
    return ContaGoogleListBaseComponent;
}());



/***/ }),

/***/ "./src/app/conta-google-list/conta-google-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/conta-google-list/conta-google-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/conta-google-list/conta-google-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/conta-google-list/conta-google-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\">\n\t<div class=\"dgc-painel-header\">\n\t\t<span>Conta Google</span>\n  \t\t<button class=\"btn btn-primary btn-sm dgc-botao-comando dgc-direita\" (click)=\"edita()\">novo</button>\n\t</div>\n\t<div *ngIf=\"listaBase\">\n\t\t<div class=\"dgc-card\" *ngFor=\"let item of listaBase\">\n \t\t\t<div class=\"dgc-card-header\">\n \t\t\t\t<span>{{item.nome}}</span>\n \t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>{{item.gmail}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>{{item.idAds}}</span>\n\t\t\t</div>\n \t\t\t<div class=\"dgc-card-comandos\">\n \t\t\t\t<button class=\"btn-primary btn-sm btn\" (click)=\"edita(item)\">Editar</button>\n \t\t\t</div>\n \t\t</div>\n  \t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/conta-google-list/conta-google-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/conta-google-list/conta-google-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ContaGoogleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaGoogleListComponent", function() { return ContaGoogleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _conta_google_list_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./conta-google-list-base.component */ "./src/app/conta-google-list/conta-google-list-base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContaGoogleListComponent = /** @class */ (function (_super) {
    __extends(ContaGoogleListComponent, _super);
    function ContaGoogleListComponent(srv, router, dialog) {
        var _this = _super.call(this, srv, router, dialog) || this;
        _this.srv = srv;
        _this.router = router;
        _this.dialog = dialog;
        return _this;
    }
    ContaGoogleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conta-google-list',
            template: __webpack_require__(/*! ./conta-google-list.component.html */ "./src/app/conta-google-list/conta-google-list.component.html"),
            styles: [__webpack_require__(/*! ./conta-google-list.component.css */ "./src/app/conta-google-list/conta-google-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_sdk__WEBPACK_IMPORTED_MODULE_3__["ContaGoogleApi"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ContaGoogleListComponent);
    return ContaGoogleListComponent;
}(_conta_google_list_base_component__WEBPACK_IMPORTED_MODULE_4__["ContaGoogleListBaseComponent"]));



/***/ }),

/***/ "./src/app/escolhe-anuncio-para-campanha-teste/escolhe-anuncio-para-campanha-teste.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/escolhe-anuncio-para-campanha-teste/escolhe-anuncio-para-campanha-teste.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/escolhe-anuncio-para-campanha-teste/escolhe-anuncio-para-campanha-teste.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/escolhe-anuncio-para-campanha-teste/escolhe-anuncio-para-campanha-teste.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"item\" mat-dialog-title>Anúncio para Campanha Teste</h2>\n\n<form *ngIf=\"listaItem\" class=\"example-full-width\" (ngSubmit)=\"onSubmit()\">\n\n  <mat-dialog-content>\n\n    <div *ngFor=\"let item of listaItem; let i = index;\">\n      <mat-checkbox  [checked]=\"getCheck(item)\"  (change)=\"onChange($event, i, item)\">\n        {{item.titulo1}} / {{item.titulo2}} / {{item.titulo3}}\n      </mat-checkbox>\n    </div>\n\n\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <button mat-raised-button>Salvar</button>\n    <button mat-raised-button mat-dialog-close>Fechar</button>\n  </mat-dialog-actions>\n\n</form>"

/***/ }),

/***/ "./src/app/escolhe-anuncio-para-campanha-teste/escolhe-anuncio-para-campanha-teste.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/escolhe-anuncio-para-campanha-teste/escolhe-anuncio-para-campanha-teste.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EscolheAnuncioParaCampanhaTesteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscolheAnuncioParaCampanhaTesteComponent", function() { return EscolheAnuncioParaCampanhaTesteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component_base_seleciona_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-component/base-seleciona-component */ "./src/app/base-component/base-seleciona-component.ts");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var EscolheAnuncioParaCampanhaTesteComponent = /** @class */ (function (_super) {
    __extends(EscolheAnuncioParaCampanhaTesteComponent, _super);
    function EscolheAnuncioParaCampanhaTesteComponent(dialogRef, data, srvItem, srvRel) {
        var _this = _super.call(this, dialogRef, data, srvItem, srvRel) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.srvItem = srvItem;
        _this.srvRel = srvRel;
        return _this;
    }
    EscolheAnuncioParaCampanhaTesteComponent.prototype.getNomePropriedadeRel = function () {
        return "anuncioCampanhaAdsTestes";
    };
    EscolheAnuncioParaCampanhaTesteComponent.prototype.criaRelacionamento = function () {
        return new _shared_sdk__WEBPACK_IMPORTED_MODULE_2__["AnuncioCampanhaAdsTeste"]();
    };
    EscolheAnuncioParaCampanhaTesteComponent.prototype.getNomeChaveItem = function () {
        return "id";
    };
    EscolheAnuncioParaCampanhaTesteComponent.prototype.getNomeChaveItemNoRelacionamento = function () {
        return "anuncioAdsId";
    };
    EscolheAnuncioParaCampanhaTesteComponent.prototype.getNomeChaveOrigemNoRelacionamento = function () {
        return "campanhaAdsTesteId";
    };
    EscolheAnuncioParaCampanhaTesteComponent.prototype.getNomeFuncaoAtualizacaoRelacionamento = function () {
        return "AtualizaPorCampanhaAdsTeste";
    };
    EscolheAnuncioParaCampanhaTesteComponent.prototype.getFiltro = function () {
        return {
            'where': { 'produtoAfiliadoHotmartId': this.origem.produtoAfiliadoHotmartId },
            'include': {
                'relation': 'anuncioCampanhaAdsTestes',
                'scope': {
                    'where': { 'campanhaAdsTesteId': this.origem.id }
                }
            }
        };
    };
    EscolheAnuncioParaCampanhaTesteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-escolhe-anuncio-para-campanha-teste',
            template: __webpack_require__(/*! ./escolhe-anuncio-para-campanha-teste.component.html */ "./src/app/escolhe-anuncio-para-campanha-teste/escolhe-anuncio-para-campanha-teste.component.html"),
            styles: [__webpack_require__(/*! ./escolhe-anuncio-para-campanha-teste.component.css */ "./src/app/escolhe-anuncio-para-campanha-teste/escolhe-anuncio-para-campanha-teste.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _shared_sdk__WEBPACK_IMPORTED_MODULE_2__["AnuncioAdsApi"], _shared_sdk__WEBPACK_IMPORTED_MODULE_2__["AnuncioCampanhaAdsTesteApi"]])
    ], EscolheAnuncioParaCampanhaTesteComponent);
    return EscolheAnuncioParaCampanhaTesteComponent;
}(_base_component_base_seleciona_component__WEBPACK_IMPORTED_MODULE_1__["BaseSelecionaEditComponent"]));



/***/ }),

/***/ "./src/app/escolhe-palavra-chave-para-campanha-teste/escolhe-palavra-chave-para-campanha-teste.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/escolhe-palavra-chave-para-campanha-teste/escolhe-palavra-chave-para-campanha-teste.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/escolhe-palavra-chave-para-campanha-teste/escolhe-palavra-chave-para-campanha-teste.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/escolhe-palavra-chave-para-campanha-teste/escolhe-palavra-chave-para-campanha-teste.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"item\" mat-dialog-title>Palavra-Chave para Campanha Teste</h2>\n\n<form *ngIf=\"listaItem\" class=\"example-full-width\" (ngSubmit)=\"onSubmit()\">\n\n  <mat-dialog-content>\n\n    <div *ngFor=\"let item of listaItem; let i = index;\">\n      <mat-checkbox  [checked]=\"getCheck(item)\"  (change)=\"onChange($event, i, item)\">\n        {{item.texto}} - {{item.mediaPesquisa}} - \n        cpc: {{item.cpcMinimoTopPage | currency : 'BRL'}} até {{item.cpcMaximoTopPage | currency : 'BRL'}} \n        [{{item.concorrencia}}]\n        {{ item.dataAcesso | date : 'dd-MM-yyyy' }}\n      </mat-checkbox>\n    </div>\n\n\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <button mat-raised-button>Salvar</button>\n    <button mat-raised-button mat-dialog-close>Fechar</button>\n  </mat-dialog-actions>\n\n</form>"

/***/ }),

/***/ "./src/app/escolhe-palavra-chave-para-campanha-teste/escolhe-palavra-chave-para-campanha-teste.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/escolhe-palavra-chave-para-campanha-teste/escolhe-palavra-chave-para-campanha-teste.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: EscolhePalavraChaveParaCampanhaTesteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscolhePalavraChaveParaCampanhaTesteComponent", function() { return EscolhePalavraChaveParaCampanhaTesteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_component_base_seleciona_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-component/base-seleciona-component */ "./src/app/base-component/base-seleciona-component.ts");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var EscolhePalavraChaveParaCampanhaTesteComponent = /** @class */ (function (_super) {
    __extends(EscolhePalavraChaveParaCampanhaTesteComponent, _super);
    function EscolhePalavraChaveParaCampanhaTesteComponent(dialogRef, data, srvItem, srvRel) {
        var _this = _super.call(this, dialogRef, data, srvItem, srvRel) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.srvItem = srvItem;
        _this.srvRel = srvRel;
        return _this;
    }
    EscolhePalavraChaveParaCampanhaTesteComponent.prototype.getNomePropriedadeRel = function () {
        return "palavraChaveCampanhaAdsTestes";
    };
    EscolhePalavraChaveParaCampanhaTesteComponent.prototype.criaRelacionamento = function () {
        return new _shared_sdk__WEBPACK_IMPORTED_MODULE_3__["PalavraChaveCampanhaAdsTeste"]();
    };
    EscolhePalavraChaveParaCampanhaTesteComponent.prototype.getNomeChaveItem = function () {
        return "id";
    };
    EscolhePalavraChaveParaCampanhaTesteComponent.prototype.getNomeChaveItemNoRelacionamento = function () {
        return "ideiaPalavraChaveId";
    };
    EscolhePalavraChaveParaCampanhaTesteComponent.prototype.getNomeChaveOrigemNoRelacionamento = function () {
        return "campanhaAdsTesteId";
    };
    EscolhePalavraChaveParaCampanhaTesteComponent.prototype.getNomeFuncaoAtualizacaoRelacionamento = function () {
        return "AtualizaPalavraChavePorCampanhaAdsTeste";
    };
    EscolhePalavraChaveParaCampanhaTesteComponent.prototype.getFiltro = function () {
        return {
            'where': { 'and': [{ 'hotmartId': this.origem.produtoAfiliadoHotmartId }, { 'maisRecenteProduto': 1 }] },
            'order': 'mediaPesquisa desc',
            'limit': 20,
            'include': {
                'relation': 'palavraChaveCampanhaAdsTestes',
                'scope': {
                    'where': { 'campanhaAdsTesteId': this.origem.id }
                }
            }
        };
    };
    EscolhePalavraChaveParaCampanhaTesteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-escolhe-palavra-chave-para-campanha-teste',
            template: __webpack_require__(/*! ./escolhe-palavra-chave-para-campanha-teste.component.html */ "./src/app/escolhe-palavra-chave-para-campanha-teste/escolhe-palavra-chave-para-campanha-teste.component.html"),
            styles: [__webpack_require__(/*! ./escolhe-palavra-chave-para-campanha-teste.component.css */ "./src/app/escolhe-palavra-chave-para-campanha-teste/escolhe-palavra-chave-para-campanha-teste.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _shared_sdk__WEBPACK_IMPORTED_MODULE_3__["IdeiaPalavraChaveApi"], _shared_sdk__WEBPACK_IMPORTED_MODULE_3__["PalavraChaveCampanhaAdsTesteApi"]])
    ], EscolhePalavraChaveParaCampanhaTesteComponent);
    return EscolhePalavraChaveParaCampanhaTesteComponent;
}(_base_component_base_seleciona_component__WEBPACK_IMPORTED_MODULE_2__["BaseSelecionaEditComponent"]));



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nHome"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constantes_base_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constantes/base.url */ "./src/app/constantes/base.url.ts");
/* harmony import */ var _shared_sdk___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sdk/ */ "./src/app/shared/sdk/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        _shared_sdk___WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].setBaseURL(_constantes_base_url__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"]);
        _shared_sdk___WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].setApiVersion(_constantes_base_url__WEBPACK_IMPORTED_MODULE_1__["API_VERSION"]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc-base.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc-base.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent", function() { return IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent; });
var IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent = /** @class */ (function () {
    function IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent(srv, router, dialog) {
        this.srv = srv;
        this.router = router;
        this.dialog = dialog;
    }
    IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent.prototype.ngOnInit = function () {
        this.preCarregaTela();
        this.carregaTela();
    };
    IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent.prototype.preCarregaTela = function () { };
    IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent.prototype.posCarregaLista = function () { };
    IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent.prototype.carregaTela = function () {
        var _this = this;
        this.srv.find(this.getFiltro())
            .subscribe(function (result) {
            console.log('result: ', result);
            _this.listaBase = result;
            _this.posCarregaLista();
        });
    };
    IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent.prototype.dialogo1 = function (dados) {
        var _this = this;
        console.log('dialogo1.dados:', dados);
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getDialogo1(), {
            width: '800px',
            data: dados
        });
    };
    IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent.prototype.getDialogo1 = function () {
    };
    IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent.prototype.dialogo2 = function (dados) {
        var _this = this;
        console.log('dialogo2.dados:', dados);
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getDialogo2(), {
            width: '800px',
            data: dados
        });
    };
    IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent.prototype.getDialogo2 = function () {
    };
    IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent.prototype.getFiltro = function () {
        return {};
    };
    return IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent;
}());



/***/ }),

/***/ "./src/app/ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc.component.css":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc.component.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dgc-card {\n    width: 32%;\n}\n\n.corAzul {\n    color: blue;\n}\n\n.corVermelho {\n    color: red;\n}\n\n.corVerde {\n    color: green;\n}"

/***/ }),

/***/ "./src/app/ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\">\n\t<div class=\"dgc-painel-header\">\n\t\t<span>IdeiaPalavraChave</span>\n  \t\t<button class=\"btn btn-primary btn-sm dgc-botao-comando dgc-direita\" (click)=\"edita()\">novo</button>\n\t</div>\n\t<div *ngIf=\"listaBase\" class=\"dgc-painel-principal\">\n\t\t<div class=\"dgc-card\" *ngFor=\"let item of listaBase\">\n\t\t\t<div class=\"dgc-card-header\">\n\t\t\t\t<span>{{item.nome}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Hotmart Id: {{item.hotmartId}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Comissão: {{item.afiliacaoValor}} ({{item.afiliacaoPercentual}}%)</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Temperatura: {{item.temperatura}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Produtor: {{item.produtorNome}}</span>\n\t\t\t</div>\n\n \t\t\t<div class=\"dgc-card-header\">\n \t\t\t\t<span>{{item.texto}}</span>\n \t\t\t</div>\n\t\t\t <div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Média Pesquisa: {{item.mediaPesquisa}}</span>\n\t\t\t</div>\n\t\t\t <div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Cpc: {{item.cpcMinimoTopPage}} {{item.cpcMaximoTopPage}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Concorrencia: {{item.concorrencia}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Data: {{item.dataAcesso | date : 'dd-MM-yyyy'}}</span>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"dgc-card-header\">\n\t\t\t\t<span class='{{classeCor(item)}}'>CPC-50: {{item.cpcPara50}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-header\">\n\t\t\t\t<span>CPC-75: {{item.cpcPara75}}</span>\n\t\t\t</div>\n \t\t\t<div class=\"dgc-card-comandos\">\n \t\t\t\t<button class=\"btn-primary btn-sm btn\" (click)=\"edita(item)\">Editar</button>\n \t\t\t</div>\n \t\t</div>\n  \t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: IdeiaPalavraChaveListSimplesMelhoresCpcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeiaPalavraChaveListSimplesMelhoresCpcComponent", function() { return IdeiaPalavraChaveListSimplesMelhoresCpcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _ideia_palavra_chave_list_simples_melhores_cpc_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ideia-palavra-chave-list-simples-melhores-cpc-base.component */ "./src/app/ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc-base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IdeiaPalavraChaveListSimplesMelhoresCpcComponent = /** @class */ (function (_super) {
    __extends(IdeiaPalavraChaveListSimplesMelhoresCpcComponent, _super);
    function IdeiaPalavraChaveListSimplesMelhoresCpcComponent(srv, router, dialog) {
        var _this = _super.call(this, srv, router, dialog) || this;
        _this.srv = srv;
        _this.router = router;
        _this.dialog = dialog;
        return _this;
    }
    IdeiaPalavraChaveListSimplesMelhoresCpcComponent.prototype.carregaTela = function () {
        var _this = this;
        this.srv.MelhoresCpcComVisita(150)
            .subscribe(function (result) {
            console.log('result: ', result);
            _this.listaBase = result;
            _this.posCarregaLista();
        });
    };
    IdeiaPalavraChaveListSimplesMelhoresCpcComponent.prototype.classeCor = function (item) {
        if (item.cpcMinimoTopPage > 0) {
            if (item.cpcPara50 > item.cpcMinimoTopPage)
                return 'corAzul';
            else
                return 'corVermelho';
        }
        else {
            return 'corVerde';
        }
    };
    IdeiaPalavraChaveListSimplesMelhoresCpcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ideia-palavra-chave-list-simples-melhores-cpc',
            template: __webpack_require__(/*! ./ideia-palavra-chave-list-simples-melhores-cpc.component.html */ "./src/app/ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc.component.html"),
            styles: [__webpack_require__(/*! ./ideia-palavra-chave-list-simples-melhores-cpc.component.css */ "./src/app/ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_sdk__WEBPACK_IMPORTED_MODULE_3__["IdeiaPalavraChaveApi"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], IdeiaPalavraChaveListSimplesMelhoresCpcComponent);
    return IdeiaPalavraChaveListSimplesMelhoresCpcComponent;
}(_ideia_palavra_chave_list_simples_melhores_cpc_base_component__WEBPACK_IMPORTED_MODULE_4__["IdeiaPalavraChaveListSimplesMelhoresCpcBaseComponent"]));



/***/ }),

/***/ "./src/app/ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa-base.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa-base.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent", function() { return IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent; });
var IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent = /** @class */ (function () {
    function IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent(srv, router, dialog) {
        this.srv = srv;
        this.router = router;
        this.dialog = dialog;
    }
    IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent.prototype.ngOnInit = function () {
        this.preCarregaTela();
        this.carregaTela();
    };
    IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent.prototype.preCarregaTela = function () { };
    IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent.prototype.posCarregaLista = function () { };
    IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent.prototype.carregaTela = function () {
        var _this = this;
        this.srv.find(this.getFiltro())
            .subscribe(function (result) {
            console.log('result: ', result);
            _this.listaBase = result;
            _this.posCarregaLista();
        });
    };
    IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent.prototype.dialogo1 = function (dados) {
        var _this = this;
        console.log('dialogo1.dados:', dados);
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getDialogo1(), {
            width: '800px',
            data: dados
        });
    };
    IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent.prototype.getDialogo1 = function () {
    };
    IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent.prototype.dialogo2 = function (dados) {
        var _this = this;
        console.log('dialogo2.dados:', dados);
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getDialogo2(), {
            width: '800px',
            data: dados
        });
    };
    IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent.prototype.getDialogo2 = function () {
    };
    IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent.prototype.getFiltro = function () {
        return {};
    };
    return IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent;
}());



/***/ }),

/***/ "./src/app/ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa.component.css":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa.component.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dgc-card {\n    width: 32%;\n}\n\n.corAzul {\n    color: blue;\n}\n\n.corVermelho {\n    color: red;\n}\n\n.corVerde {\n    color: green;\n}"

/***/ }),

/***/ "./src/app/ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\">\n\t<div class=\"dgc-painel-header\">\n\t\t<span>IdeiaPalavraChave</span>\n  \t\t<button class=\"btn btn-primary btn-sm dgc-botao-comando dgc-direita\" (click)=\"edita()\">novo</button>\n\t</div>\n\t<div *ngIf=\"listaBase\" class=\"dgc-painel-principal\">\n\t\t<div class=\"dgc-card\" *ngFor=\"let item of listaBase\">\n\t\t\t<div class=\"dgc-card-header\">\n\t\t\t\t<span>{{item.nome}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Hotmart Id: {{item.hotmartId}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Comissão: {{item.afiliacaoValor}} ({{item.afiliacaoPercentual}}%)</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Temperatura: {{item.temperatura}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Produtor: {{item.produtorNome}}</span>\n\t\t\t</div>\n\n \t\t\t<div class=\"dgc-card-header\">\n \t\t\t\t<span>{{item.texto}}</span>\n \t\t\t</div>\n\t\t\t <div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Média Pesquisa: {{item.mediaPesquisa}}</span>\n\t\t\t</div>\n\t\t\t <div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Cpc: {{item.cpcMinimoTopPage}} {{item.cpcMaximoTopPage}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Concorrencia: {{item.concorrencia}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Data: {{item.dataAcesso | date : 'dd-MM-yyyy'}}</span>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"dgc-card-header\">\n\t\t\t\t<span class='{{classeCor(item)}}'>CPC-50: {{item.cpcPara50}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-header\">\n\t\t\t\t<span>CPC-75: {{item.cpcPara75}}</span>\n\t\t\t</div>\n \t\t\t<div class=\"dgc-card-comandos\">\n \t\t\t\t<button class=\"btn-primary btn-sm btn\" (click)=\"edita(item)\">Editar</button>\n \t\t\t</div>\n \t\t</div>\n  \t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: IdeiaPalavraChaveListSimplesTopPesquisaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeiaPalavraChaveListSimplesTopPesquisaComponent", function() { return IdeiaPalavraChaveListSimplesTopPesquisaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _ideia_palavra_chave_list_simples_top_pesquisa_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ideia-palavra-chave-list-simples-top-pesquisa-base.component */ "./src/app/ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa-base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IdeiaPalavraChaveListSimplesTopPesquisaComponent = /** @class */ (function (_super) {
    __extends(IdeiaPalavraChaveListSimplesTopPesquisaComponent, _super);
    function IdeiaPalavraChaveListSimplesTopPesquisaComponent(srv, router, dialog) {
        var _this = _super.call(this, srv, router, dialog) || this;
        _this.srv = srv;
        _this.router = router;
        _this.dialog = dialog;
        return _this;
    }
    IdeiaPalavraChaveListSimplesTopPesquisaComponent.prototype.carregaTela = function () {
        var _this = this;
        this.srv.ListaTopPesquisa()
            .subscribe(function (result) {
            console.log('result: ', result);
            _this.listaBase = result;
            _this.posCarregaLista();
        });
    };
    IdeiaPalavraChaveListSimplesTopPesquisaComponent.prototype.classeCor = function (item) {
        if (item.cpcMinimoTopPage > 0) {
            if (item.cpcPara50 > item.cpcMinimoTopPage)
                return 'corAzul';
            else
                return 'corVermelho';
        }
        else {
            return 'corVerde';
        }
    };
    IdeiaPalavraChaveListSimplesTopPesquisaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ideia-palavra-chave-list-simples-top-pesquisa',
            template: __webpack_require__(/*! ./ideia-palavra-chave-list-simples-top-pesquisa.component.html */ "./src/app/ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa.component.html"),
            styles: [__webpack_require__(/*! ./ideia-palavra-chave-list-simples-top-pesquisa.component.css */ "./src/app/ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_sdk__WEBPACK_IMPORTED_MODULE_3__["IdeiaPalavraChaveApi"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], IdeiaPalavraChaveListSimplesTopPesquisaComponent);
    return IdeiaPalavraChaveListSimplesTopPesquisaComponent;
}(_ideia_palavra_chave_list_simples_top_pesquisa_base_component__WEBPACK_IMPORTED_MODULE_4__["IdeiaPalavraChaveListSimplesTopPesquisaBaseComponent"]));



/***/ }),

/***/ "./src/app/ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top-base.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top-base.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: IdeiaPalavraChaveListSimplesTopBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeiaPalavraChaveListSimplesTopBaseComponent", function() { return IdeiaPalavraChaveListSimplesTopBaseComponent; });
var IdeiaPalavraChaveListSimplesTopBaseComponent = /** @class */ (function () {
    function IdeiaPalavraChaveListSimplesTopBaseComponent(srv, router, dialog) {
        this.srv = srv;
        this.router = router;
        this.dialog = dialog;
    }
    IdeiaPalavraChaveListSimplesTopBaseComponent.prototype.ngOnInit = function () {
        this.preCarregaTela();
        this.carregaTela();
    };
    IdeiaPalavraChaveListSimplesTopBaseComponent.prototype.preCarregaTela = function () { };
    IdeiaPalavraChaveListSimplesTopBaseComponent.prototype.posCarregaLista = function () { };
    IdeiaPalavraChaveListSimplesTopBaseComponent.prototype.carregaTela = function () {
        var _this = this;
        this.srv.find(this.getFiltro())
            .subscribe(function (result) {
            console.log('result: ', result);
            _this.listaBase = result;
            _this.posCarregaLista();
        });
    };
    IdeiaPalavraChaveListSimplesTopBaseComponent.prototype.dialogo1 = function (dados) {
        var _this = this;
        console.log('dialogo1.dados:', dados);
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getDialogo1(), {
            width: '800px',
            data: dados
        });
    };
    IdeiaPalavraChaveListSimplesTopBaseComponent.prototype.getDialogo1 = function () {
    };
    IdeiaPalavraChaveListSimplesTopBaseComponent.prototype.dialogo2 = function (dados) {
        var _this = this;
        console.log('dialogo2.dados:', dados);
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getDialogo2(), {
            width: '800px',
            data: dados
        });
    };
    IdeiaPalavraChaveListSimplesTopBaseComponent.prototype.getDialogo2 = function () {
    };
    IdeiaPalavraChaveListSimplesTopBaseComponent.prototype.getFiltro = function () {
        return {};
    };
    return IdeiaPalavraChaveListSimplesTopBaseComponent;
}());



/***/ }),

/***/ "./src/app/ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dgc-card {\n    width: 32%;\n}\n\n.corAzul {\n    color: blue;\n}\n\n.corVermelho {\n    color: red;\n}\n\n.corVerde {\n    color: green;\n}"

/***/ }),

/***/ "./src/app/ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\">\n\t<div class=\"dgc-painel-header\">\n\t\t<span>IdeiaPalavraChave</span>\n  \t\t<button class=\"btn btn-primary btn-sm dgc-botao-comando dgc-direita\" (click)=\"edita()\">novo</button>\n\t</div>\n\t<div *ngIf=\"listaBase\" class=\"dgc-painel-principal\">\n\t\t<div class=\"dgc-card\" *ngFor=\"let item of listaBase\">\n\t\t\t<div class=\"dgc-card-header\">\n\t\t\t\t<span>{{item.nome}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Hotmart Id: {{item.hotmartId}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Comissão: {{item.afiliacaoValor}} ({{item.afiliacaoPercentual}}%)</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Temperatura: {{item.temperatura}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Produtor: {{item.produtorNome}}</span>\n\t\t\t</div>\n\n \t\t\t<div class=\"dgc-card-header\">\n \t\t\t\t<span>{{item.texto}}</span>\n \t\t\t</div>\n\t\t\t <div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Média Pesquisa: {{item.mediaPesquisa}}</span>\n\t\t\t</div>\n\t\t\t <div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Cpc: {{item.cpcMinimoTopPage}} {{item.cpcMaximoTopPage}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Concorrencia: {{item.concorrencia}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-detalhe\">\n\t\t\t\t<span>Data: {{item.dataAcesso | date : 'dd-MM-yyyy'}}</span>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"dgc-card-header\">\n\t\t\t\t<span class='{{classeCor(item)}}'>CPC-50: {{item.cpcPara50}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"dgc-card-header\">\n\t\t\t\t<span>CPC-75: {{item.cpcPara75}}</span>\n\t\t\t</div>\n \t\t\t<div class=\"dgc-card-comandos\">\n \t\t\t\t<button class=\"btn-primary btn-sm btn\" (click)=\"edita(item)\">Editar</button>\n \t\t\t</div>\n \t\t</div>\n  \t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: IdeiaPalavraChaveListSimplesTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeiaPalavraChaveListSimplesTopComponent", function() { return IdeiaPalavraChaveListSimplesTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _ideia_palavra_chave_list_simples_top_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ideia-palavra-chave-list-simples-top-base.component */ "./src/app/ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top-base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IdeiaPalavraChaveListSimplesTopComponent = /** @class */ (function (_super) {
    __extends(IdeiaPalavraChaveListSimplesTopComponent, _super);
    function IdeiaPalavraChaveListSimplesTopComponent(srv, router, dialog) {
        var _this = _super.call(this, srv, router, dialog) || this;
        _this.srv = srv;
        _this.router = router;
        _this.dialog = dialog;
        return _this;
    }
    IdeiaPalavraChaveListSimplesTopComponent.prototype.carregaTela = function () {
        var _this = this;
        this.srv.ListaTop()
            .subscribe(function (result) {
            console.log('result: ', result);
            _this.listaBase = result;
            _this.posCarregaLista();
        });
    };
    IdeiaPalavraChaveListSimplesTopComponent.prototype.classeCor = function (item) {
        if (item.cpcMinimoTopPage > 0) {
            if (item.cpcPara50 > item.cpcMinimoTopPage)
                return 'corAzul';
            else
                return 'corVermelho';
        }
        else {
            return 'corVerde';
        }
    };
    IdeiaPalavraChaveListSimplesTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ideia-palavra-chave-list-simples-top',
            template: __webpack_require__(/*! ./ideia-palavra-chave-list-simples-top.component.html */ "./src/app/ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top.component.html"),
            styles: [__webpack_require__(/*! ./ideia-palavra-chave-list-simples-top.component.css */ "./src/app/ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_sdk__WEBPACK_IMPORTED_MODULE_3__["IdeiaPalavraChaveApi"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], IdeiaPalavraChaveListSimplesTopComponent);
    return IdeiaPalavraChaveListSimplesTopComponent;
}(_ideia_palavra_chave_list_simples_top_base_component__WEBPACK_IMPORTED_MODULE_4__["IdeiaPalavraChaveListSimplesTopBaseComponent"]));



/***/ }),

/***/ "./src/app/ideia-palavra-chave-list/ideia-palavra-chave-list.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/ideia-palavra-chave-list/ideia-palavra-chave-list.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dgc-card {\n    width: 23%;\n}"

/***/ }),

/***/ "./src/app/ideia-palavra-chave-list/ideia-palavra-chave-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/ideia-palavra-chave-list/ideia-palavra-chave-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\">\n  <div class=\"dgc-painel-header\">\n      <span>Idéias Palavra-Chave (mais pesquisadas)</span>\n  </div>\n  <div>\n    <span>Inserção em {{listaBase[0].dataInsercao | date : 'dd-MM-yyyy'}}</span>\n  </div>\n  <div *ngIf=\"listaBase\" class=\"dgc-painel-principal\">\n      <div class=\"dgc-card\" *ngFor=\"let item of listaBase\">\n          <div class=\"dgc-card-header\">\n            <span>Palavra: {{item.texto}}</span>\n          </div>\n          <div class=\"dgc-card-detalhe\">\n            Produto: \n            <a href=\"https://app.hotmart.com/market/details?producerUcode={{item.produtorCodigoHotmart}}&productUcode={{item.produtoCodigoU}}\">{{item.nome}}</a>\n            ( # {{item.hotmartId}})\n          </div>\n          <div class=\"dgc-card-detalhe\">\n            <span>Pesquisas mensais: {{item.mediaPesquisa}}</span>\n          </div>\n          <div class=\"dgc-card-detalhe\">\n            <span>Temperatura: {{item.temperatura}}</span>\n          </div>\n          <div class=\"dgc-card-detalhe\">\n            <span>Concorrência: {{item.concorrencia}}</span>\n          </div>\n          <div class=\"dgc-card-detalhe\">\n            <span>CPC: {{item.cpcMaximoTopPage}} a {{item.cpcMinimoTopPage}}</span>\n          </div>\n          <div class=\"dgc-card-detalhe\">\n            <span>Valor Afiliado: {{item.afiliacaoValor}}</span>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ideia-palavra-chave-list/ideia-palavra-chave-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ideia-palavra-chave-list/ideia-palavra-chave-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: IdeiaPalavraChaveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeiaPalavraChaveListComponent", function() { return IdeiaPalavraChaveListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_component_base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-component/base-list-component */ "./src/app/base-component/base-list-component.ts");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IdeiaPalavraChaveListComponent = /** @class */ (function (_super) {
    __extends(IdeiaPalavraChaveListComponent, _super);
    function IdeiaPalavraChaveListComponent(dialog, srv) {
        var _this = _super.call(this, dialog, srv) || this;
        _this.dialog = dialog;
        _this.srv = srv;
        return _this;
    }
    IdeiaPalavraChaveListComponent.prototype.carregaTela = function () {
        var _this = this;
        this.srv.MelhoresUltimaData(3000)
            .subscribe(function (result) {
            console.log('result: ', result);
            _this.listaBase = result;
            _this.posCarregaLista();
        });
    };
    IdeiaPalavraChaveListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ideia-palavra-chave-list',
            template: __webpack_require__(/*! ./ideia-palavra-chave-list.component.html */ "./src/app/ideia-palavra-chave-list/ideia-palavra-chave-list.component.html"),
            styles: [__webpack_require__(/*! ./ideia-palavra-chave-list.component.css */ "./src/app/ideia-palavra-chave-list/ideia-palavra-chave-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _shared_sdk__WEBPACK_IMPORTED_MODULE_3__["IdeiaPalavraChaveApi"]])
    ], IdeiaPalavraChaveListComponent);
    return IdeiaPalavraChaveListComponent;
}(_base_component_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modelo-campanha-ads-teste-edit/modelo-campanha-ads-teste-edit.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/modelo-campanha-ads-teste-edit/modelo-campanha-ads-teste-edit.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modelo-campanha-ads-teste-edit/modelo-campanha-ads-teste-edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modelo-campanha-ads-teste-edit/modelo-campanha-ads-teste-edit.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"item\" mat-dialog-title>Modelo CampanhaAds Teste</h2>\n\n<form *ngIf=\"item\" class=\"example-full-width\" (ngSubmit)=\"onSubmit()\">\n\n  <mat-dialog-content>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #orcamentoDiario [(ngModel)]=\"item.orcamentoDiario\" name=\"orcamentoDiario\" placeholder=\"Orçamento Diário\" autocomplete=\"off\"/>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #qtdeDia [(ngModel)]=\"item.qtdeDia\" name=\"qtdeDia\" placeholder=\"Quantidade Dia\" autocomplete=\"off\"/>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <mat-select #diaInicial [(ngModel)]=\"item.diaInicial\" name=\"diaInicial\" placeholder=\"Dia Inicial\">\n        <mat-option value=\"7\">Domingo</mat-option>\n        <mat-option value=\"1\">Segunda</mat-option>\n        <mat-option value=\"2\">Terça</mat-option>\n        <mat-option value=\"3\">Quarta</mat-option>\n        <mat-option value=\"4\">Quinta</mat-option>        \n        <mat-option value=\"5\">Sexta</mat-option>\n        <mat-option value=\"6\">Sábado</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <mat-select #tipoCpcCusto [(ngModel)]=\"item.tipoCpcCusto\" name=\"tipoCpcCusto\" placeholder=\"Tipo Cpc Custo\">\n        <mat-option value=\"MIN\">Mínimo</mat-option>\n        <mat-option value=\"MAX\">Máximo</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #multiplicadorCpcCusto [(ngModel)]=\"item.multiplicadorCpcCusto\" name=\"multiplicadorCpcCusto\" placeholder=\"Multiplicador Cpc Custo (9.99)\" autocomplete=\"off\"/>\n    </mat-form-field>\n\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <button mat-raised-button>Salvar</button>\n    <button mat-raised-button mat-dialog-close>Fechar</button>\n  </mat-dialog-actions>\n\n</form>\n"

/***/ }),

/***/ "./src/app/modelo-campanha-ads-teste-edit/modelo-campanha-ads-teste-edit.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modelo-campanha-ads-teste-edit/modelo-campanha-ads-teste-edit.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ModeloCampanhaAdsTesteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeloCampanhaAdsTesteEditComponent", function() { return ModeloCampanhaAdsTesteEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_component_base_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-component/base-edit-component */ "./src/app/base-component/base-edit-component.ts");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ModeloCampanhaAdsTesteEditComponent = /** @class */ (function (_super) {
    __extends(ModeloCampanhaAdsTesteEditComponent, _super);
    function ModeloCampanhaAdsTesteEditComponent(dialogRef, data, servico) {
        var _this = _super.call(this, dialogRef, data, servico) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.servico = servico;
        return _this;
    }
    ModeloCampanhaAdsTesteEditComponent.prototype.criaItem = function () {
        var novo = new _shared_sdk__WEBPACK_IMPORTED_MODULE_3__["ModeloCampanhaAdsTeste"]();
        return novo;
    };
    ModeloCampanhaAdsTesteEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modelo-campanha-ads-teste-edit',
            template: __webpack_require__(/*! ./modelo-campanha-ads-teste-edit.component.html */ "./src/app/modelo-campanha-ads-teste-edit/modelo-campanha-ads-teste-edit.component.html"),
            styles: [__webpack_require__(/*! ./modelo-campanha-ads-teste-edit.component.css */ "./src/app/modelo-campanha-ads-teste-edit/modelo-campanha-ads-teste-edit.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _shared_sdk__WEBPACK_IMPORTED_MODULE_3__["ModeloCampanhaAdsTesteApi"]])
    ], ModeloCampanhaAdsTesteEditComponent);
    return ModeloCampanhaAdsTesteEditComponent;
}(_base_component_base_edit_component__WEBPACK_IMPORTED_MODULE_2__["BaseEditComponent"]));



/***/ }),

/***/ "./src/app/modelo-campanha-ads-teste-list/modelo-campanha-ads-teste-list.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/modelo-campanha-ads-teste-list/modelo-campanha-ads-teste-list.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dgc-card {\n    width: 240px;\n}"

/***/ }),

/***/ "./src/app/modelo-campanha-ads-teste-list/modelo-campanha-ads-teste-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modelo-campanha-ads-teste-list/modelo-campanha-ads-teste-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\">\n  <div class=\"dgc-painel-header\">\n    <span>Modelos Campanha Teste</span>\n    <button class=\"btn btn-primary btn-sm dgc-botao-comando dgc-direita\" (click)=\"edita()\">novo</button>\n  </div>\n  <div *ngIf=\"listaBase\" class=\"dgc-painel-principal\">\n    <div class=\"dgc-card\" *ngFor=\"let item of listaBase\">\n      <div clas=\"dgc-card-detalhe\">\n        <span>Orçamento Diário: {{item.orcamentoDiario | currency : 'BRL'}}</span>\n      </div>\n      <div clas=\"dgc-card-detalhe\">\n        <span>Quantidade Dias: {{item.qtdeDia}}</span>\n      </div>\n      <div clas=\"dgc-card-detalhe\">\n        <span>Dia Inicial: {{getDiaSemana(item)}} ({{item.diaInicial}})</span>\n      </div>\n      <div clas=\"dgc-card-detalhe\">\n        <span>Orçamento Total: {{item.orcamentoDiario * item.qtdeDia | currency : 'BRL' }}</span>\n      </div>\n      <div clas=\"dgc-card-detalhe\">\n        <span>Tipo Custo: {{item.tipoCpcCusto }}</span>\n      </div>\n      <div clas=\"dgc-card-detalhe\">\n        <span>Multiplicador Custo: {{item.multiplicadorCpcCusto | number : '1.2-2' }}</span>\n      </div>\n      <div class=\"dgc-card-comandos\">\n        <button class=\"btn-primary btn-sm btn\" (click)=\"edita(item)\">Editar</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modelo-campanha-ads-teste-list/modelo-campanha-ads-teste-list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modelo-campanha-ads-teste-list/modelo-campanha-ads-teste-list.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ModeloCampanhaAdsTesteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeloCampanhaAdsTesteListComponent", function() { return ModeloCampanhaAdsTesteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _modelo_campanha_ads_teste_edit_modelo_campanha_ads_teste_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modelo-campanha-ads-teste-edit/modelo-campanha-ads-teste-edit.component */ "./src/app/modelo-campanha-ads-teste-edit/modelo-campanha-ads-teste-edit.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_component_base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-component/base-list-component */ "./src/app/base-component/base-list-component.ts");
/* harmony import */ var src_app_constantes_base_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constantes/base.url */ "./src/app/constantes/base.url.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModeloCampanhaAdsTesteListComponent = /** @class */ (function (_super) {
    __extends(ModeloCampanhaAdsTesteListComponent, _super);
    function ModeloCampanhaAdsTesteListComponent(dialog, srv) {
        var _this = _super.call(this, dialog, srv) || this;
        _this.dialog = dialog;
        _this.srv = srv;
        return _this;
    }
    ModeloCampanhaAdsTesteListComponent.prototype.getDiaSemana = function (item) {
        return src_app_constantes_base_url__WEBPACK_IMPORTED_MODULE_5__["DS_DIA_SEMANA"][item.diaInicial];
    };
    ModeloCampanhaAdsTesteListComponent.prototype.getFiltro = function () {
        return {};
    };
    ModeloCampanhaAdsTesteListComponent.prototype.criaItem = function () {
        var novo = new _shared_sdk__WEBPACK_IMPORTED_MODULE_1__["ModeloCampanhaAdsTeste"]();
        return novo;
    };
    ModeloCampanhaAdsTesteListComponent.prototype.getComponente = function () {
        return _modelo_campanha_ads_teste_edit_modelo_campanha_ads_teste_edit_component__WEBPACK_IMPORTED_MODULE_2__["ModeloCampanhaAdsTesteEditComponent"];
    };
    ModeloCampanhaAdsTesteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modelo-campanha-ads-teste-list',
            template: __webpack_require__(/*! ./modelo-campanha-ads-teste-list.component.html */ "./src/app/modelo-campanha-ads-teste-list/modelo-campanha-ads-teste-list.component.html"),
            styles: [__webpack_require__(/*! ./modelo-campanha-ads-teste-list.component.css */ "./src/app/modelo-campanha-ads-teste-list/modelo-campanha-ads-teste-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _shared_sdk__WEBPACK_IMPORTED_MODULE_1__["ModeloCampanhaAdsTesteApi"]])
    ], ModeloCampanhaAdsTesteListComponent);
    return ModeloCampanhaAdsTesteListComponent;
}(_base_component_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/pixel-google-edit/pixel-google-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pixel-google-edit/pixel-google-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pixel-google-edit/pixel-google-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pixel-google-edit/pixel-google-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"item\" mat-dialog-title>Pixel Google</h2>\n\n<form *ngIf=\"item\" class=\"example-full-width\" (ngSubmit)=\"onSubmit()\">\n\n  <mat-dialog-content>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #identificador [(ngModel)]=\"item.identificador\" name=\"identificador\" placeholder=\"Identificador\" autocomplete=\"off\"/>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #codigo1 [(ngModel)]=\"item.codigo1\" name=\"codigo1\" placeholder=\"Código 1\" autocomplete=\"off\"/>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #codigo2 [(ngModel)]=\"item.codigo2\" name=\"codigo2\" placeholder=\"Código 2\" autocomplete=\"off\"/>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #instalado [(ngModel)]=\"item.instalado\" name=\"instalado\" placeholder=\"Instalado\" autocomplete=\"off\"/>\n    </mat-form-field>\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <button mat-raised-button>Salvar</button>\n    <button mat-raised-button mat-dialog-close>Fechar</button>\n  </mat-dialog-actions>\n\n</form>\n"

/***/ }),

/***/ "./src/app/pixel-google-edit/pixel-google-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pixel-google-edit/pixel-google-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: PixelGoogleEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelGoogleEditComponent", function() { return PixelGoogleEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_component_base_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-component/base-edit-component */ "./src/app/base-component/base-edit-component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var PixelGoogleEditComponent = /** @class */ (function (_super) {
    __extends(PixelGoogleEditComponent, _super);
    function PixelGoogleEditComponent(dialogRef, data, servico) {
        var _this = _super.call(this, dialogRef, data, servico) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.servico = servico;
        return _this;
    }
    PixelGoogleEditComponent.prototype.criaItem = function () {
        var novo = new _shared_sdk__WEBPACK_IMPORTED_MODULE_1__["PixelGoogle"]();
        return novo;
    };
    PixelGoogleEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pixel-google-edit',
            template: __webpack_require__(/*! ./pixel-google-edit.component.html */ "./src/app/pixel-google-edit/pixel-google-edit.component.html"),
            styles: [__webpack_require__(/*! ./pixel-google-edit.component.css */ "./src/app/pixel-google-edit/pixel-google-edit.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _shared_sdk__WEBPACK_IMPORTED_MODULE_1__["PixelGoogleApi"]])
    ], PixelGoogleEditComponent);
    return PixelGoogleEditComponent;
}(_base_component_base_edit_component__WEBPACK_IMPORTED_MODULE_3__["BaseEditComponent"]));



/***/ }),

/***/ "./src/app/pixel-google-list/pixel-google-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pixel-google-list/pixel-google-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dgc-card {\n    width: 48%;\n}"

/***/ }),

/***/ "./src/app/pixel-google-list/pixel-google-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pixel-google-list/pixel-google-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\">\n  <div class=\"dgc-painel-header\">\n      <span>Pixel Google</span>\n  </div>\n  <div *ngIf=\"listaBase\" class=\"dgc-painel-principal\">\n      <div class=\"dgc-card\" *ngFor=\"let item of listaBase\">\n          <div class=\"dgc-card-header\">\n            <span>{{item.nome}}</span>\n          </div>\n          <div class=\"dgc-card-detalhe\">\n            <span>{{item.codigo1}}</span>\n          </div>\n          <div class=\"dgc-card-detalhe\">\n            <span>{{item.codigo2}}</span>\n          </div>\n          <div class=\"dgc-card-detalhe\">\n            <span>Instalado: {{item.instalado}}</span>\n          </div>\n          <div class=\"dgc-card-comandos\">\n              <button class=\"btn-primary btn-sm btn\" (click)=\"edita(item)\">Editar</button>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pixel-google-list/pixel-google-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pixel-google-list/pixel-google-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PixelGoogleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelGoogleListComponent", function() { return PixelGoogleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _pixel_google_edit_pixel_google_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pixel-google-edit/pixel-google-edit.component */ "./src/app/pixel-google-edit/pixel-google-edit.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_component_base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-component/base-list-component */ "./src/app/base-component/base-list-component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PixelGoogleListComponent = /** @class */ (function (_super) {
    __extends(PixelGoogleListComponent, _super);
    function PixelGoogleListComponent(dialog, srv) {
        var _this = _super.call(this, dialog, srv) || this;
        _this.dialog = dialog;
        _this.srv = srv;
        return _this;
    }
    PixelGoogleListComponent.prototype.getFiltro = function () {
        return {};
    };
    PixelGoogleListComponent.prototype.criaItem = function () {
        var novo = new _shared_sdk__WEBPACK_IMPORTED_MODULE_1__["PixelGoogle"]();
        return novo;
    };
    PixelGoogleListComponent.prototype.getComponente = function () {
        return _pixel_google_edit_pixel_google_edit_component__WEBPACK_IMPORTED_MODULE_2__["PixelGoogleEditComponent"];
    };
    PixelGoogleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pixel-google-list',
            template: __webpack_require__(/*! ./pixel-google-list.component.html */ "./src/app/pixel-google-list/pixel-google-list.component.html"),
            styles: [__webpack_require__(/*! ./pixel-google-list.component.css */ "./src/app/pixel-google-list/pixel-google-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _shared_sdk__WEBPACK_IMPORTED_MODULE_1__["PixelGoogleApi"]])
    ], PixelGoogleListComponent);
    return PixelGoogleListComponent;
}(_base_component_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/plataforma-edit/plataforma-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/plataforma-edit/plataforma-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/plataforma-edit/plataforma-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/plataforma-edit/plataforma-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  plataforma-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/plataforma-edit/plataforma-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/plataforma-edit/plataforma-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: PlataformaEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlataformaEditComponent", function() { return PlataformaEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_component_base_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-component/base-edit-component */ "./src/app/base-component/base-edit-component.ts");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var PlataformaEditComponent = /** @class */ (function (_super) {
    __extends(PlataformaEditComponent, _super);
    function PlataformaEditComponent(dialogRef, data, servico) {
        var _this = _super.call(this, dialogRef, data, servico) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.servico = servico;
        return _this;
    }
    PlataformaEditComponent.prototype.criaItem = function () {
        var novo = new _shared_sdk__WEBPACK_IMPORTED_MODULE_3__["PlataformaVenda"]();
        return novo;
    };
    PlataformaEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plataforma-edit',
            template: __webpack_require__(/*! ./plataforma-edit.component.html */ "./src/app/plataforma-edit/plataforma-edit.component.html"),
            styles: [__webpack_require__(/*! ./plataforma-edit.component.css */ "./src/app/plataforma-edit/plataforma-edit.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _shared_sdk__WEBPACK_IMPORTED_MODULE_3__["PlataformaVendaApi"]])
    ], PlataformaEditComponent);
    return PlataformaEditComponent;
}(_base_component_base_edit_component__WEBPACK_IMPORTED_MODULE_2__["BaseEditComponent"]));



/***/ }),

/***/ "./src/app/plataforma-list/plataforma-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/plataforma-list/plataforma-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dgc-card {\n    width: 48%;\n}"

/***/ }),

/***/ "./src/app/plataforma-list/plataforma-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/plataforma-list/plataforma-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\">\n  <div class=\"dgc-painel-header\">\n      <span>Plataformas</span>\n      <button class=\"btn btn-primary btn-sm dgc-botao-comando dgc-direita\" (click)=\"edita()\">novo</button>\n  </div>\n  <div *ngIf=\"listaBase\">\n      <div class=\"dgc-card\" *ngFor=\"let item of listaBase\">\n          <div class=\"dgc-card-header\">\n            <span>{{item.nome}}</span>\n          </div>\n          <div class=\"dgc-card-comandos\">\n              <button class=\"btn-primary btn-sm btn\" (click)=\"edita(item)\">Editar</button>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/plataforma-list/plataforma-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/plataforma-list/plataforma-list.component.ts ***!
  \**************************************************************/
/*! exports provided: PlataformaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlataformaListComponent", function() { return PlataformaListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_component_base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-component/base-list-component */ "./src/app/base-component/base-list-component.ts");
/* harmony import */ var _plataforma_edit_plataforma_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plataforma-edit/plataforma-edit.component */ "./src/app/plataforma-edit/plataforma-edit.component.ts");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlataformaListComponent = /** @class */ (function (_super) {
    __extends(PlataformaListComponent, _super);
    function PlataformaListComponent(dialog, srv) {
        var _this = _super.call(this, dialog, srv) || this;
        _this.dialog = dialog;
        _this.srv = srv;
        return _this;
    }
    PlataformaListComponent.prototype.getFiltro = function () {
        return {};
    };
    PlataformaListComponent.prototype.criaItem = function () {
        var novo = new _shared_sdk__WEBPACK_IMPORTED_MODULE_4__["PlataformaVenda"]();
        return novo;
    };
    PlataformaListComponent.prototype.getComponente = function () {
        return _plataforma_edit_plataforma_edit_component__WEBPACK_IMPORTED_MODULE_3__["PlataformaEditComponent"];
    };
    PlataformaListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plataforma-list',
            template: __webpack_require__(/*! ./plataforma-list.component.html */ "./src/app/plataforma-list/plataforma-list.component.html"),
            styles: [__webpack_require__(/*! ./plataforma-list.component.css */ "./src/app/plataforma-list/plataforma-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _shared_sdk__WEBPACK_IMPORTED_MODULE_4__["PlataformaVendaApi"]])
    ], PlataformaListComponent);
    return PlataformaListComponent;
}(_base_component_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe-base.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe-base.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ProdutoAfiliadoHotmartDetalheBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoHotmartDetalheBaseComponent", function() { return ProdutoAfiliadoHotmartDetalheBaseComponent; });
var ProdutoAfiliadoHotmartDetalheBaseComponent = /** @class */ (function () {
    function ProdutoAfiliadoHotmartDetalheBaseComponent(srv, router, dialog) {
        this.srv = srv;
        this.router = router;
        this.dialog = dialog;
    }
    ProdutoAfiliadoHotmartDetalheBaseComponent.prototype.ngOnInit = function () {
        this.carregaTela();
    };
    ProdutoAfiliadoHotmartDetalheBaseComponent.prototype.carregaTela = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.idPrincipal = params['id'];
            _this.srv.findById(_this.idPrincipal, _this.getFiltro())
                .subscribe(function (result) {
                _this.principal = result;
                console.log('principal:', _this.principal);
            });
        });
    };
    ProdutoAfiliadoHotmartDetalheBaseComponent.prototype.getFiltro = function () {
        return {};
    };
    return ProdutoAfiliadoHotmartDetalheBaseComponent;
}());



/***/ }),

/***/ "./src/app/produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\" *ngIf=\"principal\">\n  <div class=\"dgc-painel-header\" *ngIf=\"principal\">\n      <span>{{principal.nome}}</span>\n  </div>\n\n  <div class=\"dgc-card\">\n    <div class=\"dgc-card-header\">\n      Visitas\n    </div>\n    <div class=\"dgc-card-detalhe\" *ngFor=\"let item of principal.visitaProdutoHotmarts\">\n      {{item.dataInsercao | date : 'dd/MM/yyyy'}}\n      Temperatura: {{item.temperatura}} Valor : {{item.afiliacaoValor | currency : 'BRL'}} ({{item.afiliacaoPercentual}}%)\n    </div>\n  </div>\n\n    <div class=\"dgc-card\">\n    <div class=\"dgc-card-header\">\n      Palavras-Chave\n    </div>\n    <div class=\"dgc-card-detalhe\" *ngFor=\"let item of  principal.visitaProdutoHotmarts[0].produtoAfiliadoMetricas\">\n      {{item.palavra}} Volume Pesquisa: {{item.mediaPesquisaPalavra}} \n      Cpc: {{item.cpcMax | currency : 'BRL'}} {{item.cpcMin | currency : 'BRL'}}\n    </div>\n  </div>\n\n  <div class=\"dgc-card\">\n    <div class=\"dgc-card-header\">\n      Pixel\n    </div>\n    <div class=\"dgc-card-detalhe\" *ngFor=\"let item of principal.ideiaPalavraChaves\">\n    </div>\n  </div>\n\n  <div class=\"dgc-card\">\n    <div class=\"dgc-card-header\">\n      <span>Anúncios</span>\n      <button class=\"dgc-direita\" (click)=\"editaAnuncio(principal)\">novo</button>\n    </div>\n    <div class=\"dgc-card\">\n      <div class=\"dgc-card-detalhe\">\n        Titulo1\n      </div>\n      <div class=\"dgc-card-detalhe\">\n        Titulo2\n      </div>\n      <div class=\"dgc-card-detalhe\">\n        Titulo3\n      </div>\n      <div class=\"dgc-card-detalhe\">\n        Descrição 1\n      </div>\n      <div class=\"dgc-card-detalhe\">\n        Descrição 2\n      </div>\n      <div class=\"dgc-card-comandos\">\n        <button class=\"btn-primary btn-sm btn\" (click)=\"editaAnuncio(item)\">Editar</button>\n      </div>\n    </div>\n   \n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ProdutoAfiliadoHotmartDetalheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoHotmartDetalheComponent", function() { return ProdutoAfiliadoHotmartDetalheComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _produto_afiliado_hotmart_detalhe_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produto-afiliado-hotmart-detalhe-base.component */ "./src/app/produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe-base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProdutoAfiliadoHotmartDetalheComponent = /** @class */ (function (_super) {
    __extends(ProdutoAfiliadoHotmartDetalheComponent, _super);
    function ProdutoAfiliadoHotmartDetalheComponent(srv, router, dialog) {
        var _this = _super.call(this, srv, router, dialog) || this;
        _this.srv = srv;
        _this.router = router;
        _this.dialog = dialog;
        return _this;
    }
    ProdutoAfiliadoHotmartDetalheComponent.prototype.getFiltro = function () {
        return {
            'include': [
                { 'relation': 'visitaProdutoHotmarts', 'scope': {
                        'order': 'dataInsercao desc',
                        'include': { 'relation': 'produtoAfiliadoMetricas' }
                    } },
                'contaGoogle'
            ]
        };
    };
    ProdutoAfiliadoHotmartDetalheComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-produto-afiliado-hotmart-detalhe',
            template: __webpack_require__(/*! ./produto-afiliado-hotmart-detalhe.component.html */ "./src/app/produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe.component.html"),
            styles: [__webpack_require__(/*! ./produto-afiliado-hotmart-detalhe.component.css */ "./src/app/produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_sdk__WEBPACK_IMPORTED_MODULE_3__["ProdutoAfiliadoHotmartApi"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ProdutoAfiliadoHotmartDetalheComponent);
    return ProdutoAfiliadoHotmartDetalheComponent;
}(_produto_afiliado_hotmart_detalhe_base_component__WEBPACK_IMPORTED_MODULE_4__["ProdutoAfiliadoHotmartDetalheBaseComponent"]));



/***/ }),

/***/ "./src/app/produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"item\" mat-dialog-title>Produto Afiliado Hotmart</h2>\n\n<form *ngIf=\"item\" class=\"example-full-width\" (ngSubmit)=\"onSubmit()\">\n\n  <mat-dialog-content>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #nome [(ngModel)]=\"item.nome\" name=\"nome\" placeholder=\"Nome\" autocomplete=\"off\"/>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #hotmartId [(ngModel)]=\"item.hotmartId\" name=\"hotmartId\" placeholder=\"Hotmart Id\" autocomplete=\"off\"/>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #urlFinal [(ngModel)]=\"item.urlFinal\" name=\"urlFinal\" placeholder=\"Url Final\" autocomplete=\"off\"/>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #urlTracking [(ngModel)]=\"item.urlTracking\" name=\"urlTracking\" placeholder=\"Url Tracking\" autocomplete=\"off\"/>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput maxlength=\"1\" #geraTesteCampanha [(ngModel)]=\"item.geraTesteCampanha\" name=\"geraTesteCampanha\" placeholder=\"Gera Campanha de Teste (0/1)\" autocomplete=\"off\"/>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #sigla maxlength=\"8\" [(ngModel)]=\"item.sigla\" name=\"sigla\" placeholder=\"Sigla (8 caracteres)\" autocomplete=\"off\"/>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #precoReal  [(ngModel)]=\"item.precoReal\" name=\"precoReal\" placeholder=\"Comissão Valor Real\" autocomplete=\"off\"/>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #vendaTotal  [(ngModel)]=\"item.vendaTotal\" name=\"vendaTotal\" placeholder=\"Valor Venda\" autocomplete=\"off\"/>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #qtdeVenda  [(ngModel)]=\"item.qtdeVenda\" name=\"qtdeVenda\" placeholder=\"Quantdade Venda\" autocomplete=\"off\"/>\n    </mat-form-field> \n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #criaPixelVenda  [(ngModel)]=\"item.criaPixelVenda\" name=\"criaPixelVenda\" placeholder=\"Cria Pixel\" autocomplete=\"off\"/>\n    </mat-form-field> \n\n    <mat-form-field class=\"example-full-width\" *ngIf=\"listaConta\">\n      <mat-select placeholder=\"Conta Google Corrente\"  #contaGoogleId [(ngModel)]=\"item.contaGoogleId\" name=\"contaGoogleId\">\n        <mat-option *ngFor=\"let conta of listaConta\" [value]=\"conta.id\">\n          {{ conta.gmail}} ({{conta.nome}})\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <button mat-raised-button>Salvar</button>\n    <button mat-raised-button mat-dialog-close>Fechar</button>\n  </mat-dialog-actions>\n\n</form>\n"

/***/ }),

/***/ "./src/app/produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProdutoAfiliadoHotmartEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoHotmartEditComponent", function() { return ProdutoAfiliadoHotmartEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_component_base_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-component/base-edit-component */ "./src/app/base-component/base-edit-component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ProdutoAfiliadoHotmartEditComponent = /** @class */ (function (_super) {
    __extends(ProdutoAfiliadoHotmartEditComponent, _super);
    function ProdutoAfiliadoHotmartEditComponent(dialogRef, data, servico, srvConta) {
        var _this = _super.call(this, dialogRef, data, servico) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.servico = servico;
        _this.srvConta = srvConta;
        return _this;
    }
    ProdutoAfiliadoHotmartEditComponent.prototype.criaItem = function () {
        var novo = new _shared_sdk__WEBPACK_IMPORTED_MODULE_1__["ProdutoAfiliadoHotmart"]();
        return novo;
    };
    ProdutoAfiliadoHotmartEditComponent.prototype.preSubmit = function () {
        delete this.item['contaGoogle'];
    };
    ProdutoAfiliadoHotmartEditComponent.prototype.montaCombos = function () {
        var _this = this;
        this.srvConta.find()
            .subscribe(function (result) {
            _this.listaConta = result;
        });
    };
    ProdutoAfiliadoHotmartEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-produto-afiliado-hotmart-edit',
            template: __webpack_require__(/*! ./produto-afiliado-hotmart-edit.component.html */ "./src/app/produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component.html"),
            styles: [__webpack_require__(/*! ./produto-afiliado-hotmart-edit.component.css */ "./src/app/produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _shared_sdk__WEBPACK_IMPORTED_MODULE_1__["ProdutoAfiliadoHotmartApi"], _shared_sdk__WEBPACK_IMPORTED_MODULE_1__["ContaGoogleApi"]])
    ], ProdutoAfiliadoHotmartEditComponent);
    return ProdutoAfiliadoHotmartEditComponent;
}(_base_component_base_edit_component__WEBPACK_IMPORTED_MODULE_3__["BaseEditComponent"]));



/***/ }),

/***/ "./src/app/produto-afiliado-hotmart-list/produto-afiliado-hotmart-list.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/produto-afiliado-hotmart-list/produto-afiliado-hotmart-list.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dgc-card {\n    width: 48%;\n}"

/***/ }),

/***/ "./src/app/produto-afiliado-hotmart-list/produto-afiliado-hotmart-list.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/produto-afiliado-hotmart-list/produto-afiliado-hotmart-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\">\n  <div class=\"dgc-painel-header\">\n      <span>Afiliados Hotmart</span>\n      <button class=\"btn btn-primary btn-sm dgc-botao-comando dgc-direita\" (click)=\"edita()\">novo</button>\n  </div>\n  <div *ngIf=\"listaBase\" class=\"dgc-painel-principal\">\n    <div class=\"dgc-card\" *ngFor=\"let item of listaBase\">\n        <div class=\"dgc-card-header\">\n          <span class=\"dgc-link\" routerLink=\"/produtoAfiliadoHotmartDetalhe/{{item.hotmartId}}\">{{item.nome}}</span>\n          <span class=\"dgc-direita\"># {{item.hotmartId}}</span>\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          <span>Final: {{item.urlFinal}}</span>\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          <span>Tracking: {{item.urlTracking}}</span>\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          <span>Campanha de Teste: {{item.geraTesteCampanha}}</span>\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          <span>Cria Pixel: {{item.criaPixelVenda}}</span>\n        </div>\n        <div class=\"dgc-card-detalhe\">\n          <span>Sigla: {{item.sigla}}</span>\n        </div>\n        <div class=\"dgc-card-detalhe\" *ngIf=\"item.contaGoogle!=null\">\n          <span>Conta Google: {{item.contaGoogle.gmail}} ({{item.contaGoogle.nome}})</span>\n        </div>\n        <div class=\"dgc-card-detalhe\" *ngIf=\"item.visitaProdutoHotmarts != null && item.visitaProdutoHotmarts.length > 0\">\n          <span>Comissão: {{item.visitaProdutoHotmarts[0].afiliacaoValor | currency : 'BRL'}}</span>\n        </div>\n        <div class=\"dgc-card-detalhe\" >\n          <span>Valor Real: {{item.precoReal| currency : 'BRL'}} ({{item.qtdeVenda}})</span>\n        </div>\n        <div class=\"dgc-card-detalhe\" *ngIf=\"item.visitaProdutoHotmarts != null && item.visitaProdutoHotmarts.length > 0\" >\n          <div *ngFor=\"let metrica of item.visitaProdutoHotmarts[0].produtoAfiliadoMetricas\">\n            {{metrica.palavra}} (cpc: {{metrica.cpcMin | currency: 'BRL'}} até {{metrica.cpcMax | currency: 'BRL' }})\n          </div>\n        </div>\n        <div class=\"dgc-card-comandos\">\n            <button class=\"btn-primary btn-sm btn\"  [routerLink]=\"['/anuncioAds' , item.hotmartId]\">Anúncio Google ({{item.anuncioAdsCount}})</button>\n            <button class=\"btn-primary btn-sm btn\"  [routerLink]=\"['/campanhaAdsTeste' , item.hotmartId]\">Campanha Teste Google ({{item.campanhaAdsTestesCount}})</button>\n            <button class=\"btn-primary btn-sm btn\" (click)=\"edita(item)\">Editar</button>\n        </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/produto-afiliado-hotmart-list/produto-afiliado-hotmart-list.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/produto-afiliado-hotmart-list/produto-afiliado-hotmart-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProdutoAfiliadoHotmartListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoHotmartListComponent", function() { return ProdutoAfiliadoHotmartListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_component_base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-component/base-list-component */ "./src/app/base-component/base-list-component.ts");
/* harmony import */ var _produto_afiliado_hotmart_edit_produto_afiliado_hotmart_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component */ "./src/app/produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProdutoAfiliadoHotmartListComponent = /** @class */ (function (_super) {
    __extends(ProdutoAfiliadoHotmartListComponent, _super);
    function ProdutoAfiliadoHotmartListComponent(dialog, srv) {
        var _this = _super.call(this, dialog, srv) || this;
        _this.dialog = dialog;
        _this.srv = srv;
        return _this;
    }
    ProdutoAfiliadoHotmartListComponent.prototype.getFiltro = function () {
        return {
            'order': 'nome',
            'counts': ['campanhaAdsTestes', 'anuncioAds'],
            'include': [
                {
                    'relation': 'visitaProdutoHotmarts',
                    'scope': { 'where': { 'maisRecente': 1 }, 'include': { 'relation': 'produtoAfiliadoMetricas',
                            'scope': { 'order': 'mediaPesquisaPalavra desc', 'limit': 5 } } }
                },
                'contaGoogle'
            ]
        };
    };
    ProdutoAfiliadoHotmartListComponent.prototype.criaItem = function () {
        var novo = new _shared_sdk__WEBPACK_IMPORTED_MODULE_1__["ProdutoAfiliadoHotmart"]();
        return novo;
    };
    ProdutoAfiliadoHotmartListComponent.prototype.getComponente = function () {
        return _produto_afiliado_hotmart_edit_produto_afiliado_hotmart_edit_component__WEBPACK_IMPORTED_MODULE_4__["ProdutoAfiliadoHotmartEditComponent"];
    };
    ProdutoAfiliadoHotmartListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-produto-afiliado-hotmart-list',
            template: __webpack_require__(/*! ./produto-afiliado-hotmart-list.component.html */ "./src/app/produto-afiliado-hotmart-list/produto-afiliado-hotmart-list.component.html"),
            styles: [__webpack_require__(/*! ./produto-afiliado-hotmart-list.component.css */ "./src/app/produto-afiliado-hotmart-list/produto-afiliado-hotmart-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _shared_sdk__WEBPACK_IMPORTED_MODULE_1__["ProdutoAfiliadoHotmartApi"]])
    ], ProdutoAfiliadoHotmartListComponent);
    return ProdutoAfiliadoHotmartListComponent;
}(_base_component_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/produto-hotmart-list/produto-hotmart-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/produto-hotmart-list/produto-hotmart-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dgc-card {\n    width: 48%;\n}"

/***/ }),

/***/ "./src/app/produto-hotmart-list/produto-hotmart-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/produto-hotmart-list/produto-hotmart-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\">\n  <div class=\"dgc-painel-header\">\n      <span>Plataformas</span>\n  </div>\n  <div class=\"dgc-painel-principal\" *ngIf=\"listaBase\">\n      <div class=\"dgc-card\" *ngFor=\"let item of listaBase\">\n          <div class=\"dgc-card-header\">\n            <span>{{item.nome}}</span>\n          </div>\n          <div class=\"dgc-card-detalhe\">\n            <div>Temperatura: {{item.temperatura}}</div>\n            <div>Formato: {{item.formato}}</div>\n            <div>Categoria: {{item.categoria}}</div>\n          </div>\n          <div class=\"dgc-card-detalhe\">\n            <div>Comissão: {{item.afiliacaoValor}}</div>\n            <div>Percentual: {{item.afiliacaoPercentual}}</div>\n          </div>\n          <div class=\"dgc-card-detalhe\">\n            <div>Autor: {{item.produtorNome}}</div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/produto-hotmart-list/produto-hotmart-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/produto-hotmart-list/produto-hotmart-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ProdutoHotmartListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoHotmartListComponent", function() { return ProdutoHotmartListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_component_base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-component/base-list-component */ "./src/app/base-component/base-list-component.ts");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProdutoHotmartListComponent = /** @class */ (function (_super) {
    __extends(ProdutoHotmartListComponent, _super);
    function ProdutoHotmartListComponent(dialog, srv) {
        var _this = _super.call(this, dialog, srv) || this;
        _this.dialog = dialog;
        _this.srv = srv;
        return _this;
    }
    ProdutoHotmartListComponent.prototype.getFiltro = function () {
        return {
            'limit': 50,
            'order': 'temperatura desc'
        };
    };
    ProdutoHotmartListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-produto-hotmart-list',
            template: __webpack_require__(/*! ./produto-hotmart-list.component.html */ "./src/app/produto-hotmart-list/produto-hotmart-list.component.html"),
            styles: [__webpack_require__(/*! ./produto-hotmart-list.component.css */ "./src/app/produto-hotmart-list/produto-hotmart-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _shared_sdk__WEBPACK_IMPORTED_MODULE_3__["ProdutoHotmartApi"]])
    ], ProdutoHotmartListComponent);
    return ProdutoHotmartListComponent;
}(_base_component_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/shared/sdk/index.ts":
/*!*************************************!*\
  !*** ./src/app/shared/sdk/index.ts ***!
  \*************************************/
/*! exports provided: SDKBrowserModule, CookieBrowser, StorageBrowser, LoopBackConfig, BaseStorage, InternalStorage, SDKStorage, User, PlataformaVenda, ProdutoPlataforma, VisitaProdutoPlataforma, ProdutoHotmart, VisitaProdutoHotmart, TokenAcesso, IdeiaPalavraChave, CampanhaAds, AnuncioCampanhaAds, PalavraCampanhaAds, ProdutoAfiliadoHotmart, AgendaVisitaHotmart, CampanhaAdsTeste, AnuncioAds, ModeloCampanhaAdsTeste, PixelGoogle, PalavraChaveCampanhaAdsTeste, AnuncioCampanhaAdsTeste, FacebookConta, ProdutoAfiliadoMetrica, ContaGoogle, CampanhaAdsMetrica, AccessToken, SDKToken, FireLoopRef, ErrorHandler, VisitaProdutoPlataformaApi, ProdutoHotmartApi, VisitaProdutoHotmartApi, TokenAcessoApi, IdeiaPalavraChaveApi, CampanhaAdsApi, AnuncioCampanhaAdsApi, PalavraCampanhaAdsApi, ProdutoAfiliadoHotmartApi, AgendaVisitaHotmartApi, CampanhaAdsTesteApi, AnuncioAdsApi, ModeloCampanhaAdsTesteApi, PixelGoogleApi, PalavraChaveCampanhaAdsTesteApi, AnuncioCampanhaAdsTesteApi, FacebookContaApi, ProdutoAfiliadoMetricaApi, ContaGoogleApi, CampanhaAdsMetricaApi, SDKModels, LoopBackAuth, BaseLoopBackApi, RealTime, UserApi, PlataformaVendaApi, ProdutoPlataformaApi, LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKBrowserModule", function() { return SDKBrowserModule; });
/* harmony import */ var _services_core_error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _services_core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _services_custom_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/custom/logger.service */ "./src/app/shared/sdk/services/custom/logger.service.ts");
/* harmony import */ var _services_custom_SDKModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/custom/SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage/storage.swaps */ "./src/app/shared/sdk/storage/storage.swaps.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_cookie_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage/cookie.browser */ "./src/app/shared/sdk/storage/cookie.browser.ts");
/* harmony import */ var _storage_storage_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage/storage.browser */ "./src/app/shared/sdk/storage/storage.browser.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
/* harmony import */ var _services_core_real_time__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/core/real.time */ "./src/app/shared/sdk/services/core/real.time.ts");
/* harmony import */ var _services_custom_User__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/custom/User */ "./src/app/shared/sdk/services/custom/User.ts");
/* harmony import */ var _services_custom_PlataformaVenda__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/custom/PlataformaVenda */ "./src/app/shared/sdk/services/custom/PlataformaVenda.ts");
/* harmony import */ var _services_custom_ProdutoPlataforma__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/custom/ProdutoPlataforma */ "./src/app/shared/sdk/services/custom/ProdutoPlataforma.ts");
/* harmony import */ var _services_custom_VisitaProdutoPlataforma__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/custom/VisitaProdutoPlataforma */ "./src/app/shared/sdk/services/custom/VisitaProdutoPlataforma.ts");
/* harmony import */ var _services_custom_ProdutoHotmart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/custom/ProdutoHotmart */ "./src/app/shared/sdk/services/custom/ProdutoHotmart.ts");
/* harmony import */ var _services_custom_VisitaProdutoHotmart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/custom/VisitaProdutoHotmart */ "./src/app/shared/sdk/services/custom/VisitaProdutoHotmart.ts");
/* harmony import */ var _services_custom_TokenAcesso__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/custom/TokenAcesso */ "./src/app/shared/sdk/services/custom/TokenAcesso.ts");
/* harmony import */ var _services_custom_IdeiaPalavraChave__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/custom/IdeiaPalavraChave */ "./src/app/shared/sdk/services/custom/IdeiaPalavraChave.ts");
/* harmony import */ var _services_custom_CampanhaAds__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/custom/CampanhaAds */ "./src/app/shared/sdk/services/custom/CampanhaAds.ts");
/* harmony import */ var _services_custom_AnuncioCampanhaAds__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/custom/AnuncioCampanhaAds */ "./src/app/shared/sdk/services/custom/AnuncioCampanhaAds.ts");
/* harmony import */ var _services_custom_PalavraCampanhaAds__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/custom/PalavraCampanhaAds */ "./src/app/shared/sdk/services/custom/PalavraCampanhaAds.ts");
/* harmony import */ var _services_custom_ProdutoAfiliadoHotmart__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/custom/ProdutoAfiliadoHotmart */ "./src/app/shared/sdk/services/custom/ProdutoAfiliadoHotmart.ts");
/* harmony import */ var _services_custom_AgendaVisitaHotmart__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/custom/AgendaVisitaHotmart */ "./src/app/shared/sdk/services/custom/AgendaVisitaHotmart.ts");
/* harmony import */ var _services_custom_CampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/custom/CampanhaAdsTeste */ "./src/app/shared/sdk/services/custom/CampanhaAdsTeste.ts");
/* harmony import */ var _services_custom_AnuncioAds__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/custom/AnuncioAds */ "./src/app/shared/sdk/services/custom/AnuncioAds.ts");
/* harmony import */ var _services_custom_ModeloCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/custom/ModeloCampanhaAdsTeste */ "./src/app/shared/sdk/services/custom/ModeloCampanhaAdsTeste.ts");
/* harmony import */ var _services_custom_PixelGoogle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/custom/PixelGoogle */ "./src/app/shared/sdk/services/custom/PixelGoogle.ts");
/* harmony import */ var _services_custom_PalavraChaveCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/custom/PalavraChaveCampanhaAdsTeste */ "./src/app/shared/sdk/services/custom/PalavraChaveCampanhaAdsTeste.ts");
/* harmony import */ var _services_custom_AnuncioCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/custom/AnuncioCampanhaAdsTeste */ "./src/app/shared/sdk/services/custom/AnuncioCampanhaAdsTeste.ts");
/* harmony import */ var _services_custom_FacebookConta__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/custom/FacebookConta */ "./src/app/shared/sdk/services/custom/FacebookConta.ts");
/* harmony import */ var _services_custom_ProdutoAfiliadoMetrica__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/custom/ProdutoAfiliadoMetrica */ "./src/app/shared/sdk/services/custom/ProdutoAfiliadoMetrica.ts");
/* harmony import */ var _services_custom_ContaGoogle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/custom/ContaGoogle */ "./src/app/shared/sdk/services/custom/ContaGoogle.ts");
/* harmony import */ var _services_custom_CampanhaAdsMetrica__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/custom/CampanhaAdsMetrica */ "./src/app/shared/sdk/services/custom/CampanhaAdsMetrica.ts");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./models/index */ "./src/app/shared/sdk/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["User"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlataformaVenda", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["PlataformaVenda"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoPlataforma", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["ProdutoPlataforma"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisitaProdutoPlataforma", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["VisitaProdutoPlataforma"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoHotmart", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["ProdutoHotmart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisitaProdutoHotmart", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["VisitaProdutoHotmart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenAcesso", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["TokenAcesso"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeiaPalavraChave", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["IdeiaPalavraChave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CampanhaAds", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["CampanhaAds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnuncioCampanhaAds", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["AnuncioCampanhaAds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PalavraCampanhaAds", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["PalavraCampanhaAds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoHotmart", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["ProdutoAfiliadoHotmart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgendaVisitaHotmart", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["AgendaVisitaHotmart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsTeste", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["CampanhaAdsTeste"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnuncioAds", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["AnuncioAds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModeloCampanhaAdsTeste", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["ModeloCampanhaAdsTeste"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PixelGoogle", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["PixelGoogle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PalavraChaveCampanhaAdsTeste", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["PalavraChaveCampanhaAdsTeste"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnuncioCampanhaAdsTeste", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["AnuncioCampanhaAdsTeste"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookConta", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["FacebookConta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoMetrica", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["ProdutoAfiliadoMetrica"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContaGoogle", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["ContaGoogle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsMetrica", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["CampanhaAdsMetrica"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["AccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKToken", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["SDKToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireLoopRef", function() { return _models_index__WEBPACK_IMPORTED_MODULE_35__["FireLoopRef"]; });

/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/index */ "./src/app/shared/sdk/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["ErrorHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisitaProdutoPlataformaApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["VisitaProdutoPlataformaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoHotmartApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["ProdutoHotmartApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisitaProdutoHotmartApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["VisitaProdutoHotmartApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenAcessoApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["TokenAcessoApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeiaPalavraChaveApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["IdeiaPalavraChaveApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["CampanhaAdsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnuncioCampanhaAdsApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["AnuncioCampanhaAdsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PalavraCampanhaAdsApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["PalavraCampanhaAdsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoHotmartApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["ProdutoAfiliadoHotmartApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgendaVisitaHotmartApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["AgendaVisitaHotmartApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsTesteApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["CampanhaAdsTesteApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnuncioAdsApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["AnuncioAdsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModeloCampanhaAdsTesteApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["ModeloCampanhaAdsTesteApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PixelGoogleApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["PixelGoogleApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PalavraChaveCampanhaAdsTesteApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["PalavraChaveCampanhaAdsTesteApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnuncioCampanhaAdsTesteApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["AnuncioCampanhaAdsTesteApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookContaApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["FacebookContaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoMetricaApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["ProdutoAfiliadoMetricaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContaGoogleApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["ContaGoogleApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsMetricaApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["CampanhaAdsMetricaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["SDKModels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["LoopBackAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["BaseLoopBackApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealTime", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["RealTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["UserApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlataformaVendaApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["PlataformaVendaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoPlataformaApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["ProdutoPlataformaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _services_index__WEBPACK_IMPORTED_MODULE_36__["LoggerService"]; });

/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackConfig", function() { return _lb_config__WEBPACK_IMPORTED_MODULE_37__["LoopBackConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseStorage", function() { return _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_4__["BaseStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InternalStorage", function() { return _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_4__["InternalStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKStorage", function() { return _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_4__["SDKStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieBrowser", function() { return _storage_cookie_browser__WEBPACK_IMPORTED_MODULE_8__["CookieBrowser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageBrowser", function() { return _storage_storage_browser__WEBPACK_IMPORTED_MODULE_9__["StorageBrowser"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/



































/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
var SDKBrowserModule = /** @class */ (function () {
    function SDKBrowserModule() {
    }
    SDKBrowserModule_1 = SDKBrowserModule;
    SDKBrowserModule.forRoot = function (internalStorageProvider) {
        if (internalStorageProvider === void 0) { internalStorageProvider = {
            provide: _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_4__["InternalStorage"],
            useClass: _storage_cookie_browser__WEBPACK_IMPORTED_MODULE_8__["CookieBrowser"]
        }; }
        return {
            ngModule: SDKBrowserModule_1,
            providers: [
                _services_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["LoopBackAuth"],
                _services_custom_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"],
                _services_custom_SDKModels__WEBPACK_IMPORTED_MODULE_3__["SDKModels"],
                _services_core_real_time__WEBPACK_IMPORTED_MODULE_11__["RealTime"],
                _services_custom_User__WEBPACK_IMPORTED_MODULE_12__["UserApi"],
                _services_custom_PlataformaVenda__WEBPACK_IMPORTED_MODULE_13__["PlataformaVendaApi"],
                _services_custom_ProdutoPlataforma__WEBPACK_IMPORTED_MODULE_14__["ProdutoPlataformaApi"],
                _services_custom_VisitaProdutoPlataforma__WEBPACK_IMPORTED_MODULE_15__["VisitaProdutoPlataformaApi"],
                _services_custom_ProdutoHotmart__WEBPACK_IMPORTED_MODULE_16__["ProdutoHotmartApi"],
                _services_custom_VisitaProdutoHotmart__WEBPACK_IMPORTED_MODULE_17__["VisitaProdutoHotmartApi"],
                _services_custom_TokenAcesso__WEBPACK_IMPORTED_MODULE_18__["TokenAcessoApi"],
                _services_custom_IdeiaPalavraChave__WEBPACK_IMPORTED_MODULE_19__["IdeiaPalavraChaveApi"],
                _services_custom_CampanhaAds__WEBPACK_IMPORTED_MODULE_20__["CampanhaAdsApi"],
                _services_custom_AnuncioCampanhaAds__WEBPACK_IMPORTED_MODULE_21__["AnuncioCampanhaAdsApi"],
                _services_custom_PalavraCampanhaAds__WEBPACK_IMPORTED_MODULE_22__["PalavraCampanhaAdsApi"],
                _services_custom_ProdutoAfiliadoHotmart__WEBPACK_IMPORTED_MODULE_23__["ProdutoAfiliadoHotmartApi"],
                _services_custom_AgendaVisitaHotmart__WEBPACK_IMPORTED_MODULE_24__["AgendaVisitaHotmartApi"],
                _services_custom_CampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_25__["CampanhaAdsTesteApi"],
                _services_custom_AnuncioAds__WEBPACK_IMPORTED_MODULE_26__["AnuncioAdsApi"],
                _services_custom_ModeloCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_27__["ModeloCampanhaAdsTesteApi"],
                _services_custom_PixelGoogle__WEBPACK_IMPORTED_MODULE_28__["PixelGoogleApi"],
                _services_custom_PalavraChaveCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_29__["PalavraChaveCampanhaAdsTesteApi"],
                _services_custom_AnuncioCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_30__["AnuncioCampanhaAdsTesteApi"],
                _services_custom_FacebookConta__WEBPACK_IMPORTED_MODULE_31__["FacebookContaApi"],
                _services_custom_ProdutoAfiliadoMetrica__WEBPACK_IMPORTED_MODULE_32__["ProdutoAfiliadoMetricaApi"],
                _services_custom_ContaGoogle__WEBPACK_IMPORTED_MODULE_33__["ContaGoogleApi"],
                _services_custom_CampanhaAdsMetrica__WEBPACK_IMPORTED_MODULE_34__["CampanhaAdsMetricaApi"],
                internalStorageProvider,
                { provide: _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_4__["SDKStorage"], useClass: _storage_storage_browser__WEBPACK_IMPORTED_MODULE_9__["StorageBrowser"] }
            ]
        };
    };
    SDKBrowserModule = SDKBrowserModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
            declarations: [],
            exports: [],
            providers: [
                _services_core_error_service__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
                _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_10__["SocketConnection"]
            ]
        })
    ], SDKBrowserModule);
    return SDKBrowserModule;
    var SDKBrowserModule_1;
}());

/**
* Have Fun!!!
* - Jon
**/








/***/ }),

/***/ "./src/app/shared/sdk/lb.config.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/sdk/lb.config.ts ***!
  \*****************************************/
/*! exports provided: LoopBackConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopBackConfig", function() { return LoopBackConfig; });
/* harmony import */ var _constantes_base_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constantes/base.url */ "./src/app/constantes/base.url.ts");
/* tslint:disable */

/**
* @module LoopBackConfig
* @description
*
* The LoopBackConfig module help developers to externally
* configure the base url and api version for loopback.io
*
* Example
*
* import { LoopBackConfig } from './sdk';
*
* @Component() // No metadata needed for this module
*
* export class MyApp {
*   constructor() {
*     LoopBackConfig.setBaseURL('http://localhost:3000');
*     LoopBackConfig.setApiVersion('api');
*   }
* }
**/
var LoopBackConfig = /** @class */ (function () {
    function LoopBackConfig() {
    }
    LoopBackConfig.setApiVersion = function (version) {
        if (version === void 0) { version = 'api'; }
        LoopBackConfig.version = version;
    };
    LoopBackConfig.getApiVersion = function () {
        return LoopBackConfig.version;
    };
    LoopBackConfig.setBaseURL = function (url) {
        if (url === void 0) { url = '/'; }
        LoopBackConfig.path = url;
    };
    LoopBackConfig.getPath = function () {
        return LoopBackConfig.path;
    };
    LoopBackConfig.setAuthPrefix = function (authPrefix) {
        if (authPrefix === void 0) { authPrefix = ''; }
        LoopBackConfig.authPrefix = authPrefix;
    };
    LoopBackConfig.getAuthPrefix = function () {
        return LoopBackConfig.authPrefix;
    };
    LoopBackConfig.setDebugMode = function (isEnabled) {
        LoopBackConfig.debug = isEnabled;
    };
    LoopBackConfig.debuggable = function () {
        return LoopBackConfig.debug;
    };
    LoopBackConfig.filterOnUrl = function () {
        LoopBackConfig.filterOn = 'url';
    };
    LoopBackConfig.filterOnHeaders = function () {
        LoopBackConfig.filterOn = 'headers';
    };
    LoopBackConfig.whereOnUrl = function () {
        LoopBackConfig.whereOn = 'url';
    };
    LoopBackConfig.whereOnHeaders = function () {
        LoopBackConfig.whereOn = 'headers';
    };
    LoopBackConfig.isHeadersFilteringSet = function () {
        return (LoopBackConfig.filterOn === 'headers');
    };
    LoopBackConfig.isHeadersWhereSet = function () {
        return (LoopBackConfig.whereOn === 'headers');
    };
    LoopBackConfig.setSecureWebSockets = function () {
        LoopBackConfig.secure = true;
    };
    LoopBackConfig.unsetSecureWebSockets = function () {
        LoopBackConfig.secure = false;
    };
    LoopBackConfig.isSecureWebSocketsSet = function () {
        return LoopBackConfig.secure;
    };
    LoopBackConfig.setRequestOptionsCredentials = function (withCredentials) {
        if (withCredentials === void 0) { withCredentials = false; }
        LoopBackConfig.withCredentials = withCredentials;
    };
    LoopBackConfig.getRequestOptionsCredentials = function () {
        return LoopBackConfig.withCredentials;
    };
    LoopBackConfig.path = _constantes_base_url__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"];
    LoopBackConfig.version = 'api';
    LoopBackConfig.authPrefix = '';
    LoopBackConfig.debug = true;
    LoopBackConfig.filterOn = 'headers';
    LoopBackConfig.whereOn = 'headers';
    LoopBackConfig.secure = false;
    LoopBackConfig.withCredentials = false;
    return LoopBackConfig;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/AgendaVisitaHotmart.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/sdk/models/AgendaVisitaHotmart.ts ***!
  \**********************************************************/
/*! exports provided: AgendaVisitaHotmart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaVisitaHotmart", function() { return AgendaVisitaHotmart; });
/* tslint:disable */
var AgendaVisitaHotmart = /** @class */ (function () {
    function AgendaVisitaHotmart(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `AgendaVisitaHotmart`.
     */
    AgendaVisitaHotmart.getModelName = function () {
        return "AgendaVisitaHotmart";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of AgendaVisitaHotmart for dynamic purposes.
    **/
    AgendaVisitaHotmart.factory = function (data) {
        return new AgendaVisitaHotmart(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    AgendaVisitaHotmart.getModelDefinition = function () {
        return {
            name: 'AgendaVisitaHotmart',
            plural: 'AgendaVisitaHotmarts',
            path: 'AgendaVisitaHotmarts',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return AgendaVisitaHotmart;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/AnuncioAds.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/sdk/models/AnuncioAds.ts ***!
  \*************************************************/
/*! exports provided: AnuncioAds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioAds", function() { return AnuncioAds; });
var AnuncioAds = /** @class */ (function () {
    function AnuncioAds(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `AnuncioAds`.
     */
    AnuncioAds.getModelName = function () {
        return "AnuncioAds";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of AnuncioAds for dynamic purposes.
    **/
    AnuncioAds.factory = function (data) {
        return new AnuncioAds(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    AnuncioAds.getModelDefinition = function () {
        return {
            name: 'AnuncioAds',
            plural: 'AnuncioAds',
            path: 'AnuncioAds',
            idName: 'id',
            properties: {
                "titulo1": {
                    name: 'titulo1',
                    type: 'string'
                },
                "titulo2": {
                    name: 'titulo2',
                    type: 'string'
                },
                "titulo3": {
                    name: 'titulo3',
                    type: 'string'
                },
                "descricao1": {
                    name: 'descricao1',
                    type: 'string'
                },
                "descricao2": {
                    name: 'descricao2',
                    type: 'string'
                },
                "produtoAfiliadoHotmartId": {
                    name: 'produtoAfiliadoHotmartId',
                    type: 'number'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {
                produtoAfiliadoHotmart: {
                    name: 'produtoAfiliadoHotmart',
                    type: 'ProdutoAfiliadoHotmart',
                    model: 'ProdutoAfiliadoHotmart',
                    relationType: 'belongsTo',
                    keyFrom: 'produtoAfiliadoHotmartId',
                    keyTo: 'hotmartId'
                },
                anuncioCampanhaAds: {
                    name: 'anuncioCampanhaAds',
                    type: 'AnuncioCampanhaAds[]',
                    model: 'AnuncioCampanhaAds',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'anuncioAdsId'
                },
                anuncioCampanhaAdsTestes: {
                    name: 'anuncioCampanhaAdsTestes',
                    type: 'AnuncioCampanhaAdsTeste[]',
                    model: 'AnuncioCampanhaAdsTeste',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'anuncioAdsId'
                },
            }
        };
    };
    return AnuncioAds;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/AnuncioCampanhaAds.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/sdk/models/AnuncioCampanhaAds.ts ***!
  \*********************************************************/
/*! exports provided: AnuncioCampanhaAds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioCampanhaAds", function() { return AnuncioCampanhaAds; });
var AnuncioCampanhaAds = /** @class */ (function () {
    function AnuncioCampanhaAds(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `AnuncioCampanhaAds`.
     */
    AnuncioCampanhaAds.getModelName = function () {
        return "AnuncioCampanhaAds";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of AnuncioCampanhaAds for dynamic purposes.
    **/
    AnuncioCampanhaAds.factory = function (data) {
        return new AnuncioCampanhaAds(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    AnuncioCampanhaAds.getModelDefinition = function () {
        return {
            name: 'AnuncioCampanhaAds',
            plural: 'AnuncioCampanhaAds',
            path: 'AnuncioCampanhaAds',
            idName: 'id',
            properties: {
                "campanhaAdsId": {
                    name: 'campanhaAdsId',
                    type: 'string'
                },
                "anuncioAdsId": {
                    name: 'anuncioAdsId',
                    type: 'number'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {
                campanhaAds: {
                    name: 'campanhaAds',
                    type: 'CampanhaAds',
                    model: 'CampanhaAds',
                    relationType: 'belongsTo',
                    keyFrom: 'campanhaAdsId',
                    keyTo: 'nome'
                },
                anuncioAds: {
                    name: 'anuncioAds',
                    type: 'AnuncioAds',
                    model: 'AnuncioAds',
                    relationType: 'belongsTo',
                    keyFrom: 'anuncioAdsId',
                    keyTo: 'id'
                },
            }
        };
    };
    return AnuncioCampanhaAds;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/AnuncioCampanhaAdsTeste.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/sdk/models/AnuncioCampanhaAdsTeste.ts ***!
  \**************************************************************/
/*! exports provided: AnuncioCampanhaAdsTeste */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioCampanhaAdsTeste", function() { return AnuncioCampanhaAdsTeste; });
var AnuncioCampanhaAdsTeste = /** @class */ (function () {
    function AnuncioCampanhaAdsTeste(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `AnuncioCampanhaAdsTeste`.
     */
    AnuncioCampanhaAdsTeste.getModelName = function () {
        return "AnuncioCampanhaAdsTeste";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of AnuncioCampanhaAdsTeste for dynamic purposes.
    **/
    AnuncioCampanhaAdsTeste.factory = function (data) {
        return new AnuncioCampanhaAdsTeste(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    AnuncioCampanhaAdsTeste.getModelDefinition = function () {
        return {
            name: 'AnuncioCampanhaAdsTeste',
            plural: 'AnuncioCampanhaAdsTestes',
            path: 'AnuncioCampanhaAdsTestes',
            idName: 'campanhaAdsTesteId',
            properties: {
                "campanhaAdsTesteId": {
                    name: 'campanhaAdsTesteId',
                    type: 'number'
                },
                "anuncioAdsId": {
                    name: 'anuncioAdsId',
                    type: 'number'
                },
            },
            relations: {
                campanhaAdsTeste: {
                    name: 'campanhaAdsTeste',
                    type: 'CampanhaAdsTeste',
                    model: 'CampanhaAdsTeste',
                    relationType: 'belongsTo',
                    keyFrom: 'campanhaAdsTesteId',
                    keyTo: 'id'
                },
                anuncioAds: {
                    name: 'anuncioAds',
                    type: 'AnuncioAds',
                    model: 'AnuncioAds',
                    relationType: 'belongsTo',
                    keyFrom: 'anuncioAdsId',
                    keyTo: 'id'
                },
            }
        };
    };
    return AnuncioCampanhaAdsTeste;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/BaseModels.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/sdk/models/BaseModels.ts ***!
  \*************************************************/
/*! exports provided: AccessToken, SDKToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return AccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKToken", function() { return SDKToken; });
/* tslint:disable */
var AccessToken = /** @class */ (function () {
    function AccessToken(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `AccessToken`.
     */
    AccessToken.getModelName = function () {
        return "AccessToken";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of AccessToken for dynamic purposes.
    **/
    AccessToken.factory = function (data) {
        return new AccessToken(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    AccessToken.getModelDefinition = function () {
        return {
            name: 'AccessToken',
            plural: 'AccessTokens',
            properties: {
                "id": {
                    name: 'id',
                    type: 'string'
                },
                "ttl": {
                    name: 'ttl',
                    type: 'number',
                    default: 1209600
                },
                "scopes": {
                    name: 'scopes',
                    type: '["string"]'
                },
                "created": {
                    name: 'created',
                    type: 'Date'
                },
                "userId": {
                    name: 'userId',
                    type: 'string'
                },
            },
            relations: {
                user: {
                    name: 'user',
                    type: 'User',
                    model: 'User'
                },
            }
        };
    };
    return AccessToken;
}());

var SDKToken = /** @class */ (function () {
    function SDKToken(data) {
        this.id = null;
        this.ttl = null;
        this.scopes = null;
        this.created = null;
        this.userId = null;
        this.user = null;
        this.rememberMe = null;
        Object.assign(this, data);
    }
    return SDKToken;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/CampanhaAds.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/sdk/models/CampanhaAds.ts ***!
  \**************************************************/
/*! exports provided: CampanhaAds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhaAds", function() { return CampanhaAds; });
var CampanhaAds = /** @class */ (function () {
    function CampanhaAds(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `CampanhaAds`.
     */
    CampanhaAds.getModelName = function () {
        return "CampanhaAds";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of CampanhaAds for dynamic purposes.
    **/
    CampanhaAds.factory = function (data) {
        return new CampanhaAds(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    CampanhaAds.getModelDefinition = function () {
        return {
            name: 'CampanhaAds',
            plural: 'CampanhaAds',
            path: 'CampanhaAds',
            idName: 'nome',
            properties: {
                "nome": {
                    name: 'nome',
                    type: 'string'
                },
            },
            relations: {
                anuncioCampanhaAds: {
                    name: 'anuncioCampanhaAds',
                    type: 'AnuncioCampanhaAds[]',
                    model: 'AnuncioCampanhaAds',
                    relationType: 'hasMany',
                    keyFrom: 'nome',
                    keyTo: 'campanhaAdsId'
                },
            }
        };
    };
    return CampanhaAds;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/CampanhaAdsMetrica.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/sdk/models/CampanhaAdsMetrica.ts ***!
  \*********************************************************/
/*! exports provided: CampanhaAdsMetrica */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsMetrica", function() { return CampanhaAdsMetrica; });
var CampanhaAdsMetrica = /** @class */ (function () {
    function CampanhaAdsMetrica(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `CampanhaAdsMetrica`.
     */
    CampanhaAdsMetrica.getModelName = function () {
        return "CampanhaAdsMetrica";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of CampanhaAdsMetrica for dynamic purposes.
    **/
    CampanhaAdsMetrica.factory = function (data) {
        return new CampanhaAdsMetrica(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    CampanhaAdsMetrica.getModelDefinition = function () {
        return {
            name: 'CampanhaAdsMetrica',
            plural: 'CampanhaAdsMetricas',
            path: 'CampanhaAdsMetricas',
            idName: 'dataHora',
            properties: {
                "dataHora": {
                    name: 'dataHora',
                    type: 'Date'
                },
                "cpcMedio": {
                    name: 'cpcMedio',
                    type: 'number'
                },
                "custoCampanha": {
                    name: 'custoCampanha',
                    type: 'number'
                },
                "impressao": {
                    name: 'impressao',
                    type: 'number'
                },
                "clique": {
                    name: 'clique',
                    type: 'number'
                },
                "cpcCampanha": {
                    name: 'cpcCampanha',
                    type: 'number'
                },
                "codigoAds": {
                    name: 'codigoAds',
                    type: 'string'
                },
                "campanhaAdsTesteId": {
                    name: 'campanhaAdsTesteId',
                    type: 'number'
                },
            },
            relations: {
                campanhaAdsTeste: {
                    name: 'campanhaAdsTeste',
                    type: 'CampanhaAdsTeste',
                    model: 'CampanhaAdsTeste',
                    relationType: 'belongsTo',
                    keyFrom: 'campanhaAdsTesteId',
                    keyTo: 'id'
                },
            }
        };
    };
    return CampanhaAdsMetrica;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/CampanhaAdsTeste.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/sdk/models/CampanhaAdsTeste.ts ***!
  \*******************************************************/
/*! exports provided: CampanhaAdsTeste */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsTeste", function() { return CampanhaAdsTeste; });
var CampanhaAdsTeste = /** @class */ (function () {
    function CampanhaAdsTeste(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `CampanhaAdsTeste`.
     */
    CampanhaAdsTeste.getModelName = function () {
        return "CampanhaAdsTeste";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of CampanhaAdsTeste for dynamic purposes.
    **/
    CampanhaAdsTeste.factory = function (data) {
        return new CampanhaAdsTeste(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    CampanhaAdsTeste.getModelDefinition = function () {
        return {
            name: 'CampanhaAdsTeste',
            plural: 'CampanhaAdsTestes',
            path: 'CampanhaAdsTestes',
            idName: 'id',
            properties: {
                "nome": {
                    name: 'nome',
                    type: 'string'
                },
                "prontaParaTeste": {
                    name: 'prontaParaTeste',
                    type: 'number'
                },
                "codigoAds": {
                    name: 'codigoAds',
                    type: 'string'
                },
                "dataEnvioGoogle": {
                    name: 'dataEnvioGoogle',
                    type: 'Date'
                },
                "custoTotal": {
                    name: 'custoTotal',
                    type: 'number'
                },
                "receitaTotal": {
                    name: 'receitaTotal',
                    type: 'number'
                },
                "dataInicio": {
                    name: 'dataInicio',
                    type: 'Date'
                },
                "dataTermino": {
                    name: 'dataTermino',
                    type: 'Date'
                },
                "qtdeImpressao": {
                    name: 'qtdeImpressao',
                    type: 'number'
                },
                "qtdeClique": {
                    name: 'qtdeClique',
                    type: 'number'
                },
                "ctr": {
                    name: 'ctr',
                    type: 'number'
                },
                "nomeAds": {
                    name: 'nomeAds',
                    type: 'string'
                },
                "cpc": {
                    name: 'cpc',
                    type: 'number'
                },
                "ativa": {
                    name: 'ativa',
                    type: 'number'
                },
                "modeloCampanhaAdsTesteId": {
                    name: 'modeloCampanhaAdsTesteId',
                    type: 'number'
                },
                "produtoAfiliadoHotmartId": {
                    name: 'produtoAfiliadoHotmartId',
                    type: 'number'
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
                produtoAfiliadoHotmart: {
                    name: 'produtoAfiliadoHotmart',
                    type: 'ProdutoAfiliadoHotmart',
                    model: 'ProdutoAfiliadoHotmart',
                    relationType: 'belongsTo',
                    keyFrom: 'produtoAfiliadoHotmartId',
                    keyTo: 'hotmartId'
                },
                modeloCampanhaAdsTeste: {
                    name: 'modeloCampanhaAdsTeste',
                    type: 'ModeloCampanhaAdsTeste',
                    model: 'ModeloCampanhaAdsTeste',
                    relationType: 'belongsTo',
                    keyFrom: 'modeloCampanhaAdsTesteId',
                    keyTo: 'id'
                },
                palavraChaveCampanhaAdsTestes: {
                    name: 'palavraChaveCampanhaAdsTestes',
                    type: 'PalavraChaveCampanhaAdsTeste[]',
                    model: 'PalavraChaveCampanhaAdsTeste',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'campanhaAdsTesteId'
                },
                anuncioCampanhaAdsTestes: {
                    name: 'anuncioCampanhaAdsTestes',
                    type: 'AnuncioCampanhaAdsTeste[]',
                    model: 'AnuncioCampanhaAdsTeste',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'campanhaAdsTesteId'
                },
                contaGoogle: {
                    name: 'contaGoogle',
                    type: 'ContaGoogle',
                    model: 'ContaGoogle',
                    relationType: 'belongsTo',
                    keyFrom: 'contaGoogleId',
                    keyTo: 'id'
                },
                campanhaAdsMetricas: {
                    name: 'campanhaAdsMetricas',
                    type: 'CampanhaAdsMetrica[]',
                    model: 'CampanhaAdsMetrica',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'campanhaAdsTesteId'
                },
            }
        };
    };
    return CampanhaAdsTeste;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/ContaGoogle.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/sdk/models/ContaGoogle.ts ***!
  \**************************************************/
/*! exports provided: ContaGoogle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaGoogle", function() { return ContaGoogle; });
var ContaGoogle = /** @class */ (function () {
    function ContaGoogle(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `ContaGoogle`.
     */
    ContaGoogle.getModelName = function () {
        return "ContaGoogle";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of ContaGoogle for dynamic purposes.
    **/
    ContaGoogle.factory = function (data) {
        return new ContaGoogle(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    ContaGoogle.getModelDefinition = function () {
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
            }
        };
    };
    return ContaGoogle;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/FacebookConta.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/sdk/models/FacebookConta.ts ***!
  \****************************************************/
/*! exports provided: FacebookConta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookConta", function() { return FacebookConta; });
/* tslint:disable */
var FacebookConta = /** @class */ (function () {
    function FacebookConta(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `FacebookConta`.
     */
    FacebookConta.getModelName = function () {
        return "FacebookConta";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of FacebookConta for dynamic purposes.
    **/
    FacebookConta.factory = function (data) {
        return new FacebookConta(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    FacebookConta.getModelDefinition = function () {
        return {
            name: 'FacebookConta',
            plural: 'FacebookConta',
            path: 'FacebookConta',
            idName: 'id',
            properties: {
                "email": {
                    name: 'email',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return FacebookConta;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/FireLoop.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/sdk/models/FireLoop.ts ***!
  \***********************************************/
/*! exports provided: FireLoop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireLoop", function() { return FireLoop; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/app/shared/sdk/models/index.ts");
/* tslint:disable */

var FireLoop = /** @class */ (function () {
    function FireLoop(socket, models) {
        this.socket = socket;
        this.models = models;
        this.references = {};
    }
    FireLoop.prototype.ref = function (model) {
        var name = model.getModelName();
        model.models = this.models;
        this.references[name] = new _index__WEBPACK_IMPORTED_MODULE_0__["FireLoopRef"](model, this.socket);
        return this.references[name];
    };
    return FireLoop;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/FireLoopRef.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/sdk/models/FireLoopRef.ts ***!
  \**************************************************/
/*! exports provided: FireLoopRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireLoopRef", function() { return FireLoopRef; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* tslint:disable */


/**
 * @class FireLoopRef<T>
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * This class allows to create FireLoop References which will be in sync with
 * Server. It also allows to create FireLoop Reference Childs, that allows to
 * persist data according the generic model relationships.
 **/
var FireLoopRef = /** @class */ (function () {
    /**
    * @method constructor
    * @param {any} model The model we want to create a reference
    * @param {SocketConnection} socket Socket connection to handle events
    * @param {FireLoopRef<any>} parent Parent FireLoop model reference
    * @param {string} relationship The defined model relationship
    * @description
    * The constructor will receive the required parameters and then will register this reference
    * into the server, needed to allow multiple references for the same model.
    * This ids are referenced into this specific client connection and won't have issues
    * with other client ids.
    **/
    function FireLoopRef(model, socket, parent, relationship) {
        if (parent === void 0) { parent = null; }
        if (relationship === void 0) { relationship = null; }
        this.model = model;
        this.socket = socket;
        this.parent = parent;
        this.relationship = relationship;
        // Reference ID
        this.id = this.buildId();
        // Model Childs
        this.childs = {};
        // Disposable Events
        this.disposable = {};
        this.socket.emit("Subscribe." + (!parent ? model.getModelName() : parent.model.getModelName()), { id: this.id, scope: model.getModelName(), relationship: relationship });
        return this;
    }
    /**
    * @method dispose
    * @return {void}
    * @description
    * This method is super important to avoid memory leaks in the server.
    * This method requires to be called on components destroy
    *
    * ngOnDestroy() {
    *  this.someRef.dispose()
    * }
    **/
    FireLoopRef.prototype.dispose = function () {
        var _this = this;
        var subscription = this.operation('dispose', {}).subscribe(function () {
            Object.keys(_this.disposable).forEach(function (channel) {
                _this.socket.removeListener(channel, _this.disposable[channel]);
                _this.socket.removeAllListeners(channel);
            });
            subscription.unsubscribe();
        });
    };
    /**
    * @method upsert
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for upsert function.
    **/
    FireLoopRef.prototype.upsert = function (data) {
        return this.operation('upsert', data);
    };
    /**
    * @method create
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for create function.
    **/
    FireLoopRef.prototype.create = function (data) {
        return this.operation('create', data);
    };
    /**
    * @method remove
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for remove function.
    **/
    FireLoopRef.prototype.remove = function (data) {
        return this.operation('remove', data);
    };
    /**
    * @method remote
    * @param {string} method Remote method name
    * @param {any[]=} params Parameters to be applied into the remote method
    * @param {boolean} broadcast Flag to define if the method results should be broadcasted
    * @return {Observable<any>}
    * @description
    * This method calls for any remote method. It is flexible enough to
    * allow you call either built-in or custom remote methods.
    *
    * FireLoop provides this interface to enable calling remote methods
    * but also to optionally send any defined accept params that will be
    * applied within the server.
    **/
    FireLoopRef.prototype.remote = function (method, params, broadcast) {
        if (broadcast === void 0) { broadcast = false; }
        return this.operation('remote', { method: method, params: params, broadcast: broadcast });
    };
    /**
    * @method onRemote
    * @param {string} method Remote method name
    * @return {Observable<any>}
    * @description
    * This method listen for public broadcasted remote method results. If the remote method
    * execution is not public only the owner will receive the result data.
    **/
    FireLoopRef.prototype.onRemote = function (method) {
        var event = 'remote';
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
        }
        return this.broadcasts(event, {});
    };
    /**
    * @method on
    * @param {string} event Event name
    * @param {LoopBackFilter} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for different type of events. Valid events are:
    *   - change (Triggers on any model change -create, update, remove-)
    *   - value (Triggers on new entries)
    *   - child_added (Triggers when a child is added)
    *   - child_updated (Triggers when a child is updated)
    *   - child_removed (Triggers when a child is removed)
    **/
    FireLoopRef.prototype.on = function (event, filter) {
        if (filter === void 0) { filter = { limit: 100, order: 'id DESC' }; }
        if (event === 'remote') {
            throw new Error('The "remote" event is not allowed using "on()" method, use "onRemote()" instead');
        }
        var request;
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
            request = { filter: filter };
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
            request = { filter: filter, parent: this.parent.instance };
        }
        if (event.match(/(value|change|stats)/)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(this.pull(event, request), this.broadcasts(event, request));
        }
        else {
            return this.broadcasts(event, request);
        }
    };
    /**
    * @method stats
    * @param {LoopBackFilter=} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for real-time statistics, will trigger on every
    * statistic modification.
    * TIP: You can improve performance by adding memcached to LoopBack models.
    **/
    FireLoopRef.prototype.stats = function (filter) {
        return this.on('stats', filter);
    };
    /**
    * @method make
    * @param {any} instance Persisted model instance reference
    * @return {Observable<T>}
    * @description
    * This method will set a model instance into this a new FireLoop Reference.
    * This allows to persiste parentship when creating related instances.
    *
    * It also allows to have multiple different persisted instance references to same model.
    * otherwise if using singleton will replace a previous instance for a new instance, when
    * we actually want to have more than 1 instance of same model.
    **/
    FireLoopRef.prototype.make = function (instance) {
        var reference = new FireLoopRef(this.model, this.socket);
        reference.instance = instance;
        return reference;
    };
    /**
    * @method child
    * @param {string} relationship A defined model relationship
    * @return {FireLoopRef<T>}
    * @description
    * This method creates child references, which will persist related model
    * instances. e.g. Room.messages, where messages belongs to a specific Room.
    **/
    FireLoopRef.prototype.child = function (relationship) {
        // Return singleton instance
        if (this.childs[relationship]) {
            return this.childs[relationship];
        }
        // Try to get relation settings from current model
        var settings = this.model.getModelDefinition().relations[relationship];
        // Verify the relationship actually exists
        if (!settings) {
            throw new Error("Invalid model relationship " + this.model.getModelName() + " <-> " + relationship + ", verify your model settings.");
        }
        // Verify if the relationship model is public
        if (settings.model === '') {
            throw new Error("Relationship model is private, cam't use " + relationship + " unless you set your model as public.");
        }
        // Lets get a model reference and add a reference for all of the models
        var model = this.model.models.get(settings.model);
        model.models = this.model.models;
        // If everything goes well, we will store a child reference and return it.
        this.childs[relationship] = new FireLoopRef(model, this.socket, this, relationship);
        return this.childs[relationship];
    };
    /**
    * @method pull
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This method will pull initial data from server
    **/
    FireLoopRef.prototype.pull = function (event, request) {
        var sbj = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        var that = this;
        var nowEvent = event + ".pull.requested." + this.id;
        this.socket.emit(event + ".pull.request." + this.id, request);
        function pullNow(data) {
            if (that.socket.removeListener) {
                that.socket.removeListener(nowEvent, pullNow);
            }
            sbj.next(data);
        }
        ;
        this.socket.on(nowEvent, pullNow);
        return sbj.asObservable();
    };
    /**
    * @method broadcasts
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This will listen for public broadcasts announces and then request
    * for data according a specific client request, not shared with other clients.
    **/
    FireLoopRef.prototype.broadcasts = function (event, request) {
        var sbj = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        var channels = {
            announce: event + ".broadcast.announce." + this.id,
            broadcast: event + ".broadcast." + this.id
        };
        var that = this;
        // Announces Handler
        this.disposable[channels.announce] = function (res) {
            that.socket.emit(event + ".broadcast.request." + that.id, request);
        };
        // Broadcasts Handler
        this.disposable[channels.broadcast] = function (data) {
            sbj.next(data);
        };
        this.socket.on(channels.announce, this.disposable[channels.announce]);
        this.socket.on(channels.broadcast, this.disposable[channels.broadcast]);
        return sbj.asObservable();
    };
    /**
    * @method operation
    * @param {string} event Event name
    * @param {any} data Any type of data sent to the server
    * @return {Observable<T>}
    * @description
    * This internal method will run operations depending on current context
    **/
    FireLoopRef.prototype.operation = function (event, data) {
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event + "." + this.id;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event + "." + this.id;
        }
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        var config = {
            data: data,
            parent: this.parent && this.parent.instance ? this.parent.instance : null
        };
        this.socket.emit(event, config);
        var resultEvent = '';
        if (!this.relationship) {
            resultEvent = this.model.getModelName() + ".value.result." + this.id;
        }
        else {
            resultEvent = this.parent.model.getModelName() + "." + this.relationship + ".value.result." + this.id;
        }
        this.socket.on(resultEvent, function (res) {
            if (res.error) {
                subject.error(res);
            }
            else {
                subject.next(res);
            }
        });
        if (event.match('dispose')) {
            setTimeout(function () { return subject.next(); });
        }
        // This event listener will be wiped within socket.connections
        this.socket.sharedObservables.sharedOnDisconnect.subscribe(function () { return subject.complete(); });
        return subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(error); }));
    };
    /**
    * @method buildId
    * @return {number}
    * @description
    * This internal method build an ID for this reference, this allows to have
    * multiple references for the same model or relationships.
    **/
    FireLoopRef.prototype.buildId = function () {
        return Date.now() + Math.floor(Math.random() * 100800) *
            Math.floor(Math.random() * 100700) *
            Math.floor(Math.random() * 198500);
    };
    return FireLoopRef;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/IdeiaPalavraChave.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/sdk/models/IdeiaPalavraChave.ts ***!
  \********************************************************/
/*! exports provided: IdeiaPalavraChave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeiaPalavraChave", function() { return IdeiaPalavraChave; });
var IdeiaPalavraChave = /** @class */ (function () {
    function IdeiaPalavraChave(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `IdeiaPalavraChave`.
     */
    IdeiaPalavraChave.getModelName = function () {
        return "IdeiaPalavraChave";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of IdeiaPalavraChave for dynamic purposes.
    **/
    IdeiaPalavraChave.factory = function (data) {
        return new IdeiaPalavraChave(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    IdeiaPalavraChave.getModelDefinition = function () {
        return {
            name: 'IdeiaPalavraChave',
            plural: 'IdeiaPalavraChaves',
            path: 'IdeiaPalavraChaves',
            idName: 'id',
            properties: {
                "texto": {
                    name: 'texto',
                    type: 'string'
                },
                "mediaPesquisa": {
                    name: 'mediaPesquisa',
                    type: 'number'
                },
                "concorrencia": {
                    name: 'concorrencia',
                    type: 'string'
                },
                "dataAcesso": {
                    name: 'dataAcesso',
                    type: 'Date'
                },
                "cpcMaximoTopPage": {
                    name: 'cpcMaximoTopPage',
                    type: 'number'
                },
                "cpcMinimoTopPage": {
                    name: 'cpcMinimoTopPage',
                    type: 'number'
                },
                "hotmartId": {
                    name: 'hotmartId',
                    type: 'number'
                },
                "retorno100Click": {
                    name: 'retorno100Click',
                    type: 'number'
                },
                "maisRecente": {
                    name: 'maisRecente',
                    type: 'number'
                },
                "cpcPara50": {
                    name: 'cpcPara50',
                    type: 'number'
                },
                "cpcPara75": {
                    name: 'cpcPara75',
                    type: 'number'
                },
                "quantidadePorVisita": {
                    name: 'quantidadePorVisita',
                    type: 'number'
                },
                "maisRecenteProduto": {
                    name: 'maisRecenteProduto',
                    type: 'number'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {
                visitaProdutoHotmarts: {
                    name: 'visitaProdutoHotmarts',
                    type: 'VisitaProdutoHotmart[]',
                    model: 'VisitaProdutoHotmart',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'hotmartId'
                },
                palavraChaveCampanhaAdsTestes: {
                    name: 'palavraChaveCampanhaAdsTestes',
                    type: 'PalavraChaveCampanhaAdsTeste[]',
                    model: 'PalavraChaveCampanhaAdsTeste',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'ideiaPalavraChaveId'
                },
                produtoAfiliadoMetricas: {
                    name: 'produtoAfiliadoMetricas',
                    type: 'ProdutoAfiliadoMetrica[]',
                    model: 'ProdutoAfiliadoMetrica',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'ideiaPalavraChaveId'
                },
            }
        };
    };
    return IdeiaPalavraChave;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/ModeloCampanhaAdsTeste.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/sdk/models/ModeloCampanhaAdsTeste.ts ***!
  \*************************************************************/
/*! exports provided: ModeloCampanhaAdsTeste */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeloCampanhaAdsTeste", function() { return ModeloCampanhaAdsTeste; });
var ModeloCampanhaAdsTeste = /** @class */ (function () {
    function ModeloCampanhaAdsTeste(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `ModeloCampanhaAdsTeste`.
     */
    ModeloCampanhaAdsTeste.getModelName = function () {
        return "ModeloCampanhaAdsTeste";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of ModeloCampanhaAdsTeste for dynamic purposes.
    **/
    ModeloCampanhaAdsTeste.factory = function (data) {
        return new ModeloCampanhaAdsTeste(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    ModeloCampanhaAdsTeste.getModelDefinition = function () {
        return {
            name: 'ModeloCampanhaAdsTeste',
            plural: 'ModeloCampanhaAdsTestes',
            path: 'ModeloCampanhaAdsTestes',
            idName: 'id',
            properties: {
                "orcamentoDiario": {
                    name: 'orcamentoDiario',
                    type: 'number'
                },
                "qtdeDia": {
                    name: 'qtdeDia',
                    type: 'number'
                },
                "diaInicial": {
                    name: 'diaInicial',
                    type: 'number'
                },
                "valorTotal": {
                    name: 'valorTotal',
                    type: 'number'
                },
                "multiplicadorCpcCusto": {
                    name: 'multiplicadorCpcCusto',
                    type: 'number'
                },
                "tipoCpcCusto": {
                    name: 'tipoCpcCusto',
                    type: 'string'
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
                    keyTo: 'modeloCampanhaAdsTesteId'
                },
            }
        };
    };
    return ModeloCampanhaAdsTeste;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/PalavraCampanhaAds.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/sdk/models/PalavraCampanhaAds.ts ***!
  \*********************************************************/
/*! exports provided: PalavraCampanhaAds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalavraCampanhaAds", function() { return PalavraCampanhaAds; });
/* tslint:disable */
var PalavraCampanhaAds = /** @class */ (function () {
    function PalavraCampanhaAds(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `PalavraCampanhaAds`.
     */
    PalavraCampanhaAds.getModelName = function () {
        return "PalavraCampanhaAds";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of PalavraCampanhaAds for dynamic purposes.
    **/
    PalavraCampanhaAds.factory = function (data) {
        return new PalavraCampanhaAds(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    PalavraCampanhaAds.getModelDefinition = function () {
        return {
            name: 'PalavraCampanhaAds',
            plural: 'PalavraCampanhaAds',
            path: 'PalavraCampanhaAds',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return PalavraCampanhaAds;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/PalavraChaveCampanhaAdsTeste.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/sdk/models/PalavraChaveCampanhaAdsTeste.ts ***!
  \*******************************************************************/
/*! exports provided: PalavraChaveCampanhaAdsTeste */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalavraChaveCampanhaAdsTeste", function() { return PalavraChaveCampanhaAdsTeste; });
var PalavraChaveCampanhaAdsTeste = /** @class */ (function () {
    function PalavraChaveCampanhaAdsTeste(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `PalavraChaveCampanhaAdsTeste`.
     */
    PalavraChaveCampanhaAdsTeste.getModelName = function () {
        return "PalavraChaveCampanhaAdsTeste";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of PalavraChaveCampanhaAdsTeste for dynamic purposes.
    **/
    PalavraChaveCampanhaAdsTeste.factory = function (data) {
        return new PalavraChaveCampanhaAdsTeste(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    PalavraChaveCampanhaAdsTeste.getModelDefinition = function () {
        return {
            name: 'PalavraChaveCampanhaAdsTeste',
            plural: 'PalavraChaveCampanhaAdsTestes',
            path: 'PalavraChaveCampanhaAdsTestes',
            idName: 'campanhaAdsTesteId',
            properties: {
                "campanhaAdsTesteId": {
                    name: 'campanhaAdsTesteId',
                    type: 'number'
                },
                "ideiaPalavraChaveId": {
                    name: 'ideiaPalavraChaveId',
                    type: 'number'
                },
            },
            relations: {
                campanhaAdsTeste: {
                    name: 'campanhaAdsTeste',
                    type: 'CampanhaAdsTeste',
                    model: 'CampanhaAdsTeste',
                    relationType: 'belongsTo',
                    keyFrom: 'campanhaAdsTesteId',
                    keyTo: 'id'
                },
                ideiaPalavraChave: {
                    name: 'ideiaPalavraChave',
                    type: 'IdeiaPalavraChave',
                    model: 'IdeiaPalavraChave',
                    relationType: 'belongsTo',
                    keyFrom: 'ideiaPalavraChaveId',
                    keyTo: 'id'
                },
            }
        };
    };
    return PalavraChaveCampanhaAdsTeste;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/PixelGoogle.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/sdk/models/PixelGoogle.ts ***!
  \**************************************************/
/*! exports provided: PixelGoogle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelGoogle", function() { return PixelGoogle; });
var PixelGoogle = /** @class */ (function () {
    function PixelGoogle(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `PixelGoogle`.
     */
    PixelGoogle.getModelName = function () {
        return "PixelGoogle";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of PixelGoogle for dynamic purposes.
    **/
    PixelGoogle.factory = function (data) {
        return new PixelGoogle(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    PixelGoogle.getModelDefinition = function () {
        return {
            name: 'PixelGoogle',
            plural: 'PixelGoogles',
            path: 'PixelGoogles',
            idName: 'id',
            properties: {
                "identificador": {
                    name: 'identificador',
                    type: 'string'
                },
                "script": {
                    name: 'script',
                    type: 'string'
                },
                "dataCriacao": {
                    name: 'dataCriacao',
                    type: 'Date'
                },
                "nome": {
                    name: 'nome',
                    type: 'string'
                },
                "codigo1": {
                    name: 'codigo1',
                    type: 'string'
                },
                "codigo2": {
                    name: 'codigo2',
                    type: 'string'
                },
                "instalado": {
                    name: 'instalado',
                    type: 'number'
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
                produtoAfiliadoHotmarts: {
                    name: 'produtoAfiliadoHotmarts',
                    type: 'ProdutoAfiliadoHotmart[]',
                    model: 'ProdutoAfiliadoHotmart',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'pixelGoogleId'
                },
                pixelGooglePaginaVenda: {
                    name: 'pixelGooglePaginaVenda',
                    type: 'ProdutoAfiliadoHotmart[]',
                    model: 'ProdutoAfiliadoHotmart',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'pixelGooglePaginaVendaId'
                },
                contaGoogle: {
                    name: 'contaGoogle',
                    type: 'ContaGoogle',
                    model: 'ContaGoogle',
                    relationType: 'belongsTo',
                    keyFrom: 'contaGoogleId',
                    keyTo: 'id'
                },
            }
        };
    };
    return PixelGoogle;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/PlataformaVenda.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/sdk/models/PlataformaVenda.ts ***!
  \******************************************************/
/*! exports provided: PlataformaVenda */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlataformaVenda", function() { return PlataformaVenda; });
/* tslint:disable */
var PlataformaVenda = /** @class */ (function () {
    function PlataformaVenda(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `PlataformaVenda`.
     */
    PlataformaVenda.getModelName = function () {
        return "PlataformaVenda";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of PlataformaVenda for dynamic purposes.
    **/
    PlataformaVenda.factory = function (data) {
        return new PlataformaVenda(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    PlataformaVenda.getModelDefinition = function () {
        return {
            name: 'PlataformaVenda',
            plural: 'PlataformaVendas',
            path: 'PlataformaVendas',
            idName: 'id',
            properties: {
                "nome": {
                    name: 'nome',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return PlataformaVenda;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/ProdutoAfiliadoHotmart.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/sdk/models/ProdutoAfiliadoHotmart.ts ***!
  \*************************************************************/
/*! exports provided: ProdutoAfiliadoHotmart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoHotmart", function() { return ProdutoAfiliadoHotmart; });
var ProdutoAfiliadoHotmart = /** @class */ (function () {
    function ProdutoAfiliadoHotmart(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `ProdutoAfiliadoHotmart`.
     */
    ProdutoAfiliadoHotmart.getModelName = function () {
        return "ProdutoAfiliadoHotmart";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of ProdutoAfiliadoHotmart for dynamic purposes.
    **/
    ProdutoAfiliadoHotmart.factory = function (data) {
        return new ProdutoAfiliadoHotmart(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    ProdutoAfiliadoHotmart.getModelDefinition = function () {
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
                produtoAfiliadoPaginaVenda: {
                    name: 'produtoAfiliadoPaginaVenda',
                    type: 'PixelGoogle',
                    model: 'PixelGoogle',
                    relationType: 'belongsTo',
                    keyFrom: 'pixelGooglePaginaVendaId',
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
            }
        };
    };
    return ProdutoAfiliadoHotmart;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/ProdutoAfiliadoMetrica.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/sdk/models/ProdutoAfiliadoMetrica.ts ***!
  \*************************************************************/
/*! exports provided: ProdutoAfiliadoMetrica */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoMetrica", function() { return ProdutoAfiliadoMetrica; });
var ProdutoAfiliadoMetrica = /** @class */ (function () {
    function ProdutoAfiliadoMetrica(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `ProdutoAfiliadoMetrica`.
     */
    ProdutoAfiliadoMetrica.getModelName = function () {
        return "ProdutoAfiliadoMetrica";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of ProdutoAfiliadoMetrica for dynamic purposes.
    **/
    ProdutoAfiliadoMetrica.factory = function (data) {
        return new ProdutoAfiliadoMetrica(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    ProdutoAfiliadoMetrica.getModelDefinition = function () {
        return {
            name: 'ProdutoAfiliadoMetrica',
            plural: 'ProdutoAfiliadoMetricas',
            path: 'ProdutoAfiliadoMetricas',
            idName: 'hotmartId',
            properties: {
                "hotmartId": {
                    name: 'hotmartId',
                    type: 'number'
                },
                "cpcMax": {
                    name: 'cpcMax',
                    type: 'number'
                },
                "cpcMin": {
                    name: 'cpcMin',
                    type: 'number'
                },
                "cpcReferencia": {
                    name: 'cpcReferencia',
                    type: 'number'
                },
                "comissao": {
                    name: 'comissao',
                    type: 'number'
                },
                "lucroVenda01": {
                    name: 'lucroVenda01',
                    type: 'number'
                },
                "cpc100": {
                    name: 'cpc100',
                    type: 'number'
                },
                "palavra": {
                    name: 'palavra',
                    type: 'string'
                },
                "temperaturaProduto": {
                    name: 'temperaturaProduto',
                    type: 'number'
                },
                "mediaPesquisaPalavra": {
                    name: 'mediaPesquisaPalavra',
                    type: 'number'
                },
                "ideiaPalavraChaveId": {
                    name: 'ideiaPalavraChaveId',
                    type: 'number'
                },
            },
            relations: {
                visitaProdutoHotmart: {
                    name: 'visitaProdutoHotmart',
                    type: 'VisitaProdutoHotmart',
                    model: 'VisitaProdutoHotmart',
                    relationType: 'belongsTo',
                    keyFrom: 'hotmartId',
                    keyTo: 'hotmartId'
                },
                ideiaPalavraChave: {
                    name: 'ideiaPalavraChave',
                    type: 'IdeiaPalavraChave',
                    model: 'IdeiaPalavraChave',
                    relationType: 'belongsTo',
                    keyFrom: 'ideiaPalavraChaveId',
                    keyTo: 'id'
                },
            }
        };
    };
    return ProdutoAfiliadoMetrica;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/ProdutoHotmart.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sdk/models/ProdutoHotmart.ts ***!
  \*****************************************************/
/*! exports provided: ProdutoHotmart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoHotmart", function() { return ProdutoHotmart; });
/* tslint:disable */
var ProdutoHotmart = /** @class */ (function () {
    function ProdutoHotmart(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `ProdutoHotmart`.
     */
    ProdutoHotmart.getModelName = function () {
        return "ProdutoHotmart";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of ProdutoHotmart for dynamic purposes.
    **/
    ProdutoHotmart.factory = function (data) {
        return new ProdutoHotmart(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    ProdutoHotmart.getModelDefinition = function () {
        return {
            name: 'ProdutoHotmart',
            plural: 'ProdutoHotmarts',
            path: 'ProdutoHotmarts',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return ProdutoHotmart;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/ProdutoPlataforma.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/sdk/models/ProdutoPlataforma.ts ***!
  \********************************************************/
/*! exports provided: ProdutoPlataforma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoPlataforma", function() { return ProdutoPlataforma; });
/* tslint:disable */
var ProdutoPlataforma = /** @class */ (function () {
    function ProdutoPlataforma(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `ProdutoPlataforma`.
     */
    ProdutoPlataforma.getModelName = function () {
        return "ProdutoPlataforma";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of ProdutoPlataforma for dynamic purposes.
    **/
    ProdutoPlataforma.factory = function (data) {
        return new ProdutoPlataforma(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    ProdutoPlataforma.getModelDefinition = function () {
        return {
            name: 'ProdutoPlataforma',
            plural: 'ProdutoPlataformas',
            path: 'ProdutoPlataformas',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return ProdutoPlataforma;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/TokenAcesso.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/sdk/models/TokenAcesso.ts ***!
  \**************************************************/
/*! exports provided: TokenAcesso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenAcesso", function() { return TokenAcesso; });
/* tslint:disable */
var TokenAcesso = /** @class */ (function () {
    function TokenAcesso(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `TokenAcesso`.
     */
    TokenAcesso.getModelName = function () {
        return "TokenAcesso";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of TokenAcesso for dynamic purposes.
    **/
    TokenAcesso.factory = function (data) {
        return new TokenAcesso(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    TokenAcesso.getModelDefinition = function () {
        return {
            name: 'TokenAcesso',
            plural: 'TokenAcessos',
            path: 'TokenAcessos',
            idName: 'nome',
            properties: {
                "nome": {
                    name: 'nome',
                    type: 'string'
                },
                "token": {
                    name: 'token',
                    type: 'string'
                },
                "dataAtualizacao": {
                    name: 'dataAtualizacao',
                    type: 'Date'
                },
            },
            relations: {}
        };
    };
    return TokenAcesso;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/User.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/sdk/models/User.ts ***!
  \*******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* tslint:disable */
var User = /** @class */ (function () {
    function User(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    User.getModelName = function () {
        return "User";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of User for dynamic purposes.
    **/
    User.factory = function (data) {
        return new User(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    User.getModelDefinition = function () {
        return {
            name: 'User',
            plural: 'Users',
            path: 'Users',
            idName: 'id',
            properties: {
                "realm": {
                    name: 'realm',
                    type: 'string'
                },
                "username": {
                    name: 'username',
                    type: 'string'
                },
                "email": {
                    name: 'email',
                    type: 'string'
                },
                "emailVerified": {
                    name: 'emailVerified',
                    type: 'boolean'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "password": {
                    name: 'password',
                    type: 'string'
                },
            },
            relations: {
                accessTokens: {
                    name: 'accessTokens',
                    type: 'any[]',
                    model: '',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'userId'
                },
            }
        };
    };
    return User;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/VisitaProdutoHotmart.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/sdk/models/VisitaProdutoHotmart.ts ***!
  \***********************************************************/
/*! exports provided: VisitaProdutoHotmart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitaProdutoHotmart", function() { return VisitaProdutoHotmart; });
var VisitaProdutoHotmart = /** @class */ (function () {
    function VisitaProdutoHotmart(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `VisitaProdutoHotmart`.
     */
    VisitaProdutoHotmart.getModelName = function () {
        return "VisitaProdutoHotmart";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of VisitaProdutoHotmart for dynamic purposes.
    **/
    VisitaProdutoHotmart.factory = function (data) {
        return new VisitaProdutoHotmart(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    VisitaProdutoHotmart.getModelDefinition = function () {
        return {
            name: 'VisitaProdutoHotmart',
            plural: 'VisitaProdutoHotmarts',
            path: 'VisitaProdutoHotmarts',
            idName: 'hotmartId',
            properties: {
                "nome": {
                    name: 'nome',
                    type: 'string'
                },
                "imagem": {
                    name: 'imagem',
                    type: 'string'
                },
                "temperatura": {
                    name: 'temperatura',
                    type: 'number'
                },
                "categoria": {
                    name: 'categoria',
                    type: 'string'
                },
                "formato": {
                    name: 'formato',
                    type: 'string'
                },
                "reviewRating": {
                    name: 'reviewRating',
                    type: 'number'
                },
                "totalAnswers": {
                    name: 'totalAnswers',
                    type: 'number'
                },
                "afiliacaoTipo": {
                    name: 'afiliacaoTipo',
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
                "produtorNome": {
                    name: 'produtorNome',
                    type: 'string'
                },
                "produtorCodigoHotmart": {
                    name: 'produtorCodigoHotmart',
                    type: 'string'
                },
                "dataInsercao": {
                    name: 'dataInsercao',
                    type: 'Date'
                },
                "blueprint": {
                    name: 'blueprint',
                    type: 'number'
                },
                "produtoCodigoU": {
                    name: 'produtoCodigoU',
                    type: 'string'
                },
                "maisRecente": {
                    name: 'maisRecente',
                    type: 'number'
                },
                "hotmartId": {
                    name: 'hotmartId',
                    type: 'number'
                },
                "possuiPalavraChave": {
                    name: 'possuiPalavraChave',
                    type: 'number'
                },
            },
            relations: {
                ideiaPalavraChave: {
                    name: 'ideiaPalavraChave',
                    type: 'IdeiaPalavraChave',
                    model: 'IdeiaPalavraChave',
                    relationType: 'belongsTo',
                    keyFrom: 'hotmartId',
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
                produtoAfiliadoMetricas: {
                    name: 'produtoAfiliadoMetricas',
                    type: 'ProdutoAfiliadoMetrica[]',
                    model: 'ProdutoAfiliadoMetrica',
                    relationType: 'hasMany',
                    keyFrom: 'hotmartId',
                    keyTo: 'hotmartId'
                },
            }
        };
    };
    return VisitaProdutoHotmart;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/VisitaProdutoPlataforma.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/sdk/models/VisitaProdutoPlataforma.ts ***!
  \**************************************************************/
/*! exports provided: VisitaProdutoPlataforma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitaProdutoPlataforma", function() { return VisitaProdutoPlataforma; });
/* tslint:disable */
var VisitaProdutoPlataforma = /** @class */ (function () {
    function VisitaProdutoPlataforma(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `VisitaProdutoPlataforma`.
     */
    VisitaProdutoPlataforma.getModelName = function () {
        return "VisitaProdutoPlataforma";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of VisitaProdutoPlataforma for dynamic purposes.
    **/
    VisitaProdutoPlataforma.factory = function (data) {
        return new VisitaProdutoPlataforma(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    VisitaProdutoPlataforma.getModelDefinition = function () {
        return {
            name: 'VisitaProdutoPlataforma',
            plural: 'VisitaProdutoPlataformas',
            path: 'VisitaProdutoPlataformas',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return VisitaProdutoPlataforma;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/sdk/models/index.ts ***!
  \********************************************/
/*! exports provided: User, PlataformaVenda, ProdutoPlataforma, VisitaProdutoPlataforma, ProdutoHotmart, VisitaProdutoHotmart, TokenAcesso, IdeiaPalavraChave, CampanhaAds, AnuncioCampanhaAds, PalavraCampanhaAds, ProdutoAfiliadoHotmart, AgendaVisitaHotmart, CampanhaAdsTeste, AnuncioAds, ModeloCampanhaAdsTeste, PixelGoogle, PalavraChaveCampanhaAdsTeste, AnuncioCampanhaAdsTeste, FacebookConta, ProdutoAfiliadoMetrica, ContaGoogle, CampanhaAdsMetrica, AccessToken, SDKToken, FireLoopRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/app/shared/sdk/models/User.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _PlataformaVenda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlataformaVenda */ "./src/app/shared/sdk/models/PlataformaVenda.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlataformaVenda", function() { return _PlataformaVenda__WEBPACK_IMPORTED_MODULE_1__["PlataformaVenda"]; });

/* harmony import */ var _ProdutoPlataforma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProdutoPlataforma */ "./src/app/shared/sdk/models/ProdutoPlataforma.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoPlataforma", function() { return _ProdutoPlataforma__WEBPACK_IMPORTED_MODULE_2__["ProdutoPlataforma"]; });

/* harmony import */ var _VisitaProdutoPlataforma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VisitaProdutoPlataforma */ "./src/app/shared/sdk/models/VisitaProdutoPlataforma.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisitaProdutoPlataforma", function() { return _VisitaProdutoPlataforma__WEBPACK_IMPORTED_MODULE_3__["VisitaProdutoPlataforma"]; });

/* harmony import */ var _ProdutoHotmart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProdutoHotmart */ "./src/app/shared/sdk/models/ProdutoHotmart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoHotmart", function() { return _ProdutoHotmart__WEBPACK_IMPORTED_MODULE_4__["ProdutoHotmart"]; });

/* harmony import */ var _VisitaProdutoHotmart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VisitaProdutoHotmart */ "./src/app/shared/sdk/models/VisitaProdutoHotmart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisitaProdutoHotmart", function() { return _VisitaProdutoHotmart__WEBPACK_IMPORTED_MODULE_5__["VisitaProdutoHotmart"]; });

/* harmony import */ var _TokenAcesso__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TokenAcesso */ "./src/app/shared/sdk/models/TokenAcesso.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenAcesso", function() { return _TokenAcesso__WEBPACK_IMPORTED_MODULE_6__["TokenAcesso"]; });

/* harmony import */ var _IdeiaPalavraChave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IdeiaPalavraChave */ "./src/app/shared/sdk/models/IdeiaPalavraChave.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeiaPalavraChave", function() { return _IdeiaPalavraChave__WEBPACK_IMPORTED_MODULE_7__["IdeiaPalavraChave"]; });

/* harmony import */ var _CampanhaAds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CampanhaAds */ "./src/app/shared/sdk/models/CampanhaAds.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CampanhaAds", function() { return _CampanhaAds__WEBPACK_IMPORTED_MODULE_8__["CampanhaAds"]; });

/* harmony import */ var _AnuncioCampanhaAds__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AnuncioCampanhaAds */ "./src/app/shared/sdk/models/AnuncioCampanhaAds.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnuncioCampanhaAds", function() { return _AnuncioCampanhaAds__WEBPACK_IMPORTED_MODULE_9__["AnuncioCampanhaAds"]; });

/* harmony import */ var _PalavraCampanhaAds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PalavraCampanhaAds */ "./src/app/shared/sdk/models/PalavraCampanhaAds.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PalavraCampanhaAds", function() { return _PalavraCampanhaAds__WEBPACK_IMPORTED_MODULE_10__["PalavraCampanhaAds"]; });

/* harmony import */ var _ProdutoAfiliadoHotmart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProdutoAfiliadoHotmart */ "./src/app/shared/sdk/models/ProdutoAfiliadoHotmart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoHotmart", function() { return _ProdutoAfiliadoHotmart__WEBPACK_IMPORTED_MODULE_11__["ProdutoAfiliadoHotmart"]; });

/* harmony import */ var _AgendaVisitaHotmart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AgendaVisitaHotmart */ "./src/app/shared/sdk/models/AgendaVisitaHotmart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgendaVisitaHotmart", function() { return _AgendaVisitaHotmart__WEBPACK_IMPORTED_MODULE_12__["AgendaVisitaHotmart"]; });

/* harmony import */ var _CampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CampanhaAdsTeste */ "./src/app/shared/sdk/models/CampanhaAdsTeste.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsTeste", function() { return _CampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_13__["CampanhaAdsTeste"]; });

/* harmony import */ var _AnuncioAds__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AnuncioAds */ "./src/app/shared/sdk/models/AnuncioAds.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnuncioAds", function() { return _AnuncioAds__WEBPACK_IMPORTED_MODULE_14__["AnuncioAds"]; });

/* harmony import */ var _ModeloCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ModeloCampanhaAdsTeste */ "./src/app/shared/sdk/models/ModeloCampanhaAdsTeste.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModeloCampanhaAdsTeste", function() { return _ModeloCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_15__["ModeloCampanhaAdsTeste"]; });

/* harmony import */ var _PixelGoogle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PixelGoogle */ "./src/app/shared/sdk/models/PixelGoogle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PixelGoogle", function() { return _PixelGoogle__WEBPACK_IMPORTED_MODULE_16__["PixelGoogle"]; });

/* harmony import */ var _PalavraChaveCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PalavraChaveCampanhaAdsTeste */ "./src/app/shared/sdk/models/PalavraChaveCampanhaAdsTeste.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PalavraChaveCampanhaAdsTeste", function() { return _PalavraChaveCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_17__["PalavraChaveCampanhaAdsTeste"]; });

/* harmony import */ var _AnuncioCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AnuncioCampanhaAdsTeste */ "./src/app/shared/sdk/models/AnuncioCampanhaAdsTeste.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnuncioCampanhaAdsTeste", function() { return _AnuncioCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_18__["AnuncioCampanhaAdsTeste"]; });

/* harmony import */ var _FacebookConta__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./FacebookConta */ "./src/app/shared/sdk/models/FacebookConta.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookConta", function() { return _FacebookConta__WEBPACK_IMPORTED_MODULE_19__["FacebookConta"]; });

/* harmony import */ var _ProdutoAfiliadoMetrica__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ProdutoAfiliadoMetrica */ "./src/app/shared/sdk/models/ProdutoAfiliadoMetrica.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoMetrica", function() { return _ProdutoAfiliadoMetrica__WEBPACK_IMPORTED_MODULE_20__["ProdutoAfiliadoMetrica"]; });

/* harmony import */ var _ContaGoogle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ContaGoogle */ "./src/app/shared/sdk/models/ContaGoogle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContaGoogle", function() { return _ContaGoogle__WEBPACK_IMPORTED_MODULE_21__["ContaGoogle"]; });

/* harmony import */ var _CampanhaAdsMetrica__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./CampanhaAdsMetrica */ "./src/app/shared/sdk/models/CampanhaAdsMetrica.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsMetrica", function() { return _CampanhaAdsMetrica__WEBPACK_IMPORTED_MODULE_22__["CampanhaAdsMetrica"]; });

/* harmony import */ var _BaseModels__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./BaseModels */ "./src/app/shared/sdk/models/BaseModels.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return _BaseModels__WEBPACK_IMPORTED_MODULE_23__["AccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKToken", function() { return _BaseModels__WEBPACK_IMPORTED_MODULE_23__["SDKToken"]; });

/* harmony import */ var _FireLoopRef__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./FireLoopRef */ "./src/app/shared/sdk/models/FireLoopRef.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireLoopRef", function() { return _FireLoopRef__WEBPACK_IMPORTED_MODULE_24__["FireLoopRef"]; });

/* tslint:disable */



























/***/ }),

/***/ "./src/app/shared/sdk/services/core/auth.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/sdk/services/core/auth.service.ts ***!
  \**********************************************************/
/*! exports provided: LoopBackAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return LoopBackAuth; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../storage/storage.swaps */ "./src/app/shared/sdk/storage/storage.swaps.ts");
/* harmony import */ var _models_BaseModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/BaseModels */ "./src/app/shared/sdk/models/BaseModels.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var LoopBackAuth = /** @class */ (function () {
    /**
     * @method constructor
     * @param {InternalStorage} storage Internal Storage Driver
     * @description
     * The constructor will initialize the token loading data from storage
     **/
    function LoopBackAuth(storage) {
        this.storage = storage;
        /**
         * @type {SDKToken}
         **/
        this.token = new _models_BaseModels__WEBPACK_IMPORTED_MODULE_2__["SDKToken"]();
        /**
         * @type {string}
         **/
        this.prefix = '$LoopBackSDK$';
        this.token.id = this.load('id');
        this.token.user = this.load('user');
        this.token.userId = this.load('userId');
        this.token.created = this.load('created');
        this.token.ttl = this.load('ttl');
        this.token.rememberMe = this.load('rememberMe');
    }
    /**
     * @method setRememberMe
     * @param {boolean} value Flag to remember credentials
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setRememberMe = function (value) {
        this.token.rememberMe = value;
    };
    /**
     * @method setUser
     * @param {any} user Any type of user model
     * @return {void}
     * @description
     * This method will update the user information and persist it if the
     * rememberMe flag is set.
     **/
    LoopBackAuth.prototype.setUser = function (user) {
        this.token.user = user;
        this.save();
    };
    /**
     * @method setToken
     * @param {SDKToken} token SDKToken or casted AccessToken instance
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setToken = function (token) {
        this.token = Object.assign({}, this.token, token);
        this.save();
    };
    /**
     * @method getToken
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials.
     **/
    LoopBackAuth.prototype.getToken = function () {
        return this.token;
    };
    /**
     * @method getAccessTokenId
     * @return {string}
     * @description
     * This method will return the actual token string, not the object instance.
     **/
    LoopBackAuth.prototype.getAccessTokenId = function () {
        return this.token.id;
    };
    /**
     * @method getCurrentUserId
     * @return {any}
     * @description
     * This method will return the current user id, it can be number or string.
     **/
    LoopBackAuth.prototype.getCurrentUserId = function () {
        return this.token.userId;
    };
    /**
     * @method getCurrentUserData
     * @return {any}
     * @description
     * This method will return the current user instance.
     **/
    LoopBackAuth.prototype.getCurrentUserData = function () {
        return (typeof this.token.user === 'string') ? JSON.parse(this.token.user) : this.token.user;
    };
    /**
     * @method save
     * @return {boolean} Whether or not the information was saved
     * @description
     * This method will save in either local storage or cookies the current credentials.
     * But only if rememberMe is enabled.
     **/
    LoopBackAuth.prototype.save = function () {
        var today = new Date();
        var expires = new Date(today.getTime() + (this.token.ttl * 1000));
        this.persist('id', this.token.id, expires);
        this.persist('user', this.token.user, expires);
        this.persist('userId', this.token.userId, expires);
        this.persist('created', this.token.created, expires);
        this.persist('ttl', this.token.ttl, expires);
        this.persist('rememberMe', this.token.rememberMe, expires);
        return true;
    };
    ;
    /**
     * @method load
     * @param {string} prop Property name
     * @return {any} Any information persisted in storage
     * @description
     * This method will load either from local storage or cookies the provided property.
     **/
    LoopBackAuth.prototype.load = function (prop) {
        return this.storage.get("" + this.prefix + prop);
    };
    /**
     * @method clear
     * @return {void}
     * @description
     * This method will clear cookies or the local storage.
     **/
    LoopBackAuth.prototype.clear = function () {
        var _this = this;
        Object.keys(this.token).forEach(function (prop) { return _this.storage.remove("" + _this.prefix + prop); });
        this.token = new _models_BaseModels__WEBPACK_IMPORTED_MODULE_2__["SDKToken"]();
    };
    /**
     * @method persist
     * @return {void}
     * @description
     * This method saves values to storage
     **/
    LoopBackAuth.prototype.persist = function (prop, value, expires) {
        try {
            this.storage.set("" + this.prefix + prop, (typeof value === 'object') ? JSON.stringify(value) : value, this.token.rememberMe ? expires : null);
        }
        catch (err) {
            console.error('Cannot access local/session storage:', err);
        }
    };
    LoopBackAuth = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_storage_storage_swaps__WEBPACK_IMPORTED_MODULE_1__["InternalStorage"])),
        __metadata("design:paramtypes", [_storage_storage_swaps__WEBPACK_IMPORTED_MODULE_1__["InternalStorage"]])
    ], LoopBackAuth);
    return LoopBackAuth;
}());



/***/ }),

/***/ "./src/app/shared/sdk/services/core/base.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/sdk/services/core/base.service.ts ***!
  \**********************************************************/
/*! exports provided: BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return BaseLoopBackApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _custom_SDKModels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom/SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









var CustomQueryEncoderHelper = /** @class */ (function () {
    function CustomQueryEncoderHelper() {
    }
    CustomQueryEncoderHelper.prototype.encodeKey = function (k) {
        return encodeURIComponent(k);
    };
    CustomQueryEncoderHelper.prototype.encodeValue = function (v) {
        return encodeURIComponent(v);
    };
    CustomQueryEncoderHelper.prototype.decodeKey = function (k) {
        return decodeURIComponent(k);
    };
    CustomQueryEncoderHelper.prototype.decodeValue = function (v) {
        return decodeURIComponent(v);
    };
    return CustomQueryEncoderHelper;
}());
/**
* @module BaseLoopBackApi
* @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @license MIT
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
var BaseLoopBackApi = /** @class */ (function () {
    function BaseLoopBackApi(http, connection, models, auth, errorHandler) {
        this.http = http;
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.errorHandler = errorHandler;
        this.model = this.models.get(this.getModelName());
    }
    /**
     * @method request
     * @param {string}  method      Request method (GET, POST, PUT)
     * @param {string}  url         Request url (my-host/my-url/:id)
     * @param {any}     routeParams Values of url parameters
     * @param {any}     urlParams   Parameters for building url (filter and other)
     * @param {any}     postBody    Request postBody
     * @return {Observable<any>}
     * @description
     * This is a core method, every HTTP Call will be done from here, every API Service will
     * extend this class and use this method to get RESTful communication.
     **/
    BaseLoopBackApi.prototype.request = function (method, url, routeParams, urlParams, postBody, pubsub, customHeaders) {
        var _this = this;
        if (routeParams === void 0) { routeParams = {}; }
        if (urlParams === void 0) { urlParams = {}; }
        if (postBody === void 0) { postBody = {}; }
        if (pubsub === void 0) { pubsub = false; }
        // Transpile route variables to the actual request Values
        Object.keys(routeParams).forEach(function (key) {
            url = url.replace(new RegExp(":" + key + "(\/|$)", "g"), routeParams[key] + "$1");
        });
        if (pubsub) {
            if (url.match(/fk/)) {
                var arr = url.split('/');
                arr.pop();
                url = arr.join('/');
            }
            var event_1 = ("[" + method + "]" + url).replace(/\?/, '');
            var subject_1 = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
            this.connection.on(event_1, function (res) { return subject_1.next(res); });
            return subject_1.asObservable();
        }
        else {
            var httpParams_1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new CustomQueryEncoderHelper() });
            // Headers to be sent
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json');
            // Authenticate request
            headers = this.authenticate(url, headers);
            // Body fix for built in remote methods using "data", "options" or "credentials
            // that are the actual body, Custom remote method properties are different and need
            // to be wrapped into a body object
            var body = void 0;
            var postBodyKeys = typeof postBody === 'object' ? Object.keys(postBody) : [];
            if (postBodyKeys.length === 1) {
                body = postBody[postBodyKeys.shift()];
            }
            else {
                body = postBody;
            }
            var queryString = '';
            // Separate filter object from url params and add to search query
            if (urlParams.filter) {
                if (_lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].isHeadersFilteringSet()) {
                    headers = headers.append('filter', JSON.stringify(urlParams.filter));
                }
                else {
                    queryString = "?filter=" + encodeURIComponent(JSON.stringify(urlParams.filter));
                }
                delete urlParams.filter;
            }
            // Separate where object from url params and add to search query
            if (urlParams.where) {
                if (_lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].isHeadersWhereSet()) {
                    /**
                    CODE BELOW WILL GENERATE THE FOLLOWING ISSUES:
                    - https://github.com/mean-expert-official/loopback-sdk-builder/issues/356
                    - https://github.com/mean-expert-official/loopback-sdk-builder/issues/328
                    **/
                    headers = headers.append('where', JSON.stringify(urlParams.where));
                }
                else {
                    queryString = "?where=" + encodeURIComponent(JSON.stringify(urlParams.where));
                }
                delete urlParams.where;
            }
            if (typeof customHeaders === 'function') {
                headers = customHeaders(headers);
            }
            /* enhancement/configure-where-headers
                  this.searchParams.setJSON(urlParams);
                  let request: Request = new Request(
                    new RequestOptions({
                      headers        : headers,
                      method         : method,
                      url            : `${url}${queryString}`,
                      search         : Object.keys(urlParams).length > 0 ? this.searchParams.getURLSearchParams() : null,
                      body           : body ? JSON.stringify(body) : undefined,
                      withCredentials: LoopBackConfig.getRequestOptionsCredentials()
                    })
                  );
            TODO Fix Merge Conflict */
            Object.keys(urlParams).forEach(function (paramKey) {
                var paramValue = urlParams[paramKey];
                paramValue = typeof paramValue === 'object' ? JSON.stringify(paramValue) : paramValue;
                httpParams_1 = httpParams_1.append(paramKey, paramValue);
            });
            var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"](method, "" + url + queryString, body, {
                headers: headers,
                params: httpParams_1,
                withCredentials: _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getRequestOptionsCredentials()
            });
            return this.http.request(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) { return event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) { return res.body; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) { return _this.errorHandler.handleError(e); }));
        }
    };
    /**
     * @method authenticate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {string} url Server URL
     * @param {Headers} headers HTTP Headers
     * @return {void}
     * @description
     * This method will try to authenticate using either an access_token or basic http auth
     */
    BaseLoopBackApi.prototype.authenticate = function (url, headers) {
        if (this.auth.getAccessTokenId()) {
            headers = headers.append('Authorization', _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getAuthPrefix() + this.auth.getAccessTokenId());
        }
        return headers;
    };
    /**
     * @method create
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic create method
     */
    BaseLoopBackApi.prototype.create = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub oncreate many method
     */
    BaseLoopBackApi.prototype.onCreate = function (data) {
        var _this = this;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method createMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.createMany = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method onCreateMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.onCreateMany = function (data) {
        var _this = this;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method findById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {any} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic findById method
     */
    BaseLoopBackApi.prototype.findById = function (id, filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        var _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, _urlParams, undefined, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method find
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[+>}
     * @description
     * Generic find method
     */
    BaseLoopBackApi.prototype.find = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method exists
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic exists method
     */
    BaseLoopBackApi.prototype.exists = function (id, customHeaders) {
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id/exists'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders);
    };
    /**
     * @method findOne
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic findOne method
     */
    BaseLoopBackApi.prototype.findOne = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'findOne'
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method updateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic updateAll method
     */
    BaseLoopBackApi.prototype.updateAll = function (where, data, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders);
    };
    /**
     * @method onUpdateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub onUpdateAll method
     */
    BaseLoopBackApi.prototype.onUpdateAll = function (where, data) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, true);
    };
    /**
     * @method deleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic deleteById method
     */
    BaseLoopBackApi.prototype.deleteById = function (id, customHeaders) {
        var _this = this;
        return this.request('DELETE', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onDeleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onDeleteById method
     */
    BaseLoopBackApi.prototype.onDeleteById = function (id) {
        var _this = this;
        return this.request('DELETE', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method count
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<{ count: number }>}
     * @description
     * Generic count method
     */
    BaseLoopBackApi.prototype.count = function (where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'count'
        ].join('/'), undefined, _urlParams, undefined, null, customHeaders);
    };
    /**
     * @method updateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic updateAttributes method
     */
    BaseLoopBackApi.prototype.updateAttributes = function (id, data, customHeaders) {
        var _this = this;
        return this.request('PUT', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpdateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onUpdateAttributes method
     */
    BaseLoopBackApi.prototype.onUpdateAttributes = function (id, data) {
        var _this = this;
        return this.request('PUT', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method
     */
    BaseLoopBackApi.prototype.upsert = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsert method
     */
    BaseLoopBackApi.prototype.onUpsert = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method using patch http method
     */
    BaseLoopBackApi.prototype.upsertPatch = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertPatch method using patch http method
     */
    BaseLoopBackApi.prototype.onUpsertPatch = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsertWithWhere method
     */
    BaseLoopBackApi.prototype.upsertWithWhere = function (where, data, customHeaders) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertWithWhere method
     */
    BaseLoopBackApi.prototype.onUpsertWithWhere = function (where, data) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method replaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceOrCreate method
     */
    BaseLoopBackApi.prototype.replaceOrCreate = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onReplaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceOrCreate method
     */
    BaseLoopBackApi.prototype.onReplaceOrCreate = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method replaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceById method
     */
    BaseLoopBackApi.prototype.replaceById = function (id, data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onReplaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceById method
     */
    BaseLoopBackApi.prototype.onReplaceById = function (id, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method createChangeStream
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<any>}
     * @description
     * Generic createChangeStream method
     */
    BaseLoopBackApi.prototype.createChangeStream = function () {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        if (typeof EventSource !== 'undefined') {
            var emit = function (msg) { return subject.next(JSON.parse(msg.data)); };
            var source = new EventSource([
                _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
                _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
                this.model.getModelDefinition().path,
                'change-stream'
            ].join('/'));
            source.addEventListener('data', emit);
            source.onerror = emit;
        }
        else {
            console.warn('SDK Builder: EventSource is not supported');
        }
        return subject.asObservable();
    };
    BaseLoopBackApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_8__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_custom_SDKModels__WEBPACK_IMPORTED_MODULE_5__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_auth_service__WEBPACK_IMPORTED_MODULE_3__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_8__["SocketConnection"],
            _custom_SDKModels__WEBPACK_IMPORTED_MODULE_5__["SDKModels"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["LoopBackAuth"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"]])
    ], BaseLoopBackApi);
    return BaseLoopBackApi;
}());



/***/ }),

/***/ "./src/app/shared/sdk/services/core/error.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/sdk/services/core/error.service.ts ***!
  \***********************************************************/
/*! exports provided: ErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


/**
 * Default error handler
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.handleError = function (errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorResponse.error.error || 'Server error');
    };
    ErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorHandler);
    return ErrorHandler;
}());



/***/ }),

/***/ "./src/app/shared/sdk/services/core/index.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/sdk/services/core/index.ts ***!
  \***************************************************/
/*! exports provided: ErrorHandler, LoopBackAuth, BaseLoopBackApi, RealTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["LoopBackAuth"]; });

/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]; });

/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseLoopBackApi"]; });

/* harmony import */ var _real_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./real.time */ "./src/app/shared/sdk/services/core/real.time.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealTime", function() { return _real_time__WEBPACK_IMPORTED_MODULE_3__["RealTime"]; });

/* tslint:disable */






/***/ }),

/***/ "./src/app/shared/sdk/services/core/io.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/sdk/services/core/io.service.ts ***!
  \********************************************************/
/*! exports provided: IO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IO", function() { return IO; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* tslint:disable */

var IO = /** @class */ (function () {
    function IO(socket) {
        this.observables = {};
        this.socket = socket;
    }
    IO.prototype.emit = function (event, data) {
        this.socket.emit('ME:RT:1://event', {
            event: event,
            data: data
        });
    };
    IO.prototype.on = function (event) {
        if (this.observables[event]) {
            return this.observables[event];
        }
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.socket.on(event, function (res) { return subject.next(res); });
        this.observables[event] = subject.asObservable();
        return this.observables[event];
    };
    return IO;
}());



/***/ }),

/***/ "./src/app/shared/sdk/services/core/real.time.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/sdk/services/core/real.time.ts ***!
  \*******************************************************/
/*! exports provided: RealTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealTime", function() { return RealTime; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _io_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./io.service */ "./src/app/shared/sdk/services/core/io.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _models_FireLoop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/FireLoop */ "./src/app/shared/sdk/models/FireLoop.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
/* harmony import */ var _custom_SDKModels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom/SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module RealTime
* @license MIT
* @description
* This module is a real-time interface for using socket connections, its main purpose
* is to make sure that when there is a valid connection, it will create instances
* of the different real-time functionalities like FireLoop, PubSub and IO.
**/
var RealTime = /** @class */ (function () {
    /**
    * @method constructor
    * @param {SocketConnection} connection WebSocket connection service
    * @param {SDKModels} models Model provider service
    * @param {LoopBackAuth} auth LoopBack authentication service
    * @description
    * It will intialize the shared on ready communication channel.
    **/
    function RealTime(connection, models, auth) {
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.connecting = false;
        this.onReadySubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.sharedOnReady = this.onReadySubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["share"])());
        this.sharedOnReady.subscribe();
    }
    /**
    * @method onDisconnect
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is disconnected from server.
    **/
    RealTime.prototype.onDisconnect = function () {
        return this.connection.sharedObservables.sharedOnDisconnect;
    };
    /**
    * @method onAuthenticated
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is authenticated with the server.
    **/
    RealTime.prototype.onAuthenticated = function () {
        return this.connection.sharedObservables.sharedOnAuthenticated;
    };
    /**
    * @method onUnAuthorized
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is not authorized to connect with the server.
    **/
    RealTime.prototype.onUnAuthorized = function () {
        return this.connection.sharedObservables.sharedOnUnAuthorized;
    };
    /**
    * @method onReady
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is Ready for broadcasting.
    * and will register connection flow events to notify subscribers.
    **/
    RealTime.prototype.onReady = function () {
        var _this = this;
        // If there is a valid connection, then we just send back to the EventLoop
        // Or next will be executed before the actual subscription.
        if (this.connection.isConnected()) {
            var to_1 = setTimeout(function () {
                _this.onReadySubject.next('shared-connection');
                clearTimeout(to_1);
            });
            // Else if there is a current attempt of connection we wait for the prior
            // process that started the connection flow.
        }
        else if (this.connecting) {
            var ti_1 = setInterval(function () {
                if (_this.connection.isConnected()) {
                    _this.onReadySubject.next('shared-connection');
                    clearInterval(ti_1);
                }
            }, 500);
            // If there is not valid connection or attempt, then we start the connection flow
            // and make sure we notify all the onReady subscribers when done.
            // Also it will listen for desconnections so we unsubscribe and avoid both:
            // Memory leaks and duplicated triggered events.
        }
        else {
            this.connecting = true;
            this.connection.connect(this.auth.getToken());
            this.IO = new _io_service__WEBPACK_IMPORTED_MODULE_1__["IO"](this.connection);
            this.FireLoop = new _models_FireLoop__WEBPACK_IMPORTED_MODULE_3__["FireLoop"](this.connection, this.models);
            // Fire event for those subscribed 
            var s1_1 = this.connection.sharedObservables.sharedOnConnect.subscribe(function () {
                console.log('Real-Time connection has been established');
                _this.connecting = false;
                _this.onReadySubject.next('connected');
                var s2 = _this.connection.sharedObservables.sharedOnDisconnect.subscribe(function () {
                    s1_1.unsubscribe();
                    s2.unsubscribe();
                });
            });
        }
        return this.sharedOnReady;
    };
    RealTime = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_4__["SocketConnection"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_custom_SDKModels__WEBPACK_IMPORTED_MODULE_5__["SDKModels"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_auth_service__WEBPACK_IMPORTED_MODULE_2__["LoopBackAuth"])),
        __metadata("design:paramtypes", [_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_4__["SocketConnection"],
            _custom_SDKModels__WEBPACK_IMPORTED_MODULE_5__["SDKModels"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["LoopBackAuth"]])
    ], RealTime);
    return RealTime;
}());



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/AgendaVisitaHotmart.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/AgendaVisitaHotmart.ts ***!
  \*******************************************************************/
/*! exports provided: AgendaVisitaHotmartApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaVisitaHotmartApi", function() { return AgendaVisitaHotmartApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `AgendaVisitaHotmart` model.
 */
var AgendaVisitaHotmartApi = /** @class */ (function (_super) {
    __extends(AgendaVisitaHotmartApi, _super);
    function AgendaVisitaHotmartApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
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
     * This usually means the response is a `AgendaVisitaHotmart` object.)
     * </em>
     */
    AgendaVisitaHotmartApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AgendaVisitaHotmarts";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id AgendaVisitaHotmart id
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
     * This usually means the response is a `AgendaVisitaHotmart` object.)
     * </em>
     */
    AgendaVisitaHotmartApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AgendaVisitaHotmarts/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `AgendaVisitaHotmart`.
     */
    AgendaVisitaHotmartApi.prototype.getModelName = function () {
        return "AgendaVisitaHotmart";
    };
    AgendaVisitaHotmartApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], AgendaVisitaHotmartApi);
    return AgendaVisitaHotmartApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/AnuncioAds.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/AnuncioAds.ts ***!
  \**********************************************************/
/*! exports provided: AnuncioAdsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioAdsApi", function() { return AnuncioAdsApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `AnuncioAds` model.
 */
var AnuncioAdsApi = /** @class */ (function (_super) {
    __extends(AnuncioAdsApi, _super);
    function AnuncioAdsApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Busca relação produtoAfiliadoHotmart de belongsTo.
     *
     * @param {any} id AnuncioAds id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `AnuncioAds` object.)
     * </em>
     */
    AnuncioAdsApi.prototype.getProdutoAfiliadoHotmart = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/produtoAfiliadoHotmart";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Localize um item relacionado por ID para anuncioCampanhaAds.
     *
     * @param {any} id AnuncioAds id
     *
     * @param {any} fk Chave estrangeira para anuncioCampanhaAds
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `AnuncioAds` object.)
     * </em>
     */
    AnuncioAdsApi.prototype.findByIdAnuncioCampanhaAds = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/anuncioCampanhaAds/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para anuncioCampanhaAds.
     *
     * @param {any} id AnuncioAds id
     *
     * @param {any} fk Chave estrangeira para anuncioCampanhaAds
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    AnuncioAdsApi.prototype.destroyByIdAnuncioCampanhaAds = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/anuncioCampanhaAds/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para anuncioCampanhaAds.
     *
     * @param {any} id AnuncioAds id
     *
     * @param {any} fk Chave estrangeira para anuncioCampanhaAds
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
     * This usually means the response is a `AnuncioAds` object.)
     * </em>
     */
    AnuncioAdsApi.prototype.updateByIdAnuncioCampanhaAds = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/anuncioCampanhaAds/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Localize um item relacionado por ID para anuncioCampanhaAdsTestes.
     *
     * @param {any} id AnuncioAds id
     *
     * @param {any} fk Chave estrangeira para anuncioCampanhaAdsTestes
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `AnuncioAds` object.)
     * </em>
     */
    AnuncioAdsApi.prototype.findByIdAnuncioCampanhaAdsTestes = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/anuncioCampanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para anuncioCampanhaAdsTestes.
     *
     * @param {any} id AnuncioAds id
     *
     * @param {any} fk Chave estrangeira para anuncioCampanhaAdsTestes
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    AnuncioAdsApi.prototype.destroyByIdAnuncioCampanhaAdsTestes = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/anuncioCampanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para anuncioCampanhaAdsTestes.
     *
     * @param {any} id AnuncioAds id
     *
     * @param {any} fk Chave estrangeira para anuncioCampanhaAdsTestes
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
     * This usually means the response is a `AnuncioAds` object.)
     * </em>
     */
    AnuncioAdsApi.prototype.updateByIdAnuncioCampanhaAdsTestes = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/anuncioCampanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * anuncioCampanhaAds consultas de AnuncioAds.
     *
     * @param {any} id AnuncioAds id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `AnuncioAds` object.)
     * </em>
     */
    AnuncioAdsApi.prototype.getAnuncioCampanhaAds = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/anuncioCampanhaAds";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no anuncioCampanhaAds deste modelo.
     *
     * @param {any} id AnuncioAds id
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
     * This usually means the response is a `AnuncioAds` object.)
     * </em>
     */
    AnuncioAdsApi.prototype.createAnuncioCampanhaAds = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/anuncioCampanhaAds";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os anuncioCampanhaAds deste modelo.
     *
     * @param {any} id AnuncioAds id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    AnuncioAdsApi.prototype.deleteAnuncioCampanhaAds = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/anuncioCampanhaAds";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * anuncioCampanhaAds contagens de AnuncioAds.
     *
     * @param {any} id AnuncioAds id
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
    AnuncioAdsApi.prototype.countAnuncioCampanhaAds = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/anuncioCampanhaAds/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * anuncioCampanhaAdsTestes consultas de AnuncioAds.
     *
     * @param {any} id AnuncioAds id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `AnuncioAds` object.)
     * </em>
     */
    AnuncioAdsApi.prototype.getAnuncioCampanhaAdsTestes = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/anuncioCampanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no anuncioCampanhaAdsTestes deste modelo.
     *
     * @param {any} id AnuncioAds id
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
     * This usually means the response is a `AnuncioAds` object.)
     * </em>
     */
    AnuncioAdsApi.prototype.createAnuncioCampanhaAdsTestes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/anuncioCampanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os anuncioCampanhaAdsTestes deste modelo.
     *
     * @param {any} id AnuncioAds id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    AnuncioAdsApi.prototype.deleteAnuncioCampanhaAdsTestes = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/anuncioCampanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * anuncioCampanhaAdsTestes contagens de AnuncioAds.
     *
     * @param {any} id AnuncioAds id
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
    AnuncioAdsApi.prototype.countAnuncioCampanhaAdsTestes = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/anuncioCampanhaAdsTestes/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `AnuncioAds` object.)
     * </em>
     */
    AnuncioAdsApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id AnuncioAds id
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
     * This usually means the response is a `AnuncioAds` object.)
     * </em>
     */
    AnuncioAdsApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no anuncioCampanhaAds deste modelo.
     *
     * @param {any} id AnuncioAds id
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
     * This usually means the response is a `AnuncioAds` object.)
     * </em>
     */
    AnuncioAdsApi.prototype.createManyAnuncioCampanhaAds = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/anuncioCampanhaAds";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no anuncioCampanhaAdsTestes deste modelo.
     *
     * @param {any} id AnuncioAds id
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
     * This usually means the response is a `AnuncioAds` object.)
     * </em>
     */
    AnuncioAdsApi.prototype.createManyAnuncioCampanhaAdsTestes = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioAds/:id/anuncioCampanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `AnuncioAds`.
     */
    AnuncioAdsApi.prototype.getModelName = function () {
        return "AnuncioAds";
    };
    AnuncioAdsApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], AnuncioAdsApi);
    return AnuncioAdsApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/AnuncioCampanhaAds.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/AnuncioCampanhaAds.ts ***!
  \******************************************************************/
/*! exports provided: AnuncioCampanhaAdsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioCampanhaAdsApi", function() { return AnuncioCampanhaAdsApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `AnuncioCampanhaAds` model.
 */
var AnuncioCampanhaAdsApi = /** @class */ (function (_super) {
    __extends(AnuncioCampanhaAdsApi, _super);
    function AnuncioCampanhaAdsApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Busca relação campanhaAds de belongsTo.
     *
     * @param {any} id AnuncioCampanhaAds id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `AnuncioCampanhaAds` object.)
     * </em>
     */
    AnuncioCampanhaAdsApi.prototype.getCampanhaAds = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioCampanhaAds/:id/campanhaAds";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Busca relação anuncioAds de belongsTo.
     *
     * @param {any} id AnuncioCampanhaAds id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `AnuncioCampanhaAds` object.)
     * </em>
     */
    AnuncioCampanhaAdsApi.prototype.getAnuncioAds = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioCampanhaAds/:id/anuncioAds";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `AnuncioCampanhaAds` object.)
     * </em>
     */
    AnuncioCampanhaAdsApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioCampanhaAds";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id AnuncioCampanhaAds id
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
     * This usually means the response is a `AnuncioCampanhaAds` object.)
     * </em>
     */
    AnuncioCampanhaAdsApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioCampanhaAds/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `AnuncioCampanhaAds`.
     */
    AnuncioCampanhaAdsApi.prototype.getModelName = function () {
        return "AnuncioCampanhaAds";
    };
    AnuncioCampanhaAdsApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], AnuncioCampanhaAdsApi);
    return AnuncioCampanhaAdsApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/AnuncioCampanhaAdsTeste.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/AnuncioCampanhaAdsTeste.ts ***!
  \***********************************************************************/
/*! exports provided: AnuncioCampanhaAdsTesteApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioCampanhaAdsTesteApi", function() { return AnuncioCampanhaAdsTesteApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `AnuncioCampanhaAdsTeste` model.
 */
var AnuncioCampanhaAdsTesteApi = /** @class */ (function (_super) {
    __extends(AnuncioCampanhaAdsTesteApi, _super);
    function AnuncioCampanhaAdsTesteApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Busca relação campanhaAdsTeste de belongsTo.
     *
     * @param {any} id AnuncioCampanhaAdsTeste id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `AnuncioCampanhaAdsTeste` object.)
     * </em>
     */
    AnuncioCampanhaAdsTesteApi.prototype.getCampanhaAdsTeste = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioCampanhaAdsTestes/:id/campanhaAdsTeste";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Busca relação anuncioAds de belongsTo.
     *
     * @param {any} id AnuncioCampanhaAdsTeste id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `AnuncioCampanhaAdsTeste` object.)
     * </em>
     */
    AnuncioCampanhaAdsTesteApi.prototype.getAnuncioAds = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioCampanhaAdsTestes/:id/anuncioAds";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `AnuncioCampanhaAdsTeste` object.)
     * </em>
     */
    AnuncioCampanhaAdsTesteApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioCampanhaAdsTestes";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id AnuncioCampanhaAdsTeste id
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
     * This usually means the response is a `AnuncioCampanhaAdsTeste` object.)
     * </em>
     */
    AnuncioCampanhaAdsTesteApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioCampanhaAdsTestes/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     *  - `campanhaAdsTesteId` – `{number}` -
     *
     *  - `listaAnuncio` – `{any}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `AnuncioCampanhaAdsTeste` object.)
     * </em>
     */
    AnuncioCampanhaAdsTesteApi.prototype.AtualizaPorCampanhaAdsTeste = function (campanhaAdsTesteId, listaAnuncio, customHeaders) {
        if (campanhaAdsTesteId === void 0) { campanhaAdsTesteId = {}; }
        if (listaAnuncio === void 0) { listaAnuncio = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/AnuncioCampanhaAdsTestes/atualizaPorCampanhaAdsTeste";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof campanhaAdsTesteId !== 'undefined' && campanhaAdsTesteId !== null)
            _urlParams.campanhaAdsTesteId = campanhaAdsTesteId;
        if (typeof listaAnuncio !== 'undefined' && listaAnuncio !== null)
            _urlParams.listaAnuncio = listaAnuncio;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `AnuncioCampanhaAdsTeste`.
     */
    AnuncioCampanhaAdsTesteApi.prototype.getModelName = function () {
        return "AnuncioCampanhaAdsTeste";
    };
    AnuncioCampanhaAdsTesteApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], AnuncioCampanhaAdsTesteApi);
    return AnuncioCampanhaAdsTesteApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/CampanhaAds.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/CampanhaAds.ts ***!
  \***********************************************************/
/*! exports provided: CampanhaAdsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsApi", function() { return CampanhaAdsApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `CampanhaAds` model.
 */
var CampanhaAdsApi = /** @class */ (function (_super) {
    __extends(CampanhaAdsApi, _super);
    function CampanhaAdsApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Localize um item relacionado por ID para anuncioCampanhaAds.
     *
     * @param {any} id CampanhaAds id
     *
     * @param {any} fk Chave estrangeira para anuncioCampanhaAds
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CampanhaAds` object.)
     * </em>
     */
    CampanhaAdsApi.prototype.findByIdAnuncioCampanhaAds = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAds/:id/anuncioCampanhaAds/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para anuncioCampanhaAds.
     *
     * @param {any} id CampanhaAds id
     *
     * @param {any} fk Chave estrangeira para anuncioCampanhaAds
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    CampanhaAdsApi.prototype.destroyByIdAnuncioCampanhaAds = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAds/:id/anuncioCampanhaAds/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para anuncioCampanhaAds.
     *
     * @param {any} id CampanhaAds id
     *
     * @param {any} fk Chave estrangeira para anuncioCampanhaAds
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
     * This usually means the response is a `CampanhaAds` object.)
     * </em>
     */
    CampanhaAdsApi.prototype.updateByIdAnuncioCampanhaAds = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAds/:id/anuncioCampanhaAds/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * anuncioCampanhaAds consultas de CampanhaAds.
     *
     * @param {any} id CampanhaAds id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CampanhaAds` object.)
     * </em>
     */
    CampanhaAdsApi.prototype.getAnuncioCampanhaAds = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAds/:id/anuncioCampanhaAds";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no anuncioCampanhaAds deste modelo.
     *
     * @param {any} id CampanhaAds id
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
     * This usually means the response is a `CampanhaAds` object.)
     * </em>
     */
    CampanhaAdsApi.prototype.createAnuncioCampanhaAds = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAds/:id/anuncioCampanhaAds";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os anuncioCampanhaAds deste modelo.
     *
     * @param {any} id CampanhaAds id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    CampanhaAdsApi.prototype.deleteAnuncioCampanhaAds = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAds/:id/anuncioCampanhaAds";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * anuncioCampanhaAds contagens de CampanhaAds.
     *
     * @param {any} id CampanhaAds id
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
    CampanhaAdsApi.prototype.countAnuncioCampanhaAds = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAds/:id/anuncioCampanhaAds/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `CampanhaAds` object.)
     * </em>
     */
    CampanhaAdsApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAds";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id CampanhaAds id
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
     * This usually means the response is a `CampanhaAds` object.)
     * </em>
     */
    CampanhaAdsApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAds/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no anuncioCampanhaAds deste modelo.
     *
     * @param {any} id CampanhaAds id
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
     * This usually means the response is a `CampanhaAds` object.)
     * </em>
     */
    CampanhaAdsApi.prototype.createManyAnuncioCampanhaAds = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAds/:id/anuncioCampanhaAds";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `CampanhaAds`.
     */
    CampanhaAdsApi.prototype.getModelName = function () {
        return "CampanhaAds";
    };
    CampanhaAdsApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], CampanhaAdsApi);
    return CampanhaAdsApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/CampanhaAdsMetrica.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/CampanhaAdsMetrica.ts ***!
  \******************************************************************/
/*! exports provided: CampanhaAdsMetricaApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsMetricaApi", function() { return CampanhaAdsMetricaApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `CampanhaAdsMetrica` model.
 */
var CampanhaAdsMetricaApi = /** @class */ (function (_super) {
    __extends(CampanhaAdsMetricaApi, _super);
    function CampanhaAdsMetricaApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Busca relação campanhaAdsTeste de belongsTo.
     *
     * @param {any} id CampanhaAdsMetrica id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CampanhaAdsMetrica` object.)
     * </em>
     */
    CampanhaAdsMetricaApi.prototype.getCampanhaAdsTeste = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsMetricas/:id/campanhaAdsTeste";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `CampanhaAdsMetrica` object.)
     * </em>
     */
    CampanhaAdsMetricaApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsMetricas";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id CampanhaAdsMetrica id
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
     * This usually means the response is a `CampanhaAdsMetrica` object.)
     * </em>
     */
    CampanhaAdsMetricaApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsMetricas/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     *  - `metricaCampanha` – `{object}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CampanhaAdsMetrica` object.)
     * </em>
     */
    CampanhaAdsMetricaApi.prototype.InsereMetrica = function (metricaCampanha, customHeaders) {
        if (metricaCampanha === void 0) { metricaCampanha = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsMetricas/insereMetrica";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof metricaCampanha !== 'undefined' && metricaCampanha !== null)
            _urlParams.metricaCampanha = metricaCampanha;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `CampanhaAdsMetrica`.
     */
    CampanhaAdsMetricaApi.prototype.getModelName = function () {
        return "CampanhaAdsMetrica";
    };
    CampanhaAdsMetricaApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], CampanhaAdsMetricaApi);
    return CampanhaAdsMetricaApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/CampanhaAdsTeste.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/CampanhaAdsTeste.ts ***!
  \****************************************************************/
/*! exports provided: CampanhaAdsTesteApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsTesteApi", function() { return CampanhaAdsTesteApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `CampanhaAdsTeste` model.
 */
var CampanhaAdsTesteApi = /** @class */ (function (_super) {
    __extends(CampanhaAdsTesteApi, _super);
    function CampanhaAdsTesteApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Busca relação produtoAfiliadoHotmart de belongsTo.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.getProdutoAfiliadoHotmart = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/produtoAfiliadoHotmart";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Busca relação modeloCampanhaAdsTeste de belongsTo.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.getModeloCampanhaAdsTeste = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/modeloCampanhaAdsTeste";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Localize um item relacionado por ID para palavraChaveCampanhaAdsTestes.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @param {any} fk Chave estrangeira para palavraChaveCampanhaAdsTestes
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.findByIdPalavraChaveCampanhaAdsTestes = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/palavraChaveCampanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para palavraChaveCampanhaAdsTestes.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @param {any} fk Chave estrangeira para palavraChaveCampanhaAdsTestes
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    CampanhaAdsTesteApi.prototype.destroyByIdPalavraChaveCampanhaAdsTestes = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/palavraChaveCampanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para palavraChaveCampanhaAdsTestes.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @param {any} fk Chave estrangeira para palavraChaveCampanhaAdsTestes
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
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.updateByIdPalavraChaveCampanhaAdsTestes = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/palavraChaveCampanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Localize um item relacionado por ID para anuncioCampanhaAdsTestes.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @param {any} fk Chave estrangeira para anuncioCampanhaAdsTestes
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.findByIdAnuncioCampanhaAdsTestes = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/anuncioCampanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para anuncioCampanhaAdsTestes.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @param {any} fk Chave estrangeira para anuncioCampanhaAdsTestes
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    CampanhaAdsTesteApi.prototype.destroyByIdAnuncioCampanhaAdsTestes = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/anuncioCampanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para anuncioCampanhaAdsTestes.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @param {any} fk Chave estrangeira para anuncioCampanhaAdsTestes
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
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.updateByIdAnuncioCampanhaAdsTestes = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/anuncioCampanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Busca relação contaGoogle de belongsTo.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.getContaGoogle = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/contaGoogle";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Localize um item relacionado por ID para campanhaAdsMetricas.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @param {any} fk Chave estrangeira para campanhaAdsMetricas
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.findByIdCampanhaAdsMetricas = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/campanhaAdsMetricas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para campanhaAdsMetricas.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @param {any} fk Chave estrangeira para campanhaAdsMetricas
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    CampanhaAdsTesteApi.prototype.destroyByIdCampanhaAdsMetricas = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/campanhaAdsMetricas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para campanhaAdsMetricas.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @param {any} fk Chave estrangeira para campanhaAdsMetricas
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
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.updateByIdCampanhaAdsMetricas = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/campanhaAdsMetricas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * palavraChaveCampanhaAdsTestes consultas de CampanhaAdsTeste.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.getPalavraChaveCampanhaAdsTestes = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/palavraChaveCampanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no palavraChaveCampanhaAdsTestes deste modelo.
     *
     * @param {any} id CampanhaAdsTeste id
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
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.createPalavraChaveCampanhaAdsTestes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/palavraChaveCampanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os palavraChaveCampanhaAdsTestes deste modelo.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    CampanhaAdsTesteApi.prototype.deletePalavraChaveCampanhaAdsTestes = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/palavraChaveCampanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * palavraChaveCampanhaAdsTestes contagens de CampanhaAdsTeste.
     *
     * @param {any} id CampanhaAdsTeste id
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
    CampanhaAdsTesteApi.prototype.countPalavraChaveCampanhaAdsTestes = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/palavraChaveCampanhaAdsTestes/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * anuncioCampanhaAdsTestes consultas de CampanhaAdsTeste.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.getAnuncioCampanhaAdsTestes = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/anuncioCampanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no anuncioCampanhaAdsTestes deste modelo.
     *
     * @param {any} id CampanhaAdsTeste id
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
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.createAnuncioCampanhaAdsTestes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/anuncioCampanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os anuncioCampanhaAdsTestes deste modelo.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    CampanhaAdsTesteApi.prototype.deleteAnuncioCampanhaAdsTestes = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/anuncioCampanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * anuncioCampanhaAdsTestes contagens de CampanhaAdsTeste.
     *
     * @param {any} id CampanhaAdsTeste id
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
    CampanhaAdsTesteApi.prototype.countAnuncioCampanhaAdsTestes = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/anuncioCampanhaAdsTestes/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * campanhaAdsMetricas consultas de CampanhaAdsTeste.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.getCampanhaAdsMetricas = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/campanhaAdsMetricas";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no campanhaAdsMetricas deste modelo.
     *
     * @param {any} id CampanhaAdsTeste id
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
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.createCampanhaAdsMetricas = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/campanhaAdsMetricas";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os campanhaAdsMetricas deste modelo.
     *
     * @param {any} id CampanhaAdsTeste id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    CampanhaAdsTesteApi.prototype.deleteCampanhaAdsMetricas = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/campanhaAdsMetricas";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * campanhaAdsMetricas contagens de CampanhaAdsTeste.
     *
     * @param {any} id CampanhaAdsTeste id
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
    CampanhaAdsTesteApi.prototype.countCampanhaAdsMetricas = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/campanhaAdsMetricas/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id CampanhaAdsTeste id
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
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.ObtemListaParaTeste = function (customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/obtemListaParaTeste";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.AtualizaCampanhaCriada = function (campanha, customHeaders) {
        if (campanha === void 0) { campanha = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/atualizaCampanhaCriada";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof campanha !== 'undefined' && campanha !== null)
            _urlParams.campanha = campanha;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.ObtemListaParaConsultarPerformance = function (customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/obtemListaParaConsultarPerformance";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.AtualizaCampanhaPerformance = function (campanha, customHeaders) {
        if (campanha === void 0) { campanha = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/atualizaCampanhaPerformance";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof campanha !== 'undefined' && campanha !== null)
            _urlParams.campanha = campanha;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no palavraChaveCampanhaAdsTestes deste modelo.
     *
     * @param {any} id CampanhaAdsTeste id
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
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.createManyPalavraChaveCampanhaAdsTestes = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/palavraChaveCampanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no anuncioCampanhaAdsTestes deste modelo.
     *
     * @param {any} id CampanhaAdsTeste id
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
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.createManyAnuncioCampanhaAdsTestes = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/anuncioCampanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no campanhaAdsMetricas deste modelo.
     *
     * @param {any} id CampanhaAdsTeste id
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
     * This usually means the response is a `CampanhaAdsTeste` object.)
     * </em>
     */
    CampanhaAdsTesteApi.prototype.createManyCampanhaAdsMetricas = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/CampanhaAdsTestes/:id/campanhaAdsMetricas";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `CampanhaAdsTeste`.
     */
    CampanhaAdsTesteApi.prototype.getModelName = function () {
        return "CampanhaAdsTeste";
    };
    CampanhaAdsTesteApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], CampanhaAdsTesteApi);
    return CampanhaAdsTesteApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/ContaGoogle.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/ContaGoogle.ts ***!
  \***********************************************************/
/*! exports provided: ContaGoogleApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaGoogleApi", function() { return ContaGoogleApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `ContaGoogle` model.
 */
var ContaGoogleApi = /** @class */ (function (_super) {
    __extends(ContaGoogleApi, _super);
    function ContaGoogleApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Localize um item relacionado por ID para campanhaAdsTestes.
     *
     * @param {any} id ContaGoogle id
     *
     * @param {any} fk Chave estrangeira para campanhaAdsTestes
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.findByIdCampanhaAdsTestes = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/campanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para campanhaAdsTestes.
     *
     * @param {any} id ContaGoogle id
     *
     * @param {any} fk Chave estrangeira para campanhaAdsTestes
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ContaGoogleApi.prototype.destroyByIdCampanhaAdsTestes = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/campanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para campanhaAdsTestes.
     *
     * @param {any} id ContaGoogle id
     *
     * @param {any} fk Chave estrangeira para campanhaAdsTestes
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
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.updateByIdCampanhaAdsTestes = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/campanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Localize um item relacionado por ID para pixelGoogles.
     *
     * @param {any} id ContaGoogle id
     *
     * @param {any} fk Chave estrangeira para pixelGoogles
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.findByIdPixelGoogles = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/pixelGoogles/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para pixelGoogles.
     *
     * @param {any} id ContaGoogle id
     *
     * @param {any} fk Chave estrangeira para pixelGoogles
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ContaGoogleApi.prototype.destroyByIdPixelGoogles = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/pixelGoogles/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para pixelGoogles.
     *
     * @param {any} id ContaGoogle id
     *
     * @param {any} fk Chave estrangeira para pixelGoogles
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
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.updateByIdPixelGoogles = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/pixelGoogles/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Localize um item relacionado por ID para produtoAfiliadoHotmarts.
     *
     * @param {any} id ContaGoogle id
     *
     * @param {any} fk Chave estrangeira para produtoAfiliadoHotmarts
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.findByIdProdutoAfiliadoHotmarts = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/produtoAfiliadoHotmarts/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para produtoAfiliadoHotmarts.
     *
     * @param {any} id ContaGoogle id
     *
     * @param {any} fk Chave estrangeira para produtoAfiliadoHotmarts
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ContaGoogleApi.prototype.destroyByIdProdutoAfiliadoHotmarts = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/produtoAfiliadoHotmarts/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para produtoAfiliadoHotmarts.
     *
     * @param {any} id ContaGoogle id
     *
     * @param {any} fk Chave estrangeira para produtoAfiliadoHotmarts
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
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.updateByIdProdutoAfiliadoHotmarts = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/produtoAfiliadoHotmarts/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * campanhaAdsTestes consultas de ContaGoogle.
     *
     * @param {any} id ContaGoogle id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.getCampanhaAdsTestes = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/campanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no campanhaAdsTestes deste modelo.
     *
     * @param {any} id ContaGoogle id
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
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.createCampanhaAdsTestes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/campanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os campanhaAdsTestes deste modelo.
     *
     * @param {any} id ContaGoogle id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ContaGoogleApi.prototype.deleteCampanhaAdsTestes = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/campanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * campanhaAdsTestes contagens de ContaGoogle.
     *
     * @param {any} id ContaGoogle id
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
    ContaGoogleApi.prototype.countCampanhaAdsTestes = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/campanhaAdsTestes/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * pixelGoogles consultas de ContaGoogle.
     *
     * @param {any} id ContaGoogle id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.getPixelGoogles = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/pixelGoogles";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no pixelGoogles deste modelo.
     *
     * @param {any} id ContaGoogle id
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
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.createPixelGoogles = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/pixelGoogles";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os pixelGoogles deste modelo.
     *
     * @param {any} id ContaGoogle id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ContaGoogleApi.prototype.deletePixelGoogles = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/pixelGoogles";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * pixelGoogles contagens de ContaGoogle.
     *
     * @param {any} id ContaGoogle id
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
    ContaGoogleApi.prototype.countPixelGoogles = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/pixelGoogles/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * produtoAfiliadoHotmarts consultas de ContaGoogle.
     *
     * @param {any} id ContaGoogle id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.getProdutoAfiliadoHotmarts = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/produtoAfiliadoHotmarts";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no produtoAfiliadoHotmarts deste modelo.
     *
     * @param {any} id ContaGoogle id
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
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.createProdutoAfiliadoHotmarts = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/produtoAfiliadoHotmarts";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os produtoAfiliadoHotmarts deste modelo.
     *
     * @param {any} id ContaGoogle id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ContaGoogleApi.prototype.deleteProdutoAfiliadoHotmarts = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/produtoAfiliadoHotmarts";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * produtoAfiliadoHotmarts contagens de ContaGoogle.
     *
     * @param {any} id ContaGoogle id
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
    ContaGoogleApi.prototype.countProdutoAfiliadoHotmarts = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/produtoAfiliadoHotmarts/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id ContaGoogle id
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
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.ObtemContaDisponivel = function (customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/obtemContaDisponivel";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no campanhaAdsTestes deste modelo.
     *
     * @param {any} id ContaGoogle id
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
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.createManyCampanhaAdsTestes = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/campanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no pixelGoogles deste modelo.
     *
     * @param {any} id ContaGoogle id
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
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.createManyPixelGoogles = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/pixelGoogles";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no produtoAfiliadoHotmarts deste modelo.
     *
     * @param {any} id ContaGoogle id
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
     * This usually means the response is a `ContaGoogle` object.)
     * </em>
     */
    ContaGoogleApi.prototype.createManyProdutoAfiliadoHotmarts = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ContaGoogles/:id/produtoAfiliadoHotmarts";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `ContaGoogle`.
     */
    ContaGoogleApi.prototype.getModelName = function () {
        return "ContaGoogle";
    };
    ContaGoogleApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], ContaGoogleApi);
    return ContaGoogleApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/FacebookConta.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/FacebookConta.ts ***!
  \*************************************************************/
/*! exports provided: FacebookContaApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookContaApi", function() { return FacebookContaApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `FacebookConta` model.
 */
var FacebookContaApi = /** @class */ (function (_super) {
    __extends(FacebookContaApi, _super);
    function FacebookContaApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
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
     * This usually means the response is a `FacebookConta` object.)
     * </em>
     */
    FacebookContaApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/FacebookConta";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id FacebookConta id
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
     * This usually means the response is a `FacebookConta` object.)
     * </em>
     */
    FacebookContaApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/FacebookConta/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `FacebookConta`.
     */
    FacebookContaApi.prototype.getModelName = function () {
        return "FacebookConta";
    };
    FacebookContaApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], FacebookContaApi);
    return FacebookContaApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/IdeiaPalavraChave.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/IdeiaPalavraChave.ts ***!
  \*****************************************************************/
/*! exports provided: IdeiaPalavraChaveApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeiaPalavraChaveApi", function() { return IdeiaPalavraChaveApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `IdeiaPalavraChave` model.
 */
var IdeiaPalavraChaveApi = /** @class */ (function (_super) {
    __extends(IdeiaPalavraChaveApi, _super);
    function IdeiaPalavraChaveApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Localize um item relacionado por ID para visitaProdutoHotmarts.
     *
     * @param {any} id IdeiaPalavraChave id
     *
     * @param {any} fk Chave estrangeira para visitaProdutoHotmarts
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.findByIdVisitaProdutoHotmarts = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/visitaProdutoHotmarts/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para visitaProdutoHotmarts.
     *
     * @param {any} id IdeiaPalavraChave id
     *
     * @param {any} fk Chave estrangeira para visitaProdutoHotmarts
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    IdeiaPalavraChaveApi.prototype.destroyByIdVisitaProdutoHotmarts = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/visitaProdutoHotmarts/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para visitaProdutoHotmarts.
     *
     * @param {any} id IdeiaPalavraChave id
     *
     * @param {any} fk Chave estrangeira para visitaProdutoHotmarts
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
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.updateByIdVisitaProdutoHotmarts = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/visitaProdutoHotmarts/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Localize um item relacionado por ID para palavraChaveCampanhaAdsTestes.
     *
     * @param {any} id IdeiaPalavraChave id
     *
     * @param {any} fk Chave estrangeira para palavraChaveCampanhaAdsTestes
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.findByIdPalavraChaveCampanhaAdsTestes = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/palavraChaveCampanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para palavraChaveCampanhaAdsTestes.
     *
     * @param {any} id IdeiaPalavraChave id
     *
     * @param {any} fk Chave estrangeira para palavraChaveCampanhaAdsTestes
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    IdeiaPalavraChaveApi.prototype.destroyByIdPalavraChaveCampanhaAdsTestes = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/palavraChaveCampanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para palavraChaveCampanhaAdsTestes.
     *
     * @param {any} id IdeiaPalavraChave id
     *
     * @param {any} fk Chave estrangeira para palavraChaveCampanhaAdsTestes
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
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.updateByIdPalavraChaveCampanhaAdsTestes = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/palavraChaveCampanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Localize um item relacionado por ID para produtoAfiliadoMetricas.
     *
     * @param {any} id IdeiaPalavraChave id
     *
     * @param {any} fk Chave estrangeira para produtoAfiliadoMetricas
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.findByIdProdutoAfiliadoMetricas = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/produtoAfiliadoMetricas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para produtoAfiliadoMetricas.
     *
     * @param {any} id IdeiaPalavraChave id
     *
     * @param {any} fk Chave estrangeira para produtoAfiliadoMetricas
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    IdeiaPalavraChaveApi.prototype.destroyByIdProdutoAfiliadoMetricas = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/produtoAfiliadoMetricas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para produtoAfiliadoMetricas.
     *
     * @param {any} id IdeiaPalavraChave id
     *
     * @param {any} fk Chave estrangeira para produtoAfiliadoMetricas
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
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.updateByIdProdutoAfiliadoMetricas = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/produtoAfiliadoMetricas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * visitaProdutoHotmarts consultas de IdeiaPalavraChave.
     *
     * @param {any} id IdeiaPalavraChave id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.getVisitaProdutoHotmarts = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/visitaProdutoHotmarts";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no visitaProdutoHotmarts deste modelo.
     *
     * @param {any} id IdeiaPalavraChave id
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
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.createVisitaProdutoHotmarts = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/visitaProdutoHotmarts";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os visitaProdutoHotmarts deste modelo.
     *
     * @param {any} id IdeiaPalavraChave id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    IdeiaPalavraChaveApi.prototype.deleteVisitaProdutoHotmarts = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/visitaProdutoHotmarts";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * visitaProdutoHotmarts contagens de IdeiaPalavraChave.
     *
     * @param {any} id IdeiaPalavraChave id
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
    IdeiaPalavraChaveApi.prototype.countVisitaProdutoHotmarts = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/visitaProdutoHotmarts/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * palavraChaveCampanhaAdsTestes consultas de IdeiaPalavraChave.
     *
     * @param {any} id IdeiaPalavraChave id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.getPalavraChaveCampanhaAdsTestes = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/palavraChaveCampanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no palavraChaveCampanhaAdsTestes deste modelo.
     *
     * @param {any} id IdeiaPalavraChave id
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
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.createPalavraChaveCampanhaAdsTestes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/palavraChaveCampanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os palavraChaveCampanhaAdsTestes deste modelo.
     *
     * @param {any} id IdeiaPalavraChave id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    IdeiaPalavraChaveApi.prototype.deletePalavraChaveCampanhaAdsTestes = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/palavraChaveCampanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * palavraChaveCampanhaAdsTestes contagens de IdeiaPalavraChave.
     *
     * @param {any} id IdeiaPalavraChave id
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
    IdeiaPalavraChaveApi.prototype.countPalavraChaveCampanhaAdsTestes = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/palavraChaveCampanhaAdsTestes/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * produtoAfiliadoMetricas consultas de IdeiaPalavraChave.
     *
     * @param {any} id IdeiaPalavraChave id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.getProdutoAfiliadoMetricas = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/produtoAfiliadoMetricas";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no produtoAfiliadoMetricas deste modelo.
     *
     * @param {any} id IdeiaPalavraChave id
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
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.createProdutoAfiliadoMetricas = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/produtoAfiliadoMetricas";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os produtoAfiliadoMetricas deste modelo.
     *
     * @param {any} id IdeiaPalavraChave id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    IdeiaPalavraChaveApi.prototype.deleteProdutoAfiliadoMetricas = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/produtoAfiliadoMetricas";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * produtoAfiliadoMetricas contagens de IdeiaPalavraChave.
     *
     * @param {any} id IdeiaPalavraChave id
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
    IdeiaPalavraChaveApi.prototype.countProdutoAfiliadoMetricas = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/produtoAfiliadoMetricas/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id IdeiaPalavraChave id
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
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.AtualizaMaisRecentePalavraChave = function (customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/atualizaMaisRecentePalavraChave";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {number} limiteMensal
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.MelhoresUltimaData = function (limiteMensal, customHeaders) {
        if (limiteMensal === void 0) { limiteMensal = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/melhoresUltimaData";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof limiteMensal !== 'undefined' && limiteMensal !== null)
            _urlParams.limiteMensal = limiteMensal;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     *  - `listaPalavra` – `{any}` -
     *
     *  - `hotmartId` – `{number}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.RecebeLista = function (listaPalavra, hotmartId, customHeaders) {
        if (listaPalavra === void 0) { listaPalavra = {}; }
        if (hotmartId === void 0) { hotmartId = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/recebeLista";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof listaPalavra !== 'undefined' && listaPalavra !== null)
            _urlParams.listaPalavra = listaPalavra;
        if (typeof hotmartId !== 'undefined' && hotmartId !== null)
            _urlParams.hotmartId = hotmartId;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {number} limite
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.MelhoresCpcComVisita = function (limite, customHeaders) {
        if (limite === void 0) { limite = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/melhoresCpcComVisita";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof limite !== 'undefined' && limite !== null)
            _urlParams.limite = limite;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.CalculaCpcAlvo = function (customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/calculaCpcAlvo";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.AtualizaQuantidadeVisita = function (customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/atualizaQuantidadeVisita";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.ListaTop = function (customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/listaTop";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.ListaTopPesquisa = function (customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/listaTopPesquisa";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no visitaProdutoHotmarts deste modelo.
     *
     * @param {any} id IdeiaPalavraChave id
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
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.createManyVisitaProdutoHotmarts = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/visitaProdutoHotmarts";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no palavraChaveCampanhaAdsTestes deste modelo.
     *
     * @param {any} id IdeiaPalavraChave id
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
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.createManyPalavraChaveCampanhaAdsTestes = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/palavraChaveCampanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no produtoAfiliadoMetricas deste modelo.
     *
     * @param {any} id IdeiaPalavraChave id
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
     * This usually means the response is a `IdeiaPalavraChave` object.)
     * </em>
     */
    IdeiaPalavraChaveApi.prototype.createManyProdutoAfiliadoMetricas = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/IdeiaPalavraChaves/:id/produtoAfiliadoMetricas";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `IdeiaPalavraChave`.
     */
    IdeiaPalavraChaveApi.prototype.getModelName = function () {
        return "IdeiaPalavraChave";
    };
    IdeiaPalavraChaveApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], IdeiaPalavraChaveApi);
    return IdeiaPalavraChaveApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/ModeloCampanhaAdsTeste.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/ModeloCampanhaAdsTeste.ts ***!
  \**********************************************************************/
/*! exports provided: ModeloCampanhaAdsTesteApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeloCampanhaAdsTesteApi", function() { return ModeloCampanhaAdsTesteApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `ModeloCampanhaAdsTeste` model.
 */
var ModeloCampanhaAdsTesteApi = /** @class */ (function (_super) {
    __extends(ModeloCampanhaAdsTesteApi, _super);
    function ModeloCampanhaAdsTesteApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Localize um item relacionado por ID para campanhaAdsTestes.
     *
     * @param {any} id ModeloCampanhaAdsTeste id
     *
     * @param {any} fk Chave estrangeira para campanhaAdsTestes
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ModeloCampanhaAdsTeste` object.)
     * </em>
     */
    ModeloCampanhaAdsTesteApi.prototype.findByIdCampanhaAdsTestes = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ModeloCampanhaAdsTestes/:id/campanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para campanhaAdsTestes.
     *
     * @param {any} id ModeloCampanhaAdsTeste id
     *
     * @param {any} fk Chave estrangeira para campanhaAdsTestes
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ModeloCampanhaAdsTesteApi.prototype.destroyByIdCampanhaAdsTestes = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ModeloCampanhaAdsTestes/:id/campanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para campanhaAdsTestes.
     *
     * @param {any} id ModeloCampanhaAdsTeste id
     *
     * @param {any} fk Chave estrangeira para campanhaAdsTestes
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
     * This usually means the response is a `ModeloCampanhaAdsTeste` object.)
     * </em>
     */
    ModeloCampanhaAdsTesteApi.prototype.updateByIdCampanhaAdsTestes = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ModeloCampanhaAdsTestes/:id/campanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * campanhaAdsTestes consultas de ModeloCampanhaAdsTeste.
     *
     * @param {any} id ModeloCampanhaAdsTeste id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ModeloCampanhaAdsTeste` object.)
     * </em>
     */
    ModeloCampanhaAdsTesteApi.prototype.getCampanhaAdsTestes = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ModeloCampanhaAdsTestes/:id/campanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no campanhaAdsTestes deste modelo.
     *
     * @param {any} id ModeloCampanhaAdsTeste id
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
     * This usually means the response is a `ModeloCampanhaAdsTeste` object.)
     * </em>
     */
    ModeloCampanhaAdsTesteApi.prototype.createCampanhaAdsTestes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ModeloCampanhaAdsTestes/:id/campanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os campanhaAdsTestes deste modelo.
     *
     * @param {any} id ModeloCampanhaAdsTeste id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ModeloCampanhaAdsTesteApi.prototype.deleteCampanhaAdsTestes = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ModeloCampanhaAdsTestes/:id/campanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * campanhaAdsTestes contagens de ModeloCampanhaAdsTeste.
     *
     * @param {any} id ModeloCampanhaAdsTeste id
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
    ModeloCampanhaAdsTesteApi.prototype.countCampanhaAdsTestes = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ModeloCampanhaAdsTestes/:id/campanhaAdsTestes/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `ModeloCampanhaAdsTeste` object.)
     * </em>
     */
    ModeloCampanhaAdsTesteApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ModeloCampanhaAdsTestes";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id ModeloCampanhaAdsTeste id
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
     * This usually means the response is a `ModeloCampanhaAdsTeste` object.)
     * </em>
     */
    ModeloCampanhaAdsTesteApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ModeloCampanhaAdsTestes/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no campanhaAdsTestes deste modelo.
     *
     * @param {any} id ModeloCampanhaAdsTeste id
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
     * This usually means the response is a `ModeloCampanhaAdsTeste` object.)
     * </em>
     */
    ModeloCampanhaAdsTesteApi.prototype.createManyCampanhaAdsTestes = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ModeloCampanhaAdsTestes/:id/campanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `ModeloCampanhaAdsTeste`.
     */
    ModeloCampanhaAdsTesteApi.prototype.getModelName = function () {
        return "ModeloCampanhaAdsTeste";
    };
    ModeloCampanhaAdsTesteApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], ModeloCampanhaAdsTesteApi);
    return ModeloCampanhaAdsTesteApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/PalavraCampanhaAds.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/PalavraCampanhaAds.ts ***!
  \******************************************************************/
/*! exports provided: PalavraCampanhaAdsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalavraCampanhaAdsApi", function() { return PalavraCampanhaAdsApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `PalavraCampanhaAds` model.
 */
var PalavraCampanhaAdsApi = /** @class */ (function (_super) {
    __extends(PalavraCampanhaAdsApi, _super);
    function PalavraCampanhaAdsApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
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
     * This usually means the response is a `PalavraCampanhaAds` object.)
     * </em>
     */
    PalavraCampanhaAdsApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PalavraCampanhaAds";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id PalavraCampanhaAds id
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
     * This usually means the response is a `PalavraCampanhaAds` object.)
     * </em>
     */
    PalavraCampanhaAdsApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PalavraCampanhaAds/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `PalavraCampanhaAds`.
     */
    PalavraCampanhaAdsApi.prototype.getModelName = function () {
        return "PalavraCampanhaAds";
    };
    PalavraCampanhaAdsApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], PalavraCampanhaAdsApi);
    return PalavraCampanhaAdsApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/PalavraChaveCampanhaAdsTeste.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/PalavraChaveCampanhaAdsTeste.ts ***!
  \****************************************************************************/
/*! exports provided: PalavraChaveCampanhaAdsTesteApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalavraChaveCampanhaAdsTesteApi", function() { return PalavraChaveCampanhaAdsTesteApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `PalavraChaveCampanhaAdsTeste` model.
 */
var PalavraChaveCampanhaAdsTesteApi = /** @class */ (function (_super) {
    __extends(PalavraChaveCampanhaAdsTesteApi, _super);
    function PalavraChaveCampanhaAdsTesteApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Busca relação campanhaAdsTeste de belongsTo.
     *
     * @param {any} id PalavraChaveCampanhaAdsTeste id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PalavraChaveCampanhaAdsTeste` object.)
     * </em>
     */
    PalavraChaveCampanhaAdsTesteApi.prototype.getCampanhaAdsTeste = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PalavraChaveCampanhaAdsTestes/:id/campanhaAdsTeste";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Busca relação ideiaPalavraChave de belongsTo.
     *
     * @param {any} id PalavraChaveCampanhaAdsTeste id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PalavraChaveCampanhaAdsTeste` object.)
     * </em>
     */
    PalavraChaveCampanhaAdsTesteApi.prototype.getIdeiaPalavraChave = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PalavraChaveCampanhaAdsTestes/:id/ideiaPalavraChave";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `PalavraChaveCampanhaAdsTeste` object.)
     * </em>
     */
    PalavraChaveCampanhaAdsTesteApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PalavraChaveCampanhaAdsTestes";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id PalavraChaveCampanhaAdsTeste id
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
     * This usually means the response is a `PalavraChaveCampanhaAdsTeste` object.)
     * </em>
     */
    PalavraChaveCampanhaAdsTesteApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PalavraChaveCampanhaAdsTestes/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     *  - `campanhaAdsTesteId` – `{number}` -
     *
     *  - `listaIdeiaPalavraChave` – `{any}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PalavraChaveCampanhaAdsTeste` object.)
     * </em>
     */
    PalavraChaveCampanhaAdsTesteApi.prototype.AtualizaPalavraChavePorCampanhaAdsTeste = function (campanhaAdsTesteId, listaIdeiaPalavraChave, customHeaders) {
        if (campanhaAdsTesteId === void 0) { campanhaAdsTesteId = {}; }
        if (listaIdeiaPalavraChave === void 0) { listaIdeiaPalavraChave = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PalavraChaveCampanhaAdsTestes/atualizaPalavraChavePorCampanhaAdsTeste";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof campanhaAdsTesteId !== 'undefined' && campanhaAdsTesteId !== null)
            _urlParams.campanhaAdsTesteId = campanhaAdsTesteId;
        if (typeof listaIdeiaPalavraChave !== 'undefined' && listaIdeiaPalavraChave !== null)
            _urlParams.listaIdeiaPalavraChave = listaIdeiaPalavraChave;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `PalavraChaveCampanhaAdsTeste`.
     */
    PalavraChaveCampanhaAdsTesteApi.prototype.getModelName = function () {
        return "PalavraChaveCampanhaAdsTeste";
    };
    PalavraChaveCampanhaAdsTesteApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], PalavraChaveCampanhaAdsTesteApi);
    return PalavraChaveCampanhaAdsTesteApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/PixelGoogle.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/PixelGoogle.ts ***!
  \***********************************************************/
/*! exports provided: PixelGoogleApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelGoogleApi", function() { return PixelGoogleApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `PixelGoogle` model.
 */
var PixelGoogleApi = /** @class */ (function (_super) {
    __extends(PixelGoogleApi, _super);
    function PixelGoogleApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Localize um item relacionado por ID para produtoAfiliadoHotmarts.
     *
     * @param {any} id PixelGoogle id
     *
     * @param {any} fk Chave estrangeira para produtoAfiliadoHotmarts
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PixelGoogle` object.)
     * </em>
     */
    PixelGoogleApi.prototype.findByIdProdutoAfiliadoHotmarts = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/produtoAfiliadoHotmarts/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para produtoAfiliadoHotmarts.
     *
     * @param {any} id PixelGoogle id
     *
     * @param {any} fk Chave estrangeira para produtoAfiliadoHotmarts
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    PixelGoogleApi.prototype.destroyByIdProdutoAfiliadoHotmarts = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/produtoAfiliadoHotmarts/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para produtoAfiliadoHotmarts.
     *
     * @param {any} id PixelGoogle id
     *
     * @param {any} fk Chave estrangeira para produtoAfiliadoHotmarts
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
     * This usually means the response is a `PixelGoogle` object.)
     * </em>
     */
    PixelGoogleApi.prototype.updateByIdProdutoAfiliadoHotmarts = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/produtoAfiliadoHotmarts/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Localize um item relacionado por ID para pixelGooglePaginaVenda.
     *
     * @param {any} id PixelGoogle id
     *
     * @param {any} fk Chave estrangeira para pixelGooglePaginaVenda
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PixelGoogle` object.)
     * </em>
     */
    PixelGoogleApi.prototype.findByIdPixelGooglePaginaVenda = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/pixelGooglePaginaVenda/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para pixelGooglePaginaVenda.
     *
     * @param {any} id PixelGoogle id
     *
     * @param {any} fk Chave estrangeira para pixelGooglePaginaVenda
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    PixelGoogleApi.prototype.destroyByIdPixelGooglePaginaVenda = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/pixelGooglePaginaVenda/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para pixelGooglePaginaVenda.
     *
     * @param {any} id PixelGoogle id
     *
     * @param {any} fk Chave estrangeira para pixelGooglePaginaVenda
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
     * This usually means the response is a `PixelGoogle` object.)
     * </em>
     */
    PixelGoogleApi.prototype.updateByIdPixelGooglePaginaVenda = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/pixelGooglePaginaVenda/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Busca relação contaGoogle de belongsTo.
     *
     * @param {any} id PixelGoogle id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PixelGoogle` object.)
     * </em>
     */
    PixelGoogleApi.prototype.getContaGoogle = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/contaGoogle";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * produtoAfiliadoHotmarts consultas de PixelGoogle.
     *
     * @param {any} id PixelGoogle id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PixelGoogle` object.)
     * </em>
     */
    PixelGoogleApi.prototype.getProdutoAfiliadoHotmarts = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/produtoAfiliadoHotmarts";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no produtoAfiliadoHotmarts deste modelo.
     *
     * @param {any} id PixelGoogle id
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
     * This usually means the response is a `PixelGoogle` object.)
     * </em>
     */
    PixelGoogleApi.prototype.createProdutoAfiliadoHotmarts = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/produtoAfiliadoHotmarts";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os produtoAfiliadoHotmarts deste modelo.
     *
     * @param {any} id PixelGoogle id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    PixelGoogleApi.prototype.deleteProdutoAfiliadoHotmarts = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/produtoAfiliadoHotmarts";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * produtoAfiliadoHotmarts contagens de PixelGoogle.
     *
     * @param {any} id PixelGoogle id
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
    PixelGoogleApi.prototype.countProdutoAfiliadoHotmarts = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/produtoAfiliadoHotmarts/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * pixelGooglePaginaVenda consultas de PixelGoogle.
     *
     * @param {any} id PixelGoogle id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PixelGoogle` object.)
     * </em>
     */
    PixelGoogleApi.prototype.getPixelGooglePaginaVenda = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/pixelGooglePaginaVenda";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no pixelGooglePaginaVenda deste modelo.
     *
     * @param {any} id PixelGoogle id
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
     * This usually means the response is a `PixelGoogle` object.)
     * </em>
     */
    PixelGoogleApi.prototype.createPixelGooglePaginaVenda = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/pixelGooglePaginaVenda";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os pixelGooglePaginaVenda deste modelo.
     *
     * @param {any} id PixelGoogle id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    PixelGoogleApi.prototype.deletePixelGooglePaginaVenda = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/pixelGooglePaginaVenda";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * pixelGooglePaginaVenda contagens de PixelGoogle.
     *
     * @param {any} id PixelGoogle id
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
    PixelGoogleApi.prototype.countPixelGooglePaginaVenda = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/pixelGooglePaginaVenda/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `PixelGoogle` object.)
     * </em>
     */
    PixelGoogleApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id PixelGoogle id
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
     * This usually means the response is a `PixelGoogle` object.)
     * </em>
     */
    PixelGoogleApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     *  - `pixelPaginaVenda` – `{object}` -
     *
     *  - `pixelVenda` – `{object}` -
     *
     *  - `produtoAfiliadoId` – `{number}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PixelGoogle` object.)
     * </em>
     */
    PixelGoogleApi.prototype.RegistraCriacao = function (pixelPaginaVenda, pixelVenda, produtoAfiliadoId, customHeaders) {
        if (pixelPaginaVenda === void 0) { pixelPaginaVenda = {}; }
        if (pixelVenda === void 0) { pixelVenda = {}; }
        if (produtoAfiliadoId === void 0) { produtoAfiliadoId = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/registraCriacao";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof pixelPaginaVenda !== 'undefined' && pixelPaginaVenda !== null)
            _urlParams.pixelPaginaVenda = pixelPaginaVenda;
        if (typeof pixelVenda !== 'undefined' && pixelVenda !== null)
            _urlParams.pixelVenda = pixelVenda;
        if (typeof produtoAfiliadoId !== 'undefined' && produtoAfiliadoId !== null)
            _urlParams.produtoAfiliadoId = produtoAfiliadoId;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no produtoAfiliadoHotmarts deste modelo.
     *
     * @param {any} id PixelGoogle id
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
     * This usually means the response is a `PixelGoogle` object.)
     * </em>
     */
    PixelGoogleApi.prototype.createManyProdutoAfiliadoHotmarts = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/produtoAfiliadoHotmarts";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no pixelGooglePaginaVenda deste modelo.
     *
     * @param {any} id PixelGoogle id
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
     * This usually means the response is a `PixelGoogle` object.)
     * </em>
     */
    PixelGoogleApi.prototype.createManyPixelGooglePaginaVenda = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PixelGoogles/:id/pixelGooglePaginaVenda";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `PixelGoogle`.
     */
    PixelGoogleApi.prototype.getModelName = function () {
        return "PixelGoogle";
    };
    PixelGoogleApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], PixelGoogleApi);
    return PixelGoogleApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/PlataformaVenda.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/PlataformaVenda.ts ***!
  \***************************************************************/
/*! exports provided: PlataformaVendaApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlataformaVendaApi", function() { return PlataformaVendaApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `PlataformaVenda` model.
 */
var PlataformaVendaApi = /** @class */ (function (_super) {
    __extends(PlataformaVendaApi, _super);
    function PlataformaVendaApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
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
     * This usually means the response is a `PlataformaVenda` object.)
     * </em>
     */
    PlataformaVendaApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PlataformaVendas";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id PlataformaVenda id
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
     * This usually means the response is a `PlataformaVenda` object.)
     * </em>
     */
    PlataformaVendaApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/PlataformaVendas/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `PlataformaVenda`.
     */
    PlataformaVendaApi.prototype.getModelName = function () {
        return "PlataformaVenda";
    };
    PlataformaVendaApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], PlataformaVendaApi);
    return PlataformaVendaApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/ProdutoAfiliadoHotmart.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/ProdutoAfiliadoHotmart.ts ***!
  \**********************************************************************/
/*! exports provided: ProdutoAfiliadoHotmartApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoHotmartApi", function() { return ProdutoAfiliadoHotmartApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `ProdutoAfiliadoHotmart` model.
 */
var ProdutoAfiliadoHotmartApi = /** @class */ (function (_super) {
    __extends(ProdutoAfiliadoHotmartApi, _super);
    function ProdutoAfiliadoHotmartApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Localize um item relacionado por ID para visitaProdutoHotmarts.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @param {any} fk Chave estrangeira para visitaProdutoHotmarts
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.findByIdVisitaProdutoHotmarts = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/visitaProdutoHotmarts/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para visitaProdutoHotmarts.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @param {any} fk Chave estrangeira para visitaProdutoHotmarts
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ProdutoAfiliadoHotmartApi.prototype.destroyByIdVisitaProdutoHotmarts = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/visitaProdutoHotmarts/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para visitaProdutoHotmarts.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @param {any} fk Chave estrangeira para visitaProdutoHotmarts
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
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.updateByIdVisitaProdutoHotmarts = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/visitaProdutoHotmarts/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Localize um item relacionado por ID para campanhaAdsTestes.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @param {any} fk Chave estrangeira para campanhaAdsTestes
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.findByIdCampanhaAdsTestes = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/campanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para campanhaAdsTestes.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @param {any} fk Chave estrangeira para campanhaAdsTestes
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ProdutoAfiliadoHotmartApi.prototype.destroyByIdCampanhaAdsTestes = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/campanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para campanhaAdsTestes.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @param {any} fk Chave estrangeira para campanhaAdsTestes
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
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.updateByIdCampanhaAdsTestes = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/campanhaAdsTestes/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Localize um item relacionado por ID para anuncioAds.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @param {any} fk Chave estrangeira para anuncioAds
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.findByIdAnuncioAds = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/anuncioAds/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para anuncioAds.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @param {any} fk Chave estrangeira para anuncioAds
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ProdutoAfiliadoHotmartApi.prototype.destroyByIdAnuncioAds = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/anuncioAds/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para anuncioAds.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @param {any} fk Chave estrangeira para anuncioAds
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
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.updateByIdAnuncioAds = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/anuncioAds/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Busca relação pixelGoogle de belongsTo.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.getPixelGoogle = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/pixelGoogle";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Busca relação produtoAfiliadoPaginaVenda de belongsTo.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.getProdutoAfiliadoPaginaVenda = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/produtoAfiliadoPaginaVenda";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Busca relação contaGoogle de belongsTo.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.getContaGoogle = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/contaGoogle";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * visitaProdutoHotmarts consultas de ProdutoAfiliadoHotmart.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.getVisitaProdutoHotmarts = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/visitaProdutoHotmarts";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no visitaProdutoHotmarts deste modelo.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
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
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.createVisitaProdutoHotmarts = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/visitaProdutoHotmarts";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os visitaProdutoHotmarts deste modelo.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ProdutoAfiliadoHotmartApi.prototype.deleteVisitaProdutoHotmarts = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/visitaProdutoHotmarts";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * visitaProdutoHotmarts contagens de ProdutoAfiliadoHotmart.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
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
    ProdutoAfiliadoHotmartApi.prototype.countVisitaProdutoHotmarts = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/visitaProdutoHotmarts/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * campanhaAdsTestes consultas de ProdutoAfiliadoHotmart.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.getCampanhaAdsTestes = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/campanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no campanhaAdsTestes deste modelo.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
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
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.createCampanhaAdsTestes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/campanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os campanhaAdsTestes deste modelo.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ProdutoAfiliadoHotmartApi.prototype.deleteCampanhaAdsTestes = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/campanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * campanhaAdsTestes contagens de ProdutoAfiliadoHotmart.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
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
    ProdutoAfiliadoHotmartApi.prototype.countCampanhaAdsTestes = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/campanhaAdsTestes/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * anuncioAds consultas de ProdutoAfiliadoHotmart.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.getAnuncioAds = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/anuncioAds";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no anuncioAds deste modelo.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
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
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.createAnuncioAds = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/anuncioAds";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os anuncioAds deste modelo.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ProdutoAfiliadoHotmartApi.prototype.deleteAnuncioAds = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/anuncioAds";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * anuncioAds contagens de ProdutoAfiliadoHotmart.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
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
    ProdutoAfiliadoHotmartApi.prototype.countAnuncioAds = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/anuncioAds/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
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
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.ListaCriarPixelGoogle = function (customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/listaCriarPixelGoogle";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no visitaProdutoHotmarts deste modelo.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
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
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.createManyVisitaProdutoHotmarts = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/visitaProdutoHotmarts";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no campanhaAdsTestes deste modelo.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
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
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.createManyCampanhaAdsTestes = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/campanhaAdsTestes";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no anuncioAds deste modelo.
     *
     * @param {any} id ProdutoAfiliadoHotmart id
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
     * This usually means the response is a `ProdutoAfiliadoHotmart` object.)
     * </em>
     */
    ProdutoAfiliadoHotmartApi.prototype.createManyAnuncioAds = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoHotmarts/:id/anuncioAds";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `ProdutoAfiliadoHotmart`.
     */
    ProdutoAfiliadoHotmartApi.prototype.getModelName = function () {
        return "ProdutoAfiliadoHotmart";
    };
    ProdutoAfiliadoHotmartApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], ProdutoAfiliadoHotmartApi);
    return ProdutoAfiliadoHotmartApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/ProdutoAfiliadoMetrica.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/ProdutoAfiliadoMetrica.ts ***!
  \**********************************************************************/
/*! exports provided: ProdutoAfiliadoMetricaApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoMetricaApi", function() { return ProdutoAfiliadoMetricaApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `ProdutoAfiliadoMetrica` model.
 */
var ProdutoAfiliadoMetricaApi = /** @class */ (function (_super) {
    __extends(ProdutoAfiliadoMetricaApi, _super);
    function ProdutoAfiliadoMetricaApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Busca relação visitaProdutoHotmart de belongsTo.
     *
     * @param {any} id ProdutoAfiliadoMetrica id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProdutoAfiliadoMetrica` object.)
     * </em>
     */
    ProdutoAfiliadoMetricaApi.prototype.getVisitaProdutoHotmart = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoMetricas/:id/visitaProdutoHotmart";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Busca relação ideiaPalavraChave de belongsTo.
     *
     * @param {any} id ProdutoAfiliadoMetrica id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProdutoAfiliadoMetrica` object.)
     * </em>
     */
    ProdutoAfiliadoMetricaApi.prototype.getIdeiaPalavraChave = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoMetricas/:id/ideiaPalavraChave";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `ProdutoAfiliadoMetrica` object.)
     * </em>
     */
    ProdutoAfiliadoMetricaApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoMetricas";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id ProdutoAfiliadoMetrica id
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
     * This usually means the response is a `ProdutoAfiliadoMetrica` object.)
     * </em>
     */
    ProdutoAfiliadoMetricaApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoMetricas/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProdutoAfiliadoMetrica` object.)
     * </em>
     */
    ProdutoAfiliadoMetricaApi.prototype.CalculaAtual = function (customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoMetricas/calculaAtual";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `ProdutoAfiliadoMetrica` object.)
     * </em>
     */
    ProdutoAfiliadoMetricaApi.prototype.ObtemItensLucro = function (customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoAfiliadoMetricas/obtemItensLucro";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `ProdutoAfiliadoMetrica`.
     */
    ProdutoAfiliadoMetricaApi.prototype.getModelName = function () {
        return "ProdutoAfiliadoMetrica";
    };
    ProdutoAfiliadoMetricaApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], ProdutoAfiliadoMetricaApi);
    return ProdutoAfiliadoMetricaApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/ProdutoHotmart.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/ProdutoHotmart.ts ***!
  \**************************************************************/
/*! exports provided: ProdutoHotmartApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoHotmartApi", function() { return ProdutoHotmartApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `ProdutoHotmart` model.
 */
var ProdutoHotmartApi = /** @class */ (function (_super) {
    __extends(ProdutoHotmartApi, _super);
    function ProdutoHotmartApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
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
     * This usually means the response is a `ProdutoHotmart` object.)
     * </em>
     */
    ProdutoHotmartApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoHotmarts";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id ProdutoHotmart id
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
     * This usually means the response is a `ProdutoHotmart` object.)
     * </em>
     */
    ProdutoHotmartApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoHotmarts/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `ProdutoHotmart`.
     */
    ProdutoHotmartApi.prototype.getModelName = function () {
        return "ProdutoHotmart";
    };
    ProdutoHotmartApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], ProdutoHotmartApi);
    return ProdutoHotmartApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/ProdutoPlataforma.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/ProdutoPlataforma.ts ***!
  \*****************************************************************/
/*! exports provided: ProdutoPlataformaApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoPlataformaApi", function() { return ProdutoPlataformaApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `ProdutoPlataforma` model.
 */
var ProdutoPlataformaApi = /** @class */ (function (_super) {
    __extends(ProdutoPlataformaApi, _super);
    function ProdutoPlataformaApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
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
     * This usually means the response is a `ProdutoPlataforma` object.)
     * </em>
     */
    ProdutoPlataformaApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoPlataformas";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id ProdutoPlataforma id
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
     * This usually means the response is a `ProdutoPlataforma` object.)
     * </em>
     */
    ProdutoPlataformaApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/ProdutoPlataformas/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `ProdutoPlataforma`.
     */
    ProdutoPlataformaApi.prototype.getModelName = function () {
        return "ProdutoPlataforma";
    };
    ProdutoPlataformaApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], ProdutoPlataformaApi);
    return ProdutoPlataformaApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/SDKModels.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/SDKModels.ts ***!
  \*********************************************************/
/*! exports provided: SDKModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return SDKModels; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/User */ "./src/app/shared/sdk/models/User.ts");
/* harmony import */ var _models_PlataformaVenda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/PlataformaVenda */ "./src/app/shared/sdk/models/PlataformaVenda.ts");
/* harmony import */ var _models_ProdutoPlataforma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/ProdutoPlataforma */ "./src/app/shared/sdk/models/ProdutoPlataforma.ts");
/* harmony import */ var _models_VisitaProdutoPlataforma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/VisitaProdutoPlataforma */ "./src/app/shared/sdk/models/VisitaProdutoPlataforma.ts");
/* harmony import */ var _models_ProdutoHotmart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/ProdutoHotmart */ "./src/app/shared/sdk/models/ProdutoHotmart.ts");
/* harmony import */ var _models_VisitaProdutoHotmart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/VisitaProdutoHotmart */ "./src/app/shared/sdk/models/VisitaProdutoHotmart.ts");
/* harmony import */ var _models_TokenAcesso__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/TokenAcesso */ "./src/app/shared/sdk/models/TokenAcesso.ts");
/* harmony import */ var _models_IdeiaPalavraChave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/IdeiaPalavraChave */ "./src/app/shared/sdk/models/IdeiaPalavraChave.ts");
/* harmony import */ var _models_CampanhaAds__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/CampanhaAds */ "./src/app/shared/sdk/models/CampanhaAds.ts");
/* harmony import */ var _models_AnuncioCampanhaAds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/AnuncioCampanhaAds */ "./src/app/shared/sdk/models/AnuncioCampanhaAds.ts");
/* harmony import */ var _models_PalavraCampanhaAds__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/PalavraCampanhaAds */ "./src/app/shared/sdk/models/PalavraCampanhaAds.ts");
/* harmony import */ var _models_ProdutoAfiliadoHotmart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../models/ProdutoAfiliadoHotmart */ "./src/app/shared/sdk/models/ProdutoAfiliadoHotmart.ts");
/* harmony import */ var _models_AgendaVisitaHotmart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../models/AgendaVisitaHotmart */ "./src/app/shared/sdk/models/AgendaVisitaHotmart.ts");
/* harmony import */ var _models_CampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../models/CampanhaAdsTeste */ "./src/app/shared/sdk/models/CampanhaAdsTeste.ts");
/* harmony import */ var _models_AnuncioAds__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../models/AnuncioAds */ "./src/app/shared/sdk/models/AnuncioAds.ts");
/* harmony import */ var _models_ModeloCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../models/ModeloCampanhaAdsTeste */ "./src/app/shared/sdk/models/ModeloCampanhaAdsTeste.ts");
/* harmony import */ var _models_PixelGoogle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../models/PixelGoogle */ "./src/app/shared/sdk/models/PixelGoogle.ts");
/* harmony import */ var _models_PalavraChaveCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../models/PalavraChaveCampanhaAdsTeste */ "./src/app/shared/sdk/models/PalavraChaveCampanhaAdsTeste.ts");
/* harmony import */ var _models_AnuncioCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../models/AnuncioCampanhaAdsTeste */ "./src/app/shared/sdk/models/AnuncioCampanhaAdsTeste.ts");
/* harmony import */ var _models_FacebookConta__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../models/FacebookConta */ "./src/app/shared/sdk/models/FacebookConta.ts");
/* harmony import */ var _models_ProdutoAfiliadoMetrica__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../models/ProdutoAfiliadoMetrica */ "./src/app/shared/sdk/models/ProdutoAfiliadoMetrica.ts");
/* harmony import */ var _models_ContaGoogle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../models/ContaGoogle */ "./src/app/shared/sdk/models/ContaGoogle.ts");
/* harmony import */ var _models_CampanhaAdsMetrica__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../models/CampanhaAdsMetrica */ "./src/app/shared/sdk/models/CampanhaAdsMetrica.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */
























var SDKModels = /** @class */ (function () {
    function SDKModels() {
        this.models = {
            User: _models_User__WEBPACK_IMPORTED_MODULE_1__["User"],
            PlataformaVenda: _models_PlataformaVenda__WEBPACK_IMPORTED_MODULE_2__["PlataformaVenda"],
            ProdutoPlataforma: _models_ProdutoPlataforma__WEBPACK_IMPORTED_MODULE_3__["ProdutoPlataforma"],
            VisitaProdutoPlataforma: _models_VisitaProdutoPlataforma__WEBPACK_IMPORTED_MODULE_4__["VisitaProdutoPlataforma"],
            ProdutoHotmart: _models_ProdutoHotmart__WEBPACK_IMPORTED_MODULE_5__["ProdutoHotmart"],
            VisitaProdutoHotmart: _models_VisitaProdutoHotmart__WEBPACK_IMPORTED_MODULE_6__["VisitaProdutoHotmart"],
            TokenAcesso: _models_TokenAcesso__WEBPACK_IMPORTED_MODULE_7__["TokenAcesso"],
            IdeiaPalavraChave: _models_IdeiaPalavraChave__WEBPACK_IMPORTED_MODULE_8__["IdeiaPalavraChave"],
            CampanhaAds: _models_CampanhaAds__WEBPACK_IMPORTED_MODULE_9__["CampanhaAds"],
            AnuncioCampanhaAds: _models_AnuncioCampanhaAds__WEBPACK_IMPORTED_MODULE_10__["AnuncioCampanhaAds"],
            PalavraCampanhaAds: _models_PalavraCampanhaAds__WEBPACK_IMPORTED_MODULE_11__["PalavraCampanhaAds"],
            ProdutoAfiliadoHotmart: _models_ProdutoAfiliadoHotmart__WEBPACK_IMPORTED_MODULE_12__["ProdutoAfiliadoHotmart"],
            AgendaVisitaHotmart: _models_AgendaVisitaHotmart__WEBPACK_IMPORTED_MODULE_13__["AgendaVisitaHotmart"],
            CampanhaAdsTeste: _models_CampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_14__["CampanhaAdsTeste"],
            AnuncioAds: _models_AnuncioAds__WEBPACK_IMPORTED_MODULE_15__["AnuncioAds"],
            ModeloCampanhaAdsTeste: _models_ModeloCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_16__["ModeloCampanhaAdsTeste"],
            PixelGoogle: _models_PixelGoogle__WEBPACK_IMPORTED_MODULE_17__["PixelGoogle"],
            PalavraChaveCampanhaAdsTeste: _models_PalavraChaveCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_18__["PalavraChaveCampanhaAdsTeste"],
            AnuncioCampanhaAdsTeste: _models_AnuncioCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_19__["AnuncioCampanhaAdsTeste"],
            FacebookConta: _models_FacebookConta__WEBPACK_IMPORTED_MODULE_20__["FacebookConta"],
            ProdutoAfiliadoMetrica: _models_ProdutoAfiliadoMetrica__WEBPACK_IMPORTED_MODULE_21__["ProdutoAfiliadoMetrica"],
            ContaGoogle: _models_ContaGoogle__WEBPACK_IMPORTED_MODULE_22__["ContaGoogle"],
            CampanhaAdsMetrica: _models_CampanhaAdsMetrica__WEBPACK_IMPORTED_MODULE_23__["CampanhaAdsMetrica"],
        };
    }
    SDKModels.prototype.get = function (modelName) {
        return this.models[modelName];
    };
    SDKModels.prototype.getAll = function () {
        return this.models;
    };
    SDKModels.prototype.getModelNames = function () {
        return Object.keys(this.models);
    };
    SDKModels = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SDKModels);
    return SDKModels;
}());



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/TokenAcesso.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/TokenAcesso.ts ***!
  \***********************************************************/
/*! exports provided: TokenAcessoApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenAcessoApi", function() { return TokenAcessoApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `TokenAcesso` model.
 */
var TokenAcessoApi = /** @class */ (function (_super) {
    __extends(TokenAcessoApi, _super);
    function TokenAcessoApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
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
     * This usually means the response is a `TokenAcesso` object.)
     * </em>
     */
    TokenAcessoApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/TokenAcessos";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id TokenAcesso id
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
     * This usually means the response is a `TokenAcesso` object.)
     * </em>
     */
    TokenAcessoApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/TokenAcessos/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} nome
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `TokenAcesso` object.)
     * </em>
     */
    TokenAcessoApi.prototype.ObtemPorNome = function (nome, customHeaders) {
        if (nome === void 0) { nome = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/TokenAcessos/obtemPorNome";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof nome !== 'undefined' && nome !== null)
            _urlParams.nome = nome;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `TokenAcesso`.
     */
    TokenAcessoApi.prototype.getModelName = function () {
        return "TokenAcesso";
    };
    TokenAcessoApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], TokenAcessoApi);
    return TokenAcessoApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/User.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/User.ts ***!
  \****************************************************/
/*! exports provided: UserApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return UserApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `User` model.
 */
var UserApi = /** @class */ (function (_super) {
    __extends(UserApi, _super);
    function UserApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Localize um item relacionado por ID para accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Chave estrangeira para accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.findByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Chave estrangeira para accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.destroyByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Chave estrangeira para accessTokens
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
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.updateByIdAccessTokens = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * accessTokens consultas de User.
     *
     * @param {any} id User id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.getAccessTokens = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no accessTokens deste modelo.
     *
     * @param {any} id User id
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
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os accessTokens deste modelo.
     *
     * @param {any} id User id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.deleteAccessTokens = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * accessTokens contagens de User.
     *
     * @param {any} id User id
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
    UserApi.prototype.countAccessTokens = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id User id
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
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Login a user with username/email and password.
     *
     * @param {string} include Related objects to include in the response. See the description of return value for more details.
     *   Default value: `user`.
     *
     *  - `rememberMe` - `boolean` - Whether the authentication credentials
     *     should be remembered in localStorage across app/browser restarts.
     *     Default: `true`.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * O corpo de resposta contém propriedades do AccessToken criado no login.
     * Dependendo do valor do parâmetro `include`, o corpo poderá conter propriedades adicionais:
     *
     *   - `user` - `U+007BUserU+007D` - Dados do usuário com login efetuado atualmente. (`include=user`)
     *
     *
     */
    UserApi.prototype.login = function (credentials, include, rememberMe, customHeaders) {
        var _this = this;
        if (include === void 0) { include = 'user'; }
        if (rememberMe === void 0) { rememberMe = true; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users/login";
        var _routeParams = {};
        var _postBody = {
            credentials: credentials
        };
        var _urlParams = {};
        if (typeof include !== 'undefined' && include !== null)
            _urlParams.include = include;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
            response.ttl = parseInt(response.ttl);
            response.rememberMe = rememberMe;
            _this.auth.setToken(response);
            return response;
        }));
        return result;
    };
    /**
     * Logout a user with access token.
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.logout = function (customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users/logout";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        _urlParams.access_token = this.auth.getAccessTokenId();
        this.auth.clear();
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Trigger user's identity verification with configured verifyOptions
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.verify = function (id, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/verify";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Confirm a user registration with identity verification token.
     *
     * @param {string} uid
     *
     * @param {string} token
     *
     * @param {string} redirect
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.confirm = function (uid, token, redirect, customHeaders) {
        if (redirect === void 0) { redirect = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users/confirm";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof uid !== 'undefined' && uid !== null)
            _urlParams.uid = uid;
        if (typeof token !== 'undefined' && token !== null)
            _urlParams.token = token;
        if (typeof redirect !== 'undefined' && redirect !== null)
            _urlParams.redirect = redirect;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset password for a user with email.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.resetPassword = function (options, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users/reset";
        var _routeParams = {};
        var _postBody = {
            options: options
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Change a user's password.
     *
     * @param {object} data Request data.
     *
     *  - `oldPassword` – `{string}` -
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.changePassword = function (oldPassword, newPassword, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users/change-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                oldPassword: oldPassword,
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset user's password via a password-reset token.
     *
     * @param {object} data Request data.
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.setPassword = function (newPassword, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users/reset-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no accessTokens deste modelo.
     *
     * @param {any} id User id
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
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createManyAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * @ngdoc method
     * @name sdk.User#getCurrent
     * @methodOf sdk.User
     *
     * @description
     *
     * Get data of the currently logged user. Fail with HTTP result 401
     * when there is no user logged in.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     */
    UserApi.prototype.getCurrent = function (filter) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() + "/Users" + "/:id";
        var id = this.auth.getCurrentUserId();
        if (id == null)
            id = '__anonymous__';
        var _routeParams = { id: id };
        var _urlParams = {};
        var _postBody = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request(_method, _url, _routeParams, _urlParams, _postBody);
    };
    /**
     * Get data of the currently logged user that was returned by the last
     * call to {@link sdk.User#login} or
     * {@link sdk.User#getCurrent}. Return null when there
     * is no user logged in or the data of the current user were not fetched
     * yet.
     *
     * @returns object An Account instance.
     */
    UserApi.prototype.getCachedCurrent = function () {
        return this.auth.getCurrentUserData();
    };
    /**
     * Get data of the currently logged access tokern that was returned by the last
     * call to {@link sdk.User#login}
     *
     * @returns object An AccessToken instance.
     */
    UserApi.prototype.getCurrentToken = function () {
        return this.auth.getToken();
    };
    /**
     * @name sdk.User#isAuthenticated
     *
     * @returns {boolean} True if the current user is authenticated (logged in).
     */
    UserApi.prototype.isAuthenticated = function () {
        return !(this.getCurrentId() === '' || this.getCurrentId() == null || this.getCurrentId() == 'null');
    };
    /**
     * @name sdk.User#getCurrentId
     *
     * @returns object Id of the currently logged-in user or null.
     */
    UserApi.prototype.getCurrentId = function () {
        return this.auth.getCurrentUserId();
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    UserApi.prototype.getModelName = function () {
        return "User";
    };
    UserApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_8__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_8__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], UserApi);
    return UserApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/VisitaProdutoHotmart.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/VisitaProdutoHotmart.ts ***!
  \********************************************************************/
/*! exports provided: VisitaProdutoHotmartApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitaProdutoHotmartApi", function() { return VisitaProdutoHotmartApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `VisitaProdutoHotmart` model.
 */
var VisitaProdutoHotmartApi = /** @class */ (function (_super) {
    __extends(VisitaProdutoHotmartApi, _super);
    function VisitaProdutoHotmartApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Busca relação ideiaPalavraChave de belongsTo.
     *
     * @param {any} id VisitaProdutoHotmart id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `VisitaProdutoHotmart` object.)
     * </em>
     */
    VisitaProdutoHotmartApi.prototype.getIdeiaPalavraChave = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoHotmarts/:id/ideiaPalavraChave";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Busca relação produtoAfiliadoHotmart de belongsTo.
     *
     * @param {any} id VisitaProdutoHotmart id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `VisitaProdutoHotmart` object.)
     * </em>
     */
    VisitaProdutoHotmartApi.prototype.getProdutoAfiliadoHotmart = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoHotmarts/:id/produtoAfiliadoHotmart";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Localize um item relacionado por ID para produtoAfiliadoMetricas.
     *
     * @param {any} id VisitaProdutoHotmart id
     *
     * @param {any} fk Chave estrangeira para produtoAfiliadoMetricas
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `VisitaProdutoHotmart` object.)
     * </em>
     */
    VisitaProdutoHotmartApi.prototype.findByIdProdutoAfiliadoMetricas = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoHotmarts/:id/produtoAfiliadoMetricas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Excluir um item relacionado por ID para produtoAfiliadoMetricas.
     *
     * @param {any} id VisitaProdutoHotmart id
     *
     * @param {any} fk Chave estrangeira para produtoAfiliadoMetricas
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    VisitaProdutoHotmartApi.prototype.destroyByIdProdutoAfiliadoMetricas = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoHotmarts/:id/produtoAfiliadoMetricas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Atualizar um item relacionado por ID para produtoAfiliadoMetricas.
     *
     * @param {any} id VisitaProdutoHotmart id
     *
     * @param {any} fk Chave estrangeira para produtoAfiliadoMetricas
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
     * This usually means the response is a `VisitaProdutoHotmart` object.)
     * </em>
     */
    VisitaProdutoHotmartApi.prototype.updateByIdProdutoAfiliadoMetricas = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoHotmarts/:id/produtoAfiliadoMetricas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * produtoAfiliadoMetricas consultas de VisitaProdutoHotmart.
     *
     * @param {any} id VisitaProdutoHotmart id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `VisitaProdutoHotmart` object.)
     * </em>
     */
    VisitaProdutoHotmartApi.prototype.getProdutoAfiliadoMetricas = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoHotmarts/:id/produtoAfiliadoMetricas";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no produtoAfiliadoMetricas deste modelo.
     *
     * @param {any} id VisitaProdutoHotmart id
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
     * This usually means the response is a `VisitaProdutoHotmart` object.)
     * </em>
     */
    VisitaProdutoHotmartApi.prototype.createProdutoAfiliadoMetricas = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoHotmarts/:id/produtoAfiliadoMetricas";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Exclui todos os produtoAfiliadoMetricas deste modelo.
     *
     * @param {any} id VisitaProdutoHotmart id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    VisitaProdutoHotmartApi.prototype.deleteProdutoAfiliadoMetricas = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoHotmarts/:id/produtoAfiliadoMetricas";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * produtoAfiliadoMetricas contagens de VisitaProdutoHotmart.
     *
     * @param {any} id VisitaProdutoHotmart id
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
    VisitaProdutoHotmartApi.prototype.countProdutoAfiliadoMetricas = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoHotmarts/:id/produtoAfiliadoMetricas/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `VisitaProdutoHotmart` object.)
     * </em>
     */
    VisitaProdutoHotmartApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoHotmarts";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id VisitaProdutoHotmart id
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
     * This usually means the response is a `VisitaProdutoHotmart` object.)
     * </em>
     */
    VisitaProdutoHotmartApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoHotmarts/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `VisitaProdutoHotmart` object.)
     * </em>
     */
    VisitaProdutoHotmartApi.prototype.AtualizaMaisRecenteProdutoHotmart = function (customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoHotmarts/atualizaMaisRecenteProdutoHotmart";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     *  - `lista` – `{any}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `VisitaProdutoHotmart` object.)
     * </em>
     */
    VisitaProdutoHotmartApi.prototype.InsereListaProdutoHotmart = function (lista, customHeaders) {
        if (lista === void 0) { lista = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoHotmarts/insereListaProdutoHotmart";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof lista !== 'undefined' && lista !== null)
            _urlParams.lista = lista;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `VisitaProdutoHotmart` object.)
     * </em>
     */
    VisitaProdutoHotmartApi.prototype.ListaParaPesquisaPalavraChave = function (customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoHotmarts/listaParaPesquisaPalavraChave";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
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
     * This usually means the response is a `VisitaProdutoHotmart` object.)
     * </em>
     */
    VisitaProdutoHotmartApi.prototype.ResumoPorDataInsercao = function (customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoHotmarts/resumoPorDataInsercao";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Cria uma nova instância no produtoAfiliadoMetricas deste modelo.
     *
     * @param {any} id VisitaProdutoHotmart id
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
     * This usually means the response is a `VisitaProdutoHotmart` object.)
     * </em>
     */
    VisitaProdutoHotmartApi.prototype.createManyProdutoAfiliadoMetricas = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoHotmarts/:id/produtoAfiliadoMetricas";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `VisitaProdutoHotmart`.
     */
    VisitaProdutoHotmartApi.prototype.getModelName = function () {
        return "VisitaProdutoHotmart";
    };
    VisitaProdutoHotmartApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], VisitaProdutoHotmartApi);
    return VisitaProdutoHotmartApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/VisitaProdutoPlataforma.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/VisitaProdutoPlataforma.ts ***!
  \***********************************************************************/
/*! exports provided: VisitaProdutoPlataformaApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitaProdutoPlataformaApi", function() { return VisitaProdutoPlataformaApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `VisitaProdutoPlataforma` model.
 */
var VisitaProdutoPlataformaApi = /** @class */ (function (_super) {
    __extends(VisitaProdutoPlataformaApi, _super);
    function VisitaProdutoPlataformaApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
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
     * This usually means the response is a `VisitaProdutoPlataforma` object.)
     * </em>
     */
    VisitaProdutoPlataformaApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoPlataformas";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id VisitaProdutoPlataforma id
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
     * This usually means the response is a `VisitaProdutoPlataforma` object.)
     * </em>
     */
    VisitaProdutoPlataformaApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/VisitaProdutoPlataformas/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `VisitaProdutoPlataforma`.
     */
    VisitaProdutoPlataformaApi.prototype.getModelName = function () {
        return "VisitaProdutoPlataforma";
    };
    VisitaProdutoPlataformaApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], VisitaProdutoPlataformaApi);
    return VisitaProdutoPlataformaApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/index.ts ***!
  \*****************************************************/
/*! exports provided: VisitaProdutoPlataformaApi, ProdutoHotmartApi, VisitaProdutoHotmartApi, TokenAcessoApi, IdeiaPalavraChaveApi, CampanhaAdsApi, AnuncioCampanhaAdsApi, PalavraCampanhaAdsApi, ProdutoAfiliadoHotmartApi, AgendaVisitaHotmartApi, CampanhaAdsTesteApi, AnuncioAdsApi, ModeloCampanhaAdsTesteApi, PixelGoogleApi, PalavraChaveCampanhaAdsTesteApi, AnuncioCampanhaAdsTesteApi, FacebookContaApi, ProdutoAfiliadoMetricaApi, ContaGoogleApi, CampanhaAdsMetricaApi, SDKModels, UserApi, PlataformaVendaApi, ProdutoPlataformaApi, LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/app/shared/sdk/services/custom/User.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return _User__WEBPACK_IMPORTED_MODULE_0__["UserApi"]; });

/* harmony import */ var _PlataformaVenda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlataformaVenda */ "./src/app/shared/sdk/services/custom/PlataformaVenda.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlataformaVendaApi", function() { return _PlataformaVenda__WEBPACK_IMPORTED_MODULE_1__["PlataformaVendaApi"]; });

/* harmony import */ var _ProdutoPlataforma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProdutoPlataforma */ "./src/app/shared/sdk/services/custom/ProdutoPlataforma.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoPlataformaApi", function() { return _ProdutoPlataforma__WEBPACK_IMPORTED_MODULE_2__["ProdutoPlataformaApi"]; });

/* harmony import */ var _VisitaProdutoPlataforma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VisitaProdutoPlataforma */ "./src/app/shared/sdk/services/custom/VisitaProdutoPlataforma.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisitaProdutoPlataformaApi", function() { return _VisitaProdutoPlataforma__WEBPACK_IMPORTED_MODULE_3__["VisitaProdutoPlataformaApi"]; });

/* harmony import */ var _ProdutoHotmart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProdutoHotmart */ "./src/app/shared/sdk/services/custom/ProdutoHotmart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoHotmartApi", function() { return _ProdutoHotmart__WEBPACK_IMPORTED_MODULE_4__["ProdutoHotmartApi"]; });

/* harmony import */ var _VisitaProdutoHotmart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VisitaProdutoHotmart */ "./src/app/shared/sdk/services/custom/VisitaProdutoHotmart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisitaProdutoHotmartApi", function() { return _VisitaProdutoHotmart__WEBPACK_IMPORTED_MODULE_5__["VisitaProdutoHotmartApi"]; });

/* harmony import */ var _TokenAcesso__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TokenAcesso */ "./src/app/shared/sdk/services/custom/TokenAcesso.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenAcessoApi", function() { return _TokenAcesso__WEBPACK_IMPORTED_MODULE_6__["TokenAcessoApi"]; });

/* harmony import */ var _IdeiaPalavraChave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IdeiaPalavraChave */ "./src/app/shared/sdk/services/custom/IdeiaPalavraChave.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeiaPalavraChaveApi", function() { return _IdeiaPalavraChave__WEBPACK_IMPORTED_MODULE_7__["IdeiaPalavraChaveApi"]; });

/* harmony import */ var _CampanhaAds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CampanhaAds */ "./src/app/shared/sdk/services/custom/CampanhaAds.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsApi", function() { return _CampanhaAds__WEBPACK_IMPORTED_MODULE_8__["CampanhaAdsApi"]; });

/* harmony import */ var _AnuncioCampanhaAds__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AnuncioCampanhaAds */ "./src/app/shared/sdk/services/custom/AnuncioCampanhaAds.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnuncioCampanhaAdsApi", function() { return _AnuncioCampanhaAds__WEBPACK_IMPORTED_MODULE_9__["AnuncioCampanhaAdsApi"]; });

/* harmony import */ var _PalavraCampanhaAds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PalavraCampanhaAds */ "./src/app/shared/sdk/services/custom/PalavraCampanhaAds.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PalavraCampanhaAdsApi", function() { return _PalavraCampanhaAds__WEBPACK_IMPORTED_MODULE_10__["PalavraCampanhaAdsApi"]; });

/* harmony import */ var _ProdutoAfiliadoHotmart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProdutoAfiliadoHotmart */ "./src/app/shared/sdk/services/custom/ProdutoAfiliadoHotmart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoHotmartApi", function() { return _ProdutoAfiliadoHotmart__WEBPACK_IMPORTED_MODULE_11__["ProdutoAfiliadoHotmartApi"]; });

/* harmony import */ var _AgendaVisitaHotmart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AgendaVisitaHotmart */ "./src/app/shared/sdk/services/custom/AgendaVisitaHotmart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgendaVisitaHotmartApi", function() { return _AgendaVisitaHotmart__WEBPACK_IMPORTED_MODULE_12__["AgendaVisitaHotmartApi"]; });

/* harmony import */ var _CampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CampanhaAdsTeste */ "./src/app/shared/sdk/services/custom/CampanhaAdsTeste.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsTesteApi", function() { return _CampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_13__["CampanhaAdsTesteApi"]; });

/* harmony import */ var _AnuncioAds__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AnuncioAds */ "./src/app/shared/sdk/services/custom/AnuncioAds.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnuncioAdsApi", function() { return _AnuncioAds__WEBPACK_IMPORTED_MODULE_14__["AnuncioAdsApi"]; });

/* harmony import */ var _ModeloCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ModeloCampanhaAdsTeste */ "./src/app/shared/sdk/services/custom/ModeloCampanhaAdsTeste.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModeloCampanhaAdsTesteApi", function() { return _ModeloCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_15__["ModeloCampanhaAdsTesteApi"]; });

/* harmony import */ var _PixelGoogle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PixelGoogle */ "./src/app/shared/sdk/services/custom/PixelGoogle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PixelGoogleApi", function() { return _PixelGoogle__WEBPACK_IMPORTED_MODULE_16__["PixelGoogleApi"]; });

/* harmony import */ var _PalavraChaveCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PalavraChaveCampanhaAdsTeste */ "./src/app/shared/sdk/services/custom/PalavraChaveCampanhaAdsTeste.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PalavraChaveCampanhaAdsTesteApi", function() { return _PalavraChaveCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_17__["PalavraChaveCampanhaAdsTesteApi"]; });

/* harmony import */ var _AnuncioCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AnuncioCampanhaAdsTeste */ "./src/app/shared/sdk/services/custom/AnuncioCampanhaAdsTeste.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnuncioCampanhaAdsTesteApi", function() { return _AnuncioCampanhaAdsTeste__WEBPACK_IMPORTED_MODULE_18__["AnuncioCampanhaAdsTesteApi"]; });

/* harmony import */ var _FacebookConta__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./FacebookConta */ "./src/app/shared/sdk/services/custom/FacebookConta.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookContaApi", function() { return _FacebookConta__WEBPACK_IMPORTED_MODULE_19__["FacebookContaApi"]; });

/* harmony import */ var _ProdutoAfiliadoMetrica__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ProdutoAfiliadoMetrica */ "./src/app/shared/sdk/services/custom/ProdutoAfiliadoMetrica.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoMetricaApi", function() { return _ProdutoAfiliadoMetrica__WEBPACK_IMPORTED_MODULE_20__["ProdutoAfiliadoMetricaApi"]; });

/* harmony import */ var _ContaGoogle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ContaGoogle */ "./src/app/shared/sdk/services/custom/ContaGoogle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContaGoogleApi", function() { return _ContaGoogle__WEBPACK_IMPORTED_MODULE_21__["ContaGoogleApi"]; });

/* harmony import */ var _CampanhaAdsMetrica__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./CampanhaAdsMetrica */ "./src/app/shared/sdk/services/custom/CampanhaAdsMetrica.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsMetricaApi", function() { return _CampanhaAdsMetrica__WEBPACK_IMPORTED_MODULE_22__["CampanhaAdsMetricaApi"]; });

/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SDKModels */ "./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return _SDKModels__WEBPACK_IMPORTED_MODULE_23__["SDKModels"]; });

/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./logger.service */ "./src/app/shared/sdk/services/custom/logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_24__["LoggerService"]; });

/* tslint:disable */



























/***/ }),

/***/ "./src/app/shared/sdk/services/custom/logger.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/sdk/services/custom/logger.service.ts ***!
  \**************************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lb.config */ "./src/app/shared/sdk/lb.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module LoggerService
* @license MIT
* @description
* Console Log wrapper that can be disabled in production mode
**/
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.log.apply(console, args);
    };
    LoggerService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.info.apply(console, args);
    };
    LoggerService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.error.apply(console, args);
    };
    LoggerService.prototype.count = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.group = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.groupEnd = function () {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.groupEnd();
    };
    LoggerService.prototype.profile = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.profileEnd = function () {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.profileEnd();
    };
    LoggerService.prototype.time = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.time(arg);
    };
    LoggerService.prototype.timeEnd = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.timeEnd(arg);
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/shared/sdk/services/index.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/sdk/services/index.ts ***!
  \**********************************************/
/*! exports provided: ErrorHandler, VisitaProdutoPlataformaApi, ProdutoHotmartApi, VisitaProdutoHotmartApi, TokenAcessoApi, IdeiaPalavraChaveApi, CampanhaAdsApi, AnuncioCampanhaAdsApi, PalavraCampanhaAdsApi, ProdutoAfiliadoHotmartApi, AgendaVisitaHotmartApi, CampanhaAdsTesteApi, AnuncioAdsApi, ModeloCampanhaAdsTesteApi, PixelGoogleApi, PalavraChaveCampanhaAdsTesteApi, AnuncioCampanhaAdsTesteApi, FacebookContaApi, ProdutoAfiliadoMetricaApi, ContaGoogleApi, CampanhaAdsMetricaApi, SDKModels, LoopBackAuth, BaseLoopBackApi, RealTime, UserApi, PlataformaVendaApi, ProdutoPlataformaApi, LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index */ "./src/app/shared/sdk/services/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["LoopBackAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["BaseLoopBackApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealTime", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["RealTime"]; });

/* harmony import */ var _custom_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom/index */ "./src/app/shared/sdk/services/custom/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisitaProdutoPlataformaApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["VisitaProdutoPlataformaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoHotmartApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["ProdutoHotmartApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisitaProdutoHotmartApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["VisitaProdutoHotmartApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenAcessoApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["TokenAcessoApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeiaPalavraChaveApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["IdeiaPalavraChaveApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["CampanhaAdsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnuncioCampanhaAdsApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["AnuncioCampanhaAdsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PalavraCampanhaAdsApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["PalavraCampanhaAdsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoHotmartApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["ProdutoAfiliadoHotmartApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgendaVisitaHotmartApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["AgendaVisitaHotmartApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsTesteApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["CampanhaAdsTesteApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnuncioAdsApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["AnuncioAdsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModeloCampanhaAdsTesteApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["ModeloCampanhaAdsTesteApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PixelGoogleApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["PixelGoogleApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PalavraChaveCampanhaAdsTesteApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["PalavraChaveCampanhaAdsTesteApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnuncioCampanhaAdsTesteApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["AnuncioCampanhaAdsTesteApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookContaApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["FacebookContaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoAfiliadoMetricaApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["ProdutoAfiliadoMetricaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContaGoogleApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["ContaGoogleApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CampanhaAdsMetricaApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["CampanhaAdsMetricaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["SDKModels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["UserApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlataformaVendaApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["PlataformaVendaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProdutoPlataformaApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["ProdutoPlataformaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]; });

/* tslint:disable */




/***/ }),

/***/ "./src/app/shared/sdk/sockets/socket.connections.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/sdk/sockets/socket.connections.ts ***!
  \**********************************************************/
/*! exports provided: SocketConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketConnection", function() { return SocketConnection; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_driver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.driver */ "./src/app/shared/sdk/sockets/socket.driver.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lb.config */ "./src/app/shared/sdk/lb.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */





/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var SocketConnection = /** @class */ (function () {
    /**
     * @method constructor
     * @param {SocketDriver} driver Socket IO Driver
     * @param {NgZone} zone Angular 2 Zone
     * @description
     * The constructor will set references for the shared hot observables from
     * the class subjects. Then it will subscribe each of these observables
     * that will create a channel that later will be shared between subscribers.
     **/
    function SocketConnection(driver, zone) {
        this.driver = driver;
        this.zone = zone;
        this.subjects = {
            onConnect: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
            onDisconnect: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
            onAuthenticated: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
            onUnAuthorized: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]()
        };
        this.sharedObservables = {};
        this.authenticated = false;
        this.sharedObservables = {
            sharedOnConnect: this.subjects.onConnect.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])()),
            sharedOnDisconnect: this.subjects.onDisconnect.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])()),
            sharedOnAuthenticated: this.subjects.onAuthenticated.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])()),
            sharedOnUnAuthorized: this.subjects.onUnAuthorized.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])())
        };
        // This is needed to create the first channel, subsequents will share the connection
        // We are using Hot Observables to avoid duplicating connection status events.
        this.sharedObservables.sharedOnConnect.subscribe();
        this.sharedObservables.sharedOnDisconnect.subscribe();
        this.sharedObservables.sharedOnAuthenticated.subscribe();
        this.sharedObservables.sharedOnUnAuthorized.subscribe();
    }
    /**
     * @method connect
     * @param {AccessToken} token AccesToken instance
     * @return {void}
     * @description
     * This method will create a new socket connection when not previously established.
     * If there is a broken connection it will re-connect.
     **/
    SocketConnection.prototype.connect = function (token) {
        var _this = this;
        if (token === void 0) { token = null; }
        if (!this.socket) {
            console.info('Creating a new connection with: ', _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath());
            // Create new socket connection
            this.socket = this.driver.connect(_lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(), {
                log: false,
                secure: _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].isSecureWebSocketsSet(),
                forceNew: true,
                forceWebsockets: true,
                transports: ['websocket']
            });
            // Listen for connection
            this.on('connect', function () {
                _this.subjects.onConnect.next('connected');
                // Authenticate or start heartbeat now    
                _this.emit('authentication', token);
            });
            // Listen for authentication
            this.on('authenticated', function () {
                _this.authenticated = true;
                _this.subjects.onAuthenticated.next();
                _this.heartbeater();
            });
            // Listen for authentication
            this.on('unauthorized', function (err) {
                _this.authenticated = false;
                _this.subjects.onUnAuthorized.next(err);
            });
            // Listen for disconnections
            this.on('disconnect', function (status) { return _this.subjects.onDisconnect.next(status); });
        }
        else if (this.socket && !this.socket.connected) {
            if (typeof this.socket.off === 'function') {
                this.socket.off();
            }
            if (typeof this.socket.destroy === 'function') {
                this.socket.destroy();
            }
            delete this.socket;
            this.connect(token);
        }
    };
    /**
     * @method isConnected
     * @return {boolean}
     * @description
     * This method will return true or false depending on established connections
     **/
    SocketConnection.prototype.isConnected = function () {
        return (this.socket && this.socket.connected);
    };
    /**
     * @method on
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method listen for server events from the current WebSocket connection.
     * This method is a facade that will wrap the original "on" method and run it
     * within the Angular Zone to avoid update issues.
     **/
    SocketConnection.prototype.on = function (event, handler) {
        var _this = this;
        this.socket.on(event, function (data) { return _this.zone.run(function () { return handler(data); }); });
    };
    /**
     * @method emit
     * @param {string} event Event name
     * @param {any=} data Any type of data
     * @return {void}
     * @description
     * This method will send any type of data to the server according the event set.
     **/
    SocketConnection.prototype.emit = function (event, data) {
        if (data) {
            this.socket.emit(event, data);
        }
        else {
            this.socket.emit(event);
        }
    };
    /**
     * @method removeListener
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeListener = function (event, handler) {
        if (typeof this.socket.off === 'function') {
            this.socket.off(event, handler);
        }
    };
    /**
     * @method removeAllListeners
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeAllListeners = function (event) {
        if (typeof this.socket.removeAllListeners === 'function') {
            this.socket.removeAllListeners(event);
        }
    };
    /**
     * @method disconnect
     * @return {void}
     * @description
     * This will disconnect the client from the server
     **/
    SocketConnection.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    /**
     * @method heartbeater
     * @return {void}
     * @description
     * This will keep the connection as active, even when users are not sending
     * data, this avoids disconnection because of a connection not being used.
     **/
    SocketConnection.prototype.heartbeater = function () {
        var _this = this;
        var heartbeater = setInterval(function () {
            if (_this.isConnected()) {
                _this.socket.emit('lb-ping');
            }
            else {
                _this.socket.removeAllListeners('lb-pong');
                clearInterval(heartbeater);
            }
        }, 15000);
        this.socket.on('lb-pong', function (data) { return console.info('Heartbeat: ', data); });
    };
    SocketConnection = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_socket_driver__WEBPACK_IMPORTED_MODULE_1__["SocketDriver"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])),
        __metadata("design:paramtypes", [_socket_driver__WEBPACK_IMPORTED_MODULE_1__["SocketDriver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SocketConnection);
    return SocketConnection;
}());



/***/ }),

/***/ "./src/app/shared/sdk/sockets/socket.driver.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sdk/sockets/socket.driver.ts ***!
  \*****************************************************/
/*! exports provided: SocketDriver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketDriver", function() { return SocketDriver; });
/* tslint:disable */
/**
 * @module SocketDriver
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SocketDriver class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var SocketDriver = /** @class */ (function () {
    function SocketDriver() {
    }
    SocketDriver.prototype.connect = function (url, options) { };
    return SocketDriver;
}());



/***/ }),

/***/ "./src/app/shared/sdk/storage/cookie.browser.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/sdk/storage/cookie.browser.ts ***!
  \******************************************************/
/*! exports provided: CookieBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieBrowser", function() { return CookieBrowser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module CookieBrowser
* @license MIT
* @description
* This module handle cookies, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var CookieBrowser = /** @class */ (function () {
    function CookieBrowser() {
        /**
         * @type {CookieInterface}
         **/
        this.cookies = {};
    }
    /**
     * @method get
     * @param {string} key Cookie key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.get = function (key) {
        if (!this.cookies[key]) {
            var cookie = window.document
                .cookie.split('; ')
                .filter(function (item) { return item.split('=')[0] === key; }).pop();
            if (!cookie) {
                return null;
            }
            this.cookies[key] = this.parse(cookie.split('=').slice(1).join('='));
        }
        return this.cookies[key];
    };
    /**
     * @method set
     * @param {string} key Cookie key name
     * @param {any} value Any value
     * @param {Date=} expires The date of expiration (Optional)
     * @return {void}
     * @description
     * The setter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.set = function (key, value, expires) {
        this.cookies[key] = value;
        var cookie = key + "=" + encodeURI(value) + "; path=/" + (expires ? "; expires=" + expires.toUTCString() : '');
        window.document.cookie = cookie;
    };
    /**
     * @method remove
     * @param {string} key Cookie key name
     * @return {void}
     * @description
     * This method will remove a cookie from the client.
     **/
    CookieBrowser.prototype.remove = function (key) {
        document.cookie = key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        delete this.cookies[key];
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    CookieBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(decodeURI(value));
        }
        catch (e) {
            return value;
        }
    };
    CookieBrowser = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CookieBrowser);
    return CookieBrowser;
}());



/***/ }),

/***/ "./src/app/shared/sdk/storage/storage.browser.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/sdk/storage/storage.browser.ts ***!
  \*******************************************************/
/*! exports provided: StorageBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageBrowser", function() { return StorageBrowser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module StorageBrowser
* @license MIT
* @description
* This module handle localStorage, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var StorageBrowser = /** @class */ (function () {
    function StorageBrowser() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.get = function (key) {
        var data = localStorage.getItem(key);
        return this.parse(data);
    };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.set = function (key, value, expires) {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    StorageBrowser.prototype.remove = function (key) {
        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
        else {
            console.log('Trying to remove unexisting key: ', key);
        }
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    StorageBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    StorageBrowser = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StorageBrowser);
    return StorageBrowser;
}());



/***/ }),

/***/ "./src/app/shared/sdk/storage/storage.swaps.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sdk/storage/storage.swaps.ts ***!
  \*****************************************************/
/*! exports provided: BaseStorage, InternalStorage, SDKStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseStorage", function() { return BaseStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalStorage", function() { return InternalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKStorage", function() { return SDKStorage; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* tslint:disable */
/**
 * @module Storage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var BaseStorage = /** @class */ (function () {
    function BaseStorage() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in storage.
     **/
    BaseStorage.prototype.get = function (key) { };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    BaseStorage.prototype.set = function (key, value, expires) { };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    BaseStorage.prototype.remove = function (key) { };
    return BaseStorage;
}());

/**
 * @module InternalStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 * This is mainly required because Angular Universal integration.
 * It does inject a CookieStorage instead of LocalStorage.
 **/
var InternalStorage = /** @class */ (function (_super) {
    __extends(InternalStorage, _super);
    function InternalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InternalStorage;
}(BaseStorage));

/**
 * @module SDKStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SDKStorage class is used for dependency injection swapping.
 * It will be provided using factory method according the right environment.
 * This is created for public usage, to allow persisting custom data
 * Into the local storage API.
 **/
var SDKStorage = /** @class */ (function (_super) {
    __extends(SDKStorage, _super);
    function SDKStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SDKStorage;
}(BaseStorage));



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    <a routerLink=\"/home\" class=\"simple-text\">\n      <div class=\"logo-img\">\n        <img src=\"assets/img/angular2-logo-white.png\" />\n      </div>\n      <span routerLink=\"/home\">Marketing Digital</span>\n    </a>\n  </div>\n\n  <ul class=\"nav responsive-nav\">\n    <li width=\"100%\">\n      <a routerLink=\"/plataforma\">\n        <i class=\"fa fa-search\"></i>\n        <p>Plataformas</p>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"nav responsive-nav\">\n    <li width=\"100%\">\n      <a routerLink=\"/tokenAcesso\">\n        <i class=\"fa fa-search\"></i>\n        <p>Tokens de Acesso</p>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"nav responsive-nav\">\n    <li width=\"100%\">\n      <a routerLink=\"/produtoHotmart\">\n        <i class=\"fa fa-search\"></i>\n        <p>Produto Hotmart</p>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"nav responsive-nav\">\n    <li width=\"100%\">\n      <a routerLink=\"/ideiaPalavraChave\">\n        <i class=\"fa fa-search\"></i>\n        <p>Idéia PalavraChave</p>\n      </a>\n    </li>\n  </ul>\n  <ul class=\"nav responsive-nav\">\n    <li width=\"100%\">\n      <a routerLink=\"/melhoresCpc\">\n        <i class=\"fa fa-search\"></i>\n        <p>(usar essse) Melhores Cpc</p>\n      </a>\n    </li>\n  </ul>\n  <ul class=\"nav responsive-nav\">\n    <li width=\"100%\">\n      <a routerLink=\"/melhoresTop\">\n        <i class=\"fa fa-search\"></i>\n        <p>Melhores Top</p>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"nav responsive-nav\">\n    <li width=\"100%\">\n      <a routerLink=\"/melhoresTopPesquisa\">\n        <i class=\"fa fa-search\"></i>\n        <p>Melhores Top Pesquisa</p>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"nav responsive-nav\">\n    <li width=\"100%\">\n      <a routerLink=\"/produtoAfiliadoHotmart\">\n        <i class=\"fa fa-search\"></i>\n        <p>Afiliados Hotmart</p>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"nav responsive-nav\">\n    <li width=\"100%\">\n      <a routerLink=\"/resumoVisitaHotmart\">\n        <i class=\"fa fa-search\"></i>\n        <p>Resumot Visita Hotmart</p>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"nav responsive-nav\">\n    <li width=\"100%\">\n      <a routerLink=\"/contaGoogle\">\n        <i class=\"fa fa-search\"></i>\n        <p>Conta Google</p>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"nav responsive-nav\">\n    <li width=\"100%\">\n      <a routerLink=\"/pixelGoogle\">\n        <i class=\"fa fa-search\"></i>\n        <p>Pixel Google</p>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"nav responsive-nav\">\n    <li width=\"100%\">\n      <a routerLink=\"/modeloCampanhaAdsTeste\">\n        <i class=\"fa fa-search\"></i>\n        <p>Modelo Campanha Ads</p>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"nav responsive-nav\">\n    <li width=\"100%\">\n      <a routerLink=\"/campanhaAdsTesteAtivaMetrica\">\n        <i class=\"fa fa-search\"></i>\n        <p>Campanha Ativa</p>\n      </a>\n    </li>\n  </ul>\n\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constantes_base_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constantes/base.url */ "./src/app/constantes/base.url.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.ambiente = '';
    }
    SidebarComponent.prototype.ngOnInit = function () {
        if (_constantes_base_url__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"].indexOf("21101") == -1)
            this.ambiente = ' Desen';
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/token-acesso-edit/token-acesso-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/token-acesso-edit/token-acesso-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/token-acesso-edit/token-acesso-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/token-acesso-edit/token-acesso-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"item\" mat-dialog-title>Rede Neural</h2>\n\n<form *ngIf=\"item\" class=\"example-full-width\" (ngSubmit)=\"onSubmit()\">\n\n  <mat-dialog-content>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #nome [(ngModel)]=\"item.nome\" name=\"nome\" placeholder=\"Nome\" />\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <textarea rows=\"8\" matInput #token [(ngModel)]=\"item.token\" name=\"token\" placeholder=\"Token\" ></textarea>\n    </mat-form-field>\n\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <button mat-raised-button>Salvar</button>\n    <button mat-raised-button mat-dialog-close>Fechar</button>\n  </mat-dialog-actions>\n\n</form>"

/***/ }),

/***/ "./src/app/token-acesso-edit/token-acesso-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/token-acesso-edit/token-acesso-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: TokenAcessoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenAcessoEditComponent", function() { return TokenAcessoEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_component_base_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-component/base-edit-component */ "./src/app/base-component/base-edit-component.ts");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TokenAcessoEditComponent = /** @class */ (function (_super) {
    __extends(TokenAcessoEditComponent, _super);
    function TokenAcessoEditComponent(dialogRef, data, servico) {
        var _this = _super.call(this, dialogRef, data, servico) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.servico = servico;
        return _this;
    }
    TokenAcessoEditComponent.prototype.criaItem = function () {
        var novo = new _shared_sdk__WEBPACK_IMPORTED_MODULE_3__["TokenAcesso"]();
        return novo;
    };
    TokenAcessoEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-token-acesso-edit',
            template: __webpack_require__(/*! ./token-acesso-edit.component.html */ "./src/app/token-acesso-edit/token-acesso-edit.component.html"),
            styles: [__webpack_require__(/*! ./token-acesso-edit.component.css */ "./src/app/token-acesso-edit/token-acesso-edit.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _shared_sdk__WEBPACK_IMPORTED_MODULE_3__["TokenAcessoApi"]])
    ], TokenAcessoEditComponent);
    return TokenAcessoEditComponent;
}(_base_component_base_edit_component__WEBPACK_IMPORTED_MODULE_2__["BaseEditComponent"]));



/***/ }),

/***/ "./src/app/token-acesso-list/token-acesso-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/token-acesso-list/token-acesso-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dgc-card {\n    width: 98%;\n}"

/***/ }),

/***/ "./src/app/token-acesso-list/token-acesso-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/token-acesso-list/token-acesso-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\">\n  <div class=\"dgc-painel-header\">\n      <span>Token Acesso</span>\n      <button class=\"btn btn-primary btn-sm dgc-botao-comando dgc-direita\" (click)=\"edita()\">novo</button>\n  </div>\n  <div *ngIf=\"listaBase\" class=\"dgc-painel-principal\">\n      <div class=\"dgc-card\" *ngFor=\"let item of listaBase\">\n          <div class=\"dgc-card-header\">\n            <span>{{item.nome}}</span>\n          </div>\n          <div class=\"dgc-card-header\">\n            <div style=\"overflow-x: hidden;\">{{item.token}}</div>\n          </div>\n          <div class=\"dgc-card-comandos\">\n              <button class=\"btn-primary btn-sm btn\" (click)=\"edita(item)\">Editar</button>\n          </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/token-acesso-list/token-acesso-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/token-acesso-list/token-acesso-list.component.ts ***!
  \******************************************************************/
/*! exports provided: TokenAcessoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenAcessoListComponent", function() { return TokenAcessoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_component_base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-component/base-list-component */ "./src/app/base-component/base-list-component.ts");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _token_acesso_edit_token_acesso_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../token-acesso-edit/token-acesso-edit.component */ "./src/app/token-acesso-edit/token-acesso-edit.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TokenAcessoListComponent = /** @class */ (function (_super) {
    __extends(TokenAcessoListComponent, _super);
    function TokenAcessoListComponent(dialog, srv) {
        var _this = _super.call(this, dialog, srv) || this;
        _this.dialog = dialog;
        _this.srv = srv;
        return _this;
    }
    TokenAcessoListComponent.prototype.getFiltro = function () {
        return {};
    };
    TokenAcessoListComponent.prototype.criaItem = function () {
        var novo = new _shared_sdk__WEBPACK_IMPORTED_MODULE_3__["TokenAcesso"]();
        return novo;
    };
    TokenAcessoListComponent.prototype.getComponente = function () {
        return _token_acesso_edit_token_acesso_edit_component__WEBPACK_IMPORTED_MODULE_4__["TokenAcessoEditComponent"];
    };
    TokenAcessoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-token-acesso-list',
            template: __webpack_require__(/*! ./token-acesso-list.component.html */ "./src/app/token-acesso-list/token-acesso-list.component.html"),
            styles: [__webpack_require__(/*! ./token-acesso-list.component.css */ "./src/app/token-acesso-list/token-acesso-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _shared_sdk__WEBPACK_IMPORTED_MODULE_3__["TokenAcessoApi"]])
    ], TokenAcessoListComponent);
    return TokenAcessoListComponent;
}(_base_component_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/visita-produto-hotmart-resumo/visita-produto-hotmart-resumo-base.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/visita-produto-hotmart-resumo/visita-produto-hotmart-resumo-base.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: VisitaProdutoHotmartResumoBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitaProdutoHotmartResumoBaseComponent", function() { return VisitaProdutoHotmartResumoBaseComponent; });
var VisitaProdutoHotmartResumoBaseComponent = /** @class */ (function () {
    function VisitaProdutoHotmartResumoBaseComponent(srv, router, dialog) {
        this.srv = srv;
        this.router = router;
        this.dialog = dialog;
    }
    VisitaProdutoHotmartResumoBaseComponent.prototype.ngOnInit = function () {
        this.preCarregaTela();
        this.carregaTela();
    };
    VisitaProdutoHotmartResumoBaseComponent.prototype.preCarregaTela = function () { };
    VisitaProdutoHotmartResumoBaseComponent.prototype.posCarregaLista = function () { };
    VisitaProdutoHotmartResumoBaseComponent.prototype.carregaTela = function () {
        var _this = this;
        this.srv.ResumoPorDataInsercao()
            .subscribe(function (result) {
            console.log('result: ', result);
            _this.listaBase = result;
            _this.posCarregaLista();
        });
    };
    VisitaProdutoHotmartResumoBaseComponent.prototype.dialogo1 = function (dados) {
        var _this = this;
        console.log('dialogo1.dados:', dados);
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getDialogo1(), {
            width: '800px',
            data: dados
        });
    };
    VisitaProdutoHotmartResumoBaseComponent.prototype.getDialogo1 = function () {
    };
    VisitaProdutoHotmartResumoBaseComponent.prototype.dialogo2 = function (dados) {
        var _this = this;
        console.log('dialogo2.dados:', dados);
        this.dialog.afterAllClosed.subscribe(function (result) {
            _this.carregaTela();
        });
        this.dialog.open(this.getDialogo2(), {
            width: '800px',
            data: dados
        });
    };
    VisitaProdutoHotmartResumoBaseComponent.prototype.getDialogo2 = function () {
    };
    VisitaProdutoHotmartResumoBaseComponent.prototype.getFiltro = function () {
        return {};
    };
    return VisitaProdutoHotmartResumoBaseComponent;
}());



/***/ }),

/***/ "./src/app/visita-produto-hotmart-resumo/visita-produto-hotmart-resumo.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/visita-produto-hotmart-resumo/visita-produto-hotmart-resumo.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/visita-produto-hotmart-resumo/visita-produto-hotmart-resumo.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/visita-produto-hotmart-resumo/visita-produto-hotmart-resumo.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dgc-painel\">\n\t<div class=\"dgc-painel-header\">\n\t\t<span>Resumo de Vista</span>\n\n\t</div>\n\t<div *ngIf=\"listaPrincipal\">\n\t\t<div class=\"dgc-card\" *ngFor=\"let item of listaPrincipal\">\n \t\t\t<div class=\"dgc-card-header\">\n \t\t\t\t<span>{{item.dataInsercao | date : 'dd/MM/yyy'}}</span>\n \t\t\t</div>\n \t\t\t<div class=\"dgc-card-header\">\n\t\t\t\t<span>Produtos Coletados: {{item.qtdeProduto}}</span>\n\t\t\t</div>\n \t\t</div>\n  \t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/visita-produto-hotmart-resumo/visita-produto-hotmart-resumo.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/visita-produto-hotmart-resumo/visita-produto-hotmart-resumo.component.ts ***!
  \******************************************************************************************/
/*! exports provided: VisitaProdutoHotmartResumoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitaProdutoHotmartResumoComponent", function() { return VisitaProdutoHotmartResumoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sdk */ "./src/app/shared/sdk/index.ts");
/* harmony import */ var _visita_produto_hotmart_resumo_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visita-produto-hotmart-resumo-base.component */ "./src/app/visita-produto-hotmart-resumo/visita-produto-hotmart-resumo-base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VisitaProdutoHotmartResumoComponent = /** @class */ (function (_super) {
    __extends(VisitaProdutoHotmartResumoComponent, _super);
    function VisitaProdutoHotmartResumoComponent(srv, router, dialog) {
        var _this = _super.call(this, srv, router, dialog) || this;
        _this.srv = srv;
        _this.router = router;
        _this.dialog = dialog;
        return _this;
    }
    VisitaProdutoHotmartResumoComponent.prototype.carregaTela = function () {
        var _this = this;
        this.srv.ResumoPorDataInsercao()
            .subscribe(function (result) {
            console.log('lista: ', result);
            _this.listaPrincipal = result;
            _this.posCarregaLista();
        });
    };
    VisitaProdutoHotmartResumoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visita-produto-hotmart-resumo',
            template: __webpack_require__(/*! ./visita-produto-hotmart-resumo.component.html */ "./src/app/visita-produto-hotmart-resumo/visita-produto-hotmart-resumo.component.html"),
            styles: [__webpack_require__(/*! ./visita-produto-hotmart-resumo.component.css */ "./src/app/visita-produto-hotmart-resumo/visita-produto-hotmart-resumo.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_sdk__WEBPACK_IMPORTED_MODULE_3__["VisitaProdutoHotmartApi"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], VisitaProdutoHotmartResumoComponent);
    return VisitaProdutoHotmartResumoComponent;
}(_visita_produto_hotmart_resumo_base_component__WEBPACK_IMPORTED_MODULE_4__["VisitaProdutoHotmartResumoBaseComponent"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/usuario/aplicacoes/MarketingDigital/loopback-angular6/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map