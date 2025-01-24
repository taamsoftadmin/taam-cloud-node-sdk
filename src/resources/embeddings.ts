// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Embeddings extends APIResource {
  /**
   * Generate embeddings
   */
  create(body: EmbeddingCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v1/embeddings', { body, ...options });
  }
}

export type EmbeddingsResponse = unknown;

export interface EmbeddingCreateParams {
  input: Array<string>;

  model: string;
}

export declare namespace Embeddings {
  export {
    type EmbeddingsResponse as EmbeddingsResponse,
    type EmbeddingCreateParams as EmbeddingCreateParams,
  };
}
