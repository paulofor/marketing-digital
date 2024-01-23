/* tslint:disable */
import {
  ContaGoogle,
  PaginaVendaPropria
} from '../index';

declare var Object: any;
export interface PixelAdsSegmentoMercadoInterface {
  "nome"?: string;
  "contaGoogleId"?: number;
  "id"?: number;
  contaGoogle?: ContaGoogle;
  paginaVendaProprias?: PaginaVendaPropria[];
}

export class PixelAdsSegmentoMercado implements PixelAdsSegmentoMercadoInterface {
  "nome": string;
  "contaGoogleId": number;
  "id": number;
  contaGoogle: ContaGoogle;
  paginaVendaProprias: PaginaVendaPropria[];
  constructor(data?: PixelAdsSegmentoMercadoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PixelAdsSegmentoMercado`.
   */
  public static getModelName() {
    return "PixelAdsSegmentoMercado";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PixelAdsSegmentoMercado for dynamic purposes.
  **/
  public static factory(data: PixelAdsSegmentoMercadoInterface): PixelAdsSegmentoMercado{
    return new PixelAdsSegmentoMercado(data);
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
      name: 'PixelAdsSegmentoMercado',
      plural: 'PixelAdsSegmentoMercados',
      path: 'PixelAdsSegmentoMercados',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
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
        paginaVendaProprias: {
          name: 'paginaVendaProprias',
          type: 'PaginaVendaPropria[]',
          model: 'PaginaVendaPropria',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'pixelAdsSegmentoMercadoId'
        },
      }
    }
  }
}
