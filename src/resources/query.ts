// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Query extends APIResource {
  /**
   * Query the status of a video generation task
   */
  checkVideoGenerationStatus(
    query: QueryCheckVideoGenerationStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueryCheckVideoGenerationStatusResponse> {
    return this._client.get('/v1/query/video_generation', { query, ...options });
  }
}

export interface QueryCheckVideoGenerationStatusResponse {
  base_resp?: QueryCheckVideoGenerationStatusResponse.BaseResp;

  /**
   * File identifier for the generated video (only present when status is 'Success')
   */
  file_id?: string;

  /**
   * Current status of the task
   */
  status?: 'Queueing' | 'Preparing' | 'Processing' | 'Success' | 'Fail';

  /**
   * Task identifier
   */
  task_id?: string;
}

export namespace QueryCheckVideoGenerationStatusResponse {
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

export interface QueryCheckVideoGenerationStatusParams {
  /**
   * Task ID returned from video generation request
   */
  task_id: string;
}

export declare namespace Query {
  export {
    type QueryCheckVideoGenerationStatusResponse as QueryCheckVideoGenerationStatusResponse,
    type QueryCheckVideoGenerationStatusParams as QueryCheckVideoGenerationStatusParams,
  };
}
