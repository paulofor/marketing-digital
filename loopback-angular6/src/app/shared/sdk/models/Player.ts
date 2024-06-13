/* tslint:disable */

declare var Object: any;
export interface PlayerInterface {
  "nome"?: string;
  "instagram"?: string;
  "youtube"?: string;
  "observacao"?: string;
  "id"?: number;
}

export class Player implements PlayerInterface {
  "nome": string;
  "instagram": string;
  "youtube": string;
  "observacao": string;
  "id": number;
  constructor(data?: PlayerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Player`.
   */
  public static getModelName() {
    return "Player";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Player for dynamic purposes.
  **/
  public static factory(data: PlayerInterface): Player{
    return new Player(data);
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
      name: 'Player',
      plural: 'Players',
      path: 'Players',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "instagram": {
          name: 'instagram',
          type: 'string'
        },
        "youtube": {
          name: 'youtube',
          type: 'string'
        },
        "observacao": {
          name: 'observacao',
          type: 'string'
        },
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
