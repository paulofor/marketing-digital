/* tslint:disable */
import {
  ContaGoogle
} from '../index';

declare var Object: any;
export interface SegmentoMercadoAdsPersonalizadoInterface {
  "jsonAds"?: string;
  "dataColeta"?: Date;
  "nome"?: string;
  "maisRecente"?: number;
  "contaGoogleId"?: number;
  "id"?: number;
  contaGoogle?: ContaGoogle;
}

export class SegmentoMercadoAdsPersonalizado implements SegmentoMercadoAdsPersonalizadoInterface {
  "jsonAds": string;
  "dataColeta": Date;
  "nome": string;
  "maisRecente": number;
  "contaGoogleId": number;
  "id": number;
  contaGoogle: ContaGoogle;
  constructor(data?: SegmentoMercadoAdsPersonalizadoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SegmentoMercadoAdsPersonalizado`.
   */
  public static getModelName() {
    return "SegmentoMercadoAdsPersonalizado";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SegmentoMercadoAdsPersonalizado for dynamic purposes.
  **/
  public static factory(data: SegmentoMercadoAdsPersonalizadoInterface): SegmentoMercadoAdsPersonalizado{
    return new SegmentoMercadoAdsPersonalizado(data);
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
      name: 'SegmentoMercadoAdsPersonalizado',
      plural: 'SegmentoMercadoAdsPersonalizados',
      path: 'SegmentoMercadoAdsPersonalizados',
      idName: 'id',
      properties: {
        "jsonAds": {
          name: 'jsonAds',
          type: 'string'
        },
        "dataColeta": {
          name: 'dataColeta',
          type: 'Date'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "maisRecente": {
          name: 'maisRecente',
          type: 'number'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        contaGoogle: {
          name: 'contaGoogle',
          type: 'ContaGoogle',
          model: 'ContaGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'contaGoogleId',
          keyTo: 'id'
        },
      }
    }
  }
}
