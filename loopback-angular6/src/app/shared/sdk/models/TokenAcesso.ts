/* tslint:disable */

declare var Object: any;
export interface TokenAcessoInterface {
  "nome"?: string;
  "token"?: string;
  "dataAtualizacao"?: Date;
}

export class TokenAcesso implements TokenAcessoInterface {
  "nome": string;
  "token": string;
  "dataAtualizacao": Date;
  constructor(data?: TokenAcessoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TokenAcesso`.
   */
  public static getModelName() {
    return "TokenAcesso";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TokenAcesso for dynamic purposes.
  **/
  public static factory(data: TokenAcessoInterface): TokenAcesso{
    return new TokenAcesso(data);
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
      name: 'TokenAcesso',
      plural: 'TokenAcessos',
      path: 'TokenAcessos',
      idName: 'nome',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "token": {
          name: 'token',
          type: 'string'
        },
        "dataAtualizacao": {
          name: 'dataAtualizacao',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
