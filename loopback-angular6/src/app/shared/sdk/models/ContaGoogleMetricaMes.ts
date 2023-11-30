/* tslint:disable */
import {
  ContaGoogle
} from '../index';

declare var Object: any;
export interface ContaGoogleMetricaMesInterface {
  "custoAtual"?: number;
  "status"?: string;
  "qtdeCampanhaAtiva"?: number;
  "contaGoogleId"?: number;
  "id"?: number;
  contaGoogle?: ContaGoogle;
}

export class ContaGoogleMetricaMes implements ContaGoogleMetricaMesInterface {
  "custoAtual": number;
  "status": string;
  "qtdeCampanhaAtiva": number;
  "contaGoogleId": number;
  "id": number;
  contaGoogle: ContaGoogle;
  constructor(data?: ContaGoogleMetricaMesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContaGoogleMetricaMes`.
   */
  public static getModelName() {
    return "ContaGoogleMetricaMes";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContaGoogleMetricaMes for dynamic purposes.
  **/
  public static factory(data: ContaGoogleMetricaMesInterface): ContaGoogleMetricaMes{
    return new ContaGoogleMetricaMes(data);
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
      name: 'ContaGoogleMetricaMes',
      plural: 'ContaGoogleMetricaMes',
      path: 'ContaGoogleMetricaMes',
      idName: 'id',
      properties: {
        "custoAtual": {
          name: 'custoAtual',
          type: 'number'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "qtdeCampanhaAtiva": {
          name: 'qtdeCampanhaAtiva',
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
        contaGoogle: {
          name: 'contaGoogle',
          type: 'ContaGoogle',
          model: 'ContaGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'contaGoogleId',
          keyTo: 'id'
        },
      }
    }
  }
}
