/* tslint:disable */
import {
  ProdutoAfiliadoHotmart,
  AnuncioAdsDisplay
} from '../index';

declare var Object: any;
export interface ImagemConjuntoInterface {
  "nome"?: string;
  "nomeImagem1200x628"?: string;
  "nomeImagem1200x1200"?: string;
  "nomeImagem960x1600"?: string;
  "id"?: number;
  "hotmartId"?: number;
  produtoAfiliadoHotmart?: ProdutoAfiliadoHotmart;
  anuncioAdsDisplays?: AnuncioAdsDisplay[];
}

export class ImagemConjunto implements ImagemConjuntoInterface {
  "nome": string;
  "nomeImagem1200x628": string;
  "nomeImagem1200x1200": string;
  "nomeImagem960x1600": string;
  "id": number;
  "hotmartId": number;
  produtoAfiliadoHotmart: ProdutoAfiliadoHotmart;
  anuncioAdsDisplays: AnuncioAdsDisplay[];
  constructor(data?: ImagemConjuntoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ImagemConjunto`.
   */
  public static getModelName() {
    return "ImagemConjunto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ImagemConjunto for dynamic purposes.
  **/
  public static factory(data: ImagemConjuntoInterface): ImagemConjunto{
    return new ImagemConjunto(data);
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
      name: 'ImagemConjunto',
      plural: 'ImagemConjuntos',
      path: 'ImagemConjuntos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "nomeImagem1200x628": {
          name: 'nomeImagem1200x628',
          type: 'string'
        },
        "nomeImagem1200x1200": {
          name: 'nomeImagem1200x1200',
          type: 'string'
        },
        "nomeImagem960x1600": {
          name: 'nomeImagem960x1600',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "hotmartId": {
          name: 'hotmartId',
          type: 'number'
        },
      },
      relations: {
        produtoAfiliadoHotmart: {
          name: 'produtoAfiliadoHotmart',
          type: 'ProdutoAfiliadoHotmart',
          model: 'ProdutoAfiliadoHotmart',
          relationType: 'belongsTo',
                  keyFrom: 'hotmartId',
          keyTo: 'hotmartId'
        },
        anuncioAdsDisplays: {
          name: 'anuncioAdsDisplays',
          type: 'AnuncioAdsDisplay[]',
          model: 'AnuncioAdsDisplay',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'imagemConjuntoId'
        },
      }
    }
  }
}
