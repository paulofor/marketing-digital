/* tslint:disable */
import {
  PalavraChaveGoogle,
  PalavraChaveRaiz
} from '../index';

declare var Object: any;
export interface PalavraChaveEstatisticaInterface {
  "dataConsulta"?: Date;
  "mediaCpc"?: number;
  "volumePesquisa"?: number;
  "indiceCompeticao"?: number;
  "palavraChaveRaizId"?: number;
  "maisRecente"?: number;
  "palavraChaveGoogleId"?: string;
  "id"?: number;
  palavraChaveGoogle?: PalavraChaveGoogle;
  palavraChaveRaiz?: PalavraChaveRaiz;
}

export class PalavraChaveEstatistica implements PalavraChaveEstatisticaInterface {
  "dataConsulta": Date;
  "mediaCpc": number;
  "volumePesquisa": number;
  "indiceCompeticao": number;
  "palavraChaveRaizId": number;
  "maisRecente": number;
  "palavraChaveGoogleId": string;
  "id": number;
  palavraChaveGoogle: PalavraChaveGoogle;
  palavraChaveRaiz: PalavraChaveRaiz;
  constructor(data?: PalavraChaveEstatisticaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PalavraChaveEstatistica`.
   */
  public static getModelName() {
    return "PalavraChaveEstatistica";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PalavraChaveEstatistica for dynamic purposes.
  **/
  public static factory(data: PalavraChaveEstatisticaInterface): PalavraChaveEstatistica{
    return new PalavraChaveEstatistica(data);
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
      name: 'PalavraChaveEstatistica',
      plural: 'PalavraChaveEstatisticas',
      path: 'PalavraChaveEstatisticas',
      idName: 'id',
      properties: {
        "dataConsulta": {
          name: 'dataConsulta',
          type: 'Date'
        },
        "mediaCpc": {
          name: 'mediaCpc',
          type: 'number'
        },
        "volumePesquisa": {
          name: 'volumePesquisa',
          type: 'number'
        },
        "indiceCompeticao": {
          name: 'indiceCompeticao',
          type: 'number'
        },
        "palavraChaveRaizId": {
          name: 'palavraChaveRaizId',
          type: 'number'
        },
        "maisRecente": {
          name: 'maisRecente',
          type: 'number'
        },
        "palavraChaveGoogleId": {
          name: 'palavraChaveGoogleId',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        palavraChaveGoogle: {
          name: 'palavraChaveGoogle',
          type: 'PalavraChaveGoogle',
          model: 'PalavraChaveGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'palavraChaveGoogleId',
          keyTo: 'palavra'
        },
        palavraChaveRaiz: {
          name: 'palavraChaveRaiz',
          type: 'PalavraChaveRaiz',
          model: 'PalavraChaveRaiz',
          relationType: 'belongsTo',
                  keyFrom: 'palavraChaveRaizId',
          keyTo: 'id'
        },
      }
    }
  }
}
