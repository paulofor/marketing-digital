/* tslint:disable */

declare var Object: any;
export interface PaginaWhatsappExemploInterface {
  "url"?: string;
  "urlImagem"?: string;
  "id"?: number;
}

export class PaginaWhatsappExemplo implements PaginaWhatsappExemploInterface {
  "url": string;
  "urlImagem": string;
  "id": number;
  constructor(data?: PaginaWhatsappExemploInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaginaWhatsappExemplo`.
   */
  public static getModelName() {
    return "PaginaWhatsappExemplo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaginaWhatsappExemplo for dynamic purposes.
  **/
  public static factory(data: PaginaWhatsappExemploInterface): PaginaWhatsappExemplo{
    return new PaginaWhatsappExemplo(data);
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
      name: 'PaginaWhatsappExemplo',
      plural: 'PaginaWhatsappExemplos',
      path: 'PaginaWhatsappExemplos',
      idName: 'id',
      properties: {
        "url": {
          name: 'url',
          type: 'string'
        },
        "urlImagem": {
          name: 'urlImagem',
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
