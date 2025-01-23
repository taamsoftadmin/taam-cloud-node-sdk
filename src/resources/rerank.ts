// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Rerank extends APIResource {
  /**
   * Rerank documents
   */
  create(body: RerankCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/rerank', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface RerankCreateParams {
  documents: Array<string>;

  model: string;

  query: string;

  top_n?: number;
}

export declare namespace Rerank {
  export { type RerankCreateParams as RerankCreateParams };
}
