/* tslint:disable */
import {
  CampanhaAdsTeste,
  IdeiaPalavraChave
} from '../index';

declare var Object: any;
export interface PalavraChaveCampanhaAdsTesteInterface {
  "campanhaAdsTesteId"?: number;
  "ideiaPalavraChaveId"?: number;
  "id"?: number;
  campanhaAdsTeste?: CampanhaAdsTeste;
  ideiaPalavraChave?: IdeiaPalavraChave;
}

export class PalavraChaveCampanhaAdsTeste implements PalavraChaveCampanhaAdsTesteInterface {
  "campanhaAdsTesteId": number;
  "ideiaPalavraChaveId": number;
  "id": number;
  campanhaAdsTeste: CampanhaAdsTeste;
  ideiaPalavraChave: IdeiaPalavraChave;
  constructor(data?: PalavraChaveCampanhaAdsTesteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PalavraChaveCampanhaAdsTeste`.
   */
  public static getModelName() {
    return "PalavraChaveCampanhaAdsTeste";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PalavraChaveCampanhaAdsTeste for dynamic purposes.
  **/
  public static factory(data: PalavraChaveCampanhaAdsTesteInterface): PalavraChaveCampanhaAdsTeste{
    return new PalavraChaveCampanhaAdsTeste(data);
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
      name: 'PalavraChaveCampanhaAdsTeste',
      plural: 'PalavraChaveCampanhaAdsTestes',
      path: 'PalavraChaveCampanhaAdsTestes',
      idName: 'id',
      properties: {
        "campanhaAdsTesteId": {
          name: 'campanhaAdsTesteId',
          type: 'number'
        },
        "ideiaPalavraChaveId": {
          name: 'ideiaPalavraChaveId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        campanhaAdsTeste: {
          name: 'campanhaAdsTeste',
          type: 'CampanhaAdsTeste',
          model: 'CampanhaAdsTeste',
          relationType: 'belongsTo',
                  keyFrom: 'campanhaAdsTesteId',
          keyTo: 'id'
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
