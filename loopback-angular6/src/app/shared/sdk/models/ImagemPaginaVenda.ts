/* tslint:disable */
import {
  DalleSolicitacaoImagem,
  ProdutoAfiliadoHotlink,
  ProdutoProprio,
  ArquivoPaginaVenda,
  PaginaVendaPropria
} from '../index';

declare var Object: any;
export interface ImagemPaginaVendaInterface {
  "urlOriginal"?: string;
  "arquivoLocal"?: string;
  "promptRevisado"?: string;
  "dalleSolicitacaoImagemId"?: number;
  "disponivel"?: number;
  "urlFinal"?: string;
  "produtoProprioId"?: number;
  "hotmartId"?: number;
  "id"?: number;
  dalleSolicitacaoImagem?: DalleSolicitacaoImagem;
  produtoAfiliadoHotlink?: ProdutoAfiliadoHotlink;
  produtoProprio?: ProdutoProprio;
  arquivoPaginaVendas?: ArquivoPaginaVenda[];
  paginaVendaProprias?: PaginaVendaPropria[];
}

export class ImagemPaginaVenda implements ImagemPaginaVendaInterface {
  "urlOriginal": string;
  "arquivoLocal": string;
  "promptRevisado": string;
  "dalleSolicitacaoImagemId": number;
  "disponivel": number;
  "urlFinal": string;
  "produtoProprioId": number;
  "hotmartId": number;
  "id": number;
  dalleSolicitacaoImagem: DalleSolicitacaoImagem;
  produtoAfiliadoHotlink: ProdutoAfiliadoHotlink;
  produtoProprio: ProdutoProprio;
  arquivoPaginaVendas: ArquivoPaginaVenda[];
  paginaVendaProprias: PaginaVendaPropria[];
  constructor(data?: ImagemPaginaVendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ImagemPaginaVenda`.
   */
  public static getModelName() {
    return "ImagemPaginaVenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ImagemPaginaVenda for dynamic purposes.
  **/
  public static factory(data: ImagemPaginaVendaInterface): ImagemPaginaVenda{
    return new ImagemPaginaVenda(data);
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
      name: 'ImagemPaginaVenda',
      plural: 'ImagemPaginaVendas',
      path: 'ImagemPaginaVendas',
      idName: 'id',
      properties: {
        "urlOriginal": {
          name: 'urlOriginal',
          type: 'string'
        },
        "arquivoLocal": {
          name: 'arquivoLocal',
          type: 'string'
        },
        "promptRevisado": {
          name: 'promptRevisado',
          type: 'string'
        },
        "dalleSolicitacaoImagemId": {
          name: 'dalleSolicitacaoImagemId',
          type: 'number'
        },
        "disponivel": {
          name: 'disponivel',
          type: 'number'
        },
        "urlFinal": {
          name: 'urlFinal',
          type: 'string'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
          type: 'number'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        dalleSolicitacaoImagem: {
          name: 'dalleSolicitacaoImagem',
          type: 'DalleSolicitacaoImagem',
          model: 'DalleSolicitacaoImagem',
          relationType: 'belongsTo',
                  keyFrom: 'dalleSolicitacaoImagemId',
          keyTo: 'id'
        },
        produtoAfiliadoHotlink: {
          name: 'produtoAfiliadoHotlink',
          type: 'ProdutoAfiliadoHotlink',
          model: 'ProdutoAfiliadoHotlink',
          relationType: 'belongsTo',
                  keyFrom: 'hotmartId',
          keyTo: 'id'
        },
        produtoProprio: {
          name: 'produtoProprio',
          type: 'ProdutoProprio',
          model: 'ProdutoProprio',
          relationType: 'belongsTo',
                  keyFrom: 'produtoProprioId',
          keyTo: 'id'
        },
        arquivoPaginaVendas: {
          name: 'arquivoPaginaVendas',
          type: 'ArquivoPaginaVenda[]',
          model: 'ArquivoPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'imagemPaginaVendaId'
        },
        paginaVendaProprias: {
          name: 'paginaVendaProprias',
          type: 'PaginaVendaPropria[]',
          model: 'PaginaVendaPropria',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'imagemPaginaVendaId'
        },
      }
    }
  }
}
