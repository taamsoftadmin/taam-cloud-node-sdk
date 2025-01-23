// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as MusicAPI from './music';
import { Music, MusicSubmitParams } from './music';

export class Suno extends APIResource {
  music: MusicAPI.Music = new MusicAPI.Music(this._client);
}

Suno.Music = Music;

export declare namespace Suno {
  export { Music as Music, type MusicSubmitParams as MusicSubmitParams };
}
