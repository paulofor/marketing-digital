/* tslint:disable */
import {
  VideoVsl
} from '../index';

declare var Object: any;
export interface ScriptGeraVideoInterface {
  "nome"?: string;
  "arquivo"?: string;
  "descricao"?: string;
  "fonte"?: string;
  "id"?: number;
  videoVsls?: VideoVsl[];
}

export class ScriptGeraVideo implements ScriptGeraVideoInterface {
  "nome": string;
  "arquivo": string;
  "descricao": string;
  "fonte": string;
  "id": number;
  videoVsls: VideoVsl[];
  constructor(data?: ScriptGeraVideoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ScriptGeraVideo`.
   */
  public static getModelName() {
    return "ScriptGeraVideo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ScriptGeraVideo for dynamic purposes.
  **/
  public static factory(data: ScriptGeraVideoInterface): ScriptGeraVideo{
    return new ScriptGeraVideo(data);
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
      name: 'ScriptGeraVideo',
      plural: 'ScriptGeraVideos',
      path: 'ScriptGeraVideos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "arquivo": {
          name: 'arquivo',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "fonte": {
          name: 'fonte',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        videoVsls: {
          name: 'videoVsls',
          type: 'VideoVsl[]',
          model: 'VideoVsl',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'scriptGeraVideoId'
        },
      }
    }
  }
}
