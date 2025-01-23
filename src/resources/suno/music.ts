// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Music extends APIResource {
  /**
   * Generate music
   */
  submit(body: MusicSubmitParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/suno/submit/music', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface MusicSubmitParams {
  mv?: string;

  prompt?: string;

  tags?: string;

  title?: string;
}

export declare namespace Music {
  export { type MusicSubmitParams as MusicSubmitParams };
}
