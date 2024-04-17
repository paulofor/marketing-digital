/* tslint:disable */
import {
  ProdutoProprio,
  EntregavelProduto,
  WhatsappGrupoDiaAgenda,
  WhatsappMensagemTexto
} from '../index';

declare var Object: any;
export interface WhatsappGrupoPadraoMensagemInterface {
  "nome"?: string;
  "geraMensagem"?: number;
  "produtoProprioId"?: number;
  "entregavelProdutoId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  entregavelProduto?: EntregavelProduto;
  whatsappGrupoDiaAgendas?: WhatsappGrupoDiaAgenda[];
  whatsappMensagemTextos?: WhatsappMensagemTexto[];
}

export class WhatsappGrupoPadraoMensagem implements WhatsappGrupoPadraoMensagemInterface {
  "nome": string;
  "geraMensagem": number;
  "produtoProprioId": number;
  "entregavelProdutoId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  entregavelProduto: EntregavelProduto;
  whatsappGrupoDiaAgendas: WhatsappGrupoDiaAgenda[];
  whatsappMensagemTextos: WhatsappMensagemTexto[];
  constructor(data?: WhatsappGrupoPadraoMensagemInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `WhatsappGrupoPadraoMensagem`.
   */
  public static getModelName() {
    return "WhatsappGrupoPadraoMensagem";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of WhatsappGrupoPadraoMensagem for dynamic purposes.
  **/
  public static factory(data: WhatsappGrupoPadraoMensagemInterface): WhatsappGrupoPadraoMensagem{
    return new WhatsappGrupoPadraoMensagem(data);
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
      name: 'WhatsappGrupoPadraoMensagem',
      plural: 'WhatsappGrupoPadraoMensagems',
      path: 'WhatsappGrupoPadraoMensagems',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "geraMensagem": {
          name: 'geraMensagem',
          type: 'number'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
          type: 'number'
        },
        "entregavelProdutoId": {
          name: 'entregavelProdutoId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        produtoProprio: {
          name: 'produtoProprio',
          type: 'ProdutoProprio',
          model: 'ProdutoProprio',
          relationType: 'belongsTo',
                  keyFrom: 'produtoProprioId',
          keyTo: 'id'
        },
        entregavelProduto: {
          name: 'entregavelProduto',
          type: 'EntregavelProduto',
          model: 'EntregavelProduto',
          relationType: 'belongsTo',
                  keyFrom: 'entregavelProdutoId',
          keyTo: 'id'
        },
        whatsappGrupoDiaAgendas: {
          name: 'whatsappGrupoDiaAgendas',
          type: 'WhatsappGrupoDiaAgenda[]',
          model: 'WhatsappGrupoDiaAgenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'whatsappGrupoPadraoMensagemId'
        },
        whatsappMensagemTextos: {
          name: 'whatsappMensagemTextos',
          type: 'WhatsappMensagemTexto[]',
          model: 'WhatsappMensagemTexto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'whatsappGrupoPadraoMensagemId'
        },
      }
    }
  }
}
