/* tslint:disable */
import {
  PosicaoElementoPaginaVenda,
  VersaoPaginaVenda,
  ConteudoElemento
} from '../index';

declare var Object: any;
export interface ModeloPaginaVendaInterface {
  "versao"?: string;
  "dataCriacao"?: Date;
  "codigoFonte"?: string;
  "id"?: number;
  posicaoElementoPaginaVendas?: PosicaoElementoPaginaVenda[];
  versaoPaginaVendas?: VersaoPaginaVenda[];
  conteudoElementos?: ConteudoElemento[];
}

export class ModeloPaginaVenda implements ModeloPaginaVendaInterface {
  "versao": string;
  "dataCriacao": Date;
  "codigoFonte": string;
  "id": number;
  posicaoElementoPaginaVendas: PosicaoElementoPaginaVenda[];
  versaoPaginaVendas: VersaoPaginaVenda[];
  conteudoElementos: ConteudoElemento[];
  constructor(data?: ModeloPaginaVendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ModeloPaginaVenda`.
   */
  public static getModelName() {
    return "ModeloPaginaVenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ModeloPaginaVenda for dynamic purposes.
  **/
  public static factory(data: ModeloPaginaVendaInterface): ModeloPaginaVenda{
    return new ModeloPaginaVenda(data);
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
      name: 'ModeloPaginaVenda',
      plural: 'ModeloPaginaVendas',
      path: 'ModeloPaginaVendas',
      idName: 'id',
      properties: {
        "versao": {
          name: 'versao',
          type: 'string'
        },
        "dataCriacao": {
          name: 'dataCriacao',
          type: 'Date'
        },
        "codigoFonte": {
          name: 'codigoFonte',
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
          keyTo: 'modeloPaginaVendaId'
        },
        versaoPaginaVendas: {
          name: 'versaoPaginaVendas',
          type: 'VersaoPaginaVenda[]',
          model: 'VersaoPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'modeloPaginaVendaId'
        },
        conteudoElementos: {
          name: 'conteudoElementos',
          type: 'ConteudoElemento[]',
          model: 'ConteudoElemento',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'modeloPaginaVendaId'
        },
      }
    }
  }
}
