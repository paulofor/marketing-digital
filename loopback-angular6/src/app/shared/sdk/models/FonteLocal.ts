/* tslint:disable */
import {
  CriativoAnuncio
} from '../index';

declare var Object: any;
export interface FonteLocalInterface {
  "nome"?: string;
  "arquivo"?: string;
  "id"?: number;
  criativoAnuncios?: CriativoAnuncio[];
}

export class FonteLocal implements FonteLocalInterface {
  "nome": string;
  "arquivo": string;
  "id": number;
  criativoAnuncios: CriativoAnuncio[];
  constructor(data?: FonteLocalInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FonteLocal`.
   */
  public static getModelName() {
    return "FonteLocal";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FonteLocal for dynamic purposes.
  **/
  public static factory(data: FonteLocalInterface): FonteLocal{
    return new FonteLocal(data);
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
      name: 'FonteLocal',
      plural: 'FonteLocals',
      path: 'FonteLocals',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "arquivo": {
          name: 'arquivo',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        criativoAnuncios: {
          name: 'criativoAnuncios',
          type: 'CriativoAnuncio[]',
          model: 'CriativoAnuncio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'fonteLocalId'
        },
      }
    }
  }
}
