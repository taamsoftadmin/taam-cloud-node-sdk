// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Chat, ChatCreateCompletionParams } from './resources/chat';
import { EmbeddingCreateParams, EmbeddingCreateResponse, Embeddings } from './resources/embeddings';
import { ImageGenerateParams, ImageGenerateResponse, Images } from './resources/images';
import { ModelListResponse, Models } from './resources/models';
import { Rerank, RerankCreateParams } from './resources/rerank';
import { Web, WebCreateParams, WebCreateResponse } from './resources/web';
import { Suno } from './resources/suno/suno';

export interface ClientOptions {
  /**
   * Defaults to process.env['TAAM_CLOUD_BEARER_TOKEN'].
   */
  bearerToken?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['TAAM_CLOUD_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Taam Cloud API.
 */
export class TaamCloud extends Core.APIClient {
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Taam Cloud API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['TAAM_CLOUD_BEARER_TOKEN'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['TAAM_CLOUD_BASE_URL'] ?? https://api.taam.cloud] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('TAAM_CLOUD_BASE_URL'),
    bearerToken = Core.readEnv('TAAM_CLOUD_BEARER_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.TaamCloudError(
        "The TAAM_CLOUD_BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the TaamCloud client with an bearerToken option, like new TaamCloud({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL: baseURL || `https://api.taam.cloud`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
  }

  embeddings: API.Embeddings = new API.Embeddings(this);
  rerank: API.Rerank = new API.Rerank(this);
  chat: API.Chat = new API.Chat(this);
  suno: API.Suno = new API.Suno(this);
  models: API.Models = new API.Models(this);
  images: API.Images = new API.Images(this);
  web: API.Web = new API.Web(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  static TaamCloud = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static TaamCloudError = Errors.TaamCloudError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

TaamCloud.Embeddings = Embeddings;
TaamCloud.Rerank = Rerank;
TaamCloud.Chat = Chat;
TaamCloud.Suno = Suno;
TaamCloud.Models = Models;
TaamCloud.Images = Images;
TaamCloud.Web = Web;
export declare namespace TaamCloud {
  export type RequestOptions = Core.RequestOptions;

  export {
    Embeddings as Embeddings,
    type EmbeddingCreateResponse as EmbeddingCreateResponse,
    type EmbeddingCreateParams as EmbeddingCreateParams,
  };

  export { Rerank as Rerank, type RerankCreateParams as RerankCreateParams };

  export { Chat as Chat, type ChatCreateCompletionParams as ChatCreateCompletionParams };

  export { Suno as Suno };

  export { Models as Models, type ModelListResponse as ModelListResponse };

  export {
    Images as Images,
    type ImageGenerateResponse as ImageGenerateResponse,
    type ImageGenerateParams as ImageGenerateParams,
  };

  export { Web as Web, type WebCreateResponse as WebCreateResponse, type WebCreateParams as WebCreateParams };
}

export { toFile, fileFromPath } from './uploads';
export {
  TaamCloudError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default TaamCloud;
