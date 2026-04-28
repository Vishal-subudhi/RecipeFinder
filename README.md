# Recipe Finder 🍳
 
A React app that lets you search for recipes using the Spoonacular API with pagination and skeleton loading.
 
## Features
- Search recipes by dish name or ingredient
- Search on Enter key or Search button click
- Pagination — 6 recipes per page with Previous/Next controls
- Skeleton loading cards while fetching
- Empty state with friendly message
- Welcome state on initial page load
- Guard clause — prevents empty searches
- Error handling for failed API calls
- Links to full recipes on Spoonacular
- Responsive grid layout (1/2/3 columns)
- Footer always at bottom (flex layout)
## Tech Stack
- React + Vite
- Tailwind CSS v3
- Spoonacular API
## How to run
1. Clone the repo
2. Run `npm install`
3. Create a `.env` file in the root with:
```
VITE_SPOONACULAR_API_KEY=your_api_key_here
```
4. Get a free API key at [spoonacular.com](https://spoonacular.com/food-api)
5. Run `npm run dev`
## Component Structure
```
App (state owner)
  ├── Navbar
  ├── SearchBar (query input + typewriter animation)
  ├── SkeletonCard (loading placeholder)
  ├── SearchResult
  │     └── RecipeCard (image + title + link)
  └── Footer
```
 
## API Used
[Spoonacular Recipe API](https://spoonacular.com/food-api/docs#Search-Recipes-Complex)  
Endpoint: `GET /recipes/complexSearch`
 
## Reflection
**Project:** Recipe Finder  
**Date completed:** 28/04/2026  
**What I built:** A recipe search app using a real REST API with pagination, skeleton loading, and multiple UI states  
**Main concepts learned:** API calling with fetch and async/await, try/catch/finally error handling, guard clauses, UX thinking, pagination logic, skeleton loading, multiple UI states (!happypaths)  
**What was hardest:** The pagination logic and handling all the edge cases (empty search, no results, initial state)  
**What I'd do differently:** Add more animations and better styling  
**Feature I added myself:** Enter key search, skeleton loading cards, welcome state, empty search guard  
**Time taken:** 4 days of active coding  
 
## Live Demo
[GitHub Repo](https://github.com/Vishal-subudhi/RecipeFinder)
