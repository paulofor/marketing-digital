/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  ProdutoProprio,
  ModeloPaginaVenda,
  ProdutoAfiliadoHotlink,
  ContaGoogle,
  ConteudoElemento,
  ArquivoPaginaVenda,
  ProdutoAfiliadoClickbank,
  VersaoImagemPaginaVenda,
  PaginaVendaPropria
} from '../index';

declare var Object: any;
export interface VersaoPaginaVendaInterface {
  "hotmartId"?: number;
  "versao"?: string;
  "cria"?: number;
  "status"?: string;
  "dataCriaPagina"?: Date;
  "produtoProprioId"?: number;
  "modeloPaginaVendaId"?: number;
  "produtoAfiliadoClickbankId"?: number;
  "produtoAfiliadoHotlinkId"?: number;
  "contaGoogleId"?: number;
  "id"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  produtoProprio?: ProdutoProprio;
  modeloPaginaVenda?: ModeloPaginaVenda;
  produtoAfiliadoHotlink?: ProdutoAfiliadoHotlink;
  contaGoogle?: ContaGoogle;
  conteudoElementos?: ConteudoElemento[];
  arquivoPaginaVendas?: ArquivoPaginaVenda[];
  produtoAfiliadoClickbank?: ProdutoAfiliadoClickbank;
  versaoImagemPaginaVendas?: VersaoImagemPaginaVenda[];
  paginaVendaProprias?: PaginaVendaPropria[];
}

export class VersaoPaginaVenda implements VersaoPaginaVendaInterface {
  "hotmartId": number;
  "versao": string;
  "cria": number;
  "status": string;
  "dataCriaPagina": Date;
  "produtoProprioId": number;
  "modeloPaginaVendaId": number;
  "produtoAfiliadoClickbankId": number;
  "produtoAfiliadoHotlinkId": number;
  "contaGoogleId": number;
  "id": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  produtoProprio: ProdutoProprio;
  modeloPaginaVenda: ModeloPaginaVenda;
  produtoAfiliadoHotlink: ProdutoAfiliadoHotlink;
  contaGoogle: ContaGoogle;
  conteudoElementos: ConteudoElemento[];
  arquivoPaginaVendas: ArquivoPaginaVenda[];
  produtoAfiliadoClickbank: ProdutoAfiliadoClickbank;
  versaoImagemPaginaVendas: VersaoImagemPaginaVenda[];
  paginaVendaProprias: PaginaVendaPropria[];
  constructor(data?: VersaoPaginaVendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VersaoPaginaVenda`.
   */
  public static getModelName() {
    return "VersaoPaginaVenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VersaoPaginaVenda for dynamic purposes.
  **/
  public static factory(data: VersaoPaginaVendaInterface): VersaoPaginaVenda{
    return new VersaoPaginaVenda(data);
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
      name: 'VersaoPaginaVenda',
      plural: 'VersaoPaginaVendas',
      path: 'VersaoPaginaVendas',
      idName: 'id',
      properties: {
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "versao": {
          name: 'versao',
          type: 'string'
        },
        "cria": {
          name: 'cria',
          type: 'number'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "dataCriaPagina": {
          name: 'dataCriaPagina',
          type: 'Date'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
          type: 'number'
        },
        "modeloPaginaVendaId": {
          name: 'modeloPaginaVendaId',
          type: 'number'
        },
        "produtoAfiliadoClickbankId": {
          name: 'produtoAfiliadoClickbankId',
          type: 'number'
        },
        "produtoAfiliadoHotlinkId": {
          name: 'produtoAfiliadoHotlinkId',
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
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        produtoProprio: {
          name: 'produtoProprio',
          type: 'ProdutoProprio',
          model: 'ProdutoProprio',
          relationType: 'belongsTo',
                  keyFrom: 'produtoProprioId',
          keyTo: 'id'
        },
        modeloPaginaVenda: {
          name: 'modeloPaginaVenda',
          type: 'ModeloPaginaVenda',
          model: 'ModeloPaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'modeloPaginaVendaId',
          keyTo: 'id'
        },
        produtoAfiliadoHotlink: {
          name: 'produtoAfiliadoHotlink',
          type: 'ProdutoAfiliadoHotlink',
          model: 'ProdutoAfiliadoHotlink',
          relationType: 'belongsTo',
                  keyFrom: 'produtoAfiliadoHotlinkId',
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
        conteudoElementos: {
          name: 'conteudoElementos',
          type: 'ConteudoElemento[]',
          model: 'ConteudoElemento',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'versaoPaginaVendaId'
        },
        arquivoPaginaVendas: {
          name: 'arquivoPaginaVendas',
          type: 'ArquivoPaginaVenda[]',
          model: 'ArquivoPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'versaoPaginaVendaId'
        },
        produtoAfiliadoClickbank: {
          name: 'produtoAfiliadoClickbank',
          type: 'ProdutoAfiliadoClickbank',
          model: 'ProdutoAfiliadoClickbank',
          relationType: 'belongsTo',
                  keyFrom: 'produtoAfiliadoClickbankId',
          keyTo: 'id'
        },
        versaoImagemPaginaVendas: {
          name: 'versaoImagemPaginaVendas',
          type: 'VersaoImagemPaginaVenda[]',
          model: 'VersaoImagemPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'versaoPaginaVendaId'
        },
        paginaVendaProprias: {
          name: 'paginaVendaProprias',
          type: 'PaginaVendaPropria[]',
          model: 'PaginaVendaPropria',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'versaoPaginaVendaId'
        },
      }
    }
  }
}
