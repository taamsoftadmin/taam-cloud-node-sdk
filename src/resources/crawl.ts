// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Crawl extends APIResource {
  /**
   * Crawl a website with customizable options
   */
  create(body: CrawlCreateParams, options?: Core.RequestOptions): Core.APIPromise<CrawlResponse> {
    return this._client.post('/v1/crawl', { body, ...options });
  }

  /**
   * Retrieve the status and results of a crawl job
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<CrawlStatusResponse> {
    return this._client.get(`/v1/crawl/${id}`, options);
  }
}

export interface CrawlResponse {
  id?: string;

  success?: boolean;

  url?: string;
}

export interface CrawlStatusResponse {
  /**
   * Number of successfully crawled pages
   */
  completed?: number;

  /**
   * Credits consumed by the crawl
   */
  creditsUsed?: number;

  data?: Array<CrawlStatusResponse.Data>;

  /**
   * Expiration date of the crawl data
   */
  expiresAt?: string;

  /**
   * URL to retrieve next batch of data
   */
  next?: string | null;

  /**
   * Current status of the crawl
   */
  status?: 'scraping' | 'completed' | 'failed';

  /**
   * Total number of pages attempted
   */
  total?: number;
}

export namespace CrawlStatusResponse {
  export interface Data {
    html?: string;

    links?: Array<string>;

    markdown?: string;

    metadata?: Data.Metadata;

    rawHtml?: string;

    screenshot?: string;
  }

  export namespace Data {
    export interface Metadata {
      description?: string;

      error?: string;

      language?: string;

      sourceURL?: string;

      statusCode?: number;

      title?: string;
      [k: string]: unknown;
    }
  }
}

export interface CrawlCreateParams {
  /**
   * The base URL to start crawling from
   */
  url: string;

  /**
   * Allow navigation to previously linked pages
   */
  allowBackwardLinks?: boolean;

  /**
   * Allow following external links
   */
  allowExternalLinks?: boolean;

  /**
   * URL patterns to exclude from crawl
   */
  excludePaths?: Array<string>;

  /**
   * Ignore website sitemap
   */
  ignoreSitemap?: boolean;

  /**
   * URL patterns to include in crawl
   */
  includePaths?: Array<string>;

  /**
   * Maximum number of pages to crawl
   */
  limit?: number;

  /**
   * Maximum depth to crawl
   */
  maxDepth?: number;

  scrapeOptions?: CrawlCreateParams.ScrapeOptions;

  /**
   * Webhook URL for crawl events
   */
  webhook?: string;
}

export namespace CrawlCreateParams {
  export interface ScrapeOptions {
    actions?: Array<ScrapeOptions.UnionMember0 | ScrapeOptions.UnionMember1>;

    excludeTags?: Array<string>;

    formats?: Array<
      'markdown' | 'html' | 'rawHtml' | 'links' | 'screenshot' | 'screenshot@fullPage' | 'json'
    >;

    headers?: Record<string, unknown>;

    includeTags?: Array<string>;

    jsonOptions?: ScrapeOptions.JsonOptions;

    location?: ScrapeOptions.Location;

    mobile?: boolean;

    onlyMainContent?: boolean;

    removeBase64Images?: boolean;

    skipTlsVerification?: boolean;

    timeout?: number;

    waitFor?: number;
  }

  export namespace ScrapeOptions {
    export interface UnionMember0 {
      milliseconds: number;

      type: 'wait';

      selector?: string;
    }

    export interface UnionMember1 {
      type: 'screenshot' | 'click' | 'write' | 'press' | 'scroll' | 'scrape' | 'execute';

      selector?: string;

      text?: string;
    }

    export interface JsonOptions {
      prompt?: string;

      schema?: unknown;

      systemPrompt?: string;
    }

    export interface Location {
      country?: string;

      languages?: Array<string>;
    }
  }
}

export declare namespace Crawl {
  export {
    type CrawlResponse as CrawlResponse,
    type CrawlStatusResponse as CrawlStatusResponse,
    type CrawlCreateParams as CrawlCreateParams,
  };
}
