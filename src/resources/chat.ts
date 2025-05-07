// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Chat extends APIResource {
  /**
   * Generate chat completions based on provided conversation history
   *
   * @example
   * ```ts
   * await client.chat.createCompletion({
   *   messages: [
   *     {
   *       role: 'system',
   *       content: 'You are a helpful assistant.',
   *     },
   *     { role: 'user', content: 'Hello, how are you today?' },
   *   ],
   *   model: 'gpt-4',
   *   max_tokens: 150,
   *   temperature: 0.7,
   * });
   * ```
   */
  createCompletion(body: ChatCreateCompletionParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/chat/completions', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ChatCreateCompletionParams {
  messages: Array<ChatCreateCompletionParams.Message>;

  model: string;

  max_tokens?: number;

  /**
   * Whether to stream the response
   */
  stream?: boolean;

  temperature?: number;
}

export namespace ChatCreateCompletionParams {
  export interface Message {
    content: string;

    role: 'user' | 'assistant' | 'system';
  }
}

export declare namespace Chat {
  export { type ChatCreateCompletionParams as ChatCreateCompletionParams };
}
