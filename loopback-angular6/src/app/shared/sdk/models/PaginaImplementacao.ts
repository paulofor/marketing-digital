/* tslint:disable */
import {
  PaginaVendaAberta,
  ImplementacaoItemEstrutura
} from '../index';

declare var Object: any;
export interface PaginaImplementacaoInterface {
  "paginaVendaAbertaId"?: number;
  "implementacaoItemEstruturaId"?: number;
  "ordenacao"?: number;
  paginaVendaAberta?: PaginaVendaAberta;
  implementacaoItemEstrutura?: ImplementacaoItemEstrutura;
}

export class PaginaImplementacao implements PaginaImplementacaoInterface {
  "paginaVendaAbertaId": number;
  "implementacaoItemEstruturaId": number;
  "ordenacao": number;
  paginaVendaAberta: PaginaVendaAberta;
  implementacaoItemEstrutura: ImplementacaoItemEstrutura;
  constructor(data?: PaginaImplementacaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaginaImplementacao`.
   */
  public static getModelName() {
    return "PaginaImplementacao";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaginaImplementacao for dynamic purposes.
  **/
  public static factory(data: PaginaImplementacaoInterface): PaginaImplementacao{
    return new PaginaImplementacao(data);
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
      name: 'PaginaImplementacao',
      plural: 'PaginaImplementacaos',
      path: 'PaginaImplementacaos',
      idName: 'paginaVendaAbertaId',
      properties: {
        "paginaVendaAbertaId": {
          name: 'paginaVendaAbertaId',
          type: 'number'
        },
        "implementacaoItemEstruturaId": {
          name: 'implementacaoItemEstruturaId',
          type: 'number'
        },
        "ordenacao": {
          name: 'ordenacao',
          type: 'number'
        },
      },
      relations: {
        paginaVendaAberta: {
          name: 'paginaVendaAberta',
          type: 'PaginaVendaAberta',
          model: 'PaginaVendaAberta',
          relationType: 'belongsTo',
                  keyFrom: 'paginaVendaAbertaId',
          keyTo: 'id'
        },
        implementacaoItemEstrutura: {
          name: 'implementacaoItemEstrutura',
          type: 'ImplementacaoItemEstrutura',
          model: 'ImplementacaoItemEstrutura',
          relationType: 'belongsTo',
                  keyFrom: 'implementacaoItemEstruturaId',
          keyTo: 'id'
        },
      }
    }
  }
}
