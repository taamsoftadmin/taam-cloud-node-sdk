// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SubmitAPI from './submit';
import { Submit, SubmitGenerateMusicParams } from './submit';

export class Suno extends APIResource {
  submit: SubmitAPI.Submit = new SubmitAPI.Submit(this._client);
}

Suno.Submit = Submit;

export declare namespace Suno {
  export { Submit as Submit, type SubmitGenerateMusicParams as SubmitGenerateMusicParams };
}
