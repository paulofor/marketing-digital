/* tslint:disable */

declare var Object: any;
export interface WhatsappGrupoDiarioInterface {
  "id"?: number;
}

export class WhatsappGrupoDiario implements WhatsappGrupoDiarioInterface {
  "id": number;
  constructor(data?: WhatsappGrupoDiarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `WhatsappGrupoDiario`.
   */
  public static getModelName() {
    return "WhatsappGrupoDiario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of WhatsappGrupoDiario for dynamic purposes.
  **/
  public static factory(data: WhatsappGrupoDiarioInterface): WhatsappGrupoDiario{
    return new WhatsappGrupoDiario(data);
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
      name: 'WhatsappGrupoDiario',
      plural: 'WhatsappGrupoDiarios',
      path: 'WhatsappGrupoDiarios',
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
