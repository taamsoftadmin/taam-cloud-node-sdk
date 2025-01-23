// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Completions extends APIResource {
  /**
   * Chat completions
   */
  create(body: CompletionCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/chat/completions', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface CompletionCreateParams {
  messages: Array<CompletionCreateParams.Message>;

  model: string;

  max_tokens?: number;

  /**
   * Whether to stream the response
   */
  stream?: boolean;

  temperature?: number;
}

export namespace CompletionCreateParams {
  export interface Message {
    content: string;

    role: 'user' | 'assistant' | 'system';
  }
}

export declare namespace Completions {
  export { type CompletionCreateParams as CompletionCreateParams };
}
