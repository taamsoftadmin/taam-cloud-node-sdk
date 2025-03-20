// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TaamCloud from 'taam-cloud';
import { Response } from 'node-fetch';

const client = new TaamCloud({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // skipped: tests are disabled for the time being
  test.skip('createCompletion: only required params', async () => {
    const responsePromise = client.chat.createCompletion({
      messages: [
        { content: 'You are a helpful assistant.', role: 'user' },
        { content: 'Hello, how are you today?', role: 'user' },
      ],
      model: 'gpt-4',
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
  test.skip('createCompletion: required and optional params', async () => {
    const response = await client.chat.createCompletion({
      messages: [
        { content: 'You are a helpful assistant.', role: 'user' },
        { content: 'Hello, how are you today?', role: 'user' },
      ],
      model: 'gpt-4',
      max_tokens: 150,
      stream: true,
      temperature: 0.7,
    });
  });
});
