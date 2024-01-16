/* tslint:disable */
import {
  DalleSolicitacaoImagem,
  ArquivoPaginaVenda
} from '../index';

declare var Object: any;
export interface ImagemPaginaVendaInterface {
  "urlOriginal"?: string;
  "arquivoLocal"?: string;
  "dalleSolicitacaoImagemId"?: number;
  "id"?: number;
  dalleSolicitacaoImagem?: DalleSolicitacaoImagem;
  arquivoPaginaVendas?: ArquivoPaginaVenda[];
}

export class ImagemPaginaVenda implements ImagemPaginaVendaInterface {
  "urlOriginal": string;
  "arquivoLocal": string;
  "dalleSolicitacaoImagemId": number;
  "id": number;
  dalleSolicitacaoImagem: DalleSolicitacaoImagem;
  arquivoPaginaVendas: ArquivoPaginaVenda[];
  constructor(data?: ImagemPaginaVendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ImagemPaginaVenda`.
   */
  public static getModelName() {
    return "ImagemPaginaVenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ImagemPaginaVenda for dynamic purposes.
  **/
  public static factory(data: ImagemPaginaVendaInterface): ImagemPaginaVenda{
    return new ImagemPaginaVenda(data);
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
      name: 'ImagemPaginaVenda',
      plural: 'ImagemPaginaVendas',
      path: 'ImagemPaginaVendas',
      idName: 'id',
      properties: {
        "urlOriginal": {
          name: 'urlOriginal',
          type: 'string'
        },
        "arquivoLocal": {
          name: 'arquivoLocal',
          type: 'string'
        },
        "dalleSolicitacaoImagemId": {
          name: 'dalleSolicitacaoImagemId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        dalleSolicitacaoImagem: {
          name: 'dalleSolicitacaoImagem',
          type: 'DalleSolicitacaoImagem',
          model: 'DalleSolicitacaoImagem',
          relationType: 'belongsTo',
                  keyFrom: 'dalleSolicitacaoImagemId',
          keyTo: 'id'
        },
        arquivoPaginaVendas: {
          name: 'arquivoPaginaVendas',
          type: 'ArquivoPaginaVenda[]',
          model: 'ArquivoPaginaVenda',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'imagemPaginaVendaId'
        },
      }
    }
  }
}
