/* tslint:disable */
import {
  ExperimentoModelo
} from '../index';

declare var Object: any;
export interface CampanhaAdsExperimentoInterface {
  "resourceNameCampanha"?: string;
  "nomeCampanha"?: string;
  "experimentoModeloId"?: number;
  "id"?: number;
  experimentoModelo?: ExperimentoModelo;
}

export class CampanhaAdsExperimento implements CampanhaAdsExperimentoInterface {
  "resourceNameCampanha": string;
  "nomeCampanha": string;
  "experimentoModeloId": number;
  "id": number;
  experimentoModelo: ExperimentoModelo;
  constructor(data?: CampanhaAdsExperimentoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CampanhaAdsExperimento`.
   */
  public static getModelName() {
    return "CampanhaAdsExperimento";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CampanhaAdsExperimento for dynamic purposes.
  **/
  public static factory(data: CampanhaAdsExperimentoInterface): CampanhaAdsExperimento{
    return new CampanhaAdsExperimento(data);
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
      name: 'CampanhaAdsExperimento',
      plural: 'CampanhaAdsExperimentos',
      path: 'CampanhaAdsExperimentos',
      idName: 'id',
      properties: {
        "resourceNameCampanha": {
          name: 'resourceNameCampanha',
          type: 'string'
        },
        "nomeCampanha": {
          name: 'nomeCampanha',
          type: 'string'
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
