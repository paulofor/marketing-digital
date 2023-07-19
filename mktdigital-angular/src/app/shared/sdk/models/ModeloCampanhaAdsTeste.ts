/* tslint:disable */
import {
  CampanhaAdsTeste
} from '../index';

declare var Object: any;
export interface ModeloCampanhaAdsTesteInterface {
  "orcamentoDiario"?: number;
  "qtdeDia"?: number;
  "diaInicial"?: number;
  "valorTotal"?: number;
  "multiplicadorCpcCusto"?: number;
  "tipoCpcCusto"?: string;
  "id"?: number;
  campanhaAdsTestes?: CampanhaAdsTeste[];
}

export class ModeloCampanhaAdsTeste implements ModeloCampanhaAdsTesteInterface {
  "orcamentoDiario": number;
  "qtdeDia": number;
  "diaInicial": number;
  "valorTotal": number;
  "multiplicadorCpcCusto": number;
  "tipoCpcCusto": string;
  "id": number;
  campanhaAdsTestes: CampanhaAdsTeste[];
  constructor(data?: ModeloCampanhaAdsTesteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ModeloCampanhaAdsTeste`.
   */
  public static getModelName() {
    return "ModeloCampanhaAdsTeste";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ModeloCampanhaAdsTeste for dynamic purposes.
  **/
  public static factory(data: ModeloCampanhaAdsTesteInterface): ModeloCampanhaAdsTeste{
    return new ModeloCampanhaAdsTeste(data);
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
    }
  }
}
