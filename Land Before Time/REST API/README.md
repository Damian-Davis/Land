# Deno MongoDB REST API

This was created in may 2020. The versions and file extentions will be different. 

## Installation

1. Clone the repository
2. open `mongodb.ts` file and change `const MONGO_URL = 'mongodb://localhost:27017'` to connect to your mongodb database
3. Start the server by running `deno run --allow-net --allow-write --allow-read --allow-plugin --unstable server.ts`

## Usage
You can access the following endpoints on [http://localhost:8000](http://localhost:8000)


| METHOD | URL        | Description        |
|--------|------------|--------------------|
| GET    | /notes     | Return all notes   |
| GET    | /notes/:id | Return single note |
| POST   | /notes     | Create a note      |
| PUT    | /notes/:id | Update note        |
| DELETE | /notes/:id | Delete note        |
