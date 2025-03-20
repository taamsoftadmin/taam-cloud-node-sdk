// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TaamCloud, { toFile } from 'taam-cloud';
import { Response } from 'node-fetch';

const client = new TaamCloud({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource upload', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.upload.create({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.upload.create({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      enable_ocr: 'true',
      enable_vision: 'true',
      extract_mode: 'default',
      images_only: 'true',
      page_based: 'true',
      remove_headers: 'true',
      save_all: 'true',
      text_only: 'true',
      vision_only: 'true',
    });
  });
});
