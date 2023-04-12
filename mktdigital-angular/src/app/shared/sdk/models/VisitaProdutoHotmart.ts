/* tslint:disable */

declare var Object: any;
export interface VisitaProdutoHotmartInterface {
  "hotmartId"?: number;
  "nome"?: string;
  "imagem"?: string;
  "temperatura"?: number;
  "categoria"?: string;
  "formato"?: string;
  "reviewRating"?: number;
  "totalAnswers"?: number;
  "afiliacaoTipo"?: string;
  "afiliacaoValor"?: number;
  "afiliacaoPercentual"?: number;
  "produtorNome"?: string;
  "produtorCodigoHotmart"?: string;
  "blueprint"?: number;
  "dataInsercao"?: Date;
}

export class VisitaProdutoHotmart implements VisitaProdutoHotmartInterface {
  "hotmartId": number;
  "nome": string;
  "imagem": string;
  "temperatura": number;
  "categoria": string;
  "formato": string;
  "reviewRating": number;
  "totalAnswers": number;
  "afiliacaoTipo": string;
  "afiliacaoValor": number;
  "afiliacaoPercentual": number;
  "produtorNome": string;
  "produtorCodigoHotmart": string;
  "blueprint": number;
  "dataInsercao": Date;
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
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
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
          type: 'string'
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
        "blueprint": {
          name: 'blueprint',
          type: 'number'
        },
        "dataInsercao": {
          name: 'dataInsercao',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
