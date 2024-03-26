/* tslint:disable */
import {
  PaginaFacebook
} from '../index';

declare var Object: any;
export interface FacebookContaInterface {
  "email"?: string;
  "id"?: number;
  paginaFacebooks?: PaginaFacebook[];
}

export class FacebookConta implements FacebookContaInterface {
  "email": string;
  "id": number;
  paginaFacebooks: PaginaFacebook[];
  constructor(data?: FacebookContaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FacebookConta`.
   */
  public static getModelName() {
    return "FacebookConta";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FacebookConta for dynamic purposes.
  **/
  public static factory(data: FacebookContaInterface): FacebookConta{
    return new FacebookConta(data);
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
      name: 'FacebookConta',
      plural: 'FacebookConta',
      path: 'FacebookConta',
      idName: 'id',
      properties: {
        "email": {
          name: 'email',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        paginaFacebooks: {
          name: 'paginaFacebooks',
          type: 'PaginaFacebook[]',
          model: 'PaginaFacebook',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'facebookContaId'
        },
      }
    }
  }
}
