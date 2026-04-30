# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start server with nodemon (hot reload)
npx eslint .      # lint all JS files
```

No test suite is configured. `MONGODB_URI` must be set in `.env` before starting the server.

## Architecture

This is an Express 5 + Mongoose REST API using ES modules (`"type": "module"` — all imports need the `.js` extension).

**Request flow:** `server.js` → `src/app.js` → `src/routes/index.js` → resource routers → controllers → Mongoose models

The DB connection is established at module load time in `app.js` using a top-level `await`. `express.json()` is applied per-router-group in `routes/index.js`, not globally.

**Two resources:** `authors` (`/authors`) and `books` (`/books`). Books **embed** the full author document at creation time (denormalized) rather than storing a reference — `bookController.createBook` resolves the author by ID and copies `foundAuthor._doc` into the book. Updates to an author do not propagate to existing books.

**Error handling:** A four-parameter `errorHandler` middleware in `src/middlewares/errorHandler.js` is registered last in `app.js`. It differentiates:
- Manual `err.status === 404` throws
- `mongoose.Error.CastError` → `BadRequest` (400)
- `mongoose.Error.ValidationError` → `ValidationError` (400, lists all field errors)
- Everything else → `BaseError` (500)

Custom error classes live in `src/errors/`: `BaseError` → `BadRequest` → `ValidationError`. Each has a `sendResponse(res)` method.

**Books-specific route:** `GET /books/search?publisher=<name>` must be declared before `GET /books/:id` in the router to avoid the `:id` param capturing the string `"search"`.
