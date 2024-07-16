/* tslint:disable */
import {
  FrameworkPublicoInteresse
} from '../index';

declare var Object: any;
export interface FrameworkPublicoCategoriaInterface {
  "id"?: number;
  frameworkPublicoInteresses?: FrameworkPublicoInteresse[];
}

export class FrameworkPublicoCategoria implements FrameworkPublicoCategoriaInterface {
  "id": number;
  frameworkPublicoInteresses: FrameworkPublicoInteresse[];
  constructor(data?: FrameworkPublicoCategoriaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FrameworkPublicoCategoria`.
   */
  public static getModelName() {
    return "FrameworkPublicoCategoria";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FrameworkPublicoCategoria for dynamic purposes.
  **/
  public static factory(data: FrameworkPublicoCategoriaInterface): FrameworkPublicoCategoria{
    return new FrameworkPublicoCategoria(data);
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
      name: 'FrameworkPublicoCategoria',
      plural: 'FrameworkPublicoCategoria',
      path: 'FrameworkPublicoCategoria',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        frameworkPublicoInteresses: {
          name: 'frameworkPublicoInteresses',
          type: 'FrameworkPublicoInteresse[]',
          model: 'FrameworkPublicoInteresse',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'frameworkPublicoCategoriaId'
        },
      }
    }
  }
}
