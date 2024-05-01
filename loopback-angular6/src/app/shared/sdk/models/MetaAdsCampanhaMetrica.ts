/* tslint:disable */
import {
  ContaFacebook
} from '../index';

declare var Object: any;
export interface MetaAdsCampanhaMetricaInterface {
  "dataHora"?: Date;
  "nome"?: string;
  "spend"?: number;
  "dateStart"?: Date;
  "dateStop"?: Date;
  "status"?: string;
  "idMeta"?: string;
  "maisRecente"?: number;
  "contaFacebookId"?: number;
  "json"?: string;
  contaFacebook?: ContaFacebook;
}

export class MetaAdsCampanhaMetrica implements MetaAdsCampanhaMetricaInterface {
  "dataHora": Date;
  "nome": string;
  "spend": number;
  "dateStart": Date;
  "dateStop": Date;
  "status": string;
  "idMeta": string;
  "maisRecente": number;
  "contaFacebookId": number;
  "json": string;
  contaFacebook: ContaFacebook;
  constructor(data?: MetaAdsCampanhaMetricaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MetaAdsCampanhaMetrica`.
   */
  public static getModelName() {
    return "MetaAdsCampanhaMetrica";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MetaAdsCampanhaMetrica for dynamic purposes.
  **/
  public static factory(data: MetaAdsCampanhaMetricaInterface): MetaAdsCampanhaMetrica{
    return new MetaAdsCampanhaMetrica(data);
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
      name: 'MetaAdsCampanhaMetrica',
      plural: 'MetaAdsCampanhaMetricas',
      path: 'MetaAdsCampanhaMetricas',
      idName: 'dataHora',
      properties: {
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "spend": {
          name: 'spend',
          type: 'number'
        },
        "dateStart": {
          name: 'dateStart',
          type: 'Date'
        },
        "dateStop": {
          name: 'dateStop',
          type: 'Date'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "idMeta": {
          name: 'idMeta',
          type: 'string'
        },
        "maisRecente": {
          name: 'maisRecente',
          type: 'number'
        },
        "contaFacebookId": {
          name: 'contaFacebookId',
          type: 'number'
        },
        "json": {
          name: 'json',
          type: 'string'
        },
      },
      relations: {
        contaFacebook: {
          name: 'contaFacebook',
          type: 'ContaFacebook',
          model: 'ContaFacebook',
          relationType: 'belongsTo',
                  keyFrom: 'contaFacebookId',
          keyTo: 'id'
        },
      }
    }
  }
}
