# penny-wise

Penny wise is a simple yet intuitive finance literacy app, targeted to a an audience of teens/pre-teens, who are learning the use of money in the real world, how to use it and how to spend it wisely.
The app begins with the basics - counting money, making change, simple budgeting, through short two-minute Tutorials and longer open-ended Labs.
It's a general-purpose teaching engine, not a fixed curriculum - and it's meant to stay at everyday-basics level, not investing/credit/taxes territory.

### Stack

- Frontend: Next.js (App Router), React, with TailwindCSS
- API: Node.js + Express, Mongoose
- Database: MongoDB
- Auth: JWT (email + password, bcrypt-hashed).
- Tests: Jest + Supertest (API), Jest + Testing Library (frontend)

### Creating Penny Wise project

### Folder structure

```
penny-wise/
├── frontend/          # React + Tailwind
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── backend/           # Express.js + MongoDB
│   ├── server.js
│   ├── models/        # MongoDB models (e.g., User.js)
│   ├── routes/        # API routes (e.g., auth.js, users.js)
│   ├── .env
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

- To run locally, first clone the project, `https://github.com/freeCodeCamp-Summer-Cohort-2026/penny-wise.git`

```
cp .env.example .env
docker compose up --build
```

This starts three services:

- mongo    - MongoDB on port 27017
- backend  - Express API on http://localhost:4000
- frontend - Next.js frontend on http://localhost:3000

Once it's up, seed some demo data:

```
docker-compose exec api npm run seed
```

Then open http://localhost:3000 and log in with one of the seeded accounts (see backend/src/seed.js for emails - the password for all of them is password123), or register your own.

### Without Docker

Or you can run with `npm`
To do this, you will have to spin up both the frontend, backend and database instances:

- Start the Docker database and seed it

```
docker compose up mongo
cd backend && npm run seed
```

-Then, start the backend in another terminal:

```
cd backend
npm install
npm run dev
```

- Finally, the frontend in yet another terminal;

```
cd frontend
npm install
npm run dev
```

<!--
### Creating Backend

## Create Mongo DB

This requires docker installed on the system. [A guide on installing Docker can be found here](https://docs.docker.com/get-started/get-docker/).

before starting the backend service, run this command to start the MongoDB container:

```bash
docker compose up -d
```

It will start the MongoDB on the port 27010, which the Backend service will connect to.
-->
