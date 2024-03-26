/* tslint:disable */
import {
  EstruturaPaginaVendaAberta,
  ImplementacaoItemEstrutura
} from '../index';

declare var Object: any;
export interface ItemEstruturaPaginaVendaInterface {
  "nome"?: string;
  "ordenacao"?: number;
  "descricao"?: string;
  "estruturaPaginaVendaAbertaId"?: number;
  "id"?: number;
  estruturaPaginaVendaAberta?: EstruturaPaginaVendaAberta;
  implementacaoItemEstruturas?: ImplementacaoItemEstrutura[];
}

export class ItemEstruturaPaginaVenda implements ItemEstruturaPaginaVendaInterface {
  "nome": string;
  "ordenacao": number;
  "descricao": string;
  "estruturaPaginaVendaAbertaId": number;
  "id": number;
  estruturaPaginaVendaAberta: EstruturaPaginaVendaAberta;
  implementacaoItemEstruturas: ImplementacaoItemEstrutura[];
  constructor(data?: ItemEstruturaPaginaVendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ItemEstruturaPaginaVenda`.
   */
  public static getModelName() {
    return "ItemEstruturaPaginaVenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ItemEstruturaPaginaVenda for dynamic purposes.
  **/
  public static factory(data: ItemEstruturaPaginaVendaInterface): ItemEstruturaPaginaVenda{
    return new ItemEstruturaPaginaVenda(data);
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
      name: 'ItemEstruturaPaginaVenda',
      plural: 'ItemEstruturaPaginaVendas',
      path: 'ItemEstruturaPaginaVendas',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "ordenacao": {
          name: 'ordenacao',
          type: 'number'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "estruturaPaginaVendaAbertaId": {
          name: 'estruturaPaginaVendaAbertaId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        estruturaPaginaVendaAberta: {
          name: 'estruturaPaginaVendaAberta',
          type: 'EstruturaPaginaVendaAberta',
          model: 'EstruturaPaginaVendaAberta',
          relationType: 'belongsTo',
                  keyFrom: 'estruturaPaginaVendaAbertaId',
          keyTo: 'id'
        },
        implementacaoItemEstruturas: {
          name: 'implementacaoItemEstruturas',
          type: 'ImplementacaoItemEstrutura[]',
          model: 'ImplementacaoItemEstrutura',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'itemEstruturaPaginaVendaId'
        },
      }
    }
  }
}
