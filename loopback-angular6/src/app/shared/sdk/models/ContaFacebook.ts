/* tslint:disable */
import {
  MetaAdsCampanhaMetrica
} from '../index';

declare var Object: any;
export interface ContaFacebookInterface {
  "email"?: string;
  "tokenAtual"?: string;
  "principal"?: number;
  "nome"?: string;
  "id"?: number;
  metaAdsCampanhaMetricas?: MetaAdsCampanhaMetrica[];
}

export class ContaFacebook implements ContaFacebookInterface {
  "email": string;
  "tokenAtual": string;
  "principal": number;
  "nome": string;
  "id": number;
  metaAdsCampanhaMetricas: MetaAdsCampanhaMetrica[];
  constructor(data?: ContaFacebookInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContaFacebook`.
   */
  public static getModelName() {
    return "ContaFacebook";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContaFacebook for dynamic purposes.
  **/
  public static factory(data: ContaFacebookInterface): ContaFacebook{
    return new ContaFacebook(data);
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
      name: 'ContaFacebook',
      plural: 'ContaFacebooks',
      path: 'ContaFacebooks',
      idName: 'id',
      properties: {
        "email": {
          name: 'email',
          type: 'string'
        },
        "tokenAtual": {
          name: 'tokenAtual',
          type: 'string'
        },
        "principal": {
          name: 'principal',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        metaAdsCampanhaMetricas: {
          name: 'metaAdsCampanhaMetricas',
          type: 'MetaAdsCampanhaMetrica[]',
          model: 'MetaAdsCampanhaMetrica',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'contaFacebookId'
        },
      }
    }
  }
}
