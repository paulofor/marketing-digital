/* tslint:disable */
import {
  ContaGoogle,
  PublicoAlvoAdsPalavra
} from '../index';

declare var Object: any;
export interface ContaPublicoAlvoAdsPalavraInterface {
  "contaGoogleId"?: number;
  "publicoAlvoAdsPalavraId"?: number;
  "resourceName"?: string;
  "tamanhoRedeDisplay"?: number;
  "dataCriacaoAds"?: Date;
  "pronta"?: number;
  contaGoogle?: ContaGoogle;
  publicoAlvoAdsPalavra?: PublicoAlvoAdsPalavra;
}

export class ContaPublicoAlvoAdsPalavra implements ContaPublicoAlvoAdsPalavraInterface {
  "contaGoogleId": number;
  "publicoAlvoAdsPalavraId": number;
  "resourceName": string;
  "tamanhoRedeDisplay": number;
  "dataCriacaoAds": Date;
  "pronta": number;
  contaGoogle: ContaGoogle;
  publicoAlvoAdsPalavra: PublicoAlvoAdsPalavra;
  constructor(data?: ContaPublicoAlvoAdsPalavraInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContaPublicoAlvoAdsPalavra`.
   */
  public static getModelName() {
    return "ContaPublicoAlvoAdsPalavra";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContaPublicoAlvoAdsPalavra for dynamic purposes.
  **/
  public static factory(data: ContaPublicoAlvoAdsPalavraInterface): ContaPublicoAlvoAdsPalavra{
    return new ContaPublicoAlvoAdsPalavra(data);
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
      name: 'ContaPublicoAlvoAdsPalavra',
      plural: 'ContaPublicoAlvoAdsPalavras',
      path: 'ContaPublicoAlvoAdsPalavras',
      idName: 'contaGoogleId',
      properties: {
        "contaGoogleId": {
          name: 'contaGoogleId',
          type: 'number'
        },
        "publicoAlvoAdsPalavraId": {
          name: 'publicoAlvoAdsPalavraId',
          type: 'number'
        },
        "resourceName": {
          name: 'resourceName',
          type: 'string'
        },
        "tamanhoRedeDisplay": {
          name: 'tamanhoRedeDisplay',
          type: 'number'
        },
        "dataCriacaoAds": {
          name: 'dataCriacaoAds',
          type: 'Date'
        },
        "pronta": {
          name: 'pronta',
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
        publicoAlvoAdsPalavra: {
          name: 'publicoAlvoAdsPalavra',
          type: 'PublicoAlvoAdsPalavra',
          model: 'PublicoAlvoAdsPalavra',
          relationType: 'belongsTo',
                  keyFrom: 'publicoAlvoAdsPalavraId',
          keyTo: 'id'
        },
      }
    }
  }
}
