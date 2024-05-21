/* tslint:disable */
import {
  WhatsappGrupo
} from '../index';

declare var Object: any;
export interface WhatsappGrupoDiaInterface {
  "custoTotal"?: number;
  "custoPessoa"?: number;
  "quantidadePessoa"?: number;
  "data"?: Date;
  "whatsappGrupoId"?: number;
  whatsappGrupo?: WhatsappGrupo;
}

export class WhatsappGrupoDia implements WhatsappGrupoDiaInterface {
  "custoTotal": number;
  "custoPessoa": number;
  "quantidadePessoa": number;
  "data": Date;
  "whatsappGrupoId": number;
  whatsappGrupo: WhatsappGrupo;
  constructor(data?: WhatsappGrupoDiaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `WhatsappGrupoDia`.
   */
  public static getModelName() {
    return "WhatsappGrupoDia";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of WhatsappGrupoDia for dynamic purposes.
  **/
  public static factory(data: WhatsappGrupoDiaInterface): WhatsappGrupoDia{
    return new WhatsappGrupoDia(data);
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
      name: 'WhatsappGrupoDia',
      plural: 'WhatsappGrupoDia',
      path: 'WhatsappGrupoDia',
      idName: 'data',
      properties: {
        "custoTotal": {
          name: 'custoTotal',
          type: 'number'
        },
        "custoPessoa": {
          name: 'custoPessoa',
          type: 'number'
        },
        "quantidadePessoa": {
          name: 'quantidadePessoa',
          type: 'number'
        },
        "data": {
          name: 'data',
          type: 'Date'
        },
        "whatsappGrupoId": {
          name: 'whatsappGrupoId',
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
