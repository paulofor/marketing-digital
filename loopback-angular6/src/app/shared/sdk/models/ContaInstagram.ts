/* tslint:disable */
import {
  MetaAdsAnuncio
} from '../index';

declare var Object: any;
export interface ContaInstagramInterface {
  "nome"?: string;
  "email"?: string;
  "instagram"?: string;
  "id"?: number;
  metaAdsAnuncios?: MetaAdsAnuncio[];
}

export class ContaInstagram implements ContaInstagramInterface {
  "nome": string;
  "email": string;
  "instagram": string;
  "id": number;
  metaAdsAnuncios: MetaAdsAnuncio[];
  constructor(data?: ContaInstagramInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContaInstagram`.
   */
  public static getModelName() {
    return "ContaInstagram";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContaInstagram for dynamic purposes.
  **/
  public static factory(data: ContaInstagramInterface): ContaInstagram{
    return new ContaInstagram(data);
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
      name: 'ContaInstagram',
      plural: 'ContaInstagrams',
      path: 'ContaInstagrams',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "instagram": {
          name: 'instagram',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        metaAdsAnuncios: {
          name: 'metaAdsAnuncios',
          type: 'MetaAdsAnuncio[]',
          model: 'MetaAdsAnuncio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaInstagramId'
        },
      }
    }
  }
}
