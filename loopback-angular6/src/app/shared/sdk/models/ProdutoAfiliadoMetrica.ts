/* tslint:disable */
import {
  VisitaProdutoHotmart,
  IdeiaPalavraChave
} from '../index';

declare var Object: any;
export interface ProdutoAfiliadoMetricaInterface {
  "hotmartId"?: number;
  "cpcMax"?: number;
  "cpcMin"?: number;
  "cpcReferencia"?: number;
  "comissao"?: number;
  "lucroVenda01"?: number;
  "cpc100"?: number;
  "palavra"?: string;
  "temperaturaProduto"?: number;
  "mediaPesquisaPalavra"?: number;
  "ideiaPalavraChaveId"?: number;
  visitaProdutoHotmart?: VisitaProdutoHotmart;
  ideiaPalavraChave?: IdeiaPalavraChave;
}

export class ProdutoAfiliadoMetrica implements ProdutoAfiliadoMetricaInterface {
  "hotmartId": number;
  "cpcMax": number;
  "cpcMin": number;
  "cpcReferencia": number;
  "comissao": number;
  "lucroVenda01": number;
  "cpc100": number;
  "palavra": string;
  "temperaturaProduto": number;
  "mediaPesquisaPalavra": number;
  "ideiaPalavraChaveId": number;
  visitaProdutoHotmart: VisitaProdutoHotmart;
  ideiaPalavraChave: IdeiaPalavraChave;
  constructor(data?: ProdutoAfiliadoMetricaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProdutoAfiliadoMetrica`.
   */
  public static getModelName() {
    return "ProdutoAfiliadoMetrica";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProdutoAfiliadoMetrica for dynamic purposes.
  **/
  public static factory(data: ProdutoAfiliadoMetricaInterface): ProdutoAfiliadoMetrica{
    return new ProdutoAfiliadoMetrica(data);
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
    }
  }
}
