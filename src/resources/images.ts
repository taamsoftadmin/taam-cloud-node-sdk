// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Images extends APIResource {
  /**
   * Create images from text descriptions
   */
  generate(body: ImageGenerateParams, options?: Core.RequestOptions): Core.APIPromise<ImageGenerateResponse> {
    return this._client.post('/v1/images/generations', { body, ...options });
  }
}

export interface ImageGenerateResponse {
  created?: number;

  data?: Array<ImageGenerateResponse.Data>;
}

export namespace ImageGenerateResponse {
  export interface Data {
    revised_prompt?: string;

    url?: string;
  }
}

export interface ImageGenerateParams {
  /**
   * Text description of the desired image
   */
  prompt: string;

  model?: 'dall-e-3';

  /**
   * Number of images to generate
   */
  n?: number;

  quality?: 'standard' | 'hd';

  size?: '1024x1024' | '1024x1792' | '1792x1024';

  style?: 'natural' | 'vivid';
}

export declare namespace Images {
  export {
    type ImageGenerateResponse as ImageGenerateResponse,
    type ImageGenerateParams as ImageGenerateParams,
  };
}
