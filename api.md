# TaamCloud

Types:

- <code><a href="./src/resources/top-level.ts">UploadResponse</a></code>

Methods:

- <code title="post /upload">client.<a href="./src/index.ts">upload</a>({ ...params }) -> UploadResponse</code>

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

Methods:

- <code title="post /v1/crawl">client.crawl.<a href="./src/resources/crawl.ts">create</a>({ ...params }) -> CrawlResponse</code>
- <code title="get /v1/crawl/{id}">client.crawl.<a href="./src/resources/crawl.ts">retrieve</a>(id) -> CrawlStatusResponse</code>

# Scrape

Types:

- <code><a href="./src/resources/scrape.ts">ScrapeResponse</a></code>

Methods:

- <code title="post /v1/scrape">client.scrape.<a href="./src/resources/scrape.ts">create</a>({ ...params }) -> ScrapeResponse</code>

# Maps

Types:

- <code><a href="./src/resources/maps.ts">MapResponse</a></code>

Methods:

- <code title="post /v1/map">client.maps.<a href="./src/resources/maps.ts">discover</a>({ ...params }) -> MapResponse</code>

# Searches

Types:

- <code><a href="./src/resources/searches.ts">SearchResponse</a></code>

Methods:

- <code title="post /api/search">client.searches.<a href="./src/resources/searches.ts">perform</a>({ ...params }) -> SearchResponse</code>
