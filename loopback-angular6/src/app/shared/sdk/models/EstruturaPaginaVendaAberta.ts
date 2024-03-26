/* tslint:disable */
import {
  PaginaVendaAberta,
  ItemEstruturaPaginaVenda
} from '../index';

declare var Object: any;
export interface EstruturaPaginaVendaAbertaInterface {
  "nome"?: string;
  "codigoHtml"?: string;
  "id"?: number;
  paginaVendaAbertas?: PaginaVendaAberta[];
  itemEstruturaPaginaVendas?: ItemEstruturaPaginaVenda[];
}

export class EstruturaPaginaVendaAberta implements EstruturaPaginaVendaAbertaInterface {
  "nome": string;
  "codigoHtml": string;
  "id": number;
  paginaVendaAbertas: PaginaVendaAberta[];
  itemEstruturaPaginaVendas: ItemEstruturaPaginaVenda[];
  constructor(data?: EstruturaPaginaVendaAbertaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EstruturaPaginaVendaAberta`.
   */
  public static getModelName() {
    return "EstruturaPaginaVendaAberta";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EstruturaPaginaVendaAberta for dynamic purposes.
  **/
  public static factory(data: EstruturaPaginaVendaAbertaInterface): EstruturaPaginaVendaAberta{
    return new EstruturaPaginaVendaAberta(data);
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
      name: 'EstruturaPaginaVendaAberta',
      plural: 'EstruturaPaginaVendaAberta',
      path: 'EstruturaPaginaVendaAberta',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "codigoHtml": {
          name: 'codigoHtml',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        paginaVendaAbertas: {
          name: 'paginaVendaAbertas',
          type: 'PaginaVendaAberta[]',
          model: 'PaginaVendaAberta',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'estruturaPaginaVendaAbertaId'
        },
        itemEstruturaPaginaVendas: {
          name: 'itemEstruturaPaginaVendas',
          type: 'ItemEstruturaPaginaVenda[]',
          model: 'ItemEstruturaPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'estruturaPaginaVendaAbertaId'
        },
      }
    }
  }
}
