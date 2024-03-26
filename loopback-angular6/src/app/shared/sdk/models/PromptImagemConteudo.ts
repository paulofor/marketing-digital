/* tslint:disable */
import {
  EntregavelProduto,
  ImagemConteudo
} from '../index';

declare var Object: any;
export interface PromptImagemConteudoInterface {
  "prompt"?: string;
  "geraImagem"?: number;
  "entregavelProdutoId"?: number;
  "id"?: number;
  entregavelProduto?: EntregavelProduto;
  imagemConteudos?: ImagemConteudo[];
}

export class PromptImagemConteudo implements PromptImagemConteudoInterface {
  "prompt": string;
  "geraImagem": number;
  "entregavelProdutoId": number;
  "id": number;
  entregavelProduto: EntregavelProduto;
  imagemConteudos: ImagemConteudo[];
  constructor(data?: PromptImagemConteudoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PromptImagemConteudo`.
   */
  public static getModelName() {
    return "PromptImagemConteudo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PromptImagemConteudo for dynamic purposes.
  **/
  public static factory(data: PromptImagemConteudoInterface): PromptImagemConteudo{
    return new PromptImagemConteudo(data);
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
      name: 'PromptImagemConteudo',
      plural: 'PromptImagemConteudos',
      path: 'PromptImagemConteudos',
      idName: 'id',
      properties: {
        "prompt": {
          name: 'prompt',
          type: 'string'
        },
        "geraImagem": {
          name: 'geraImagem',
          type: 'number'
        },
        "entregavelProdutoId": {
          name: 'entregavelProdutoId',
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
        imagemConteudos: {
          name: 'imagemConteudos',
          type: 'ImagemConteudo[]',
          model: 'ImagemConteudo',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'promptImagemConteudoId'
        },
      }
    }
  }
}
