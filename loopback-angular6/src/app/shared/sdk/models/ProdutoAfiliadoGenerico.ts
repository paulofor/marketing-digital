/* tslint:disable */
import {
  ContaGoogle,
  PlataformaVenda,
  MetaAdsPublico
} from '../index';

declare var Object: any;
export interface ProdutoAfiliadoGenericoInterface {
  "nome"?: string;
  "pixelVendaGoogle"?: string;
  "pixelVendaMeta"?: string;
  "pixelVendaMetaInstalado"?: number;
  "pixelVendaGoogleInstalado"?: number;
  "urlAfiliadoPaginaVenda"?: string;
  "percentualAfiliado"?: number;
  "contaGoogleId"?: number;
  "plataformaVendaId"?: number;
  "id"?: number;
  contaGoogle?: ContaGoogle;
  plataformaVenda?: PlataformaVenda;
  metaAdsPublicos?: MetaAdsPublico[];
}

export class ProdutoAfiliadoGenerico implements ProdutoAfiliadoGenericoInterface {
  "nome": string;
  "pixelVendaGoogle": string;
  "pixelVendaMeta": string;
  "pixelVendaMetaInstalado": number;
  "pixelVendaGoogleInstalado": number;
  "urlAfiliadoPaginaVenda": string;
  "percentualAfiliado": number;
  "contaGoogleId": number;
  "plataformaVendaId": number;
  "id": number;
  contaGoogle: ContaGoogle;
  plataformaVenda: PlataformaVenda;
  metaAdsPublicos: MetaAdsPublico[];
  constructor(data?: ProdutoAfiliadoGenericoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProdutoAfiliadoGenerico`.
   */
  public static getModelName() {
    return "ProdutoAfiliadoGenerico";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProdutoAfiliadoGenerico for dynamic purposes.
  **/
  public static factory(data: ProdutoAfiliadoGenericoInterface): ProdutoAfiliadoGenerico{
    return new ProdutoAfiliadoGenerico(data);
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
      name: 'ProdutoAfiliadoGenerico',
      plural: 'ProdutoAfiliadoGenericos',
      path: 'ProdutoAfiliadoGenericos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "pixelVendaGoogle": {
          name: 'pixelVendaGoogle',
          type: 'string'
        },
        "pixelVendaMeta": {
          name: 'pixelVendaMeta',
          type: 'string'
        },
        "pixelVendaMetaInstalado": {
          name: 'pixelVendaMetaInstalado',
          type: 'number'
        },
        "pixelVendaGoogleInstalado": {
          name: 'pixelVendaGoogleInstalado',
          type: 'number'
        },
        "urlAfiliadoPaginaVenda": {
          name: 'urlAfiliadoPaginaVenda',
          type: 'string'
        },
        "percentualAfiliado": {
          name: 'percentualAfiliado',
          type: 'number'
        },
        "contaGoogleId": {
          name: 'contaGoogleId',
          type: 'number'
        },
        "plataformaVendaId": {
          name: 'plataformaVendaId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        contaGoogle: {
          name: 'contaGoogle',
          type: 'ContaGoogle',
          model: 'ContaGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'contaGoogleId',
          keyTo: 'id'
        },
        plataformaVenda: {
          name: 'plataformaVenda',
          type: 'PlataformaVenda',
          model: 'PlataformaVenda',
          relationType: 'belongsTo',
                  keyFrom: 'plataformaVendaId',
          keyTo: 'id'
        },
        metaAdsPublicos: {
          name: 'metaAdsPublicos',
          type: 'MetaAdsPublico[]',
          model: 'MetaAdsPublico',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'produtoAfiliadoGenericoId'
        },
      }
    }
  }
}
