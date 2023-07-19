/* tslint:disable */

declare var Object: any;
export interface VisitaProdutoPlataformaInterface {
  "id"?: number;
}

export class VisitaProdutoPlataforma implements VisitaProdutoPlataformaInterface {
  "id": number;
  constructor(data?: VisitaProdutoPlataformaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VisitaProdutoPlataforma`.
   */
  public static getModelName() {
    return "VisitaProdutoPlataforma";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VisitaProdutoPlataforma for dynamic purposes.
  **/
  public static factory(data: VisitaProdutoPlataformaInterface): VisitaProdutoPlataforma{
    return new VisitaProdutoPlataforma(data);
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
      name: 'VisitaProdutoPlataforma',
      plural: 'VisitaProdutoPlataformas',
      path: 'VisitaProdutoPlataformas',
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
