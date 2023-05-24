/* tslint:disable */

declare var Object: any;
export interface AnuncioCampanhaAdsInterface {
  "titulo1"?: string;
  "titulo2"?: string;
  "titulo3"?: string;
  "descricao1"?: string;
  "descricao2"?: string;
  "id"?: number;
  "campanhaAdsId"?: number;
}

export class AnuncioCampanhaAds implements AnuncioCampanhaAdsInterface {
  "titulo1": string;
  "titulo2": string;
  "titulo3": string;
  "descricao1": string;
  "descricao2": string;
  "id": number;
  "campanhaAdsId": number;
  constructor(data?: AnuncioCampanhaAdsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnuncioCampanhaAds`.
   */
  public static getModelName() {
    return "AnuncioCampanhaAds";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnuncioCampanhaAds for dynamic purposes.
  **/
  public static factory(data: AnuncioCampanhaAdsInterface): AnuncioCampanhaAds{
    return new AnuncioCampanhaAds(data);
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
      name: 'AnuncioCampanhaAds',
      plural: 'AnuncioCampanhaAds',
      path: 'AnuncioCampanhaAds',
      idName: 'id',
      properties: {
        "titulo1": {
          name: 'titulo1',
          type: 'string'
        },
        "titulo2": {
          name: 'titulo2',
          type: 'string'
        },
        "titulo3": {
          name: 'titulo3',
          type: 'string'
        },
        "descricao1": {
          name: 'descricao1',
          type: 'string'
        },
        "descricao2": {
          name: 'descricao2',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "campanhaAdsId": {
          name: 'campanhaAdsId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
