// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TaamCloud from 'taam-cloud';
import { Response } from 'node-fetch';

const client = new TaamCloud({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource searches', () => {
  test('perform: only required params', async () => {
    const responsePromise = client.searches.perform({
      chatModel: { model: 'gpt-3.5-turbo', provider: 'custom_openai' },
      embeddingModel: { model: 'text-embedding-3-large', provider: 'custom_openai' },
      focusMode: 'webSearch',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('perform: required and optional params', async () => {
    const response = await client.searches.perform({
      chatModel: {
        model: 'gpt-3.5-turbo',
        provider: 'custom_openai',
        customOpenAIBaseURL: 'customOpenAIBaseURL',
        customOpenAIKey: 'customOpenAIKey',
      },
      embeddingModel: { model: 'text-embedding-3-large', provider: 'custom_openai' },
      focusMode: 'webSearch',
    });
  });
});
