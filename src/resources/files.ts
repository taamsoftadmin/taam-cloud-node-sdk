// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Files extends APIResource {
  /**
   * Download a generated video file
   */
  retrieve(query: FileRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<FileRetrieveResponse> {
    return this._client.get('/v1/files/retrieve', { query, ...options });
  }

  /**
   * Upload a file for processing with AI models
   */
  upload(body: FileUploadParams, options?: Core.RequestOptions): Core.APIPromise<FileUploadResponse> {
    return this._client.post('/v1/files', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export interface FileRetrieveResponse {
  base_resp?: FileRetrieveResponse.BaseResp;

  file?: FileRetrieveResponse.File;
}

export namespace FileRetrieveResponse {
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

  export interface File {
    /**
     * File size in bytes
     */
    bytes?: number;

    /**
     * Unix timestamp of when the file was created
     */
    created_at?: number;

    /**
     * URL to download the file
     */
    download_url?: string;

    /**
     * File identifier
     */
    file_id?: string;

    /**
     * Name of the file
     */
    filename?: string;

    /**
     * Purpose of the file
     */
    purpose?: string;
  }
}

export interface FileUploadResponse {
  /**
   * Extracted text or data URL
   */
  content?: string;

  /**
   * Error message (if any)
   */
  error?: string;

  /**
   * Operation status
   */
  status?: boolean;

  /**
   * Type of the processed file
   */
  type?: 'pdf' | 'docx' | 'pptx' | 'xlsx' | 'image' | 'audio' | 'text' | 'error';
}

export interface FileRetrieveParams {
  /**
   * File ID returned from successful video generation
   */
  file_id: string;
}

export interface FileUploadParams {
  /**
   * File to upload
   */
  file: Core.Uploadable;

  /**
   * Enable OCR for image processing
   */
  enable_ocr?: 'true' | 'false';

  /**
   * Enable vision-based processing for images
   */
  enable_vision?: 'true' | 'false';

  /**
   * Extraction mode: 'default' or 'embeddings'
   */
  extract_mode?: 'default' | 'embeddings';

  /**
   * Extract only images from documents
   */
  images_only?: 'true' | 'false';

  /**
   * Return page-based structured response
   */
  page_based?: 'true' | 'false';

  /**
   * Remove headers/footers from documents
   */
  remove_headers?: 'true' | 'false';

  /**
   * Save file to configured storage
   */
  save_all?: 'true' | 'false';

  /**
   * Extract only text content
   */
  text_only?: 'true' | 'false';

  /**
   * Process with vision only
   */
  vision_only?: 'true' | 'false';
}

export declare namespace Files {
  export {
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileUploadResponse as FileUploadResponse,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUploadParams as FileUploadParams,
  };
}
