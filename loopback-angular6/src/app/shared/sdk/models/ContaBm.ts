/* tslint:disable */
import {
  BusinessManager,
  ContaNegocioFacebook
} from '../index';

declare var Object: any;
export interface ContaBmInterface {
  "contaNegocioFacebookId"?: number;
  "businessManagerId"?: number;
  businessManager?: BusinessManager;
  contaNegocioFacebook?: ContaNegocioFacebook;
}

export class ContaBm implements ContaBmInterface {
  "contaNegocioFacebookId": number;
  "businessManagerId": number;
  businessManager: BusinessManager;
  contaNegocioFacebook: ContaNegocioFacebook;
  constructor(data?: ContaBmInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContaBm`.
   */
  public static getModelName() {
    return "ContaBm";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContaBm for dynamic purposes.
  **/
  public static factory(data: ContaBmInterface): ContaBm{
    return new ContaBm(data);
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
      name: 'ContaBm',
      plural: 'ContaBms',
      path: 'ContaBms',
      idName: 'contaNegocioFacebookId',
      properties: {
        "contaNegocioFacebookId": {
          name: 'contaNegocioFacebookId',
          type: 'number'
        },
        "businessManagerId": {
          name: 'businessManagerId',
          type: 'number'
        },
      },
      relations: {
        businessManager: {
          name: 'businessManager',
          type: 'BusinessManager',
          model: 'BusinessManager',
          relationType: 'belongsTo',
                  keyFrom: 'businessManagerId',
          keyTo: 'id'
        },
        contaNegocioFacebook: {
          name: 'contaNegocioFacebook',
          type: 'ContaNegocioFacebook',
          model: 'ContaNegocioFacebook',
          relationType: 'belongsTo',
                  keyFrom: 'contaNegocioFacebookId',
          keyTo: 'id'
        },
      }
    }
  }
}
