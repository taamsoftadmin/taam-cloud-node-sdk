# TaamCloud

# Embeddings

Types:

- <code><a href="./src/resources/embeddings.ts">EmbeddingsResponse</a></code>

Methods:

- <code title="post /v1/embeddings">client.embeddings.<a href="./src/resources/embeddings.ts">create</a>({ ...params }) -> unknown</code>

# Rerank

Methods:

- <code title="post /v1/rerank">client.rerank.<a href="./src/resources/rerank.ts">create</a>({ ...params }) -> void</code>

# Chat

## Completions

Methods:

- <code title="post /v1/chat/completions">client.chat.completions.<a href="./src/resources/chat/completions.ts">create</a>({ ...params }) -> void</code>

# Suno

## Music

Methods:

- <code title="post /suno/submit/music">client.suno.music.<a href="./src/resources/suno/music.ts">submit</a>({ ...params }) -> void</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /v1/models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>

# Images

## Generations

Types:

- <code><a href="./src/resources/images/generations.ts">ImageGenerationResponse</a></code>

Methods:

- <code title="post /v1/images/generations">client.images.generations.<a href="./src/resources/images/generations.ts">create</a>({ ...params }) -> ImageGenerationResponse</code>

# Crawl

Types:

- <code><a href="./src/resources/crawl.ts">CrawlResponse</a></code>
- <code><a href="./src/resources/crawl.ts">CrawlStatusResponse</a></code>

# Scrape

Types:

- <code><a href="./src/resources/scrape.ts">ScrapeResponse</a></code>

# Maps

Types:

- <code><a href="./src/resources/maps.ts">MapResponse</a></code>

# Searches

Types:

- <code><a href="./src/resources/searches.ts">SearchResponse</a></code>
