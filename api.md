# Embeddings

Types:

- <code><a href="./src/resources/embeddings.ts">EmbeddingCreateResponse</a></code>

Methods:

- <code title="post /v1/embeddings">client.embeddings.<a href="./src/resources/embeddings.ts">create</a>({ ...params }) -> unknown</code>

# Rerank

Methods:

- <code title="post /v1/rerank">client.rerank.<a href="./src/resources/rerank.ts">create</a>({ ...params }) -> void</code>

# Chat

Methods:

- <code title="post /v1/chat/completions">client.chat.<a href="./src/resources/chat.ts">createCompletion</a>({ ...params }) -> void</code>

# Suno

## Submit

Methods:

- <code title="post /suno/submit/music">client.suno.submit.<a href="./src/resources/suno/submit.ts">generateMusic</a>({ ...params }) -> void</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /v1/models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>

# Images

Types:

- <code><a href="./src/resources/images.ts">ImageGenerateResponse</a></code>

Methods:

- <code title="post /v1/images/generations">client.images.<a href="./src/resources/images.ts">generate</a>({ ...params }) -> ImageGenerateResponse</code>

# Web

Types:

- <code><a href="./src/resources/web.ts">WebCreateResponse</a></code>

Methods:

- <code title="post /v1/web">client.web.<a href="./src/resources/web.ts">create</a>({ ...params }) -> WebCreateResponse</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">FileRetrieveResponse</a></code>
- <code><a href="./src/resources/files.ts">FileUploadResponse</a></code>

Methods:

- <code title="get /v1/files/retrieve">client.files.<a href="./src/resources/files.ts">retrieve</a>({ ...params }) -> FileRetrieveResponse</code>
- <code title="post /v1/files">client.files.<a href="./src/resources/files.ts">upload</a>({ ...params }) -> FileUploadResponse</code>

# Upload

Types:

- <code><a href="./src/resources/upload.ts">UploadCreateResponse</a></code>

Methods:

- <code title="post /upload">client.upload.<a href="./src/resources/upload.ts">create</a>({ ...params }) -> UploadCreateResponse</code>

# VideoGeneration

Types:

- <code><a href="./src/resources/video-generation.ts">VideoGenerationCreateResponse</a></code>

Methods:

- <code title="post /v1/video_generation">client.videoGeneration.<a href="./src/resources/video-generation.ts">create</a>({ ...params }) -> VideoGenerationCreateResponse</code>

# Query

Types:

- <code><a href="./src/resources/query.ts">QueryCheckVideoGenerationStatusResponse</a></code>

Methods:

- <code title="get /v1/query/video_generation">client.query.<a href="./src/resources/query.ts">checkVideoGenerationStatus</a>({ ...params }) -> QueryCheckVideoGenerationStatusResponse</code>
