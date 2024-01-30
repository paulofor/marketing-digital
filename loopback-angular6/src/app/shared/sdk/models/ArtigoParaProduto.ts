/* tslint:disable */

declare var Object: any;
export interface ArtigoParaProdutoInterface {
  "url"?: string;
  "textoIngles"?: string;
  "tituloArtigo"?: string;
  "tituloTraduzido"?: string;
  "id"?: number;
}

export class ArtigoParaProduto implements ArtigoParaProdutoInterface {
  "url": string;
  "textoIngles": string;
  "tituloArtigo": string;
  "tituloTraduzido": string;
  "id": number;
  constructor(data?: ArtigoParaProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ArtigoParaProduto`.
   */
  public static getModelName() {
    return "ArtigoParaProduto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ArtigoParaProduto for dynamic purposes.
  **/
  public static factory(data: ArtigoParaProdutoInterface): ArtigoParaProduto{
    return new ArtigoParaProduto(data);
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
      name: 'ArtigoParaProduto',
      plural: 'ArtigoParaProdutos',
      path: 'ArtigoParaProdutos',
      idName: 'id',
      properties: {
        "url": {
          name: 'url',
          type: 'string'
        },
        "textoIngles": {
          name: 'textoIngles',
          type: 'string'
        },
        "tituloArtigo": {
          name: 'tituloArtigo',
          type: 'string'
        },
        "tituloTraduzido": {
          name: 'tituloTraduzido',
          type: 'string'
        },
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
