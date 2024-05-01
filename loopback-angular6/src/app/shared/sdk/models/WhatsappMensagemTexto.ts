/* tslint:disable */
import {
  WhatsappGrupoPadraoMensagem,
  WhatsappGrupoDiaAgenda,
  WhatsappModeloMensagem
} from '../index';

declare var Object: any;
export interface WhatsappMensagemTextoInterface {
  "texto"?: string;
  "numeroDia"?: number;
  "whatsappModeloMensagemId"?: number;
  "indiceDia"?: number;
  "whatsappGrupoPadraoMensagemId"?: number;
  "whatsappGrupoDiaAgendaId"?: number;
  whatsappGrupoPadraoMensagem?: WhatsappGrupoPadraoMensagem;
  whatsappGrupoDiaAgenda?: WhatsappGrupoDiaAgenda;
  whatsappModeloMensagem?: WhatsappModeloMensagem;
}

export class WhatsappMensagemTexto implements WhatsappMensagemTextoInterface {
  "texto": string;
  "numeroDia": number;
  "whatsappModeloMensagemId": number;
  "indiceDia": number;
  "whatsappGrupoPadraoMensagemId": number;
  "whatsappGrupoDiaAgendaId": number;
  whatsappGrupoPadraoMensagem: WhatsappGrupoPadraoMensagem;
  whatsappGrupoDiaAgenda: WhatsappGrupoDiaAgenda;
  whatsappModeloMensagem: WhatsappModeloMensagem;
  constructor(data?: WhatsappMensagemTextoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `WhatsappMensagemTexto`.
   */
  public static getModelName() {
    return "WhatsappMensagemTexto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of WhatsappMensagemTexto for dynamic purposes.
  **/
  public static factory(data: WhatsappMensagemTextoInterface): WhatsappMensagemTexto{
    return new WhatsappMensagemTexto(data);
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
      name: 'WhatsappMensagemTexto',
      plural: 'WhatsappMensagemTextos',
      path: 'WhatsappMensagemTextos',
      idName: 'numeroDia',
      properties: {
        "texto": {
          name: 'texto',
          type: 'string'
        },
        "numeroDia": {
          name: 'numeroDia',
          type: 'number'
        },
        "whatsappModeloMensagemId": {
          name: 'whatsappModeloMensagemId',
          type: 'number'
        },
        "indiceDia": {
          name: 'indiceDia',
          type: 'number'
        },
        "whatsappGrupoPadraoMensagemId": {
          name: 'whatsappGrupoPadraoMensagemId',
          type: 'number'
        },
        "whatsappGrupoDiaAgendaId": {
          name: 'whatsappGrupoDiaAgendaId',
          type: 'number'
        },
      },
      relations: {
        whatsappGrupoPadraoMensagem: {
          name: 'whatsappGrupoPadraoMensagem',
          type: 'WhatsappGrupoPadraoMensagem',
          model: 'WhatsappGrupoPadraoMensagem',
          relationType: 'belongsTo',
                  keyFrom: 'whatsappGrupoPadraoMensagemId',
          keyTo: 'id'
        },
        whatsappGrupoDiaAgenda: {
          name: 'whatsappGrupoDiaAgenda',
          type: 'WhatsappGrupoDiaAgenda',
          model: 'WhatsappGrupoDiaAgenda',
          relationType: 'belongsTo',
                  keyFrom: 'whatsappGrupoDiaAgendaId',
          keyTo: 'id'
        },
        whatsappModeloMensagem: {
          name: 'whatsappModeloMensagem',
          type: 'WhatsappModeloMensagem',
          model: 'WhatsappModeloMensagem',
          relationType: 'belongsTo',
                  keyFrom: 'whatsappModeloMensagemId',
          keyTo: 'id'
        },
      }
    }
  }
}
