// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TaamCloud from 'taam-cloud';
import { Response } from 'node-fetch';

const client = new TaamCloud({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rerank', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.rerank.create({
      documents: [
        'Exercise improves cardiovascular health and reduces stress.',
        'Proper nutrition is essential for overall well-being.',
        'Sleep quality affects mental and physical performance.',
      ],
      model: 'mixr-v1',
      query: 'What are the health benefits of exercise?',
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
    const response = await client.rerank.create({
      documents: [
        'Exercise improves cardiovascular health and reduces stress.',
        'Proper nutrition is essential for overall well-being.',
        'Sleep quality affects mental and physical performance.',
      ],
      model: 'mixr-v1',
      query: 'What are the health benefits of exercise?',
      top_n: 2,
    });
  });
});
