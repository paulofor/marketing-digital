/* tslint:disable */
import {
  WhatsappGrupo
} from '../index';

declare var Object: any;
export interface MembroWhatsappGrupoInterface {
  "data"?: Date;
  "quantidadeTotal"?: number;
  "diferencaDiaAnterior"?: number;
  "whatsappGrupoId"?: number;
  whatsappGrupo?: WhatsappGrupo;
}

export class MembroWhatsappGrupo implements MembroWhatsappGrupoInterface {
  "data": Date;
  "quantidadeTotal": number;
  "diferencaDiaAnterior": number;
  "whatsappGrupoId": number;
  whatsappGrupo: WhatsappGrupo;
  constructor(data?: MembroWhatsappGrupoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MembroWhatsappGrupo`.
   */
  public static getModelName() {
    return "MembroWhatsappGrupo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MembroWhatsappGrupo for dynamic purposes.
  **/
  public static factory(data: MembroWhatsappGrupoInterface): MembroWhatsappGrupo{
    return new MembroWhatsappGrupo(data);
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
      name: 'MembroWhatsappGrupo',
      plural: 'MembroWhatsappGrupos',
      path: 'MembroWhatsappGrupos',
      idName: 'data',
      properties: {
        "data": {
          name: 'data',
          type: 'Date'
        },
        "quantidadeTotal": {
          name: 'quantidadeTotal',
          type: 'number'
        },
        "diferencaDiaAnterior": {
          name: 'diferencaDiaAnterior',
          type: 'number'
        },
        "whatsappGrupoId": {
          name: 'whatsappGrupoId',
          type: 'number'
        },
      },
      relations: {
        whatsappGrupo: {
          name: 'whatsappGrupo',
          type: 'WhatsappGrupo',
          model: 'WhatsappGrupo',
          relationType: 'belongsTo',
                  keyFrom: 'whatsappGrupoId',
          keyTo: 'id'
        },
      }
    }
  }
}
