/* tslint:disable */
import {
  PalavraChaveEstatistica
} from '../index';

declare var Object: any;
export interface PalavraChaveRaizInterface {
  "palavra"?: string;
  "ativo"?: number;
  "dataUltimaAtualizacao"?: Date;
  "qtdePalavra"?: number;
  "id"?: number;
  palavraChaveEstatisticas?: PalavraChaveEstatistica[];
}

export class PalavraChaveRaiz implements PalavraChaveRaizInterface {
  "palavra": string;
  "ativo": number;
  "dataUltimaAtualizacao": Date;
  "qtdePalavra": number;
  "id": number;
  palavraChaveEstatisticas: PalavraChaveEstatistica[];
  constructor(data?: PalavraChaveRaizInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PalavraChaveRaiz`.
   */
  public static getModelName() {
    return "PalavraChaveRaiz";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PalavraChaveRaiz for dynamic purposes.
  **/
  public static factory(data: PalavraChaveRaizInterface): PalavraChaveRaiz{
    return new PalavraChaveRaiz(data);
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
      name: 'PalavraChaveRaiz',
      plural: 'PalavraChaveRaizs',
      path: 'PalavraChaveRaizs',
      idName: 'id',
      properties: {
        "palavra": {
          name: 'palavra',
          type: 'string'
        },
        "ativo": {
          name: 'ativo',
          type: 'number'
        },
        "dataUltimaAtualizacao": {
          name: 'dataUltimaAtualizacao',
          type: 'Date'
        },
        "qtdePalavra": {
          name: 'qtdePalavra',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        palavraChaveEstatisticas: {
          name: 'palavraChaveEstatisticas',
          type: 'PalavraChaveEstatistica[]',
          model: 'PalavraChaveEstatistica',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'palavraChaveRaizId'
        },
      }
    }
  }
}
