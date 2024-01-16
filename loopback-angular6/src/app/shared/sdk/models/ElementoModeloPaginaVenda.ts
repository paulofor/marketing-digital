/* tslint:disable */
import {
  PosicaoElementoPaginaVenda,
  ConteudoElemento
} from '../index';

declare var Object: any;
export interface ElementoModeloPaginaVendaInterface {
  "rotulo"?: string;
  "tipo"?: string;
  "fonte"?: string;
  "nomeVariavel"?: string;
  "id"?: number;
  posicaoElementoPaginaVendas?: PosicaoElementoPaginaVenda[];
  conteudoElementos?: ConteudoElemento[];
}

export class ElementoModeloPaginaVenda implements ElementoModeloPaginaVendaInterface {
  "rotulo": string;
  "tipo": string;
  "fonte": string;
  "nomeVariavel": string;
  "id": number;
  posicaoElementoPaginaVendas: PosicaoElementoPaginaVenda[];
  conteudoElementos: ConteudoElemento[];
  constructor(data?: ElementoModeloPaginaVendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ElementoModeloPaginaVenda`.
   */
  public static getModelName() {
    return "ElementoModeloPaginaVenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ElementoModeloPaginaVenda for dynamic purposes.
  **/
  public static factory(data: ElementoModeloPaginaVendaInterface): ElementoModeloPaginaVenda{
    return new ElementoModeloPaginaVenda(data);
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
      name: 'ElementoModeloPaginaVenda',
      plural: 'ElementoModeloPaginaVendas',
      path: 'ElementoModeloPaginaVendas',
      idName: 'id',
      properties: {
        "rotulo": {
          name: 'rotulo',
          type: 'string'
        },
        "tipo": {
          name: 'tipo',
          type: 'string'
        },
        "fonte": {
          name: 'fonte',
          type: 'string'
        },
        "nomeVariavel": {
          name: 'nomeVariavel',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        posicaoElementoPaginaVendas: {
          name: 'posicaoElementoPaginaVendas',
          type: 'PosicaoElementoPaginaVenda[]',
          model: 'PosicaoElementoPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'elementoModeloPaginaVendaId'
        },
        conteudoElementos: {
          name: 'conteudoElementos',
          type: 'ConteudoElemento[]',
          model: 'ConteudoElemento',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'elementoModeloPaginaVendaId'
        },
      }
    }
  }
}
