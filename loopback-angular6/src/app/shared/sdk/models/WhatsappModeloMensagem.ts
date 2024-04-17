/* tslint:disable */
import {
  WhatsappGrupoDiaAgenda,
  WhatsappMensagemTexto
} from '../index';

declare var Object: any;
export interface WhatsappModeloMensagemInterface {
  "texto"?: string;
  "ordenacao"?: number;
  "whatsappGrupoDiaAgendaId"?: number;
  "id"?: number;
  whatsappGrupoDiaAgenda?: WhatsappGrupoDiaAgenda;
  whatsappMensagemTextos?: WhatsappMensagemTexto[];
}

export class WhatsappModeloMensagem implements WhatsappModeloMensagemInterface {
  "texto": string;
  "ordenacao": number;
  "whatsappGrupoDiaAgendaId": number;
  "id": number;
  whatsappGrupoDiaAgenda: WhatsappGrupoDiaAgenda;
  whatsappMensagemTextos: WhatsappMensagemTexto[];
  constructor(data?: WhatsappModeloMensagemInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `WhatsappModeloMensagem`.
   */
  public static getModelName() {
    return "WhatsappModeloMensagem";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of WhatsappModeloMensagem for dynamic purposes.
  **/
  public static factory(data: WhatsappModeloMensagemInterface): WhatsappModeloMensagem{
    return new WhatsappModeloMensagem(data);
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
      name: 'WhatsappModeloMensagem',
      plural: 'WhatsappModeloMensagems',
      path: 'WhatsappModeloMensagems',
      idName: 'id',
      properties: {
        "texto": {
          name: 'texto',
          type: 'string'
        },
        "ordenacao": {
          name: 'ordenacao',
          type: 'number'
        },
        "whatsappGrupoDiaAgendaId": {
          name: 'whatsappGrupoDiaAgendaId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        whatsappGrupoDiaAgenda: {
          name: 'whatsappGrupoDiaAgenda',
          type: 'WhatsappGrupoDiaAgenda',
          model: 'WhatsappGrupoDiaAgenda',
          relationType: 'belongsTo',
                  keyFrom: 'whatsappGrupoDiaAgendaId',
          keyTo: 'id'
        },
        whatsappMensagemTextos: {
          name: 'whatsappMensagemTextos',
          type: 'WhatsappMensagemTexto[]',
          model: 'WhatsappMensagemTexto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'whatsappModeloMensagemId'
        },
      }
    }
  }
}
