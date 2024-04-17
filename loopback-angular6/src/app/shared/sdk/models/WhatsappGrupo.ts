/* tslint:disable */
import {
  ProdutoProprio,
  WhatsappMensagem,
  ContaWhatsapp
} from '../index';

declare var Object: any;
export interface WhatsappGrupoInterface {
  "nome"?: string;
  "descricao"?: string;
  "link"?: string;
  "imagem"?: string;
  "dataCriacao"?: string;
  "produtoProprioId"?: number;
  "contaWhatsappId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  whatsappMensagems?: WhatsappMensagem[];
  contaWhatsapp?: ContaWhatsapp;
}

export class WhatsappGrupo implements WhatsappGrupoInterface {
  "nome": string;
  "descricao": string;
  "link": string;
  "imagem": string;
  "dataCriacao": string;
  "produtoProprioId": number;
  "contaWhatsappId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  whatsappMensagems: WhatsappMensagem[];
  contaWhatsapp: ContaWhatsapp;
  constructor(data?: WhatsappGrupoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `WhatsappGrupo`.
   */
  public static getModelName() {
    return "WhatsappGrupo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of WhatsappGrupo for dynamic purposes.
  **/
  public static factory(data: WhatsappGrupoInterface): WhatsappGrupo{
    return new WhatsappGrupo(data);
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
      name: 'WhatsappGrupo',
      plural: 'WhatsappGrupos',
      path: 'WhatsappGrupos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "link": {
          name: 'link',
          type: 'string'
        },
        "imagem": {
          name: 'imagem',
          type: 'string'
        },
        "dataCriacao": {
          name: 'dataCriacao',
          type: 'string'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
          type: 'number'
        },
        "contaWhatsappId": {
          name: 'contaWhatsappId',
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
        whatsappMensagems: {
          name: 'whatsappMensagems',
          type: 'WhatsappMensagem[]',
          model: 'WhatsappMensagem',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'whatsappGrupoId'
        },
        contaWhatsapp: {
          name: 'contaWhatsapp',
          type: 'ContaWhatsapp',
          model: 'ContaWhatsapp',
          relationType: 'belongsTo',
                  keyFrom: 'contaWhatsappId',
          keyTo: 'id'
        },
      }
    }
  }
}
