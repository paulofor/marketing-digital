/* tslint:disable */

declare var Object: any;
export interface VideoExecucaoInterface {
  "id"?: number;
}

export class VideoExecucao implements VideoExecucaoInterface {
  "id": number;
  constructor(data?: VideoExecucaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VideoExecucao`.
   */
  public static getModelName() {
    return "VideoExecucao";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VideoExecucao for dynamic purposes.
  **/
  public static factory(data: VideoExecucaoInterface): VideoExecucao{
    return new VideoExecucao(data);
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
      name: 'VideoExecucao',
      plural: 'VideoExecucaos',
      path: 'VideoExecucaos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
