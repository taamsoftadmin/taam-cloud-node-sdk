// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class Searches extends APIResource {}

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

export declare namespace Searches {
  export { type SearchResponse as SearchResponse };
}
