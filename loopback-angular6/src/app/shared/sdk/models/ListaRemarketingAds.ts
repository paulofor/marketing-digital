/* tslint:disable */

declare var Object: any;
export interface ListaRemarketingAdsInterface {
  "id"?: number;
}

export class ListaRemarketingAds implements ListaRemarketingAdsInterface {
  "id": number;
  constructor(data?: ListaRemarketingAdsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ListaRemarketingAds`.
   */
  public static getModelName() {
    return "ListaRemarketingAds";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ListaRemarketingAds for dynamic purposes.
  **/
  public static factory(data: ListaRemarketingAdsInterface): ListaRemarketingAds{
    return new ListaRemarketingAds(data);
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
      name: 'ListaRemarketingAds',
      plural: 'ListaRemarketingAds',
      path: 'ListaRemarketingAds',
      idName: 'id',
      properties: {
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
