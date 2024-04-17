/* tslint:disable */
import {
  WhatsappGrupo
} from '../index';

declare var Object: any;
export interface ContaWhatsappInterface {
  "numero"?: string;
  "nome"?: string;
  "id"?: number;
  whatsappGrupos?: WhatsappGrupo[];
}

export class ContaWhatsapp implements ContaWhatsappInterface {
  "numero": string;
  "nome": string;
  "id": number;
  whatsappGrupos: WhatsappGrupo[];
  constructor(data?: ContaWhatsappInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContaWhatsapp`.
   */
  public static getModelName() {
    return "ContaWhatsapp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContaWhatsapp for dynamic purposes.
  **/
  public static factory(data: ContaWhatsappInterface): ContaWhatsapp{
    return new ContaWhatsapp(data);
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
      name: 'ContaWhatsapp',
      plural: 'ContaWhatsapps',
      path: 'ContaWhatsapps',
      idName: 'id',
      properties: {
        "numero": {
          name: 'numero',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        whatsappGrupos: {
          name: 'whatsappGrupos',
          type: 'WhatsappGrupo[]',
          model: 'WhatsappGrupo',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaWhatsappId'
        },
      }
    }
  }
}
