// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Models extends APIResource {
  /**
   * Get a list of all available AI models
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ModelListResponse> {
    return this._client.get('/v1/models', options);
  }
}

export interface ModelListResponse {
  data?: Array<ModelListResponse.Data>;
}

export namespace ModelListResponse {
  export interface Data {
    id?: string;

    name?: string;

    type?: string;
  }
}

export declare namespace Models {
  export { type ModelListResponse as ModelListResponse };
}
