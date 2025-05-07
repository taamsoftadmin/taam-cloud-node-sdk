// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Rerank extends APIResource {
  /**
   * Reorder a list of documents based on their relevance to a query
   *
   * @example
   * ```ts
   * await client.rerank.create({
   *   documents: [
   *     'Exercise improves cardiovascular health and reduces stress.',
   *     'Proper nutrition is essential for overall well-being.',
   *     'Sleep quality affects mental and physical performance.',
   *   ],
   *   model: 'mixr-v1',
   *   query: 'What are the health benefits of exercise?',
   *   top_n: 2,
   * });
   * ```
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
