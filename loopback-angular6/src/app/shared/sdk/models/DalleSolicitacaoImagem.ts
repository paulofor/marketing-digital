/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  ImagemPaginaVenda,
  VersaoImagemPaginaVenda
} from '../index';

declare var Object: any;
export interface DalleSolicitacaoImagemInterface {
  "dimensao"?: string;
  "url"?: string;
  "prompt"?: string;
  "enviar"?: number;
  "hotmartId"?: number;
  "objetivo"?: string;
  "arquivo"?: string;
  "quantidadeImagem"?: number;
  "id"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  imagemPaginaVendas?: ImagemPaginaVenda[];
  versaoImagemPaginaVendas?: VersaoImagemPaginaVenda[];
}

export class DalleSolicitacaoImagem implements DalleSolicitacaoImagemInterface {
  "dimensao": string;
  "url": string;
  "prompt": string;
  "enviar": number;
  "hotmartId": number;
  "objetivo": string;
  "arquivo": string;
  "quantidadeImagem": number;
  "id": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  imagemPaginaVendas: ImagemPaginaVenda[];
  versaoImagemPaginaVendas: VersaoImagemPaginaVenda[];
  constructor(data?: DalleSolicitacaoImagemInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DalleSolicitacaoImagem`.
   */
  public static getModelName() {
    return "DalleSolicitacaoImagem";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DalleSolicitacaoImagem for dynamic purposes.
  **/
  public static factory(data: DalleSolicitacaoImagemInterface): DalleSolicitacaoImagem{
    return new DalleSolicitacaoImagem(data);
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
      name: 'DalleSolicitacaoImagem',
      plural: 'DalleSolicitacaoImagems',
      path: 'DalleSolicitacaoImagems',
      idName: 'id',
      properties: {
        "dimensao": {
          name: 'dimensao',
          type: 'string'
        },
        "url": {
          name: 'url',
          type: 'string'
        },
        "prompt": {
          name: 'prompt',
          type: 'string'
        },
        "enviar": {
          name: 'enviar',
          type: 'number'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "objetivo": {
          name: 'objetivo',
          type: 'string'
        },
        "arquivo": {
          name: 'arquivo',
          type: 'string'
        },
        "quantidadeImagem": {
          name: 'quantidadeImagem',
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
        imagemPaginaVendas: {
          name: 'imagemPaginaVendas',
          type: 'ImagemPaginaVenda[]',
          model: 'ImagemPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'dalleSolicitacaoImagemId'
        },
        versaoImagemPaginaVendas: {
          name: 'versaoImagemPaginaVendas',
          type: 'VersaoImagemPaginaVenda[]',
          model: 'VersaoImagemPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'dalleSolicitacaoImagemId'
        },
      }
    }
  }
}
