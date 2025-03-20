// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class VideoGeneration extends APIResource {
  /**
   * Create dynamic videos from text descriptions or images
   */
  create(
    body: VideoGenerationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VideoGenerationCreateResponse> {
    return this._client.post('/v1/video_generation', { body, ...options });
  }
}

export interface VideoGenerationCreateResponse {
  base_resp?: VideoGenerationCreateResponse.BaseResp;

  /**
   * Unique identifier for the generation task
   */
  task_id?: string;
}

export namespace VideoGenerationCreateResponse {
  export interface BaseResp {
    /**
     * Status code (0 for success)
     */
    status_code?: number;

    /**
     * Status message
     */
    status_msg?: string;
  }
}

export interface VideoGenerationCreateParams {
  /**
   * Video generation model to use
   */
  model: 'T2V-01-Director' | 'I2V-01-Director' | 'S2V-01' | 'I2V-01' | 'I2V-01-live' | 'T2V-01';

  /**
   * Text description of the video to generate. Can include camera movement
   * instructions in square brackets.
   */
  prompt: string;

  /**
   * Base64-encoded image data for image-to-video generation
   */
  first_frame_image?: string;
}

export declare namespace VideoGeneration {
  export {
    type VideoGenerationCreateResponse as VideoGenerationCreateResponse,
    type VideoGenerationCreateParams as VideoGenerationCreateParams,
  };
}
