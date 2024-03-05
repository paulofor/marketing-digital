/* tslint:disable */
import {
  VideoVsl
} from '../index';

declare var Object: any;
export interface TrechoVslInterface {
  "textoSsml"?: string;
  "texto"?: string;
  "urlImagem"?: string;
  "ordenacao"?: number;
  "videoVslId"?: number;
  "tempo"?: number;
  "arquivoAudio"?: string;
  "codigoHexa"?: string;
  "id"?: number;
  videoVsl?: VideoVsl;
}

export class TrechoVsl implements TrechoVslInterface {
  "textoSsml": string;
  "texto": string;
  "urlImagem": string;
  "ordenacao": number;
  "videoVslId": number;
  "tempo": number;
  "arquivoAudio": string;
  "codigoHexa": string;
  "id": number;
  videoVsl: VideoVsl;
  constructor(data?: TrechoVslInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TrechoVsl`.
   */
  public static getModelName() {
    return "TrechoVsl";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TrechoVsl for dynamic purposes.
  **/
  public static factory(data: TrechoVslInterface): TrechoVsl{
    return new TrechoVsl(data);
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
      name: 'TrechoVsl',
      plural: 'TrechoVsls',
      path: 'TrechoVsls',
      idName: 'id',
      properties: {
        "textoSsml": {
          name: 'textoSsml',
          type: 'string'
        },
        "texto": {
          name: 'texto',
          type: 'string'
        },
        "urlImagem": {
          name: 'urlImagem',
          type: 'string'
        },
        "ordenacao": {
          name: 'ordenacao',
          type: 'number'
        },
        "videoVslId": {
          name: 'videoVslId',
          type: 'number'
        },
        "tempo": {
          name: 'tempo',
          type: 'number'
        },
        "arquivoAudio": {
          name: 'arquivoAudio',
          type: 'string'
        },
        "codigoHexa": {
          name: 'codigoHexa',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        videoVsl: {
          name: 'videoVsl',
          type: 'VideoVsl',
          model: 'VideoVsl',
          relationType: 'belongsTo',
                  keyFrom: 'videoVslId',
          keyTo: 'id'
        },
      }
    }
  }
}
