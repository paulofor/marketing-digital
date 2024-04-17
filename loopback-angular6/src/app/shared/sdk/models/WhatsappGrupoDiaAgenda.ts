/* tslint:disable */
import {
  WhatsappGrupoPadraoMensagem,
  WhatsappModeloMensagem,
  WhatsappMensagemTexto
} from '../index';

declare var Object: any;
export interface WhatsappGrupoDiaAgendaInterface {
  "dia"?: number;
  "whatsappGrupoPadraoMensagemId"?: number;
  "id"?: number;
  whatsappGrupoPadraoMensagem?: WhatsappGrupoPadraoMensagem;
  whatsappModeloMensagems?: WhatsappModeloMensagem[];
  whatsappMensagemTextos?: WhatsappMensagemTexto[];
}

export class WhatsappGrupoDiaAgenda implements WhatsappGrupoDiaAgendaInterface {
  "dia": number;
  "whatsappGrupoPadraoMensagemId": number;
  "id": number;
  whatsappGrupoPadraoMensagem: WhatsappGrupoPadraoMensagem;
  whatsappModeloMensagems: WhatsappModeloMensagem[];
  whatsappMensagemTextos: WhatsappMensagemTexto[];
  constructor(data?: WhatsappGrupoDiaAgendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `WhatsappGrupoDiaAgenda`.
   */
  public static getModelName() {
    return "WhatsappGrupoDiaAgenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of WhatsappGrupoDiaAgenda for dynamic purposes.
  **/
  public static factory(data: WhatsappGrupoDiaAgendaInterface): WhatsappGrupoDiaAgenda{
    return new WhatsappGrupoDiaAgenda(data);
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
      name: 'WhatsappGrupoDiaAgenda',
      plural: 'WhatsappGrupoDiaAgendas',
      path: 'WhatsappGrupoDiaAgendas',
      idName: 'id',
      properties: {
        "dia": {
          name: 'dia',
          type: 'number'
        },
        "whatsappGrupoPadraoMensagemId": {
          name: 'whatsappGrupoPadraoMensagemId',
          type: 'number'
        },
        "id": {
          name: 'id',
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
        whatsappModeloMensagems: {
          name: 'whatsappModeloMensagems',
          type: 'WhatsappModeloMensagem[]',
          model: 'WhatsappModeloMensagem',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'whatsappGrupoDiaAgendaId'
        },
        whatsappMensagemTextos: {
          name: 'whatsappMensagemTextos',
          type: 'WhatsappMensagemTexto[]',
          model: 'WhatsappMensagemTexto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'whatsappGrupoDiaAgendaId'
        },
      }
    }
  }
}
