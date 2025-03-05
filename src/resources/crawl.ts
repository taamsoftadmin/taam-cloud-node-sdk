// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class Crawl extends APIResource {}

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

export declare namespace Crawl {
  export { type CrawlResponse as CrawlResponse, type CrawlStatusResponse as CrawlStatusResponse };
}
