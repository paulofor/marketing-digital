/* tslint:disable */

declare var Object: any;
export interface IdeiaPalavraChaveInterface {
  "texto"?: string;
  "mediaPesquisa"?: number;
  "concorrencia"?: string;
  "dataAcesso"?: Date;
  "cpcMaximoTopPage"?: number;
  "cpcMinimoTopPage"?: number;
  "hotmartId"?: number;
}

export class IdeiaPalavraChave implements IdeiaPalavraChaveInterface {
  "texto": string;
  "mediaPesquisa": number;
  "concorrencia": string;
  "dataAcesso": Date;
  "cpcMaximoTopPage": number;
  "cpcMinimoTopPage": number;
  "hotmartId": number;
  constructor(data?: IdeiaPalavraChaveInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `IdeiaPalavraChave`.
   */
  public static getModelName() {
    return "IdeiaPalavraChave";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of IdeiaPalavraChave for dynamic purposes.
  **/
  public static factory(data: IdeiaPalavraChaveInterface): IdeiaPalavraChave{
    return new IdeiaPalavraChave(data);
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
      name: 'IdeiaPalavraChave',
      plural: 'IdeiaPalavraChaves',
      path: 'IdeiaPalavraChaves',
      idName: 'texto',
      properties: {
        "texto": {
          name: 'texto',
          type: 'string'
        },
        "mediaPesquisa": {
          name: 'mediaPesquisa',
          type: 'number'
        },
        "concorrencia": {
          name: 'concorrencia',
          type: 'string'
        },
        "dataAcesso": {
          name: 'dataAcesso',
          type: 'Date'
        },
        "cpcMaximoTopPage": {
          name: 'cpcMaximoTopPage',
          type: 'number'
        },
        "cpcMinimoTopPage": {
          name: 'cpcMinimoTopPage',
          type: 'number'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
