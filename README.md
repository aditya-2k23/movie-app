# Movie App

This project is a movie application built with React and Vite. It allows users to search for movies, view trending movies, and get detailed information about each movie. The application uses the TMDb API for fetching movie data and Appwrite for managing search counts.

## Features

- **Search Movies**: Users can search for movies by entering a search term.
- **Trending Movies**: Displays a list of trending movies.
- **Movie Details**: Shows detailed information about each movie, including title, rating, release date, and language.
- **Search Count**: Tracks the number of times a movie has been searched using Appwrite.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Appwrite**: A backend server for managing search counts.
- **TMDb API**: An API for fetching movie data.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- A TMDb API key. You can get one by creating an account on the TMDb website.

### Steps

1. Clone the repository:

```bash
git clone https://github.com/aditya-2k23/movie-app.git
```

2. Navigate to the project directory:

```bash
cd movie-app
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env.local` file in the root of the project and add the following environment variables:

```env
VITE_TMDB_API_KEY=Your TMDb API key.
VITE_APPWRITE_PROJECT_ID=Your Appwrite project ID.
VITE_APPWRITE_DATABASE_ID=Your Appwrite database ID.
VITE_APPWRITE_COLLECTION_ID=Your Appwrite collection ID.
```

5. Start the development server:

```bash
npm run dev
```

6. Open the browser and go to `http://localhost:3000` to view the application.

#### Optional steps

7. To build the project for production, run:

```bash
npm run build
```

8. To preview the production build, run:

```bash
npm run serve
```

9. Lint the code:

```bash
npm run lint
```
