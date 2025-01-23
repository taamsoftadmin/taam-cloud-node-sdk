// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Generations extends APIResource {
  /**
   * Create images from text descriptions
   */
  create(
    body: GenerationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImageGenerationResponse> {
    return this._client.post('/v1/images/generations', { body, ...options });
  }
}

export interface ImageGenerationResponse {
  created?: number;

  data?: Array<ImageGenerationResponse.Data>;
}

export namespace ImageGenerationResponse {
  export interface Data {
    revised_prompt?: string;

    url?: string;
  }
}

export interface GenerationCreateParams {
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

export declare namespace Generations {
  export {
    type ImageGenerationResponse as ImageGenerationResponse,
    type GenerationCreateParams as GenerationCreateParams,
  };
}
