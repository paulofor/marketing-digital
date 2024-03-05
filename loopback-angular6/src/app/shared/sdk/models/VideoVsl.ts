/* tslint:disable */
import {
  ProdutoProprio,
  PaginaVendaVsl,
  TrechoVsl,
  ScriptGeraVideo
} from '../index';

declare var Object: any;
export interface VideoVslInterface {
  "nome"?: string;
  "voz"?: string;
  "arquivoAudioCompleto"?: string;
  "arquivoLegenda"?: string;
  "urlVideo"?: string;
  "urlChatGpt1"?: string;
  "urlChatGpt2"?: string;
  "urlChatGpt3"?: string;
  "arquivoVideo"?: string;
  "codigoYouTube"?: string;
  "criaAudioLegenda"?: number;
  "produtoProprioId"?: number;
  "scriptGeraVideoId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  paginaVendaVsls?: PaginaVendaVsl[];
  trechoVsls?: TrechoVsl[];
  scriptGeraVideo?: ScriptGeraVideo;
}

export class VideoVsl implements VideoVslInterface {
  "nome": string;
  "voz": string;
  "arquivoAudioCompleto": string;
  "arquivoLegenda": string;
  "urlVideo": string;
  "urlChatGpt1": string;
  "urlChatGpt2": string;
  "urlChatGpt3": string;
  "arquivoVideo": string;
  "codigoYouTube": string;
  "criaAudioLegenda": number;
  "produtoProprioId": number;
  "scriptGeraVideoId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  paginaVendaVsls: PaginaVendaVsl[];
  trechoVsls: TrechoVsl[];
  scriptGeraVideo: ScriptGeraVideo;
  constructor(data?: VideoVslInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VideoVsl`.
   */
  public static getModelName() {
    return "VideoVsl";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VideoVsl for dynamic purposes.
  **/
  public static factory(data: VideoVslInterface): VideoVsl{
    return new VideoVsl(data);
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
      name: 'VideoVsl',
      plural: 'VideoVsls',
      path: 'VideoVsls',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "voz": {
          name: 'voz',
          type: 'string'
        },
        "arquivoAudioCompleto": {
          name: 'arquivoAudioCompleto',
          type: 'string'
        },
        "arquivoLegenda": {
          name: 'arquivoLegenda',
          type: 'string'
        },
        "urlVideo": {
          name: 'urlVideo',
          type: 'string'
        },
        "urlChatGpt1": {
          name: 'urlChatGpt1',
          type: 'string'
        },
        "urlChatGpt2": {
          name: 'urlChatGpt2',
          type: 'string'
        },
        "urlChatGpt3": {
          name: 'urlChatGpt3',
          type: 'string'
        },
        "arquivoVideo": {
          name: 'arquivoVideo',
          type: 'string'
        },
        "codigoYouTube": {
          name: 'codigoYouTube',
          type: 'string'
        },
        "criaAudioLegenda": {
          name: 'criaAudioLegenda',
          type: 'number'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
          type: 'number'
        },
        "scriptGeraVideoId": {
          name: 'scriptGeraVideoId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        produtoProprio: {
          name: 'produtoProprio',
          type: 'ProdutoProprio',
          model: 'ProdutoProprio',
          relationType: 'belongsTo',
                  keyFrom: 'produtoProprioId',
          keyTo: 'id'
        },
        paginaVendaVsls: {
          name: 'paginaVendaVsls',
          type: 'PaginaVendaVsl[]',
          model: 'PaginaVendaVsl',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'videoVslId'
        },
        trechoVsls: {
          name: 'trechoVsls',
          type: 'TrechoVsl[]',
          model: 'TrechoVsl',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'videoVslId'
        },
        scriptGeraVideo: {
          name: 'scriptGeraVideo',
          type: 'ScriptGeraVideo',
          model: 'ScriptGeraVideo',
          relationType: 'belongsTo',
                  keyFrom: 'scriptGeraVideoId',
          keyTo: 'id'
        },
      }
    }
  }
}
