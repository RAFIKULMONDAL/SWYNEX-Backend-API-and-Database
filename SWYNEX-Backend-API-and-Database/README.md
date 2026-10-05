# SWYNEX Backend API and Database — TaskFlow

Task 2 implementation of the TaskFlow application from Task 1.

## Stack
Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs, express-validator, CORS.

## Implemented
- REST API
- MongoDB persistence
- User registration/login
- JWT authentication
- Password hashing
- Complete Task CRUD resource
- Validation
- User-owned task authorization
- Error handling
- Health check

## Run locally
```bash
cd backend
npm install
```
Copy `.env.example` to `.env` and configure `MONGO_URI` and `JWT_SECRET`.

```bash
npm run dev
```
API: `http://localhost:5000`

## Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/tasks`
- `POST /api/tasks`
- `GET /api/tasks/:id`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`
- `GET /api/health`

Protected task routes use:
`Authorization: Bearer <JWT_TOKEN>`

## Task validation
Title: 3–100 characters. Description: max 500 characters. Status: Pending/In Progress/Completed. Priority: Low/Medium/High. Due date must be a valid ISO date.
