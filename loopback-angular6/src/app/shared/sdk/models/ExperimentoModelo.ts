/* tslint:disable */
import {
  EvolucaoExperimento,
  CampanhaAdsExperimento
} from '../index';

declare var Object: any;
export interface ExperimentoModeloInterface {
  "descricao"?: string;
  "dataInicial"?: Date;
  "custoAtual"?: number;
  "id"?: number;
  evolucaoExperimentos?: EvolucaoExperimento[];
  campanhaAdsExperimentos?: CampanhaAdsExperimento[];
}

export class ExperimentoModelo implements ExperimentoModeloInterface {
  "descricao": string;
  "dataInicial": Date;
  "custoAtual": number;
  "id": number;
  evolucaoExperimentos: EvolucaoExperimento[];
  campanhaAdsExperimentos: CampanhaAdsExperimento[];
  constructor(data?: ExperimentoModeloInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ExperimentoModelo`.
   */
  public static getModelName() {
    return "ExperimentoModelo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ExperimentoModelo for dynamic purposes.
  **/
  public static factory(data: ExperimentoModeloInterface): ExperimentoModelo{
    return new ExperimentoModelo(data);
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
      name: 'ExperimentoModelo',
      plural: 'ExperimentoModelos',
      path: 'ExperimentoModelos',
      idName: 'id',
      properties: {
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "dataInicial": {
          name: 'dataInicial',
          type: 'Date'
        },
        "custoAtual": {
          name: 'custoAtual',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        evolucaoExperimentos: {
          name: 'evolucaoExperimentos',
          type: 'EvolucaoExperimento[]',
          model: 'EvolucaoExperimento',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'experimentoModeloId'
        },
        campanhaAdsExperimentos: {
          name: 'campanhaAdsExperimentos',
          type: 'CampanhaAdsExperimento[]',
          model: 'CampanhaAdsExperimento',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'experimentoModeloId'
        },
      }
    }
  }
}
