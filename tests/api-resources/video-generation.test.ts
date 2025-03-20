// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TaamCloud from 'taam-cloud';
import { Response } from 'node-fetch';

const client = new TaamCloud({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource videoGeneration', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.videoGeneration.create({
      model: 'T2V-01-Director',
      prompt: 'A spaceship landing on a distant planet [camera panning right]',
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
    const response = await client.videoGeneration.create({
      model: 'T2V-01-Director',
      prompt: 'A spaceship landing on a distant planet [camera panning right]',
      first_frame_image: 'first_frame_image',
    });
  });
});
