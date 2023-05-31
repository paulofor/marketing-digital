/* tslint:disable */

declare var Object: any;
export interface AgendaVisitaHotmartInterface {
  "data"?: string;
  "id"?: number;
}

export class AgendaVisitaHotmart implements AgendaVisitaHotmartInterface {
  "data": string;
  "id": number;
  constructor(data?: AgendaVisitaHotmartInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AgendaVisitaHotmart`.
   */
  public static getModelName() {
    return "AgendaVisitaHotmart";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AgendaVisitaHotmart for dynamic purposes.
  **/
  public static factory(data: AgendaVisitaHotmartInterface): AgendaVisitaHotmart{
    return new AgendaVisitaHotmart(data);
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
      name: 'AgendaVisitaHotmart',
      plural: 'AgendaVisitaHotmarts',
      path: 'AgendaVisitaHotmarts',
      idName: 'id',
      properties: {
        "data": {
          name: 'data',
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
