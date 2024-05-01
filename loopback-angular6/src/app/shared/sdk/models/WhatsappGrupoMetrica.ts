/* tslint:disable */
import {
  WhatsappGrupo
} from '../index';

declare var Object: any;
export interface WhatsappGrupoMetricaInterface {
  "data"?: Date;
  "quantidadeMembro"?: number;
  "whatsappGrupoId"?: number;
  "id"?: number;
  whatsappGrupo?: WhatsappGrupo;
}

export class WhatsappGrupoMetrica implements WhatsappGrupoMetricaInterface {
  "data": Date;
  "quantidadeMembro": number;
  "whatsappGrupoId": number;
  "id": number;
  whatsappGrupo: WhatsappGrupo;
  constructor(data?: WhatsappGrupoMetricaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `WhatsappGrupoMetrica`.
   */
  public static getModelName() {
    return "WhatsappGrupoMetrica";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of WhatsappGrupoMetrica for dynamic purposes.
  **/
  public static factory(data: WhatsappGrupoMetricaInterface): WhatsappGrupoMetrica{
    return new WhatsappGrupoMetrica(data);
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
      name: 'WhatsappGrupoMetrica',
      plural: 'WhatsappGrupoMetricas',
      path: 'WhatsappGrupoMetricas',
      idName: 'id',
      properties: {
        "data": {
          name: 'data',
          type: 'Date'
        },
        "quantidadeMembro": {
          name: 'quantidadeMembro',
          type: 'number'
        },
        "whatsappGrupoId": {
          name: 'whatsappGrupoId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        whatsappGrupo: {
          name: 'whatsappGrupo',
          type: 'WhatsappGrupo',
          model: 'WhatsappGrupo',
          relationType: 'belongsTo',
                  keyFrom: 'whatsappGrupoId',
          keyTo: 'id'
        },
      }
    }
  }
}
