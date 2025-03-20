// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Upload extends APIResource {
  /**
   * Process various file types including documents, images, and audio files with
   * advanced extraction options
   */
  create(body: UploadCreateParams, options?: Core.RequestOptions): Core.APIPromise<UploadCreateResponse> {
    return this._client.post('/upload', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export type UploadCreateResponse =
  | UploadCreateResponse.FileUploadResponse
  | UploadCreateResponse.FileEmbeddingsResponse;

export namespace UploadCreateResponse {
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

  export interface FileEmbeddingsResponse {
    /**
     * Unique identifier for the request
     */
    id?: string;

    /**
     * Unix timestamp when the request was created
     */
    created?: number;

    data?: FileEmbeddingsResponse.Data;

    /**
     * Error message (if any)
     */
    error?: string;

    /**
     * Object type (e.g., 'chunks')
     */
    object?: string;

    /**
     * Type of the processed file
     */
    type?: string;

    usage?: FileEmbeddingsResponse.Usage;
  }

  export namespace FileEmbeddingsResponse {
    export interface Data {
      data?: Data.Data;

      success?: boolean;
    }

    export namespace Data {
      export interface Data {
        chunks?: Array<Data.Chunk>;

        metadata?: Data.Metadata;
      }

      export namespace Data {
        export interface Chunk {
          /**
           * Text content of the chunk
           */
          content?: string;

          /**
           * Page number the chunk is from
           */
          from_page?: number;

          /**
           * Number of tokens in the chunk
           */
          total_tokens?: number;
        }

        export interface Metadata {
          /**
           * Document description
           */
          description?: string;

          /**
           * Document language
           */
          language?: string;

          /**
           * Document title
           */
          title?: string;
        }
      }
    }

    export interface Usage {
      /**
       * Total number of chunks
       */
      total_chunks?: number;

      /**
       * Total characters of extracted text
       */
      total_extracted_text?: number;

      /**
       * Total number of pages
       */
      total_pages?: number;

      /**
       * Total number of tokens
       */
      total_tokens?: number;
    }
  }
}

export interface UploadCreateParams {
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

export declare namespace Upload {
  export { type UploadCreateResponse as UploadCreateResponse, type UploadCreateParams as UploadCreateParams };
}
