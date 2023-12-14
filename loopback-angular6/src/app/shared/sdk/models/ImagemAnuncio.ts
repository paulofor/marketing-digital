/* tslint:disable */

declare var Object: any;
export interface ImagemAnuncioInterface {
  "nome"?: string;
  "binarioImagem"?: any;
  "id"?: number;
}

export class ImagemAnuncio implements ImagemAnuncioInterface {
  "nome": string;
  "binarioImagem": any;
  "id": number;
  constructor(data?: ImagemAnuncioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ImagemAnuncio`.
   */
  public static getModelName() {
    return "ImagemAnuncio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ImagemAnuncio for dynamic purposes.
  **/
  public static factory(data: ImagemAnuncioInterface): ImagemAnuncio{
    return new ImagemAnuncio(data);
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
      name: 'ImagemAnuncio',
      plural: 'ImagemAnuncios',
      path: 'ImagemAnuncios',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "binarioImagem": {
          name: 'binarioImagem',
          type: 'any'
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
