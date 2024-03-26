/* tslint:disable */

declare var Object: any;
export interface RecursoIAInterface {
  "id"?: number;
}

export class RecursoIA implements RecursoIAInterface {
  "id": number;
  constructor(data?: RecursoIAInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RecursoIA`.
   */
  public static getModelName() {
    return "RecursoIA";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RecursoIA for dynamic purposes.
  **/
  public static factory(data: RecursoIAInterface): RecursoIA{
    return new RecursoIA(data);
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
      name: 'RecursoIA',
      plural: 'RecursoIa',
      path: 'RecursoIa',
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
