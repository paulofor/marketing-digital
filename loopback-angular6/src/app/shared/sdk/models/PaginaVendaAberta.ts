/* tslint:disable */

declare var Object: any;
export interface PaginaVendaAbertaInterface {
  "id"?: number;
}

export class PaginaVendaAberta implements PaginaVendaAbertaInterface {
  "id": number;
  constructor(data?: PaginaVendaAbertaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaginaVendaAberta`.
   */
  public static getModelName() {
    return "PaginaVendaAberta";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaginaVendaAberta for dynamic purposes.
  **/
  public static factory(data: PaginaVendaAbertaInterface): PaginaVendaAberta{
    return new PaginaVendaAberta(data);
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
      name: 'PaginaVendaAberta',
      plural: 'PaginaVendaAberta',
      path: 'PaginaVendaAberta',
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
