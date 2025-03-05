// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Web extends APIResource {
  /**
   * Unified endpoint for web scraping, crawling, mapping and AI search
   */
  create(body: WebCreateParams, options?: Core.RequestOptions): Core.APIPromise<WebCreateResponse> {
    return this._client.post('/v1/web', { body, ...options });
  }
}

export interface WebCreateResponse {
  /**
   * Unique identifier for the request
   */
  id?: string;

  /**
   * Unix timestamp of when the request was created
   */
  created?: number;

  /**
   * Model-specific response data
   */
  data?: unknown;

  /**
   * Model used for the request
   */
  model?: string;

  /**
   * Type of completion (e.g., scrape.completion)
   */
  object?: string;

  system_fingerprint?: string;

  usage?: WebCreateResponse.Usage;
}

export namespace WebCreateResponse {
  export interface Usage {
    completion_tokens?: number;

    prompt_tokens?: number;

    total_tokens?: number;
  }
}

export interface WebCreateParams {
  /**
   * Type of web service to use
   */
  model: 'scrape' | 'crawl' | 'map' | 'taam-ai-search' | 'crawl-status';

  /**
   * Parameters specific to the selected model
   */
  params?: unknown;
}

export declare namespace Web {
  export { type WebCreateResponse as WebCreateResponse, type WebCreateParams as WebCreateParams };
}
