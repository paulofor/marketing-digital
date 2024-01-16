/* tslint:disable */
import {
  VersaoPaginaVenda,
  DalleSolicitacaoImagem
} from '../index';

declare var Object: any;
export interface VersaoImagemPaginaVendaInterface {
  "versaoPaginaVendaId"?: number;
  "dalleSolicitacaoImagemId"?: number;
  versaoPaginaVenda?: VersaoPaginaVenda;
  dalleSolicitacaoImagem?: DalleSolicitacaoImagem;
}

export class VersaoImagemPaginaVenda implements VersaoImagemPaginaVendaInterface {
  "versaoPaginaVendaId": number;
  "dalleSolicitacaoImagemId": number;
  versaoPaginaVenda: VersaoPaginaVenda;
  dalleSolicitacaoImagem: DalleSolicitacaoImagem;
  constructor(data?: VersaoImagemPaginaVendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VersaoImagemPaginaVenda`.
   */
  public static getModelName() {
    return "VersaoImagemPaginaVenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VersaoImagemPaginaVenda for dynamic purposes.
  **/
  public static factory(data: VersaoImagemPaginaVendaInterface): VersaoImagemPaginaVenda{
    return new VersaoImagemPaginaVenda(data);
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
      name: 'VersaoImagemPaginaVenda',
      plural: 'VersaoImagemPaginaVendas',
      path: 'VersaoImagemPaginaVendas',
      idName: 'versaoPaginaVendaId',
      properties: {
        "versaoPaginaVendaId": {
          name: 'versaoPaginaVendaId',
          type: 'number'
        },
        "dalleSolicitacaoImagemId": {
          name: 'dalleSolicitacaoImagemId',
          type: 'number'
        },
      },
      relations: {
        versaoPaginaVenda: {
          name: 'versaoPaginaVenda',
          type: 'VersaoPaginaVenda',
          model: 'VersaoPaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'versaoPaginaVendaId',
          keyTo: 'id'
        },
        dalleSolicitacaoImagem: {
          name: 'dalleSolicitacaoImagem',
          type: 'DalleSolicitacaoImagem',
          model: 'DalleSolicitacaoImagem',
          relationType: 'belongsTo',
                  keyFrom: 'dalleSolicitacaoImagemId',
          keyTo: 'id'
        },
      }
    }
  }
}
