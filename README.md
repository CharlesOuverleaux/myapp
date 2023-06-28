# README

## Getting Started

First, run the development servers (rails and react app), in two Terminals:

Terminal 1 (Backend API)
```bash
rails s
# or
rails server
```

Terminal 2 (Web Client)
```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Demo 
[Demo](https://www.loom.com/share/9e4d0da241534f77a36a45330349da9e?sid=d917e55c-efa6-4a35-b456-5cab5ac5e398)


## Acceptance criterias 

It should be possible to create culture types - Completed

It should be possible to list culture types - Completed

It should be possible to create companies and select a culture type. - Completed

It should be possible to create applicants and select a culture type. - Completed

It should be possible to visualise the list of companies - Completed

It should be possible to visualise the list of applicants - Completed

It should be possible to match applicants and companies - Completed for seed data, missing newly created data matching

As a company, it should be possible to visualise the matched applicants - Completed


## Improvements

- Add matching based on full data (not only seed)
- Adding typescript 
- Adding backend tests (rails tests)
- Adding frontend tests (jest tests for each component e.g. Nav)
- Add re-usable style components (e.g. button) to avoid tailwind css duplication in code
