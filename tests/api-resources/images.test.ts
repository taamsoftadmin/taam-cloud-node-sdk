// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TaamCloud from 'taam-cloud';
import { Response } from 'node-fetch';

const client = new TaamCloud({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource images', () => {
  // skipped: tests are disabled for the time being
  test.skip('generate: only required params', async () => {
    const responsePromise = client.images.generate({ prompt: 'A beautiful sunset over a calm ocean' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('generate: required and optional params', async () => {
    const response = await client.images.generate({
      prompt: 'A beautiful sunset over a calm ocean',
      model: 'dall-e-3',
      n: 1,
      quality: 'standard',
      size: '1024x1024',
      style: 'natural',
    });
  });
});
