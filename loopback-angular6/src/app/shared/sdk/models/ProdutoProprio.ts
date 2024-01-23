/* tslint:disable */
import {
  ProdutoProprioVersao,
  VersaoPaginaVenda,
  ImagemPaginaVenda
} from '../index';

declare var Object: any;
export interface ProdutoProprioInterface {
  "nome"?: string;
  "status"?: string;
  "id"?: number;
  produtoProprioVersaos?: ProdutoProprioVersao[];
  versaoPaginaVendas?: VersaoPaginaVenda[];
  imagemPaginaVendas?: ImagemPaginaVenda[];
}

export class ProdutoProprio implements ProdutoProprioInterface {
  "nome": string;
  "status": string;
  "id": number;
  produtoProprioVersaos: ProdutoProprioVersao[];
  versaoPaginaVendas: VersaoPaginaVenda[];
  imagemPaginaVendas: ImagemPaginaVenda[];
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
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
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
        imagemPaginaVendas: {
          name: 'imagemPaginaVendas',
          type: 'ImagemPaginaVenda[]',
          model: 'ImagemPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoProprioId'
        },
      }
    }
  }
}
