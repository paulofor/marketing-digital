/* tslint:disable */
import {
  IdeiaPalavraChave,
  ProdutoAfiliadoHotmart,
  ProdutoAfiliadoMetrica
} from '../index';

declare var Object: any;
export interface VisitaProdutoHotmartInterface {
  "nome"?: string;
  "imagem"?: string;
  "temperatura"?: number;
  "categoria"?: string;
  "formato"?: string;
  "reviewRating"?: number;
  "totalAnswers"?: number;
  "afiliacaoTipo"?: number;
  "afiliacaoValor"?: number;
  "afiliacaoPercentual"?: number;
  "produtorNome"?: string;
  "produtorCodigoHotmart"?: string;
  "dataInsercao"?: Date;
  "blueprint"?: number;
  "produtoCodigoU"?: string;
  "maisRecente"?: number;
  "hotmartId"?: number;
  "possuiPalavraChave"?: number;
  ideiaPalavraChaves?: IdeiaPalavraChave[];
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  produtoAfiliadoMetricas?: ProdutoAfiliadoMetrica[];
}

export class VisitaProdutoHotmart implements VisitaProdutoHotmartInterface {
  "nome": string;
  "imagem": string;
  "temperatura": number;
  "categoria": string;
  "formato": string;
  "reviewRating": number;
  "totalAnswers": number;
  "afiliacaoTipo": number;
  "afiliacaoValor": number;
  "afiliacaoPercentual": number;
  "produtorNome": string;
  "produtorCodigoHotmart": string;
  "dataInsercao": Date;
  "blueprint": number;
  "produtoCodigoU": string;
  "maisRecente": number;
  "hotmartId": number;
  "possuiPalavraChave": number;
  ideiaPalavraChaves: IdeiaPalavraChave[];
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  produtoAfiliadoMetricas: ProdutoAfiliadoMetrica[];
  constructor(data?: VisitaProdutoHotmartInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VisitaProdutoHotmart`.
   */
  public static getModelName() {
    return "VisitaProdutoHotmart";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VisitaProdutoHotmart for dynamic purposes.
  **/
  public static factory(data: VisitaProdutoHotmartInterface): VisitaProdutoHotmart{
    return new VisitaProdutoHotmart(data);
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
      name: 'VisitaProdutoHotmart',
      plural: 'VisitaProdutoHotmarts',
      path: 'VisitaProdutoHotmarts',
      idName: 'hotmartId',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "imagem": {
          name: 'imagem',
          type: 'string'
        },
        "temperatura": {
          name: 'temperatura',
          type: 'number'
        },
        "categoria": {
          name: 'categoria',
          type: 'string'
        },
        "formato": {
          name: 'formato',
          type: 'string'
        },
        "reviewRating": {
          name: 'reviewRating',
          type: 'number'
        },
        "totalAnswers": {
          name: 'totalAnswers',
          type: 'number'
        },
        "afiliacaoTipo": {
          name: 'afiliacaoTipo',
          type: 'number'
        },
        "afiliacaoValor": {
          name: 'afiliacaoValor',
          type: 'number'
        },
        "afiliacaoPercentual": {
          name: 'afiliacaoPercentual',
          type: 'number'
        },
        "produtorNome": {
          name: 'produtorNome',
          type: 'string'
        },
        "produtorCodigoHotmart": {
          name: 'produtorCodigoHotmart',
          type: 'string'
        },
        "dataInsercao": {
          name: 'dataInsercao',
          type: 'Date'
        },
        "blueprint": {
          name: 'blueprint',
          type: 'number'
        },
        "produtoCodigoU": {
          name: 'produtoCodigoU',
          type: 'string'
        },
        "maisRecente": {
          name: 'maisRecente',
          type: 'number'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
        "possuiPalavraChave": {
          name: 'possuiPalavraChave',
          type: 'number'
        },
      },
      relations: {
        ideiaPalavraChaves: {
          name: 'ideiaPalavraChaves',
          type: 'IdeiaPalavraChave[]',
          model: 'IdeiaPalavraChave',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        produtoAfiliadoHotmart: {
          name: 'produtoAfiliadoHotmart',
          type: 'ProdutoAfiliadoHotmart',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'belongsTo',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        produtoAfiliadoMetricas: {
          name: 'produtoAfiliadoMetricas',
          type: 'ProdutoAfiliadoMetrica[]',
          model: 'ProdutoAfiliadoMetrica',
          relationType: 'hasMany',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
      }
    }
  }
}
