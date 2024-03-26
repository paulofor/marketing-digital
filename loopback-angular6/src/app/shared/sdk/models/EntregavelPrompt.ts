/* tslint:disable */
import {
  EntregavelProduto,
  PromptItem
} from '../index';

declare var Object: any;
export interface EntregavelPromptInterface {
  "entregavelProdutoId"?: number;
  "promptItemId"?: number;
  "id"?: number;
  entregavelProduto?: EntregavelProduto;
  promptItem?: PromptItem;
}

export class EntregavelPrompt implements EntregavelPromptInterface {
  "entregavelProdutoId": number;
  "promptItemId": number;
  "id": number;
  entregavelProduto: EntregavelProduto;
  promptItem: PromptItem;
  constructor(data?: EntregavelPromptInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EntregavelPrompt`.
   */
  public static getModelName() {
    return "EntregavelPrompt";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EntregavelPrompt for dynamic purposes.
  **/
  public static factory(data: EntregavelPromptInterface): EntregavelPrompt{
    return new EntregavelPrompt(data);
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
      name: 'EntregavelPrompt',
      plural: 'EntregavelPrompts',
      path: 'EntregavelPrompts',
      idName: 'id',
      properties: {
        "entregavelProdutoId": {
          name: 'entregavelProdutoId',
          type: 'number'
        },
        "promptItemId": {
          name: 'promptItemId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        entregavelProduto: {
          name: 'entregavelProduto',
          type: 'EntregavelProduto',
          model: 'EntregavelProduto',
          relationType: 'belongsTo',
                  keyFrom: 'entregavelProdutoId',
          keyTo: 'id'
        },
        promptItem: {
          name: 'promptItem',
          type: 'PromptItem',
          model: 'PromptItem',
          relationType: 'belongsTo',
                  keyFrom: 'promptItemId',
          keyTo: 'id'
        },
      }
    }
  }
}
