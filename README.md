# Blog Dashboard

A simple blog dashboard built with Next.js, Material-UI, TypeScript, and RTK Query.

## Features

### 1. Next.js Setup

- [x] Next.js App Router
- [x] Server-side rendering (SSR)
- [x] Dynamic routing for individual blog post pages
- [x] TypeScript integration

### 2. Material-UI (MUI)

- [ ] Material-UI components for UI
- [ ] Responsive layout (desktop & mobile)
- [ ] Custom theme implementation

### 3. TypeScript

- [x] Type definitions for blog post data
- [x] Type-safe API calls
- [x] Type-safe state management

### 4. RTK Query

- [x] API calls management
- [x] Caching implementation
- [x] Automatic refetching
- [x] Loading & error states

### 5. Core Functionality

#### Blog Post List Page

- [x] Display list of blog posts
- [x] Show title, author, and excerpt
- [ ] "Read More" navigation
- [ ] Infinite scrolling

#### Blog Post Detail Page

- [ ] Full post content display
- [ ] Author information
- [ ] Navigation back to list

#### Add New Post

- [ ] Form to add new posts
- [ ] Title, author, content fields
- [ ] Form validation
- [ ] Success/error feedback

### 6. Data Management

- [x] In-memory store with JSON
- [x] CRUD operations
- [x] Data persistence between sessions

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── api/         # API routes
│   └── [post]/      # Dynamic post pages
├── components/       # React components
├── lib/             # Utilities
├── store/           # Redux store
├── types/           # TypeScript types
└── data/            # Initial data
```

## API Endpoints

1. `GET /api/posts`

   - Fetch posts with pagination
   - Query params: cursor, limit

2. `GET /api/posts/:id`

   - Fetch single post
   - URL param: id

3. `POST /api/posts`
   - Create new post
   - Body: { title, content, author, excerpt }

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Implementation Details

### State Management

- RTK Query for API state management
- Optimistic updates for post creation
- Cached responses for better performance

### Data Flow

1. Initial posts loaded from JSON
2. In-memory store handles CRUD operations
3. RTK Query manages API state and caching

### UI/UX Considerations

- Loading states for better user feedback
- Error handling with user-friendly messages
- Responsive design for all screen sizes

## Development Status

- [x] Project setup
- [x] API routes implementation
- [x] Basic post listing
- [ ] Post detail page
- [ ] Create post form
- [ ] Material-UI integration
- [ ] Infinite scrolling
- [ ] Final styling and polish
