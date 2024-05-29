/* tslint:disable */
import {
  ProdutoProprio,
  CampanhaAdsRedeDisplay,
  WhatsappMensagem,
  CheckoutProdutoProprio,
  ContaWhatsapp,
  WhatsappGrupoMetrica,
  MembroWhatsappGrupo,
  PaginaWhatsappGrupo,
  WhatsappGrupoDia,
  WhatsappMensagemEnviadaGrupo
} from '../index';

declare var Object: any;
export interface WhatsappGrupoInterface {
  "nome"?: string;
  "descricao"?: string;
  "link"?: string;
  "imagem"?: string;
  "dataCriacao"?: string;
  "custoTotal"?: number;
  "custoPessoa"?: number;
  "quantidadePessoa"?: number;
  "produtoProprioId"?: number;
  "contaWhatsappId"?: number;
  "checkoutProdutoProprioId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
  campanhaAdsRedeDisplays?: CampanhaAdsRedeDisplay[];
  whatsappMensagems?: WhatsappMensagem[];
  checkoutProdutoProprio?: CheckoutProdutoProprio;
  contaWhatsapp?: ContaWhatsapp;
  whatsappGrupoMetricas?: WhatsappGrupoMetrica[];
  membroWhatsappGrupos?: MembroWhatsappGrupo[];
  paginaWhatsappGrupos?: PaginaWhatsappGrupo[];
  whatsappGrupoDias?: WhatsappGrupoDia[];
  whatsappMensagemEnviadaGrupos?: WhatsappMensagemEnviadaGrupo[];
}

export class WhatsappGrupo implements WhatsappGrupoInterface {
  "nome": string;
  "descricao": string;
  "link": string;
  "imagem": string;
  "dataCriacao": string;
  "custoTotal": number;
  "custoPessoa": number;
  "quantidadePessoa": number;
  "produtoProprioId": number;
  "contaWhatsappId": number;
  "checkoutProdutoProprioId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  campanhaAdsRedeDisplays: CampanhaAdsRedeDisplay[];
  whatsappMensagems: WhatsappMensagem[];
  checkoutProdutoProprio: CheckoutProdutoProprio;
  contaWhatsapp: ContaWhatsapp;
  whatsappGrupoMetricas: WhatsappGrupoMetrica[];
  membroWhatsappGrupos: MembroWhatsappGrupo[];
  paginaWhatsappGrupos: PaginaWhatsappGrupo[];
  whatsappGrupoDias: WhatsappGrupoDia[];
  whatsappMensagemEnviadaGrupos: WhatsappMensagemEnviadaGrupo[];
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
        "custoTotal": {
          name: 'custoTotal',
          type: 'number'
        },
        "custoPessoa": {
          name: 'custoPessoa',
          type: 'number'
        },
        "quantidadePessoa": {
          name: 'quantidadePessoa',
          type: 'number'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
          type: 'number'
        },
        "contaWhatsappId": {
          name: 'contaWhatsappId',
          type: 'number'
        },
        "checkoutProdutoProprioId": {
          name: 'checkoutProdutoProprioId',
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
        campanhaAdsRedeDisplays: {
          name: 'campanhaAdsRedeDisplays',
          type: 'CampanhaAdsRedeDisplay[]',
          model: 'CampanhaAdsRedeDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'whatsappGrupoId'
        },
        whatsappMensagems: {
          name: 'whatsappMensagems',
          type: 'WhatsappMensagem[]',
          model: 'WhatsappMensagem',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'whatsappGrupoId'
        },
        checkoutProdutoProprio: {
          name: 'checkoutProdutoProprio',
          type: 'CheckoutProdutoProprio',
          model: 'CheckoutProdutoProprio',
          relationType: 'belongsTo',
                  keyFrom: 'checkoutProdutoProprioId',
          keyTo: 'id'
        },
        contaWhatsapp: {
          name: 'contaWhatsapp',
          type: 'ContaWhatsapp',
          model: 'ContaWhatsapp',
          relationType: 'belongsTo',
                  keyFrom: 'contaWhatsappId',
          keyTo: 'id'
        },
        whatsappGrupoMetricas: {
          name: 'whatsappGrupoMetricas',
          type: 'WhatsappGrupoMetrica[]',
          model: 'WhatsappGrupoMetrica',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'whatsappGrupoId'
        },
        membroWhatsappGrupos: {
          name: 'membroWhatsappGrupos',
          type: 'MembroWhatsappGrupo[]',
          model: 'MembroWhatsappGrupo',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'whatsappGrupoId'
        },
        paginaWhatsappGrupos: {
          name: 'paginaWhatsappGrupos',
          type: 'PaginaWhatsappGrupo[]',
          model: 'PaginaWhatsappGrupo',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'whatsappGrupoId'
        },
        whatsappGrupoDias: {
          name: 'whatsappGrupoDias',
          type: 'WhatsappGrupoDia[]',
          model: 'WhatsappGrupoDia',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'whatsappGrupoId'
        },
        whatsappMensagemEnviadaGrupos: {
          name: 'whatsappMensagemEnviadaGrupos',
          type: 'WhatsappMensagemEnviadaGrupo[]',
          model: 'WhatsappMensagemEnviadaGrupo',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'whatsappGrupoId'
        },
      }
    }
  }
}
