// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TaamCloud from 'taam-cloud';
import { Response } from 'node-fetch';

const client = new TaamCloud({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource crawl', () => {
  test('create: only required params', async () => {
    const responsePromise = client.crawl.create({ url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.crawl.create({
      url: 'url',
      allowBackwardLinks: true,
      allowExternalLinks: true,
      excludePaths: ['string'],
      ignoreSitemap: true,
      includePaths: ['string'],
      limit: 0,
      maxDepth: 0,
      scrapeOptions: {
        actions: [{ milliseconds: 0, type: 'wait', selector: 'selector' }],
        excludeTags: ['string'],
        formats: ['markdown'],
        headers: { foo: 'bar' },
        includeTags: ['string'],
        jsonOptions: { prompt: 'prompt', schema: {}, systemPrompt: 'systemPrompt' },
        location: { country: 'country', languages: ['string'] },
        mobile: true,
        onlyMainContent: true,
        removeBase64Images: true,
        skipTlsVerification: true,
        timeout: 0,
        waitFor: 0,
      },
      webhook: 'webhook',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.crawl.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.crawl.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TaamCloud.NotFoundError,
    );
  });
});
