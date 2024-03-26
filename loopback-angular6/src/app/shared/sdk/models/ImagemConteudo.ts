/* tslint:disable */
import {
  PromptImagemConteudo,
  ConteudoProdutoKiwify
} from '../index';

declare var Object: any;
export interface ImagemConteudoInterface {
  "imagemJpg"?: string;
  "dataCriacao"?: Date;
  "principal"?: number;
  "urlOriginal"?: string;
  "promptRevisado"?: string;
  "promptImagemConteudoId"?: number;
  "conteudoProdutoKiwifyId"?: number;
  "arquivoLocal"?: string;
  "urlFinal"?: string;
  "id"?: number;
  promptImagemConteudo?: PromptImagemConteudo;
  conteudoProdutoKiwify?: ConteudoProdutoKiwify;
}

export class ImagemConteudo implements ImagemConteudoInterface {
  "imagemJpg": string;
  "dataCriacao": Date;
  "principal": number;
  "urlOriginal": string;
  "promptRevisado": string;
  "promptImagemConteudoId": number;
  "conteudoProdutoKiwifyId": number;
  "arquivoLocal": string;
  "urlFinal": string;
  "id": number;
  promptImagemConteudo: PromptImagemConteudo;
  conteudoProdutoKiwify: ConteudoProdutoKiwify;
  constructor(data?: ImagemConteudoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ImagemConteudo`.
   */
  public static getModelName() {
    return "ImagemConteudo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ImagemConteudo for dynamic purposes.
  **/
  public static factory(data: ImagemConteudoInterface): ImagemConteudo{
    return new ImagemConteudo(data);
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
      name: 'ImagemConteudo',
      plural: 'ImagemConteudos',
      path: 'ImagemConteudos',
      idName: 'id',
      properties: {
        "imagemJpg": {
          name: 'imagemJpg',
          type: 'string'
        },
        "dataCriacao": {
          name: 'dataCriacao',
          type: 'Date'
        },
        "principal": {
          name: 'principal',
          type: 'number'
        },
        "urlOriginal": {
          name: 'urlOriginal',
          type: 'string'
        },
        "promptRevisado": {
          name: 'promptRevisado',
          type: 'string'
        },
        "promptImagemConteudoId": {
          name: 'promptImagemConteudoId',
          type: 'number'
        },
        "conteudoProdutoKiwifyId": {
          name: 'conteudoProdutoKiwifyId',
          type: 'number'
        },
        "arquivoLocal": {
          name: 'arquivoLocal',
          type: 'string'
        },
        "urlFinal": {
          name: 'urlFinal',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        promptImagemConteudo: {
          name: 'promptImagemConteudo',
          type: 'PromptImagemConteudo',
          model: 'PromptImagemConteudo',
          relationType: 'belongsTo',
                  keyFrom: 'promptImagemConteudoId',
          keyTo: 'id'
        },
        conteudoProdutoKiwify: {
          name: 'conteudoProdutoKiwify',
          type: 'ConteudoProdutoKiwify',
          model: 'ConteudoProdutoKiwify',
          relationType: 'belongsTo',
                  keyFrom: 'conteudoProdutoKiwifyId',
          keyTo: 'id'
        },
      }
    }
  }
}
