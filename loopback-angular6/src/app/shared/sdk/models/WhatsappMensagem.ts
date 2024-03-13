/* tslint:disable */
import {
  WhatsappGrupo
} from '../index';

declare var Object: any;
export interface WhatsappMensagemInterface {
  "texto"?: string;
  "dataHoraEnvio"?: Date;
  "situacao"?: number;
  "whatsappGrupoId"?: number;
  "id"?: number;
  whatsappGrupo?: WhatsappGrupo;
}

export class WhatsappMensagem implements WhatsappMensagemInterface {
  "texto": string;
  "dataHoraEnvio": Date;
  "situacao": number;
  "whatsappGrupoId": number;
  "id": number;
  whatsappGrupo: WhatsappGrupo;
  constructor(data?: WhatsappMensagemInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `WhatsappMensagem`.
   */
  public static getModelName() {
    return "WhatsappMensagem";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of WhatsappMensagem for dynamic purposes.
  **/
  public static factory(data: WhatsappMensagemInterface): WhatsappMensagem{
    return new WhatsappMensagem(data);
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
      name: 'WhatsappMensagem',
      plural: 'WhatsappMensagems',
      path: 'WhatsappMensagems',
      idName: 'id',
      properties: {
        "texto": {
          name: 'texto',
          type: 'string'
        },
        "dataHoraEnvio": {
          name: 'dataHoraEnvio',
          type: 'Date'
        },
        "situacao": {
          name: 'situacao',
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
