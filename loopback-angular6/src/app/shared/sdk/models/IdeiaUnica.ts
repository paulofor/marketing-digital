/* tslint:disable */
import {
  ProdutoProprio
} from '../index';

declare var Object: any;
export interface IdeiaUnicaInterface {
  "nome"?: string;
  "emocaoUnica"?: string;
  "produtoProprioId"?: number;
  "id"?: number;
  produtoProprio?: ProdutoProprio;
}

export class IdeiaUnica implements IdeiaUnicaInterface {
  "nome": string;
  "emocaoUnica": string;
  "produtoProprioId": number;
  "id": number;
  produtoProprio: ProdutoProprio;
  constructor(data?: IdeiaUnicaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `IdeiaUnica`.
   */
  public static getModelName() {
    return "IdeiaUnica";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of IdeiaUnica for dynamic purposes.
  **/
  public static factory(data: IdeiaUnicaInterface): IdeiaUnica{
    return new IdeiaUnica(data);
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
      name: 'IdeiaUnica',
      plural: 'IdeiaUnicas',
      path: 'IdeiaUnicas',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "emocaoUnica": {
          name: 'emocaoUnica',
          type: 'string'
        },
        "produtoProprioId": {
          name: 'produtoProprioId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        produtoProprio: {
          name: 'produtoProprio',
          type: 'ProdutoProprio',
          model: 'ProdutoProprio',
          relationType: 'belongsTo',
                  keyFrom: 'produtoProprioId',
          keyTo: 'id'
        },
      }
    }
  }
}
