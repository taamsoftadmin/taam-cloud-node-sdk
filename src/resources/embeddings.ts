// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Embeddings extends APIResource {
  /**
   * Create vector embeddings from text input for semantic search and similarity
   * operations
   */
  create(body: EmbeddingCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v1/embeddings', { body, ...options });
  }
}

export type EmbeddingCreateResponse = unknown;

export interface EmbeddingCreateParams {
  input: Array<string>;

  model: string;
}

export declare namespace Embeddings {
  export {
    type EmbeddingCreateResponse as EmbeddingCreateResponse,
    type EmbeddingCreateParams as EmbeddingCreateParams,
  };
}
