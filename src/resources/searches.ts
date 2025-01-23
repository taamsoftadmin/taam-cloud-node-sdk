// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Searches extends APIResource {
  /**
   * Perform intelligent AI-powered searches
   */
  perform(body: SearchPerformParams, options?: Core.RequestOptions): Core.APIPromise<SearchResponse> {
    return this._client.post('/api/search', { body, ...options });
  }
}

export interface SearchResponse {
  message?: string;

  sources?: Array<SearchResponse.Source>;
}

export namespace SearchResponse {
  export interface Source {
    metadata?: Source.Metadata;

    pageContent?: string;
  }

  export namespace Source {
    export interface Metadata {
      title?: string;

      url?: string;
    }
  }
}

export interface SearchPerformParams {
  chatModel: SearchPerformParams.ChatModel;

  embeddingModel: SearchPerformParams.EmbeddingModel;

  /**
   * Specifies which focus mode to use for search
   */
  focusMode:
    | 'webSearch'
    | 'academicSearch'
    | 'writingAssistant'
    | 'wolframAlphaSearch'
    | 'youtubeSearch'
    | 'redditSearch';
}

export namespace SearchPerformParams {
  export interface ChatModel {
    model: 'gpt-3.5-turbo' | 'gpt-4' | 'gpt-4o' | 'gpt-4o-mini';

    provider: 'custom_openai';

    customOpenAIBaseURL?: string;

    customOpenAIKey?: string;
  }

  export interface EmbeddingModel {
    model:
      | 'text-embedding-3-large'
      | 'text-embedding-3-small'
      | 'text-embedding-ada-002'
      | 'jina-embeddings-v3'
      | 'jina-embeddings-v2-base-en'
      | 'jina-embeddings-v2-base-zh'
      | 'jina-embeddings-v2-base-code';

    provider: 'custom_openai';
  }
}

export declare namespace Searches {
  export { type SearchResponse as SearchResponse, type SearchPerformParams as SearchPerformParams };
}
