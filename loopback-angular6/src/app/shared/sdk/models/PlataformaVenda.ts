/* tslint:disable */
import {
  ProdutoAfiliadoGenerico
} from '../index';

declare var Object: any;
export interface PlataformaVendaInterface {
  "nome"?: string;
  "login"?: string;
  "url"?: string;
  "senha"?: string;
  "id"?: number;
  produtoAfiliadoGenericos?: ProdutoAfiliadoGenerico[];
}

export class PlataformaVenda implements PlataformaVendaInterface {
  "nome": string;
  "login": string;
  "url": string;
  "senha": string;
  "id": number;
  produtoAfiliadoGenericos: ProdutoAfiliadoGenerico[];
  constructor(data?: PlataformaVendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PlataformaVenda`.
   */
  public static getModelName() {
    return "PlataformaVenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PlataformaVenda for dynamic purposes.
  **/
  public static factory(data: PlataformaVendaInterface): PlataformaVenda{
    return new PlataformaVenda(data);
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
      name: 'PlataformaVenda',
      plural: 'PlataformaVendas',
      path: 'PlataformaVendas',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "login": {
          name: 'login',
          type: 'string'
        },
        "url": {
          name: 'url',
          type: 'string'
        },
        "senha": {
          name: 'senha',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        produtoAfiliadoGenericos: {
          name: 'produtoAfiliadoGenericos',
          type: 'ProdutoAfiliadoGenerico[]',
          model: 'ProdutoAfiliadoGenerico',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'plataformaVendaId'
        },
      }
    }
  }
}
