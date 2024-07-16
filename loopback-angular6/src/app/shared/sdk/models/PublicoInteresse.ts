/* tslint:disable */
import {
  MetaAdsPublico,
  FrameworkPublicoInteresse
} from '../index';

declare var Object: any;
export interface PublicoInteresseInterface {
  "frameworkPublicoInteresseId"?: number;
  "metaAdsPublicoId"?: number;
  metaAdsPublico?: MetaAdsPublico;
  frameworkPublicoInteresse?: FrameworkPublicoInteresse;
}

export class PublicoInteresse implements PublicoInteresseInterface {
  "frameworkPublicoInteresseId": number;
  "metaAdsPublicoId": number;
  metaAdsPublico: MetaAdsPublico;
  frameworkPublicoInteresse: FrameworkPublicoInteresse;
  constructor(data?: PublicoInteresseInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PublicoInteresse`.
   */
  public static getModelName() {
    return "PublicoInteresse";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PublicoInteresse for dynamic purposes.
  **/
  public static factory(data: PublicoInteresseInterface): PublicoInteresse{
    return new PublicoInteresse(data);
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
      name: 'PublicoInteresse',
      plural: 'PublicoInteresses',
      path: 'PublicoInteresses',
      idName: 'frameworkPublicoInteresseId',
      properties: {
        "frameworkPublicoInteresseId": {
          name: 'frameworkPublicoInteresseId',
          type: 'number'
        },
        "metaAdsPublicoId": {
          name: 'metaAdsPublicoId',
          type: 'number'
        },
      },
      relations: {
        metaAdsPublico: {
          name: 'metaAdsPublico',
          type: 'MetaAdsPublico',
          model: 'MetaAdsPublico',
          relationType: 'belongsTo',
                  keyFrom: 'metaAdsPublicoId',
          keyTo: 'id'
        },
        frameworkPublicoInteresse: {
          name: 'frameworkPublicoInteresse',
          type: 'FrameworkPublicoInteresse',
          model: 'FrameworkPublicoInteresse',
          relationType: 'belongsTo',
                  keyFrom: 'frameworkPublicoInteresseId',
          keyTo: 'id'
        },
      }
    }
  }
}
