/* tslint:disable */
import {
  ExperimentoModelo
} from '../index';

declare var Object: any;
export interface EvolucaoExperimentoInterface {
  "acao"?: string;
  "resultado"?: string;
  "dataImplementacao"?: Date;
  "dataFinalizacao"?: Date;
  "experimentoModeloId"?: number;
  "id"?: number;
  experimentoModelo?: ExperimentoModelo;
}

export class EvolucaoExperimento implements EvolucaoExperimentoInterface {
  "acao": string;
  "resultado": string;
  "dataImplementacao": Date;
  "dataFinalizacao": Date;
  "experimentoModeloId": number;
  "id": number;
  experimentoModelo: ExperimentoModelo;
  constructor(data?: EvolucaoExperimentoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EvolucaoExperimento`.
   */
  public static getModelName() {
    return "EvolucaoExperimento";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EvolucaoExperimento for dynamic purposes.
  **/
  public static factory(data: EvolucaoExperimentoInterface): EvolucaoExperimento{
    return new EvolucaoExperimento(data);
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
      name: 'EvolucaoExperimento',
      plural: 'EvolucaoExperimentos',
      path: 'EvolucaoExperimentos',
      idName: 'id',
      properties: {
        "acao": {
          name: 'acao',
          type: 'string'
        },
        "resultado": {
          name: 'resultado',
          type: 'string'
        },
        "dataImplementacao": {
          name: 'dataImplementacao',
          type: 'Date'
        },
        "dataFinalizacao": {
          name: 'dataFinalizacao',
          type: 'Date'
        },
        "experimentoModeloId": {
          name: 'experimentoModeloId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        experimentoModelo: {
          name: 'experimentoModelo',
          type: 'ExperimentoModelo',
          model: 'ExperimentoModelo',
          relationType: 'belongsTo',
                  keyFrom: 'experimentoModeloId',
          keyTo: 'id'
        },
      }
    }
  }
}
