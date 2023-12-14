/* tslint:disable */

declare var Object: any;
export interface OtimizacaoCampanhaAdsRedeDisplayInterface {
  "id"?: number;
}

export class OtimizacaoCampanhaAdsRedeDisplay implements OtimizacaoCampanhaAdsRedeDisplayInterface {
  "id": number;
  constructor(data?: OtimizacaoCampanhaAdsRedeDisplayInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OtimizacaoCampanhaAdsRedeDisplay`.
   */
  public static getModelName() {
    return "OtimizacaoCampanhaAdsRedeDisplay";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OtimizacaoCampanhaAdsRedeDisplay for dynamic purposes.
  **/
  public static factory(data: OtimizacaoCampanhaAdsRedeDisplayInterface): OtimizacaoCampanhaAdsRedeDisplay{
    return new OtimizacaoCampanhaAdsRedeDisplay(data);
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
      name: 'OtimizacaoCampanhaAdsRedeDisplay',
      plural: 'OtimizacaoCampanhaAdsRedeDisplays',
      path: 'OtimizacaoCampanhaAdsRedeDisplays',
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
