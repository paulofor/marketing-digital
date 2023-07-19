/* tslint:disable */

declare var Object: any;
export interface ProdutoPlataformaInterface {
  "id"?: number;
}

export class ProdutoPlataforma implements ProdutoPlataformaInterface {
  "id": number;
  constructor(data?: ProdutoPlataformaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProdutoPlataforma`.
   */
  public static getModelName() {
    return "ProdutoPlataforma";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProdutoPlataforma for dynamic purposes.
  **/
  public static factory(data: ProdutoPlataformaInterface): ProdutoPlataforma{
    return new ProdutoPlataforma(data);
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
      name: 'ProdutoPlataforma',
      plural: 'ProdutoPlataformas',
      path: 'ProdutoPlataformas',
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
