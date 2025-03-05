// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class Maps extends APIResource {}

export interface MapResponse {
  links?: Array<string>;

  success?: boolean;
}

export declare namespace Maps {
  export { type MapResponse as MapResponse };
}
