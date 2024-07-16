/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  PublicoInteresse,
  FrameworkPublicoCategoria
} from '../index';

declare var Object: any;
export interface FrameworkPublicoInteresseInterface {
  "nome"?: string;
  "hotmartId"?: number;
  "frameworkPublicoCategoriaId"?: number;
  "id"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  publicoInteresses?: PublicoInteresse[];
  frameworkPublicoCategoria?: FrameworkPublicoCategoria;
}

export class FrameworkPublicoInteresse implements FrameworkPublicoInteresseInterface {
  "nome": string;
  "hotmartId": number;
  "frameworkPublicoCategoriaId": number;
  "id": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  publicoInteresses: PublicoInteresse[];
  frameworkPublicoCategoria: FrameworkPublicoCategoria;
  constructor(data?: FrameworkPublicoInteresseInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FrameworkPublicoInteresse`.
   */
  public static getModelName() {
    return "FrameworkPublicoInteresse";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FrameworkPublicoInteresse for dynamic purposes.
  **/
  public static factory(data: FrameworkPublicoInteresseInterface): FrameworkPublicoInteresse{
    return new FrameworkPublicoInteresse(data);
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
      name: 'FrameworkPublicoInteresse',
      plural: 'FrameworkPublicoInteresses',
      path: 'FrameworkPublicoInteresses',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "frameworkPublicoCategoriaId": {
          name: 'frameworkPublicoCategoriaId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        produtoAfiliadoHotmart: {
          name: 'produtoAfiliadoHotmart',
          type: 'ProdutoAfiliadoHotmart',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'belongsTo',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        publicoInteresses: {
          name: 'publicoInteresses',
          type: 'PublicoInteresse[]',
          model: 'PublicoInteresse',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'frameworkPublicoInteresseId'
        },
        frameworkPublicoCategoria: {
          name: 'frameworkPublicoCategoria',
          type: 'FrameworkPublicoCategoria',
          model: 'FrameworkPublicoCategoria',
          relationType: 'belongsTo',
                  keyFrom: 'frameworkPublicoCategoriaId',
          keyTo: 'id'
        },
      }
    }
  }
}
