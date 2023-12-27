/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  PixelGoogle,
  ContaGoogle
} from '../index';

declare var Object: any;
export interface PublicoAlvoAdsDiarioInterface {
  "data"?: Date;
  "nome"?: string;
  "tamanhoRedeDisplay"?: number;
  "tamanhoRedePesquisa"?: number;
  "resourceName"?: string;
  "contaGoogleId"?: number;
  "maisRecente"?: number;
  "hotmartId"?: number;
  "jsonAds"?: string;
  "pixelGoogleId"?: number;
  "id"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  pixelGoogle?: PixelGoogle;
  contaGoogle?: ContaGoogle;
}

export class PublicoAlvoAdsDiario implements PublicoAlvoAdsDiarioInterface {
  "data": Date;
  "nome": string;
  "tamanhoRedeDisplay": number;
  "tamanhoRedePesquisa": number;
  "resourceName": string;
  "contaGoogleId": number;
  "maisRecente": number;
  "hotmartId": number;
  "jsonAds": string;
  "pixelGoogleId": number;
  "id": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  pixelGoogle: PixelGoogle;
  contaGoogle: ContaGoogle;
  constructor(data?: PublicoAlvoAdsDiarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PublicoAlvoAdsDiario`.
   */
  public static getModelName() {
    return "PublicoAlvoAdsDiario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PublicoAlvoAdsDiario for dynamic purposes.
  **/
  public static factory(data: PublicoAlvoAdsDiarioInterface): PublicoAlvoAdsDiario{
    return new PublicoAlvoAdsDiario(data);
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
      name: 'PublicoAlvoAdsDiario',
      plural: 'PublicoAlvoAdsDiarios',
      path: 'PublicoAlvoAdsDiarios',
      idName: 'id',
      properties: {
        "data": {
          name: 'data',
          type: 'Date'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "tamanhoRedeDisplay": {
          name: 'tamanhoRedeDisplay',
          type: 'number'
        },
        "tamanhoRedePesquisa": {
          name: 'tamanhoRedePesquisa',
          type: 'number'
        },
        "resourceName": {
          name: 'resourceName',
          type: 'string'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
          type: 'number'
        },
        "maisRecente": {
          name: 'maisRecente',
          type: 'number'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "jsonAds": {
          name: 'jsonAds',
          type: 'string'
        },
        "pixelGoogleId": {
          name: 'pixelGoogleId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        produtoAfiliadoHotmart: {
          name: 'produtoAfiliadoHotmart',
          type: 'ProdutoAfiliadoHotmart',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'belongsTo',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        pixelGoogle: {
          name: 'pixelGoogle',
          type: 'PixelGoogle',
          model: 'PixelGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'pixelGoogleId',
          keyTo: 'id'
        },
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
