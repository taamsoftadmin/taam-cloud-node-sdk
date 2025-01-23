// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Files extends APIResource {
  /**
   * Upload and process files with optional OCR and Vision capabilities
   */
  upload(body: FileUploadParams, options?: Core.RequestOptions): Core.APIPromise<FileUploadResponse> {
    return this._client.post('/upload', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export interface FileUploadResponse {
  content?: string;

  error?: string;

  status?: boolean;

  type?: string;
}

export interface FileUploadParams {
  /**
   * File to upload
   */
  file: Core.Uploadable;

  /**
   * Enable OCR processing
   */
  enable_ocr?: boolean;

  /**
   * Enable Vision processing
   */
  enable_vision?: boolean;

  /**
   * Save raw files
   */
  save_all?: boolean;
}

export declare namespace Files {
  export { type FileUploadResponse as FileUploadResponse, type FileUploadParams as FileUploadParams };
}
