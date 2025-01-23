// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Scrape extends APIResource {
  /**
   * Extract content from a webpage with customizable options
   */
  create(body: ScrapeCreateParams, options?: Core.RequestOptions): Core.APIPromise<ScrapeResponse> {
    return this._client.post('/v1/scrape', { body, ...options });
  }
}

export interface ScrapeResponse {
  data?: ScrapeResponse.Data;

  success?: boolean;
}

export namespace ScrapeResponse {
  export interface Data {
    actions?: Data.Actions;

    html?: string;

    links?: Array<string>;

    llm_extraction?: unknown;

    markdown?: string;

    metadata?: Data.Metadata;

    rawHtml?: string;

    screenshot?: string;

    warning?: string;
  }

  export namespace Data {
    export interface Actions {
      screenshots?: Array<string>;
    }

    export interface Metadata {
      description?: string;

      error?: string;

      language?: string;

      sourceURL?: string;

      statusCode?: number;

      title?: string;
    }
  }
}

export interface ScrapeCreateParams {
  /**
   * The URL to scrape
   */
  url: string;

  formats?: Array<'markdown' | 'html' | 'rawHtml' | 'links' | 'screenshot' | 'screenshot@fullPage' | 'json'>;

  onlyMainContent?: boolean;
}

export declare namespace Scrape {
  export { type ScrapeResponse as ScrapeResponse, type ScrapeCreateParams as ScrapeCreateParams };
}
