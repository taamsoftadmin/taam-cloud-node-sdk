// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Maps extends APIResource {
  /**
   * Discover and map all links on a website
   */
  discover(body: MapDiscoverParams, options?: Core.RequestOptions): Core.APIPromise<MapResponse> {
    return this._client.post('/v1/map', { body, ...options });
  }
}

export interface MapResponse {
  links?: Array<string>;

  success?: boolean;
}

export interface MapDiscoverParams {
  /**
   * The base URL to start mapping from
   */
  url: string;

  /**
   * Ignore the website sitemap when crawling
   */
  ignoreSitemap?: boolean;

  /**
   * Include subdomains of the website
   */
  includeSubdomains?: boolean;

  /**
   * Maximum number of links to return
   */
  limit?: number;

  /**
   * Search query to use for mapping
   */
  search?: string;

  /**
   * Only return links found in the website sitemap
   */
  sitemapOnly?: boolean;
}

export declare namespace Maps {
  export { type MapResponse as MapResponse, type MapDiscoverParams as MapDiscoverParams };
}
