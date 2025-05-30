/* tslint:disable */

declare var Object: any;
export interface PixelProdutoHotmartContaCompraInterface {
  "id"?: number;
}

export class PixelProdutoHotmartContaCompra implements PixelProdutoHotmartContaCompraInterface {
  "id": number;
  constructor(data?: PixelProdutoHotmartContaCompraInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PixelProdutoHotmartContaCompra`.
   */
  public static getModelName() {
    return "PixelProdutoHotmartContaCompra";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PixelProdutoHotmartContaCompra for dynamic purposes.
  **/
  public static factory(data: PixelProdutoHotmartContaCompraInterface): PixelProdutoHotmartContaCompra{
    return new PixelProdutoHotmartContaCompra(data);
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
      name: 'PixelProdutoHotmartContaCompra',
      plural: 'PixelProdutoHotmartContaCompras',
      path: 'PixelProdutoHotmartContaCompras',
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
