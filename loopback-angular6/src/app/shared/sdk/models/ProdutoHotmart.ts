/* tslint:disable */

declare var Object: any;
export interface ProdutoHotmartInterface {
  "id"?: number;
}

export class ProdutoHotmart implements ProdutoHotmartInterface {
  "id": number;
  constructor(data?: ProdutoHotmartInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProdutoHotmart`.
   */
  public static getModelName() {
    return "ProdutoHotmart";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProdutoHotmart for dynamic purposes.
  **/
  public static factory(data: ProdutoHotmartInterface): ProdutoHotmart{
    return new ProdutoHotmart(data);
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
      name: 'ProdutoHotmart',
      plural: 'ProdutoHotmarts',
      path: 'ProdutoHotmarts',
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
