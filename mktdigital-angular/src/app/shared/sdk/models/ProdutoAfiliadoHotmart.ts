/* tslint:disable */

declare var Object: any;
export interface ProdutoAfiliadoHotmartInterface {
  "nome"?: string;
  "urlFinal"?: string;
  "urlTracking"?: string;
  "geraTesteCampanha"?: number;
  "hotmartId"?: number;
  "id"?: number;
}

export class ProdutoAfiliadoHotmart implements ProdutoAfiliadoHotmartInterface {
  "nome": string;
  "urlFinal": string;
  "urlTracking": string;
  "geraTesteCampanha": number;
  "hotmartId": number;
  "id": number;
  constructor(data?: ProdutoAfiliadoHotmartInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProdutoAfiliadoHotmart`.
   */
  public static getModelName() {
    return "ProdutoAfiliadoHotmart";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProdutoAfiliadoHotmart for dynamic purposes.
  **/
  public static factory(data: ProdutoAfiliadoHotmartInterface): ProdutoAfiliadoHotmart{
    return new ProdutoAfiliadoHotmart(data);
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
      name: 'ProdutoAfiliadoHotmart',
      plural: 'ProdutoAfiliadoHotmarts',
      path: 'ProdutoAfiliadoHotmarts',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "urlFinal": {
          name: 'urlFinal',
          type: 'string'
        },
        "urlTracking": {
          name: 'urlTracking',
          type: 'string'
        },
        "geraTesteCampanha": {
          name: 'geraTesteCampanha',
          type: 'number'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
