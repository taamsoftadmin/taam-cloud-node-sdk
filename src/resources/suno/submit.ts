// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Submit extends APIResource {
  /**
   * Generate music
   */
  generateMusic(body: SubmitGenerateMusicParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/suno/submit/music', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface SubmitGenerateMusicParams {
  mv?: string;

  prompt?: string;

  tags?: string;

  title?: string;
}

export declare namespace Submit {
  export { type SubmitGenerateMusicParams as SubmitGenerateMusicParams };
}
