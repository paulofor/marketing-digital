/* tslint:disable */
import {
  ElementoModeloPaginaVenda,
  ModeloPaginaVenda,
  VersaoPaginaVenda
} from '../index';

declare var Object: any;
export interface ConteudoElementoInterface {
  "valor"?: string;
  "elementoModeloPaginaVendaId"?: number;
  "modeloPaginaVendaId"?: number;
  "versaoPaginaVendaId"?: number;
  "id"?: number;
  elementoModeloPaginaVenda?: ElementoModeloPaginaVenda;
  modeloPaginaVenda?: ModeloPaginaVenda;
  versaoPaginaVenda?: VersaoPaginaVenda;
}

export class ConteudoElemento implements ConteudoElementoInterface {
  "valor": string;
  "elementoModeloPaginaVendaId": number;
  "modeloPaginaVendaId": number;
  "versaoPaginaVendaId": number;
  "id": number;
  elementoModeloPaginaVenda: ElementoModeloPaginaVenda;
  modeloPaginaVenda: ModeloPaginaVenda;
  versaoPaginaVenda: VersaoPaginaVenda;
  constructor(data?: ConteudoElementoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ConteudoElemento`.
   */
  public static getModelName() {
    return "ConteudoElemento";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ConteudoElemento for dynamic purposes.
  **/
  public static factory(data: ConteudoElementoInterface): ConteudoElemento{
    return new ConteudoElemento(data);
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
      name: 'ConteudoElemento',
      plural: 'ConteudoElementos',
      path: 'ConteudoElementos',
      idName: 'id',
      properties: {
        "valor": {
          name: 'valor',
          type: 'string'
        },
        "elementoModeloPaginaVendaId": {
          name: 'elementoModeloPaginaVendaId',
          type: 'number'
        },
        "modeloPaginaVendaId": {
          name: 'modeloPaginaVendaId',
          type: 'number'
        },
        "versaoPaginaVendaId": {
          name: 'versaoPaginaVendaId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        elementoModeloPaginaVenda: {
          name: 'elementoModeloPaginaVenda',
          type: 'ElementoModeloPaginaVenda',
          model: 'ElementoModeloPaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'elementoModeloPaginaVendaId',
          keyTo: 'id'
        },
        modeloPaginaVenda: {
          name: 'modeloPaginaVenda',
          type: 'ModeloPaginaVenda',
          model: 'ModeloPaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'modeloPaginaVendaId',
          keyTo: 'id'
        },
        versaoPaginaVenda: {
          name: 'versaoPaginaVenda',
          type: 'VersaoPaginaVenda',
          model: 'VersaoPaginaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'versaoPaginaVendaId',
          keyTo: 'id'
        },
      }
    }
  }
}
