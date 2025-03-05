// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class Scrape extends APIResource {}

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

export declare namespace Scrape {
  export { type ScrapeResponse as ScrapeResponse };
}
