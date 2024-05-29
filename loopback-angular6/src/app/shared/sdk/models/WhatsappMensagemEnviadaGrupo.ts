/* tslint:disable */
import {
  WhatsappGrupo
} from '../index';

declare var Object: any;
export interface WhatsappMensagemEnviadaGrupoInterface {
  "texto"?: string;
  "data"?: Date;
  "ordenacaoDia"?: number;
  "whatsappGrupoId"?: number;
  "id"?: number;
  whatsappGrupo?: WhatsappGrupo;
}

export class WhatsappMensagemEnviadaGrupo implements WhatsappMensagemEnviadaGrupoInterface {
  "texto": string;
  "data": Date;
  "ordenacaoDia": number;
  "whatsappGrupoId": number;
  "id": number;
  whatsappGrupo: WhatsappGrupo;
  constructor(data?: WhatsappMensagemEnviadaGrupoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `WhatsappMensagemEnviadaGrupo`.
   */
  public static getModelName() {
    return "WhatsappMensagemEnviadaGrupo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of WhatsappMensagemEnviadaGrupo for dynamic purposes.
  **/
  public static factory(data: WhatsappMensagemEnviadaGrupoInterface): WhatsappMensagemEnviadaGrupo{
    return new WhatsappMensagemEnviadaGrupo(data);
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
      name: 'WhatsappMensagemEnviadaGrupo',
      plural: 'WhatsappMensagemEnviadaGrupos',
      path: 'WhatsappMensagemEnviadaGrupos',
      idName: 'id',
      properties: {
        "texto": {
          name: 'texto',
          type: 'string'
        },
        "data": {
          name: 'data',
          type: 'Date'
        },
        "ordenacaoDia": {
          name: 'ordenacaoDia',
          type: 'number'
        },
        "whatsappGrupoId": {
          name: 'whatsappGrupoId',
          type: 'number'
        },
        "id": {
          name: 'id',
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
