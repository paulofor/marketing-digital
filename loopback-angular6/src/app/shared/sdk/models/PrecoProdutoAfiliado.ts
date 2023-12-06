/* tslint:disable */
import {
  ProdutoAfiliadoHotmart
} from '../index';

declare var Object: any;
export interface PrecoProdutoAfiliadoInterface {
  "valorAVista"?: number;
  "nome"?: string;
  "parcelas"?: number;
  "valorParcela"?: number;
  "urlCheckout"?: string;
  "hotmartId"?: number;
  "valorComissao"?: number;
  "valorTotalParcelado"?: number;
  "valorComissaoParcelado"?: number;
  "percentualComissaoAtual"?: number;
  "cpcDesejado"?: number;
  "id"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
}

export class PrecoProdutoAfiliado implements PrecoProdutoAfiliadoInterface {
  "valorAVista": number;
  "nome": string;
  "parcelas": number;
  "valorParcela": number;
  "urlCheckout": string;
  "hotmartId": number;
  "valorComissao": number;
  "valorTotalParcelado": number;
  "valorComissaoParcelado": number;
  "percentualComissaoAtual": number;
  "cpcDesejado": number;
  "id": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  constructor(data?: PrecoProdutoAfiliadoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PrecoProdutoAfiliado`.
   */
  public static getModelName() {
    return "PrecoProdutoAfiliado";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PrecoProdutoAfiliado for dynamic purposes.
  **/
  public static factory(data: PrecoProdutoAfiliadoInterface): PrecoProdutoAfiliado{
    return new PrecoProdutoAfiliado(data);
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
      name: 'PrecoProdutoAfiliado',
      plural: 'PrecoProdutoAfiliados',
      path: 'PrecoProdutoAfiliados',
      idName: 'id',
      properties: {
        "valorAVista": {
          name: 'valorAVista',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "parcelas": {
          name: 'parcelas',
          type: 'number'
        },
        "valorParcela": {
          name: 'valorParcela',
          type: 'number'
        },
        "urlCheckout": {
          name: 'urlCheckout',
          type: 'string'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "valorComissao": {
          name: 'valorComissao',
          type: 'number'
        },
        "valorTotalParcelado": {
          name: 'valorTotalParcelado',
          type: 'number'
        },
        "valorComissaoParcelado": {
          name: 'valorComissaoParcelado',
          type: 'number'
        },
        "percentualComissaoAtual": {
          name: 'percentualComissaoAtual',
          type: 'number'
        },
        "cpcDesejado": {
          name: 'cpcDesejado',
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
      }
    }
  }
}
