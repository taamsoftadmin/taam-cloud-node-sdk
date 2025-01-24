// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Uploadable } from '../core';

export interface UploadResponse {
  content?: string;

  error?: string;

  status?: boolean;

  type?: string;
}

export interface UploadParams {
  /**
   * File to upload
   */
  file: Uploadable;

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

export declare namespace TopLevel {
  export { type UploadResponse as UploadResponse, type UploadParams as UploadParams };
}
