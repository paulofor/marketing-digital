/* tslint:disable */

declare var Object: any;
export interface ModeloCampanhaAdsTesteInterface {
  "orcamentoDiario"?: number;
  "qtdeDia"?: number;
  "diaInicial"?: number;
  "valorTotal"?: number;
  "tipoCpcCusto"?: string;
  "multiplicadorCpcCusto"?: number;
  "id"?: number;
}

export class ModeloCampanhaAdsTeste implements ModeloCampanhaAdsTesteInterface {
  "orcamentoDiario": number;
  "qtdeDia": number;
  "diaInicial": number;
  "valorTotal": number;
  "tipoCpcCusto": string;
  "multiplicadorCpcCusto": number;
  "id": number;
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
        "tipoCpcCusto": {
          name: 'tipoCpcCusto',
          type: 'string'
        },
        "multiplicadorCpcCusto": {
          name: 'multiplicadorCpcCusto',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
