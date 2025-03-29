# Web App

A simple web application with a TypeScript backend, a React frontend, and end-to-end tests using Playwright.

---

## Structure

- **Backend**: Located in `backend/`, built with TypeScript and Express.
- **Frontend**: Located in `frontend/`, built with React and TypeScript.
- **E2E Tests**: Located in `e2e/`, using Playwright.

---

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)
- PostgreSQL (>= 12.x)
- Docker (optional, for containerized environments)

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone <repository-url>
cd web-app
```

### 2. Install dependencies
Navigate to each subdirectory (`backend/`, `frontend/`, `e2e/`) and run:
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the `backend/` directory with the following variables:
```
DB_NAME=development_db
DB_USER=username
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
PORT=3000
NODE_ENV=development
```

Replace `username` and `password` with your PostgreSQL credentials.

### 4. Setup the database
Ensure PostgreSQL is running and create the database manually or let Sequelize handle it.

Run the seed script to create the `contacts` table and insert a sample record:
```bash
cd backend
npm run seed
```

---

## Running the Application

### Start the backend
```bash
cd backend
npm run start
```

The backend will be available at `http://localhost:3000`.

### Start the frontend
```bash
cd frontend
npm run start
```

The frontend will be available at `http://localhost:3000`.

### Health Check
Visit `http://localhost:3000/health` to verify the server is running.

---

## Testing

### Backend Tests
Navigate to the `backend/` directory and run:
```bash
npm run test
```

- **Unit Tests**:
  ```bash
  npm run test:unit
  ```
- **Integration Tests**:
  ```bash
  npm run test:integration
  ```

### Frontend Tests
Navigate to the `frontend/` directory and run:
```bash
npm run test
```

### End-to-End Tests
Navigate to the `e2e/` directory and run:
```bash
npm run test
```

---

## Linting and Formatting

### Backend
Navigate to the `backend/` directory and run:
- To check for linting issues:
  ```bash
  npm run lint
  ```
- To automatically fix linting issues:
  ```bash
  npm run lint:fix
  ```

---

## Docker

### Backend
A `Dockerfile` is available in the `backend/` directory. To build and run the backend container:
```bash
cd backend
docker build -t web-app-backend .
docker run -p 3000:3000 web-app-backend
```

### Frontend
A `Dockerfile` is available in the `frontend/` directory. To build and run the frontend container:
```bash
cd frontend
docker build -t web-app-frontend .
docker run -p 3000:3000 web-app-frontend
```

### E2E Tests
A `Dockerfile` is available in the `e2e/` directory. To build and run the E2E tests container:
```bash
cd e2e
docker build -t web-app-e2e .
docker run web-app-e2e
```

---

## API Endpoints

### Base URL
`http://localhost:3000/contacts`

### Endpoints
| Method | Endpoint       | Description               |
|--------|----------------|---------------------------|
| GET    | `/`            | Get all contacts          |
| GET    | `/:id`         | Get a contact by ID       |
| POST   | `/`            | Create a new contact      |
| PUT    | `/:id`         | Update a contact by ID    |
| DELETE | `/:id`         | Delete a contact by ID    |

### Example Request (POST)
```bash
POST /contacts
Content-Type: application/json

{
  "name": "Jane Doe",
  "github": "https://github.com/janedoe",
  "linkedin": "https://linkedin.com/in/janedoe"
}
```

---

## Dependencies

### Backend
- `express`: Web framework
- `sequelize`: ORM for PostgreSQL
- `pg`: PostgreSQL driver
- `dotenv`: Environment variable management
- `cors`: Cross-Origin Resource Sharing

### Frontend
- `react`: Frontend library
- `axios`: HTTP client

### E2E Tests
- `playwright`: End-to-end testing framework

---

## License

This project is licensed under the MIT License.